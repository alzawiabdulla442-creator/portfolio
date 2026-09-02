"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Mark } from "./mark";

const links = [
  { href: "/", label: "Index" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      setHidden(y > 220 && y > last);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

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

          <button
            className="nav-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-panel"
          >
            <span className="meta">{open ? "Close" : "Menu"}</span>
            <span className={`nav-burger ${open ? "is-open" : ""}`} aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>

      <div id="menu-panel" className={`menu ${open ? "is-open" : ""}`} hidden={!open}>
        <div className="menu-inner shell">
          <p className="meta">Menu</p>
          <ul className="menu-list">
            {links.map((l, i) => (
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
