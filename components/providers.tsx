"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/** Shared handle so other components (the menu lock) can pause smooth scrolling. */
export const smooth: { current: Lenis | null } = { current: null };

export function SmoothScroll() {
  const path = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      // A lerp reads more naturally than a fixed duration: each wheel tick eases
      // toward the target instead of restarting a 1.1s animation mid-flight,
      // which is what made fast or repeated scrolls feel like they stuttered.
      lerp: 0.095,
      smoothWheel: true,
      // Native momentum on touch devices. Synthesised touch scrolling is the
      // single biggest source of stutter on phones and trackpad-like surfaces.
      syncTouch: false,
      wheelMultiplier: 1,
      autoRaf: false,
    });
    smooth.current = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onAnchor = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const el = (e.target as HTMLElement)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!el) return;
      const raw = el.getAttribute("href")!.slice(1);
      if (!raw) return;
      const target = document.getElementById(decodeURIComponent(raw));
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -60, duration: 1.05 });
    };
    document.addEventListener("click", onAnchor);

    return () => {
      document.removeEventListener("click", onAnchor);
      cancelAnimationFrame(raf);
      lenis.destroy();
      smooth.current = null;
    };
  }, []);

  // On client navigation, land at the top instantly. Otherwise Lenis keeps
  // easing from the previous page's offset while the new page fades in.
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (window.location.hash) return;
    smooth.current?.scrollTo(0, { immediate: true, force: true });
  }, [path]);

  return null;
}

export function Cursor() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = document.createElement("div");
    el.className = "cursor";
    el.style.opacity = "0";
    el.setAttribute("aria-hidden", "true");
    el.innerHTML = '<div class="cursor-dot"></div><div class="cursor-label"></div>';
    document.body.appendChild(el);
    const label = el.querySelector(".cursor-label") as HTMLElement;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let raf = 0;
    let running = false;
    let seen = false;

    const tick = () => {
      const dx = x - cx;
      const dy = y - cy;
      // Settled: snap, park the loop, and let the next mousemove restart it so
      // we are not burning a frame callback for the whole session.
      if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
        cx = x;
        cy = y;
        el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
        running = false;
        return;
      }
      cx += dx * 0.18;
      cy += dy * 0.18;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!seen) {
        seen = true;
        cx = x;
        cy = y;
        el.style.opacity = "1";
      }
      const tgt = e.target as HTMLElement | null;
      const t = tgt?.closest?.("[data-cursor]") as HTMLElement | null;
      const next = t ? t.dataset.cursor || "" : "";
      const active = t ? "1" : "0";
      // Replaces mix-blend-mode: flip the dot to ink over light sections.
      const paper = tgt?.closest?.(".on-paper") ? "1" : "0";
      if (el.dataset.paper !== paper) el.dataset.paper = paper;
      // Only touch the DOM when something actually changed. This node sits
      // inside RevealObserver's MutationObserver, so a blind write on every
      // mousemove cost a full-document query per frame while scrolling.
      if (label.textContent !== next) label.textContent = next;
      if (el.dataset.active !== active) el.dataset.active = active;
      start();
    };

    window.addEventListener("mousemove", move, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      el.remove();
    };
  }, []);

  return null;
}

/** Adds `.in` to every `.rv`, `.imgmask` and `.clipwrap` once it enters the viewport. */
export function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    const scan = () => {
      document
        .querySelectorAll<HTMLElement>(".rv:not(.in), .imgmask:not(.in), .clipwrap:not(.in)")
        .forEach((n) => io.observe(n));
    };
    scan();

    // Re-scan at most once per frame, and never for mutations that only touch
    // the floating cursor, whose label changes on every mouse move.
    let queued = 0;
    const mo = new MutationObserver((records) => {
      if (queued) return;
      let relevant = false;
      for (const r of records) {
        const t = r.target as HTMLElement;
        if (t?.closest?.(".cursor")) continue;
        relevant = true;
        break;
      }
      if (!relevant) return;
      queued = requestAnimationFrame(() => {
        queued = 0;
        scan();
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (queued) cancelAnimationFrame(queued);
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
