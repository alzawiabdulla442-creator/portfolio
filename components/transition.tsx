"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/** Cross-fades the page on client navigation and draws a thin scroll-progress rule. */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <div key={path} className="pt">
      {children}
    </div>
  );
}

export function ScrollProgress() {
  const bar = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let raf = 0;
    let queued = false;

    // Written straight to the node on an animation frame — a React state update
    // per scroll event re-rendered the tree and made the bar stutter.
    const paint = () => {
      queued = false;
      const el = bar.current;
      if (!el) return;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0;
      el.style.transform = `scaleX(${p})`;
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      raf = requestAnimationFrame(paint);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    paint();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="progress" aria-hidden="true">
      <span ref={bar} />
    </div>
  );
}
