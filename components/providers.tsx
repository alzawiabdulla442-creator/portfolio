"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onAnchor = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!el) return;
      const id = el.getAttribute("href")!.slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -60 });
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

    let seen = false;
    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!seen) {
        seen = true;
        cx = x;
        cy = y;
        el.style.opacity = "1";
      }
      const t = (e.target as HTMLElement)?.closest?.("[data-cursor]") as HTMLElement | null;
      if (t) {
        el.dataset.active = "1";
        label.textContent = t.dataset.cursor || "";
      } else {
        el.dataset.active = "0";
        label.textContent = "";
      }
    };

    const tick = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
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

/** Adds `.in` to every `.rv`, `.imgmask` and `.clipwrap` once it enters the viewport. */
export function RevealObserver() {
  useEffect(() => {
    const nodes = () =>
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
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    nodes().forEach((n) => io.observe(n));

    const mo = new MutationObserver(() => nodes().forEach((n) => io.observe(n)));
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
