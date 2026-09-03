"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/lib/data";

export function WorkIndex({ projects }: { projects: Project[] }) {
  const [hover, setHover] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const thumbRef = useRef<HTMLDivElement>(null);
  // hover kept in a ref as well, so the animation loop can read it without
  // being torn down and re-registered on every hover change
  const hoverRef = useRef<number | null>(null);
  const pos = useRef({ x: 0, y: 0, cx: 0, cy: 0, seen: false });

  useEffect(() => {
    hoverRef.current = hover;
  }, [hover]);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;

    const move = (e: MouseEvent) => {
      const p = pos.current;
      p.x = e.clientX;
      p.y = e.clientY;
      // first reading: jump rather than glide in from the corner
      if (!p.seen) {
        p.seen = true;
        p.cx = p.x;
        p.cy = p.y;
      }
    };

    const tick = () => {
      const p = pos.current;
      const el = thumbRef.current;
      if (el && p.seen) {
        p.cx += (p.x - p.cx) * 0.14;
        p.cy += (p.y - p.cy) * 0.14;
        const drift = Math.max(-10, Math.min(10, (p.x - p.cx) * 0.16));
        const on = hoverRef.current !== null;
        el.style.transform =
          `translate3d(${p.cx}px, ${p.cy}px, 0) translate(-50%, -50%) ` +
          `rotate(${drift * 0.22}deg) scale(${on ? 1 : 0.88})`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
    // deliberately empty: the loop owns the transform for the life of the page.
    // Re-running it on hover changes was resetting the element's position.
  }, []);

  const active = hover !== null ? projects[hover] : null;

  // Portalled onto <body>: position:fixed only tracks the viewport when no
  // ancestor has a transform/filter/perspective. No inline `transform` either —
  // React would rewrite it every render and undo the rAF positioning.
  const preview = (
    <div
      ref={thumbRef}
      className={`wrow-thumb ${hover !== null ? "show" : ""}`}
      aria-hidden="true"
    >
      {active && (
        <Image src={active.cover.src} alt="" width={340} height={238} sizes="340px" quality={74} />
      )}
    </div>
  );

  return (
    <div className="windex">
      {mounted && createPortal(preview, document.body)}

      {projects.map((p, i) => (
        <Link
          key={p.slug}
          href={`/work/${p.slug}`}
          className="wrow"
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover((cur) => (cur === i ? null : cur))}
          data-cursor="View"
        >
          <div className="wrow-in">
            <span className="wrow-num">{p.index}</span>
            <h3 className="wrow-title">{p.title}</h3>
            <p className="wrow-sub">{p.subtitle}</p>
            <div className="wrow-tags">
              {p.categories.map((c) => (
                <span className="tag" key={c}>
                  {c}
                </span>
              ))}
            </div>
            <span className="wrow-year">{p.year}</span>
          </div>
        </Link>
      ))}

      <div className="wcards">
        {projects.map((p) => (
          <Link key={p.slug} href={`/work/${p.slug}`} className="wcard rv">
            <div className="wcard-media imgmask">
              <span className="wcard-num">{p.index}</span>
              <Image
                src={p.cover.src}
                alt={p.cover.alt}
                width={p.cover.w}
                height={p.cover.h}
                sizes="100vw"
                quality={74}
              />
            </div>
            <div className="wcard-head">
              <h3>{p.title}</h3>
              <span className="meta">{p.year}</span>
            </div>
            <p>{p.subtitle}</p>
            <div className="wrow-tags">
              {p.categories.map((c) => (
                <span className="tag" key={c}>
                  {c}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
