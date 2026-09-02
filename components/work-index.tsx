"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/data";

export function WorkIndex({ projects }: { projects: Project[] }) {
  const [hover, setHover] = useState<number | null>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0, cx: 0, cy: 0 });
  const raf = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    };
    const tick = () => {
      const p = pos.current;
      p.cx += (p.x - p.cx) * 0.11;
      p.cy += (p.y - p.cy) * 0.11;
      if (thumbRef.current) {
        const skew = Math.max(-9, Math.min(9, (p.x - p.cx) * 0.16));
        thumbRef.current.style.transform = `translate(${p.cx}px, ${p.cy}px) translate(-50%, -50%) rotate(${skew * 0.25}deg) scale(${hover === null ? 0.9 : 1})`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", move, { passive: true });
    raf.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf.current);
    };
  }, [hover]);

  const active = hover !== null ? projects[hover] : null;

  return (
    <div className="windex">
      <div
        ref={thumbRef}
        className={`wrow-thumb ${hover !== null ? "show" : ""}`}
        aria-hidden="true"
        style={{ transform: "translate(-50%,-50%) scale(.9)" }}
      >
        {active && (
          <Image
            src={active.cover.src}
            alt=""
            width={300}
            height={210}
            sizes="300px"
            quality={70}
          />
        )}
      </div>

      {projects.map((p, i) => (
        <Link
          key={p.slug}
          href={`/work/${p.slug}`}
          className="wrow"
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(null)}
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
                quality={68}
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
