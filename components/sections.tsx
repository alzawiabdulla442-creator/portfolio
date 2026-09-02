import Link from "next/link";
import { BrandPattern } from "./pattern";
import { Glyph } from "./mark";
import { Marquee, SectionHead, ArrowLink } from "./bits";
import { capabilities, tools, experience, education, contact, languages } from "@/lib/data";

const DISCIPLINES = [
  "Brand Identity",
  "UI/UX Design",
  "Web Development",
  "Social Media",
  "Digital Marketing",
  "Graphic Design",
  "Content Strategy",
  "Visual Direction",
];

export function Hero() {
  return (
    <section className="hero">
      <BrandPattern className="hero-pattern" />

      <div className="shell hero-inner">
        <div className="hero-top">
          <p className="meta">
            <span className="meta-amber">◆</span> Benghazi, Libya — 32.12°N 20.07°E
          </p>
          <p className="meta">Portfolio — Vol. 01 / 2026</p>
        </div>

        <h1 className="hero-name">
          <span className="clipwrap">
            <span className="clipline" style={{ ["--d" as string]: "80ms" }}>
              Abdullah
            </span>
          </span>
          <span className="clipwrap">
            <span className="clipline" style={{ ["--d" as string]: "180ms" }}>
              Alzawi<span className="dot">.</span>
            </span>
          </span>
        </h1>

        <div className="hero-grid">
          <p className="hero-statement rv" style={{ ["--d" as string]: "380ms" }}>
            I design brand identities, build the interfaces they live in, and run the campaigns that
            put them <em>in front of people.</em>
          </p>

          <div className="hero-aside rv" style={{ ["--d" as string]: "480ms" }}>
            <p className="body" style={{ maxWidth: "42ch" }}>
              Software engineering graduate turned multidisciplinary designer. Currently managing the
              digital presence for several brands under Sonwan Holding Group — previously three years
              of UI/UX, web and graphic design at Artisans Digital Agency.
            </p>
            <a className="hero-scroll meta" href="#work">
              <span>Selected Work</span>
              <span />
            </a>
          </div>
        </div>
      </div>

      <div className="ticker">
        <Marquee items={DISCIPLINES} duration={46} />
      </div>
    </section>
  );
}

