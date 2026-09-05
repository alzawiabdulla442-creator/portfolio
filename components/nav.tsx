"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Mark } from "./mark";
import { smooth } from "./providers";

const links = [
  { href: "/", label: "Index" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    // Distance-based hysteresis. Comparing this frame's y against the previous
    // frame's flapped badly: with smooth scrolling a slow drag produces 1–3px
    // frames with occasional 5–7px ones, so any per-frame threshold flips
    // constantly. Instead we anchor at the point the direction last changed and
    // require a real amount of travel before committing to a state.
    const TOP = 260; // always visible above this
    const HIDE_AFTER = 140; // continuous downward travel before hiding
    const SHOW_AFTER = 60; // continuous upward travel before showing again
    const DEAD = 0.6; // ignore sub-pixel jitter

    let lastY = window.scrollY;
    let anchor = lastY;
    let dir = 0;
    let isHidden = false;
    let isSolid = false;
    let ticking = false;

    const measure = () => {
      const y = Math.max(0, window.scrollY);

      const solid = y > 40;
      if (solid !== isSolid) {
        isSolid = solid;
        setSolid(solid);
      }

      const delta = y - lastY;
      if (Math.abs(delta) > DEAD) {
        const d = delta > 0 ? 1 : -1;
        if (d !== dir) {
          dir = d;
          anchor = lastY; // direction changed — start measuring travel from here
        }
        lastY = y;
      }

      let next = isHidden;
      if (y <= TOP) {
        next = false;
        anchor = y;
      } else if (dir > 0 && y - anchor > HIDE_AFTER) {
        next = true;
      } else if (dir < 0 && anchor - y > SHOW_AFTER) {
        next = false;
      }

      if (next !== isHidden) {
        isHidden = next;
        setHidden(next);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(measure);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    ticking = true;
    measure();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    // Lenis keeps its own scroll position, so locking overflow alone let the
    // page jump when the menu closed. Pause the instance as well.
    if (open) smooth.current?.stop();
    else smooth.current?.start();
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      smooth.current?.start();
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const contactActive = path.startsWith("/contact");

  return (
    <>
      <header className={`nav ${hidden && !open ? "nav-hidden" : ""} ${solid ? "nav-solid" : ""}`}>
        <div className="nav-inner shell">
          <Link href="/" className="nav-mark" aria-label="Abdullah Alzawi — home" data-cursor="Home">
            <Mark />
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {links.map((l) => {
              const active = l.href === "/" ? path === "/" : path.startsWith(l.href);
              return (
                <Link key={l.href} href={l.href} className={`nav-link ${active ? "is-active" : ""}`}>
                  <span className="nav-link-i">{l.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="nav-end">
            <Link
              href="/contact"
              className={`cbtn ${contactActive ? "is-active" : ""}`}
              data-cursor="Talk"
            >
              <span className="cbtn-dot" aria-hidden="true" />
              <span className="cbtn-slide">
                <span>Contact</span>
                <span aria-hidden="true">Say hello</span>
              </span>
            </Link>

            <button
              className="nav-toggle"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-panel"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className="meta">{open ? "Close" : "Menu"}</span>
              <span className={`nav-burger ${open ? "is-open" : ""}`} aria-hidden="true">
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div id="menu-panel" className={`menu ${open ? "is-open" : ""}`} hidden={!open}>
        <div className="menu-inner shell">
          <p className="meta">Menu</p>
          <ul className="menu-list">
            {[...links, { href: "/contact", label: "Contact" }].map((l, i) => (
              <li key={l.href} style={{ ["--d" as string]: `${90 + i * 70}ms` }}>
                <Link href={l.href}>
                  <span className="menu-num meta">0{i + 1}</span>
                  <span className="menu-label display">{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="menu-foot">
            <a className="ulink" href="mailto:alzawiabdulla449@gmail.com">
              alzawiabdulla449@gmail.com
            </a>
            <span className="meta">Benghazi, Libya</span>
          </div>
        </div>
      </div>
    </>
  );
}
