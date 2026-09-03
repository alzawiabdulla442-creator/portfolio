import { ArrowLink } from "@/components/bits";

export default function NotFound() {
  return (
    <section
      style={{ minHeight: "70svh", display: "grid", alignItems: "center", paddingTop: 120 }}
      data-surface="paper"
    >
      <div className="shell">
        <p className="mono">
          <span className="mono-amber">◆</span> Error 404
        </p>
        <h1 className="cs-h" style={{ marginTop: 16 }}>
          No such room
        </h1>
        <p className="lede" style={{ maxWidth: "38ch", marginTop: 18 }}>
          This page doesn&apos;t exist — or it moved while you weren&apos;t looking.
        </p>
        <div style={{ marginTop: 28, display: "flex", gap: 24, flexWrap: "wrap" }}>
          <ArrowLink href="/">Back to the rooms</ArrowLink>
          <ArrowLink href="/work">See the work</ArrowLink>
        </div>
      </div>
    </section>
  );
}
