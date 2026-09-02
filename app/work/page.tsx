import type { Metadata } from "next";
import { projects, traveler } from "@/lib/data";
import { WorkIndex } from "@/components/work-index";
import { Contact } from "@/components/sections";
import { Marquee } from "@/components/bits";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected brand identity, UI/UX, web development, graphic design and digital marketing projects by Abdullah Alzawi — Padel Gulf, Geotechnica, Leyan Boutique, Sala Sony, Senwan Gardens, Géant Libya and more.",
  alternates: { canonical: "/work" },
};

const CATS = [
  "Branding",
  "UI/UX",
  "Web Development",
  "Graphic Design",
  "Social Media",
  "Digital Marketing",
];

export default function WorkPage() {
  return (
    <>
      <section style={{ paddingTop: 130 }}>
        <div className="shell">
          <p className="meta rv">
            <span className="meta-amber">◆</span> Index — {projects.length + 1} projects
          </p>
          <h1 className="display" style={{ fontSize: "var(--step-4)", marginTop: 18 }}>
            <span className="clipwrap">
              <span className="clipline">Work</span>
            </span>
          </h1>
          <p className="lede rv" style={{ maxWidth: "44ch", marginTop: 22 }}>
            Identity systems, interfaces, and the campaigns that carry them — across sport, retail,
            real estate, engineering, fashion and gaming.
          </p>
        </div>

        <div className="ticker" style={{ marginTop: "clamp(34px,6vh,64px)" }}>
          <Marquee items={CATS} duration={38} />
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(40px,6vh,80px)" }}>
        <div className="shell">
          <WorkIndex projects={projects} />

          <article
            className="rv"
            style={{
              borderBottom: "1px solid var(--line)",
              paddingBlock: "clamp(26px,3vw,42px)",
              display: "grid",
              gap: 14,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 18,
                alignItems: "baseline",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", gap: 18, alignItems: "baseline" }}>
                <span className="meta">{traveler.index}</span>
                <h3 className="wrow-title" style={{ fontSize: "clamp(1.6rem,4vw,2.6rem)" }}>
                  {traveler.title}
                </h3>
              </div>
              <span className="meta">{traveler.year}</span>
            </div>
            <p className="body">{traveler.summary}</p>
            <div className="pill-row">
              <span className="tag">Web Development</span>
              <span className="tag">Graduation Project</span>
              <span className="tag">University of Benghazi</span>
            </div>
          </article>
        </div>
      </section>

      <Contact />
    </>
  );
}
