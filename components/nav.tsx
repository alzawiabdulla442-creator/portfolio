"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Mark } from "./mark";
import { rooms } from "@/lib/data";

const doors = rooms.map((r) => ({ href: `/#${r.id}`, numeral: r.numeral, name: r.name }));

/** Local time in Benghazi — a small sign the site knows where it is. */
function Clock() {
  const [t, setT] = useState<string | null>(null);
  useEffect(() => {
    const tick = () =>
      setT(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Africa/Tripoli",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 20000);
    return () => clearInterval(id);
  }, []);
  if (!t) return <span className="clocktag" suppressHydrationWarning />;
  return (
    <span className="clocktag" suppressHydrationWarning>
      Benghazi — {t}
    </span>
  );
}

export function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 30);
      setHide(y > 260 && y > last);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${hide && !open ? "nav-hide" : ""} ${solid ? "nav-solid" : ""}`}>
        <div className="nav-in shell">
          <Link href="/" className="nav-mark" aria-label="Abdullah Alzawi — home" data-cur="Home">
            <Mark />
          </Link>

          <nav className="nav-mid" aria-label="Rooms">
            {doors.map((d) => (
              <Link key={d.href} href={d.href} className="doorlink">
                <em>{d.numeral}</em>
                <b>{d.name}</b>
              </Link>
            ))}
            <Link href="/work" className="doorlink">
              <em>—</em>
              <b>All work</b>
            </Link>
          </nav>

          <div className="nav-right">
            <Clock />
            <Link href="/contact" className="pill">
              <i />
              Let&apos;s talk
            </Link>
            <button
              className={`burger ${open ? "open" : ""}`}
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="sheet"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div id="sheet" className={`sheet ${open ? "open" : ""}`} hidden={!open}>
        <div className="sheet-in shell">
          <p className="mono">Three rooms</p>
          <ol>
            {[...doors, { href: "/work", numeral: "—", name: "All work" }, { href: "/contact", numeral: "—", name: "Contact" }].map(
              (d, i) => (
                <li key={d.href} style={{ ["--d" as string]: `${80 + i * 65}ms` }}>
                  <Link href={d.href}>
                    <span className="mono mono-amber">{d.numeral}</span>
                    <b>{d.name}</b>
                  </Link>
                </li>
              )
            )}
          </ol>
          <div className="sheet-foot">
            <a className="ul" href="mailto:alzawiabdulla449@gmail.com">
              alzawiabdulla449@gmail.com
            </a>
            <span className="mono">Benghazi, Libya</span>
          </div>
        </div>
      </div>
    </>
  );
}
