import type { Metadata } from "next";
import { Convergence, Ledger, Wall, Contact } from "@/components/sections";
import { Glyph } from "@/components/mark";
import { rooms, traveler, languages } from "@/lib/data";
import { Marquee } from "@/components/bits";

export const metadata: Metadata = {
  title: "About",
  description:
    "Abdullah Alzawi — software engineering graduate from the University of Benghazi working across brand identity, UI/UX, web development and digital marketing in Benghazi, Libya.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="cs-top" data-surface="paper">
        <div className="shell">
          <p className="mono rv">
            <span className="mono-amber">◆</span> Abdulla Muftah Abdulla Salem Alzawi
          </p>
          <h1 className="cs-h" style={{ marginTop: 16 }}>
            <span className="clipwrap">
              <span className="clipline">About</span>
            </span>
          </h1>
          <p className="lede rv" style={{ maxWidth: "46ch", marginTop: 20 }}>
            One person, three disciplines that usually belong to three different people — and that
            is the whole argument.
          </p>

          <div className="facts rv" style={{ marginTop: "clamp(26px,5vh,48px)" }}>
            <div className="fact">
              <span className="mono">Based in</span>
              <b>Benghazi, Libya</b>
            </div>
            <div className="fact">
              <span className="mono">Degree</span>
              <b>BSc IT — Software Engineering, 2025</b>
            </div>
            <div className="fact">
              <span className="mono">Languages</span>
              <b>{languages.map((l) => `${l.name} (${l.level})`).join(" · ")}</b>
            </div>
            <div className="fact">
              <span className="mono">Also</span>
              <b>Videography · Video Editing</b>
            </div>
          </div>
        </div>

        <div className="mqrow" style={{ marginTop: "clamp(30px,5vh,58px)" }}>
          <Marquee items={rooms.map((r) => `Room ${r.numeral} — ${r.name}`)} duration={34} />
        </div>
      </section>

      <section className="room" data-surface="paper">
        <div className="shell">
          <div className="room-head">
            <p className="mono">
              <span className="mono-amber">◆</span> How the rooms work
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gap: "clamp(18px,2.4vw,32px)",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            }}
          >
            {rooms.map((r) => (
              <article
                key={r.id}
                className="rv"
                style={{ borderTop: "1px solid var(--line)", paddingTop: 18 }}
              >
                <p className="mono mono-amber">
                  {r.index} — Room {r.numeral}
                </p>
                <h2
                  style={{
                    fontSize: "var(--t-2)",
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                    textTransform: "uppercase",
                    margin: "10px 0 8px",
                  }}
                >
                  {r.name}
                </h2>
                <p className="body">{r.body}</p>
                <div className="chiprow" style={{ marginTop: 16 }}>
                  {r.doing.map((d) => (
                    <span className="chip" key={d}>
                      {d}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div
            className="rv"
            style={{
              marginTop: "clamp(30px,5vh,56px)",
              paddingTop: 24,
              borderTop: "1px solid var(--line)",
              display: "grid",
              gap: 14,
              maxWidth: "62ch",
            }}
          >
            <p className="mono">Graduation project</p>
            <h2 style={{ fontSize: "var(--t-2)", fontWeight: 600, letterSpacing: "-0.035em" }}>
              {traveler.title}
            </h2>
            <p className="body">{traveler.summary}</p>
            <div className="chiprow">
              <span className="chip">{traveler.year}</span>
              <span className="chip">Web Application</span>
              <span className="chip">University of Benghazi</span>
            </div>
          </div>
        </div>
      </section>

      <Convergence />
      <Wall />
      <Ledger />
      <Contact />
    </>
  );
}
