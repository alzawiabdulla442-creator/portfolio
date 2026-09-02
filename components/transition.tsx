"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="progress" aria-hidden="true">
      <span style={{ transform: `scaleX(${p})` }} />
    </div>
  );
}
