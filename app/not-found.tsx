import Link from "next/link";
import { ArrowLink } from "@/components/bits";

export default function NotFound() {
  return (
    <section style={{ minHeight: "72svh", display: "grid", alignItems: "center", paddingTop: 130 }}>
      <div className="shell">
        <p className="meta">
          <span className="meta-amber">◆</span> Error 404
        </p>
        <h1 className="display" style={{ fontSize: "var(--step-4)", marginTop: 18 }}>
          Nothing here
        </h1>
        <p className="lede" style={{ maxWidth: "38ch", marginTop: 20 }}>
          This page doesn&apos;t exist — or it moved while you weren&apos;t looking.
        </p>
        <div style={{ marginTop: 30, display: "flex", gap: 26, flexWrap: "wrap" }}>
          <ArrowLink href="/">Back home</ArrowLink>
          <ArrowLink href="/work">See the work</ArrowLink>
        </div>
      </div>
    </section>
  );
}
