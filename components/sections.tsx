import Link from "next/link";
import Image from "next/image";
import { Glyph, Mark } from "./mark";
import { Marquee, ArrowLink, Arrow } from "./bits";
import {
  rooms,
  byRoom,
  experience,
  education,
  contact,
  languages,
  tools,
  traveler,
  type Project,
  type RoomId,
} from "@/lib/data";

/* ------------------------------------------------------------------ HERO */

export function Hero() {
  return (
    <section className="hero" data-surface="paper">
      <div className="shell hero-top">
        <p className="mono">
          <span className="mono-amber">◆</span> Multidisciplinary designer — Benghazi, Libya
        </p>
        <p className="mono">Portfolio / 2026</p>
      </div>

      <div className="shell hero-mid">
        <div className="obj" aria-hidden="true">
          <span className="obj-ring" />
          <span className="obj-ring r2" />
          <span className="obj-ring r3" />
          <span className="obj-halo" />
          <Glyph className="obj-glyph" />
        </div>

        <h1>
          <span className="hero-who rv">
            <span>Abdullah Alzawi</span>
            <span />
          </span>
          <span className="hero-name">
          <span className="clipwrap">
            <span className="clipline" style={{ ["--d" as string]: "60ms" }}>
              Three
            </span>
          </span>
          <span className="clipwrap">
            <span className="clipline" style={{ ["--d" as string]: "160ms" }}>
              Rooms<span className="dot">.</span>
            </span>
          </span>
          </span>
        </h1>

        <div className="hero-grid">
          <p className="hero-say rv" style={{ ["--d" as string]: "340ms" }}>
            Brand studios draw the logo. Product teams build the interface. Agencies run the feed.{" "}
            <b>I work in all three.</b>
          </p>

          <div className="hero-note rv" style={{ ["--d" as string]: "440ms" }}>
            <p className="body" style={{ maxWidth: "40ch" }}>
              Abdullah Alzawi — software engineering graduate turned multidisciplinary designer.
              Currently running the digital presence for several brands under Sonwan Holding Group;
              previously three years of UI/UX, web and graphic design at Artisans Digital Agency.
            </p>
            <a className="scrollcue mono mono-ink" href="#brand">
              <span>Enter the first room</span>
              <span />
            </a>
          </div>
        </div>
      </div>

      <div className="mqrow" style={{ marginTop: "clamp(20px,4vh,44px)" }}>
        <Marquee
          items={["Brand Identity", "UI/UX Design", "Web Development", "Social Media", "Digital Marketing", "Graphic Design"]}
          duration={48}
        />
      </div>
    </section>
  );
}

/* ------------------------------------------------- THRESHOLD + ROOM BODY */

function Card({ p }: { p: Project }) {
  return (
    <Link href={`/work/${p.slug}`} className="card rv" data-cur="Open">
      <div className="card-media imgmask">
        <span className="card-tag">{p.index}</span>
        <span className="card-veil" />
        <Image
          src={p.cover.src}
          alt={p.cover.alt}
          width={p.cover.w}
          height={p.cover.h}
          sizes="(max-width: 720px) 92vw, 46vw"
          quality={78}
        />
        <span className="card-open">
          {p.disciplines.slice(0, 3).map((d) => (
            <span key={d}>{d}</span>
          ))}
        </span>
      </div>
      <div className="card-foot">
        <h3>{p.title}</h3>
        <span className="mono">{p.year}</span>
      </div>
      <p>{p.subtitle}</p>
    </Link>
  );
}

