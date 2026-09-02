import Link from "next/link";
import type { ReactNode } from "react";

export function Arrow({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h11M7.5 2.2 12.3 7l-4.8 4.8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function SectionHead({
  num,
  title,
  right,
}: {
  num: string;
  title: string;
  right?: ReactNode;
}) {
  return (
    <div className="shead rv">
      <div className="shead-title">
        <span className="meta meta-amber">{num}</span>
        <h2>{title}</h2>
      </div>
      {right}
    </div>
  );
}

export function ArrowLink({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const inner = (
    <>
      <span>{children}</span>
      <Arrow />
    </>
  );
  if (external) {
    return (
      <a className="arrowlink ulink" href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link className="arrowlink ulink" href={href}>
      {inner}
    </Link>
  );
}

export function Marquee({
  items,
  duration = 40,
  reverse,
}: {
  items: string[];
  duration?: number;
  reverse?: boolean;
}) {
  // repeat until the strip is long enough to tile seamlessly at any viewport width
  const filled: string[] = [];
  while (filled.length < Math.max(10, items.length)) filled.push(...items);
  const set = (
    <>
      {filled.map((t, i) => (
        <span className="ticker-item" key={i}>
          <i>◆</i>
          {t}
        </span>
      ))}
    </>
  );
  return (
    <div className="marquee-mask" aria-hidden="true">
      <div
        className={`marquee ${reverse ? "marquee-rev" : ""}`}
        style={{ ["--dur" as string]: `${duration}s` }}
      >
        {set}
        {set}
      </div>
    </div>
  );
}
