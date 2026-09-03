import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { rooms, byRoom, projects, traveler } from "@/lib/data";
import { Contact, Footer } from "@/components/sections";
import { Marquee, ArrowLink } from "@/components/bits";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected brand identity, UI/UX, web development, graphic design and digital marketing projects by Abdullah Alzawi — Padel Gulf, Geotechnica, Leyan Boutique, Sala Sony, Senwan Gardens, Géant Libya and more.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="cs-top" data-surface="paper">
        <div className="shell">
          <p className="mono rv">
            <span className="mono-amber">◆</span> Index — {projects.length + 1} projects, three
            rooms
          </p>
          <h1 className="cs-h" style={{ marginTop: 16 }}>
            <span className="clipwrap">
              <span className="clipline">Work</span>
            </span>
          </h1>
          <p className="lede rv" style={{ maxWidth: "44ch", marginTop: 20 }}>
            Filed by the room it belongs to — identity systems, the interfaces they live in, and the
            campaigns that carry them.
          </p>
        </div>

        <div className="mqrow" style={{ marginTop: "clamp(30px,5vh,58px)" }}>
          <Marquee
            items={["Branding", "UI/UX", "Web Development", "Graphic Design", "Social Media", "Digital Marketing"]}
            duration={40}
          />
        </div>
      </section>

      {rooms.map((room) => {
        const items = byRoom(room.id);
        return (
          <section className="room" key={room.id} id={room.id} data-surface="paper">
            <div className="shell">
              <div className="room-head">
                <p className="mono">
                  <span className="mono-amber">{room.index}</span> — Room {room.numeral} ·{" "}
                  {room.name}
                </p>
                <p className="mono">{room.line}</p>
              </div>

              <div className={`cards ${items.length === 1 ? "solo" : ""}`}>
                {items.map((p) => (
                  <Link key={p.slug} href={`/work/${p.slug}`} className="card rv" data-cur="Open">
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
                ))}
              </div>

              {room.id === "digital" && (
                <article
                  className="rv"
                  style={{
                    marginTop: "clamp(20px,3vh,36px)",
                    paddingTop: 22,
                    borderTop: "1px solid var(--line)",
                    display: "grid",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: 16,
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                    }}
                  >
                    <div style={{ display: "flex", gap: 16, alignItems: "baseline" }}>
                      <span className="mono">{traveler.index}</span>
                      <h3
                        style={{
                          fontSize: "clamp(1.5rem,4vw,2.4rem)",
                          fontWeight: 700,
                          letterSpacing: "-0.04em",
                          textTransform: "uppercase",
                          lineHeight: 1,
                        }}
                      >
                        {traveler.title}
                      </h3>
                    </div>
                    <span className="mono">{traveler.year}</span>
                  </div>
                  <p className="body">{traveler.summary}</p>
                  <div className="chiprow">
                    <span className="chip">Web Development</span>
                    <span className="chip">Graduation Project</span>
                    <span className="chip">University of Benghazi</span>
                  </div>
                </article>
              )}
            </div>
          </section>
        );
      })}

      <section style={{ paddingBottom: "clamp(30px,6vh,70px)" }} data-surface="paper">
        <div className="shell">
          <ArrowLink href="/">Back to the rooms</ArrowLink>
        </div>
      </section>

      <Contact />
    </>
  );
}
