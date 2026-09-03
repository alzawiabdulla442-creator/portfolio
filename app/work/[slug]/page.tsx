import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject, projectSlugs, rooms } from "@/lib/data";
import { Contact } from "@/components/sections";
import { Arrow } from "@/components/bits";

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.title} — ${p.categories.join(", ")}`,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: {
      title: `${p.title} — Abdullah Alzawi`,
      description: p.summary,
      url: `/work/${p.slug}`,
      images: [{ url: p.cover.src, width: p.cover.w, height: p.cover.h, alt: p.cover.alt }],
    },
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const room = rooms.find((r) => r.id === p.room)!;
  const i = projects.findIndex((x) => x.slug === slug);
  const next = projects[(i + 1) % projects.length];

  // group by orientation so gallery rows stay flush
  const wide = p.gallery.filter((g) => g.w / g.h > 1.05);
  const tall = p.gallery.filter((g) => g.w / g.h <= 1.05);

  return (
    <>
      <article>
        <header className="cs-top" data-surface="paper">
          <div className="shell">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px 26px",
                justifyContent: "space-between",
              }}
            >
              <p className="mono rv">
                <span className="mono-amber">{p.index}</span> &nbsp;/&nbsp; Room {room.numeral} ·{" "}
                {room.name}
              </p>
              <Link href="/work" className="mono mono-ink ul">
                ← Back to index
              </Link>
            </div>

            <h1 className="cs-h" style={{ marginTop: 18 }}>
              <span className="clipwrap">
                <span className="clipline">{p.title}</span>
              </span>
            </h1>
            <p className="cs-sub rv" style={{ ["--d" as string]: "150ms" }}>
              {p.subtitle}
            </p>

            <div className="cs-cover imgmask">
              <Image
                src={p.cover.src}
                alt={p.cover.alt}
                width={p.cover.w}
                height={p.cover.h}
                sizes="(max-width: 1720px) 92vw, 1600px"
                quality={82}
                priority
              />
            </div>

            <div className="cs-meta">
              <div className="cs-cell">
                <span className="mono">Year</span>
                <b>{p.year}</b>
              </div>
              <div className="cs-cell">
                <span className="mono">Role</span>
                <b>{p.role}</b>
              </div>
              <div className="cs-cell">
                <span className="mono">Client</span>
                <b>{p.client}</b>
              </div>
              <div className="cs-cell">
                <span className="mono">Disciplines</span>
                <b>{p.disciplines.join(", ")}</b>
              </div>
            </div>
          </div>
        </header>

        <section className="room" data-surface="paper">
          <div className="shell cs-body">
            <div className="cs-side">
              <p className="cs-quote">{p.summary}</p>

              {p.palette && (
                <div style={{ marginTop: 32 }}>
                  <p className="mono" style={{ marginBottom: 11 }}>
                    Palette
                  </p>
                  <div className="sw">
                    {p.palette.map((c) => (
                      <div key={c.hex}>
                        <i style={{ background: c.hex }} />
                        <span className="mono">{c.hex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {p.typefaces && (
                <div style={{ marginTop: 28 }}>
                  <p className="mono" style={{ marginBottom: 9 }}>
                    Typography
                  </p>
                  {p.typefaces.map((t) => (
                    <p key={t.name} style={{ fontSize: "var(--t-0)" }}>
                      <span className="mono">{t.label}</span>{" "}
                      <span style={{ fontWeight: 500 }}>{t.name}</span>
                    </p>
                  ))}
                </div>
              )}
            </div>

            <div>
              {p.overview && (
                <div className="blk rv">
                  <h3>Overview</h3>
                  <p>{p.overview}</p>
                </div>
              )}
              {p.context && (
                <div className="blk rv">
                  <h3>Context</h3>
                  <p>{p.context}</p>
                </div>
              )}
              {p.challenge && (
                <div className="blk rv">
                  <h3>Challenge</h3>
                  <p>{p.challenge}</p>
                </div>
              )}
              {p.approach && (
                <div className="blk rv">
                  <h3>Approach</h3>
                  <p>{p.approach}</p>
                </div>
              )}
              {p.process && (
                <div className="blk rv">
                  <h3>Process</h3>
                  <ul className="steps">
                    {p.process.map((s, n) => (
                      <li key={s}>
                        <span>{String(n + 1).padStart(2, "0")}</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="shell" style={{ paddingBottom: "clamp(44px,8vh,104px)" }}>
          {wide.length > 0 && (
            <div className="gal gal-w">
              {wide.map((g, n) => (
                <figure
                  className={`gitem imgmask ${n === 0 && wide.length % 2 === 1 ? "gfull" : ""}`}
                  key={g.src}
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    width={g.w}
                    height={g.h}
                    sizes="(max-width: 760px) 92vw, 46vw"
                    quality={78}
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          )}

          {tall.length > 0 && (
            <div
              className="gal gal-t"
              style={{ marginTop: wide.length ? "clamp(9px,1.3vw,18px)" : 0 }}
            >
              {tall.map((g) => (
                <figure className="gitem imgmask" key={g.src}>
                  <Image
                    src={g.src}
                    alt={g.alt}
                    width={g.w}
                    height={g.h}
                    sizes="(max-width: 620px) 46vw, (max-width: 1100px) 31vw, 23vw"
                    quality={78}
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          )}
        </section>

        {(p.outcome || p.reflection) && (
          <section className="room on-ink" data-surface="ink">
            <div className="shell cs-body">
              <div className="cs-side">
                <p className="mono mono-amber">Outcome</p>
              </div>
              <div>
                {p.outcome && (
                  <ul className="steps" style={{ maxWidth: "60ch" }}>
                    {p.outcome.map((o, n) => (
                      <li key={o}>
                        <span>{String(n + 1).padStart(2, "0")}</span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {p.reflection && (
                  <div className="blk rv" style={{ marginTop: 38 }}>
                    <h3>Reflection</h3>
                    <p>{p.reflection}</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        <Link href={`/work/${next.slug}`} className="nextp" data-cur="Next" data-surface="paper">
          <div className="shell">
            <p className="mono rv">Next — {next.index}</p>
            <h2>{next.title}</h2>
            <p className="arrow mono mono-ink" style={{ marginTop: 16 }}>
              Open case study <Arrow />
            </p>
          </div>
        </Link>
      </article>

      <Contact />
    </>
  );
}
