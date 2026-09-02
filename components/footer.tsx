import Link from "next/link";
import { Mark } from "./mark";
import { contact } from "@/lib/data";

export function Footer() {
  return (
    <footer className="foot">
      <div className="shell foot-in">
        <Link href="/" className="foot-mark" aria-label="Abdullah Alzawi — home">
          <Mark />
        </Link>

        <nav className="foot-links" aria-label="Social">
          {contact.socials.map((s) => (
            <a
              key={s.label}
              className="meta ulink"
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <p className="meta">
          © {new Date().getFullYear()} Abdullah Alzawi — Benghazi, Libya
        </p>
      </div>
    </footer>
  );
}