export function Room({ id }: { id: RoomId }) {
  const room = rooms.find((r) => r.id === id)!;
  const items = byRoom(id);

  return (
    <>
      <section className="thr on-ink" id={id} data-surface="ink" aria-labelledby={`${id}-h`}>
        <div className="shell">
          <p className="mono rv">
            Room {room.numeral} of III — threshold
          </p>

          <div className="thr-in" style={{ marginTop: 18 }}>
            <div className="thr-num rv">{room.index}</div>
            <div>
              <h2 className="thr-name" id={`${id}-h`}>
                <span className="clipwrap">
                  <span className="clipline">{room.name}</span>
                </span>
              </h2>
              <p className="thr-line rv" style={{ ["--d" as string]: "120ms" }}>
                {room.line}
              </p>

              <div className="thr-cols">
                <p className="body rv">{room.body}</p>
                <div className="thr-doing rv" style={{ ["--d" as string]: "100ms" }}>
                  {room.doing.map((d) => (
                    <span className="chip" key={d}>
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="room" data-surface="paper">
        <div className="shell">
          <div className="room-head">
            <p className="mono">
              Inside room {room.numeral} — {items.length} project{items.length === 1 ? "" : "s"}
            </p>
            <ArrowLink href="/work">Full index</ArrowLink>
          </div>

          <div className={`cards ${items.length === 1 ? "solo" : ""}`}>
            {items.map((p) => (
              <Card key={p.slug} p={p} />
            ))}
          </div>

          {id === "digital" && (
            <div
              className="rv"
              style={{
                marginTop: "clamp(22px,4vh,40px)",
                paddingTop: 22,
                borderTop: "1px solid var(--line)",
                display: "flex",
                flexWrap: "wrap",
                gap: 20,
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <p className="mono">Also in this room</p>
              <p className="lede" style={{ maxWidth: "46ch" }}>
                {traveler.title} — {traveler.summary}
              </p>
              <span className="mono">{traveler.year}</span>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

/* ---------------------------------------------------------- CONVERGENCE */

export function Convergence() {
  return (
    <section className="conv on-ink" id="about" data-surface="ink">
      <div className="shell">
        <p className="mono rv">
          <span className="mono-amber">◆</span> Where the three rooms meet
        </p>

        <div className="conv-grid" style={{ marginTop: "clamp(26px,5vh,54px)" }}>
          <div className="portrait rv">
            {/* Replaced with the real portrait once supplied. */}
            <div className="portrait-ph">
              <Glyph />
              <p className="mono" style={{ color: "var(--ash)" }}>
                Portrait
                <br />
                to come
              </p>
            </div>
          </div>

          <div>
            <p className="conv-say rv">
              Something is lost at every handover — a colour that doesn&apos;t survive the screen, a
              layout the developer quietly redraws, a campaign that forgets the brand book exists.{" "}
              <b className="am">Nothing is handed over here.</b>
            </p>

            <p className="body rv" style={{ marginTop: 26 }}>
              I studied software engineering at the University of Benghazi, then spent three years at
              Artisans Digital Agency moving between UI/UX design, web development and graphic
              design — often on the same project. Since 2025 I&apos;ve run the digital presence for
              several companies under Sonwan Holding Group, which means holding six distinct brand
              voices at once and never letting them bleed into each other.
            </p>

            <p className="body rv" style={{ marginTop: 14 }}>
              What I enjoy is the moment a mark becomes a system — a corrected proportion turns into
              a pattern, the pattern turns into a campaign, and the whole thing starts producing
              itself.
            </p>

            <div className="facts rv">
              <div className="fact">
                <span className="mono">Based in</span>
                <b>Benghazi, Libya</b>
              </div>
              <div className="fact">
                <span className="mono">Degree</span>
                <b>BSc Software Engineering</b>
              </div>
              <div className="fact">
                <span className="mono">Languages</span>
                <b>{languages.map((l) => l.name).join(" · ")}</b>
              </div>
              <div className="fact">
                <span className="mono">Tools</span>
                <b>{tools.join(" · ")}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- EXPERIENCE */

export function Ledger() {
  return (
    <section className="room" id="experience" data-surface="paper">
      <div className="shell">
        <div className="room-head">
          <p className="mono">
            <span className="mono-amber">◆</span> Where the rooms were learned
          </p>
          <p className="mono">2023 — Present</p>
        </div>

        <div className="ledger">
          {experience.map((e) => (
            <article className="led rv" key={e.role}>
              <div className="led-when">
                <span>{e.from}</span>
                <i>—</i>
                <span>{e.to}</span>
              </div>
              <div>
                <h3>{e.role}</h3>
                <div className="led-org">
                  <b>{e.org}</b>
                  <span className="mono">{e.place}</span>
                </div>
                <p className="body">{e.body}</p>
                <div className="led-tags">
                  {e.tags.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          <article className="led rv">
            <div className="led-when">
              <span>{education.from}</span>
              <i>◆</i>
            </div>
            <div>
              <h3>{education.degree}</h3>
              <div className="led-org">
                <b>{education.org}</b>
                <span className="mono">{education.place}</span>
              </div>
              <p className="body">{education.body}</p>
              <div className="led-tags">
                <span className="chip">Education</span>
                <span className="chip">Graduation Project</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ BRAND WALL */

const BRANDS = [
  { src: "/brands/padel-gulf.svg", name: "Padel Gulf", note: "Racket sports" },
  { src: "/brands/geotechnica.svg", name: "Geotechnica", note: "Deep foundations" },
  { src: "/brands/leyan-boutique.svg", name: "Leyan Boutique", note: "Cultural clothing" },
  { src: "/brands/dimensions-group.svg", name: "Dimensions Group", note: "Electronics" },
  { src: "/brands/gymers.svg", name: "GYMERS", note: "Fitness" },
  { src: "/brands/rafeeq.svg", name: "Rafeeq", note: "Identity" },
  { src: "/brands/rukn.svg", name: "Rukn", note: "Identity" },
  { src: "/brands/sadah.svg", name: "Sadah", note: "Identity" },
];

export function Wall() {
  return (
    <section className="room on-ink" data-surface="ink">
      <div className="shell">
        <div className="room-head">
          <p className="mono">
            <span className="mono-amber">◆</span> Marks drawn, systems delivered
          </p>
          <p className="mono">Sport · Engineering · Fashion · Retail · Fitness</p>
        </div>

        <div className="wall rv">
          {BRANDS.map((b) => (
            <div className="wcell" key={b.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={b.src} alt={`${b.name} logo`} width={461} height={148} loading="lazy" />
              <span className="mono wcell-name">
                {b.name} — {b.note}
              </span>
            </div>
          ))}
          <Link href="/contact" className="wcell wcell-cta" data-cur="Talk">
            <b>
              Your brand
              <br />
              next<span style={{ color: "var(--amber)" }}>.</span>
            </b>
            <span className="mono mono-amber wcell-name">Start a project →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- CONTACT */

export function Contact() {
  return (
    <section className="cta" id="contact" data-surface="paper">
      <div className="shell">
        <p className="mono rv">
          <span className="mono-amber">◆</span> Contact
        </p>

        <h2 className="cta-h rv" style={{ marginTop: 18 }}>
          Got something that has to look right <span className="am">and</span> work right?
        </h2>

        <a className="cta-mail ul rv" href={`mailto:${contact.email}`} data-cur="Email">
          {contact.email}
        </a>

        <div className="cta-rows rv">
          <div className="cta-col">
            <span className="mono">Phone</span>
            <a className="ul" href={`tel:${contact.phoneHref}`}>
              {contact.phone}
            </a>
          </div>
          <div className="cta-col">
            <span className="mono">Location</span>
            <span>{contact.location}</span>
          </div>
          <div className="cta-col">
            <span className="mono">Elsewhere</span>
            <div className="chiprow" style={{ marginTop: 3 }}>
              {contact.socials.map((s) => (
                <a
                  key={s.label}
                  className="chip"
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
            <span className="mono">Open to</span>
            <span>Brand · Digital · Marketing</span>
          </div>
        </div>
      </div>

      <div className="mqrow" style={{ marginTop: "clamp(38px,7vh,86px)", borderBottom: 0 }}>
        <Marquee
          items={["Let's build something", "Let's build something", "Let's build something"]}
          duration={32}
          reverse
        />
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- FOOTER */

export function Footer() {
  return (
    <footer className="foot on-ink" data-surface="ink">
      <div className="shell foot-in">
        <Link href="/" className="foot-mark" aria-label="Abdullah Alzawi — home">
          <Mark />
        </Link>
        <nav className="foot-links" aria-label="Social">
          {contact.socials.map((s) => (
            <a
              key={s.label}
              className="mono ul"
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.label}
            </a>
          ))}
        </nav>
        <p className="mono">© {new Date().getFullYear()} Abdullah Alzawi — Benghazi, Libya</p>
      </div>
    </footer>
  );
}

export { Arrow };