export function Positioning() {
  return (
    <section className="section on-paper" id="approach">
      <div className="shell">
        <SectionHead num="01" title="Positioning" />

        <div className="pos-grid">
          <p className="pos-big rv">
            Most of this work happens in <em>three separate rooms.</em> I&apos;ve worked in all three.
          </p>

          <div className="pos-body rv" style={{ ["--d" as string]: "120ms" }}>
            <p className="body">
              A brand studio draws the logo. A product team builds the interface. An agency runs the
              feed. Each hands off to the next, and something is lost at every seam — a colour that
              doesn&apos;t survive the screen, a layout the developer quietly redraws, a campaign
              that forgets the brand book exists.
            </p>
            <p className="body">
              I&apos;ve sat in all three rooms. That means the identity I draw is one I can also
              ship, and the campaign I plan is one I can also design — with the engineering
              background to know what&apos;s actually buildable before I promise it.
            </p>

            <div className="pos-rooms">
              <div className="pos-room">
                <span className="meta meta-amber">Room 01</span>
                <b>Brand</b>
                <span>Identity systems, guidelines, patterns and the books that hold them together.</span>
              </div>
              <div className="pos-room">
                <span className="meta meta-amber">Room 02</span>
                <b>Digital</b>
                <span>Interface design and front-end build for web and mobile products.</span>
              </div>
              <div className="pos-room">
                <span className="meta meta-amber">Room 03</span>
                <b>Marketing</b>
                <span>Content plans, campaign coordination and social output at retail speed.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Capabilities() {
  return (
    <section className="section" id="capabilities">
      <div className="shell">
        <SectionHead
          num="03"
          title="Capabilities"
          right={<p className="meta">Four groups · One person</p>}
        />
      </div>

      <div className="shell">
        <div className="caps rv">
          {capabilities.map((c) => (
            <div className="cap" key={c.id}>
              <div className="cap-head">
                <span className="meta meta-amber">{c.id}</span>
                <h3>{c.title}</h3>
              </div>
              <ul>
                {c.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="toolrow rv">
          <span className="meta">Tools</span>
          {tools.map((t) => (
            <b key={t}>{t}</b>
          ))}
          <span className="meta" style={{ marginLeft: "auto" }}>
            {languages.map((l) => `${l.name} — ${l.level}`).join("  ·  ")}
          </span>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="shell">
        <SectionHead num="04" title="Experience" right={<p className="meta">2023 — Present</p>} />

        <div className="exp">
          {experience.map((e) => (
            <article className="exprow rv" key={e.role}>
              <div className="exp-when">
                <span>{e.from}</span>
                <i>—</i>
                <span>{e.to}</span>
              </div>
              <div>
                <h3 className="exp-role">{e.role}</h3>
                <div className="exp-org">
                  <b>{e.org}</b>
                  <span className="meta">{e.place}</span>
                </div>
                <p className="body">{e.body}</p>
                <div className="exp-tags">
                  {e.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          <article className="exprow rv">
            <div className="exp-when">
              <span>{education.from}</span>
              <i>◆</i>
            </div>
            <div>
              <h3 className="exp-role">{education.degree}</h3>
              <div className="exp-org">
                <b>{education.org}</b>
                <span className="meta">{education.place}</span>
              </div>
              <p className="body">{education.body}</p>
              <div className="exp-tags">
                <span className="tag">Education</span>
                <span className="tag">Graduation Project</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export function AboutBlock() {
  return (
    <section className="section on-paper" id="about">
      <div className="shell">
        <SectionHead
          num="05"
          title="About"
          right={<ArrowLink href="/about">Full profile</ArrowLink>}
        />

        <div className="about-grid">
          <div>
            <p className="pos-big rv" style={{ fontSize: "var(--step-2)" }}>
              I studied software engineering, then spent three years finding out that the
              interesting problems sit between the disciplines rather than inside them.
            </p>
            <p className="body rv" style={{ marginTop: 24 }}>
              At Artisans Digital Agency I moved between UI/UX design, web development and graphic
              design — often on the same project. At Sonwan Holding Group I run the digital presence
              for several companies at once, which means holding six distinct brand voices in my head
              and never letting them bleed into each other.
            </p>
            <p className="body rv" style={{ marginTop: 16 }}>
              What I enjoy most is the part where a mark becomes a system: where a corrected
              proportion turns into a pattern, the pattern turns into a campaign, and the whole thing
              starts producing itself. I work fast, I research before I decide, and I use modern AI
              tooling for the parts of the job that don&apos;t need judgement — so the parts that do
              get more of it.
            </p>

            <div className="about-facts rv">
              <div className="about-fact">
                <span className="meta">Based in</span>
                <b>Benghazi, Libya</b>
              </div>
              <div className="about-fact">
                <span className="meta">Education</span>
                <b>BSc Software Engineering</b>
              </div>
              <div className="about-fact">
                <span className="meta">Languages</span>
                <b>Arabic · English</b>
              </div>
              <div className="about-fact">
                <span className="meta">Working</span>
                <b>Full-time & freelance</b>
              </div>
            </div>
          </div>

          <div className="about-mark rv">
            <BrandPattern className="pat" />
            <Glyph className="glyph" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="cta" id="contact">
      <div className="shell">
        <p className="meta rv">
          <span className="meta-amber">◆</span> Contact
        </p>

        <h2 className="cta-kicker rv" style={{ marginTop: 18 }}>
          Got something that has to <em>look right</em> and work right?
        </h2>

        <a className="cta-mail ulink rv" href={`mailto:${contact.email}`} data-cursor="Email">
          {contact.email}
        </a>

        <div className="cta-meta rv">
          <div className="cta-col">
            <span className="meta">Phone</span>
            <a className="ulink" href={`tel:${contact.phoneHref}`}>
              {contact.phone}
            </a>
          </div>
          <div className="cta-col">
            <span className="meta">Location</span>
            <span>{contact.location}</span>
          </div>
          <div className="cta-col">
            <span className="meta">Elsewhere</span>
            <div className="pill-row" style={{ marginTop: 2 }}>
              {contact.socials.map((s) => (
                <a
                  key={s.label}
                  className="tag"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <div className="cta-col" style={{ marginLeft: "auto" }}>
            <span className="meta">Available for</span>
            <span>Brand · Digital · Marketing</span>
          </div>
        </div>
      </div>

      <div className="ticker" style={{ marginTop: "clamp(40px,7vh,90px)", borderBottom: 0 }}>
        <Marquee
          items={["Let's build something", "Let's build something", "Let's build something"]}
          duration={30}
          reverse
        />
      </div>
    </section>
  );
}

export function TravelerNote() {
  return (
    <div className="shell" style={{ paddingBottom: "clamp(40px,7vh,90px)" }}>
      <div
        className="rv"
        style={{
          borderTop: "1px solid var(--line)",
          paddingTop: 26,
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <p className="meta">Also in the archive</p>
        <p className="lede" style={{ maxWidth: "48ch" }}>
          Traveler — a trip-planning web application built as my graduation project at the University
          of Benghazi.
        </p>
        <ArrowLink href="/work">See all work</ArrowLink>
      </div>
    </div>
  );
}

const BRANDS = [
  { src: "/brands/padel-gulf.svg", name: "Padel Gulf", w: 713, note: "Racket sports" },
  { src: "/brands/geotechnica.svg", name: "Geotechnica", w: 713, note: "Deep foundations" },
  { src: "/brands/leyan-boutique.svg", name: "Leyan Boutique", w: 461, note: "Cultural clothing" },
  { src: "/brands/dimensions-group.svg", name: "Dimensions Group", w: 461, note: "Electronics" },
  { src: "/brands/gymers.svg", name: "GYMERS", w: 461, note: "Fitness" },
  { src: "/brands/rafeeq.svg", name: "Rafeeq", w: 461, note: "Identity" },
  { src: "/brands/rukn.svg", name: "Rukn", w: 461, note: "Identity" },
  { src: "/brands/sadah.svg", name: "Sadah", w: 461, note: "Identity" },
];

export function Brands() {
  return (
    <section className="brands" aria-labelledby="brands-h">
      <div className="shell brands-head">
        <p className="meta" id="brands-h">
          <span className="meta-amber">◆</span> Marks drawn, systems delivered
        </p>
        <p className="meta">Sport · Engineering · Fashion · Retail · Gaming · Fitness</p>
      </div>

      <div className="shell">
        <div className="brands-wall">
          {BRANDS.map((b) => (
            <div className="brand-cell" key={b.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={b.src} alt={`${b.name} logo`} width={b.w} height={148} loading="lazy" />
              <span className="meta brand-name">
                {b.name} <span className="brand-note">— {b.note}</span>
              </span>
            </div>
          ))}

          <Link href="/contact" className="brand-cell brand-cta" data-cursor="Talk">
            <span className="brand-cta-label">
              Your brand
              <br />
              next<span className="amber">.</span>
            </span>
            <span className="meta brand-name">Start a project →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
