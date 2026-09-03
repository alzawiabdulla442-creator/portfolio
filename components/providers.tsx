"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.6,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onAnchor = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.("a") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const hash = href.startsWith("#") ? href : href.startsWith("/#") ? href.slice(1) : "";
      if (!hash) return;
      const target = document.getElementById(hash.slice(1));
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -70 });
      history.replaceState(null, "", hash);
    };
    document.addEventListener("click", onAnchor);

    return () => {
      document.removeEventListener("click", onAnchor);
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}

export function Cursor() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = document.createElement("div");
    el.className = "cur";
    el.setAttribute("aria-hidden", "true");
    el.innerHTML = '<div class="cur-ring"></div><div class="cur-txt"></div>';
    document.body.appendChild(el);
    const txt = el.querySelector(".cur-txt") as HTMLElement;

    let x = 0;
    let y = 0;
    let cx = 0;
    let cy = 0;
    let seen = false;
    let raf = 0;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!seen) {
        seen = true;
        cx = x;
        cy = y;
        el.style.opacity = "1";
      }
      const t = (e.target as HTMLElement)?.closest?.("[data-cur]") as HTMLElement | null;
      el.dataset.on = t ? "1" : "0";
      txt.textContent = t?.dataset.cur || "";
    };

    const tick = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      el.remove();
    };
  }, []);

  return null;
}

/** Adds `.in` to reveal targets as they enter the viewport. */
export function RevealObserver() {
  useEffect(() => {
    const pick = () =>
      Array.from(document.querySelectorAll<HTMLElement>(".rv, .imgmask, .clipwrap")).filter(
        (n) => !n.classList.contains("in")
      );

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.07 }
    );

    pick().forEach((n) => io.observe(n));
    const mo = new MutationObserver(() => pick().forEach((n) => io.observe(n)));
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}

/**
 * Paints the browser chrome / overscroll to match whichever surface is on screen,
 * so the light rooms and the ink thresholds never show a mismatched edge.
 */
export function SurfaceSync() {
  useEffect(() => {
    const marks = () => Array.from(document.querySelectorAll<HTMLElement>("[data-surface]"));
    const apply = () => {
      const mid = window.innerHeight / 2;
      let current = "paper";
      for (const m of marks()) {
        const r = m.getBoundingClientRect();
        if (r.top <= mid && r.bottom >= mid) current = m.dataset.surface || "paper";
      }
      document.body.dataset.surface = current;
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", current === "ink" ? "#0e0d0b" : "#f7f4ee");
    };
    apply();
    window.addEventListener("scroll", apply, { passive: true });
    window.addEventListener("resize", apply);
    return () => {
      window.removeEventListener("scroll", apply);
      window.removeEventListener("resize", apply);
    };
  }, []);
  return null;
}
