import type { Metadata } from "next";
import { Capabilities, Experience, Contact } from "@/components/sections";
import { BrandPattern } from "@/components/pattern";
import { Glyph } from "@/components/mark";
import { SectionHead } from "@/components/bits";
import { traveler, languages } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Abdullah Alzawi — software engineering graduate from the University of Benghazi working across brand identity, UI/UX, web development and digital marketing in Benghazi, Libya.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section style={{ paddingTop: 130 }} className="section">
        <div className="shell">
          <p className="meta rv">
            <span className="meta-amber">◆</span> Abdulla Muftah Abdulla Salem Alzawi
          </p>

          <h1 className="display" style={{ fontSize: "var(--step-4)", marginTop: 18 }}>
            <span className="clipwrap">
              <span className="clipline">About</span>
            </span>
          </h1>

          <div className="about-grid" style={{ marginTop: "clamp(36px,6vh,72px)" }}>
            <div>
              <p className="pos-big rv">
                I sit between three disciplines that usually belong to three different people —{" "}
                <em>and that&apos;s the point.</em>
              </p>

              <p className="body rv" style={{ marginTop: 26 }}>
                I graduated from the University of Benghazi with a Bachelor of Information Technology
                in Software Engineering. The engineering part matters less as a job title than as a
                way of thinking: I understand what a browser will actually do with a layout, what a
                developer will have to redraw, and where a beautiful idea gets expensive.
              </p>

              <p className="body rv" style={{ marginTop: 16 }}>
                Professionally I started at Artisans Digital Agency on a three-month internship and
                stayed on full-time, working across UI/UX design, web design and development, and
                graphic design — often several of those on the same project, and frequently on
                confidential client work that demanded research and adaptability more than a fixed
                process.
              </p>

              <p className="body rv" style={{ marginTop: 16 }}>
                Since 2025 I&apos;ve been Social Media & Digital Marketing Manager at Sonwan Holding
                Group, running the digital presence for several companies under the group — Géant
                Libya, Sonwan Academy, 5.1.1 Tactical Benghazi, Sonwan Real Estate Investment, Ghout
                Al-Sultan and others. That means content plans, campaigns and digital communication
                for multiple brands in parallel, coordinating with designers, photographers and video
                production teams, and keeping each brand&apos;s identity and objectives intact while
                they share a calendar.
              </p>

              <p className="body rv" style={{ marginTop: 16 }}>
                Alongside the employed work I build brand identities end to end — logo, guidelines,
                pattern, typography, applications and the brand book that keeps it all consistent
                after I hand it over. Padel Gulf, Geotechnica, Leyan Boutique and Sala Sony are the
                clearest examples of that.
              </p>

              <p className="body rv" style={{ marginTop: 16 }}>
                I&apos;m a fast learner with a genuine interest in technology and digital innovation,
                and I lean on modern AI tooling and research to compress the parts of the work that
                don&apos;t need a designer&apos;s judgement — which leaves more room for the parts
                that do.
              </p>

              <div className="about-facts rv">
                <div className="about-fact">
                  <span className="meta">Based in</span>
                  <b>Benghazi, Libya</b>
                </div>
                <div className="about-fact">
                  <span className="meta">Degree</span>
                  <b>BSc IT — Software Engineering, 2025</b>
                </div>
                <div className="about-fact">
                  <span className="meta">Languages</span>
                  <b>{languages.map((l) => `${l.name} (${l.level})`).join(" · ")}</b>
                </div>
                <div className="about-fact">
                  <span className="meta">Also</span>
                  <b>Videography · Video Editing</b>
                </div>
              </div>
            </div>

            <div>
              <div className="about-mark rv" style={{ aspectRatio: "1 / 1" }}>
                <BrandPattern className="pat" />
                <Glyph className="glyph" />
              </div>

              <div className="rv" style={{ marginTop: 28 }}>
                <p className="meta" style={{ marginBottom: 12 }}>
                  Graduation Project
                </p>
                <h2 className="h-md">{traveler.title}</h2>
                <p className="body" style={{ marginTop: 12 }}>
                  {traveler.summary}
                </p>
                <div className="pill-row" style={{ marginTop: 16 }}>
                  <span className="tag">{traveler.year}</span>
                  <span className="tag">Web Application</span>
                  <span className="tag">University of Benghazi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section on-paper" style={{ paddingBlock: "clamp(56px,9vh,120px)" }}>
        <div className="shell">
          <SectionHead num="—" title="How I work" />
          <div className="pos-rooms" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
            <div className="pos-room">
              <span className="meta meta-amber">01</span>
              <b>Research before decisions</b>
              <span>
                I read the category, the competitors and the constraints before I open a canvas. Most
                of the good decisions are made before the design starts.
              </span>
            </div>
            <div className="pos-room">
              <span className="meta meta-amber">02</span>
              <b>Systems, not artefacts</b>
              <span>
                A logo is a deliverable; a system is what keeps the brand alive six months later. I
                build for the work that comes after the handover.
              </span>
            </div>
            <div className="pos-room">
              <span className="meta meta-amber">03</span>
              <b>Built, not just drawn</b>
              <span>
                The engineering background means I design what can actually ship — and when it needs
                building, I can build it.
              </span>
            </div>
            <div className="pos-room">
              <span className="meta meta-amber">04</span>
              <b>Parallel brands</b>
              <span>
                Running several brands at once taught me to hold distinct voices without letting them
                blur. It&apos;s the skill I use most.
              </span>
            </div>
          </div>
        </div>
      </section>

      <Capabilities />
      <Experience />
      <Contact />
    </>
  );
}
