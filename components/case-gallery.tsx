"use client";

import Image from "next/image";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import type { Img } from "@/lib/data";

export type GalleryGroup = {
  name: string;
  kind?: string;
  body?: string;
  gallery: Img[];
};

// Split by orientation so every row stays flush instead of ragged — landscape
// work reads two-up, portrait work reads as a denser grid.
function Grid({ items }: { items: Img[] }) {
  const wide = items.filter((g) => g.w / g.h > 1.05);
  const tall = items.filter((g) => g.w / g.h <= 1.05);

  return (
    <>
      {wide.length > 0 && (
        <div className="gal gal-wide">
          {wide.map((g, n) => (
            <figure
              className={`gitem imgmask ${n === 0 && wide.length % 2 === 1 ? "gitem-full" : ""}`}
              key={g.src}
            >
              <Image
                src={g.src}
                alt={g.alt}
                width={g.w}
                height={g.h}
                sizes="(max-width: 760px) 92vw, 46vw"
                quality={70}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      )}

      {tall.length > 0 && (
        <div
          className="gal gal-tall"
          style={{ marginTop: wide.length ? "clamp(10px,1.4vw,20px)" : 0 }}
        >
          {tall.map((g) => (
            <figure className="gitem imgmask" key={g.src}>
              <Image
                src={g.src}
                alt={g.alt}
                width={g.w}
                height={g.h}
                sizes="(max-width: 620px) 46vw, (max-width: 1100px) 31vw, 23vw"
                quality={70}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      )}
    </>
  );
}

/**
 * The case study gallery. An engagement covering several companies is tabbed
 * apart, so each one keeps its own name, its own framing sentence and its own
 * run of images instead of being poured into one undifferentiated grid.
 * A single-company project skips the tabs entirely.
 */
export function CaseGallery({ groups }: { groups: GalleryGroup[] }) {
  const [active, setActive] = useState(0);
  const uid = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  if (groups.length === 0) return null;

  if (groups.length === 1) {
    return (
      <section className="shell cs-gal">
        <Grid items={groups[0].gallery} />
      </section>
    );
  }

  // Arrow keys move selection and focus together, per the ARIA tabs pattern.
  const move = (to: number) => {
    const i = (to + groups.length) % groups.length;
    setActive(i);
    tabs.current[i]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const step: Record<string, number | undefined> = {
      ArrowRight: active + 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: groups.length - 1,
    };
    const to = step[e.key];
    if (to === undefined) return;
    e.preventDefault();
    move(to);
  };

  return (
    <section className="shell cs-gal">
      <div className="csg-head rv">
        <p className="meta">
          <span className="meta-amber">◆</span> Selected work
        </p>

        <div className="csg-tabs" role="tablist" aria-label="Work by company" onKeyDown={onKeyDown}>
          {groups.map((g, i) => (
            <button
              key={g.name}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${uid}-tab-${i}`}
              aria-controls={`${uid}-panel-${i}`}
              aria-selected={i === active}
              tabIndex={i === active ? 0 : -1}
              className={`csg-tab ${i === active ? "is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="csg-tab-i">
                {g.name}
                <span className="csg-tab-n">{g.gallery.length}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {groups.map((g, i) => (
        <div
          key={g.name}
          role="tabpanel"
          id={`${uid}-panel-${i}`}
          aria-labelledby={`${uid}-tab-${i}`}
          className="csg-panel"
          hidden={i !== active}
        >
          {(g.kind || g.body) && (
            <div className="csg-intro">
              {g.kind && <p className="meta">{g.kind}</p>}
              {g.body && <p>{g.body}</p>}
            </div>
          )}
          <Grid items={g.gallery} />
        </div>
      ))}
    </section>
  );
}
