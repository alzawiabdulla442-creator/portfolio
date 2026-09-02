import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject, projectSlugs } from "@/lib/data";
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

  const i = projects.findIndex((x) => x.slug === slug);
  const next = projects[(i + 1) % projects.length];
  // group by orientation so every gallery row stays flush instead of ragged
  const wide = p.gallery.filter((g) => g.w / g.h > 1.05);
  const tall = p.gallery.filter((g) => g.w / g.h <= 1.05);

  return (
    <>
      <article>
        <header className="cs-hero">
          <div className="shell">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px 28px",
                justifyContent: "space-between",
              }}
            >
              <p className="meta rv">
                <span className="meta-amber">{p.index}</span> &nbsp;/&nbsp; {p.categories.join(" · ")}
              </p>
              <Link href="/work" className="meta ulink">
                ← Back to index
              </Link>
            </div>

            <h1 className="cs-title" style={{ marginTop: 20 }}>
              <span className="clipwrap">
                <span className="clipline">{p.title}</span>
              </span>
            </h1>
            <p className="cs-sub rv" style={{ ["--d" as string]: "160ms" }}>
              {p.subtitle}
            </p>

            <div className="cs-cover imgmask">
              <Image
                src={p.cover.src}
                alt={p.cover.alt}
                width={p.cover.w}
                height={p.cover.h}
                sizes="(max-width: 1680px) 92vw, 1560px"
                quality={72}
                priority
              />
            </div>

            <div className="cs-meta">
              <div className="cs-meta-cell">
                <span className="meta">Year</span>
                <b>{p.year}</b>
              </div>
              <div className="cs-meta-cell">
                <span className="meta">Role</span>
                <b>{p.role}</b>
              </div>
              <div className="cs-meta-cell">
                <span className="meta">Client</span>
                <b>{p.client}</b>
              </div>
              <div className="cs-meta-cell">
                <span className="meta">Disciplines</span>
                <b>{p.disciplines.join(", ")}</b>
              </div>
            </div>
          </div>
        </header>

        <section className="section">
          <div className="shell cs-body">
            <div className="cs-side">
              <p className="quote">{p.summary}</p>
              {p.palette && (
                <div style={{ marginTop: 34 }}>
                  <p className="meta" style={{ marginBottom: 12 }}>
                    Palette
                  </p>
                  <div className="swatches">
                    {p.palette.map((c) => (
                      <div className="swatch" key={c.hex}>
                        <i style={{ background: c.hex }} />
                        <span className="meta">{c.hex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {p.typefaces && (
                <div style={{ marginTop: 30 }}>
                  <p className="meta" style={{ marginBottom: 10 }}>
                    Typography
                  </p>
                  {p.typefaces.map((t) => (
                    <p key={t.name} style={{ fontSize: "var(--step-0)" }}>
                      <span className="meta">{t.label}</span>{" "}
                      <span style={{ fontWeight: 500 }}>{t.name}</span>
                    </p>
                  ))}
                </div>
              )}
            </div>

            <div>
              {p.overview && (
                <div className="cs-block rv">
                  <h3>Overview</h3>
                  <p>{p.overview}</p>
                </div>
              )}
              {p.context && (
                <div className="cs-block rv">
                  <h3>Context</h3>
                  <p>{p.context}</p>
                </div>
              )}
              {p.challenge && (
                <div className="cs-block rv">
                  <h3>Challenge</h3>
                  <p>{p.challenge}</p>
                </div>
              )}
              {p.approach && (
                <div className="cs-block rv">
                  <h3>Approach</h3>
                  <p>{p.approach}</p>
                </div>
              )}
              {p.process && (
                <div className="cs-block rv">
                  <h3>Process</h3>
                  <ul className="cs-list">
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

        <section className="shell" style={{ paddingBottom: "clamp(50px,8vh,110px)" }}>
          {wide.length > 0 && (
            <div className="gal gal-wide">
              {wide.map((g, n) => (
                <figure
                  className={`gitem imgmask ${n === 0 && wide.length % 2 === 1 ? "gitem-full" : ""}`}
                  key={g.src}
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    width={g.w}
                    height={g.h}
                    sizes="(max-width: 760px) 92vw, 46vw"
                    quality={70}
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          )}

          {tall.length > 0 && (
            <div className="gal gal-tall" style={{ marginTop: wide.length ? "clamp(10px,1.4vw,20px)" : 0 }}>
              {tall.map((g) => (
                <figure className="gitem imgmask" key={g.src}>
                  <Image
                    src={g.src}
                    alt={g.alt}
                    width={g.w}
                    height={g.h}
                    sizes="(max-width: 620px) 46vw, (max-width: 1100px) 31vw, 23vw"
                    quality={70}
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          )}
        </section>

        {(p.outcome || p.reflection) && (
          <section className="section on-paper" style={{ paddingBlock: "clamp(60px,9vh,120px)" }}>
            <div className="shell cs-body">
              <div>
                <p className="meta meta-amber">Outcome</p>
              </div>
              <div>
                {p.outcome && (
                  <ul className="cs-list" style={{ maxWidth: "62ch" }}>
                    {p.outcome.map((o, n) => (
                      <li key={o}>
                        <span>{String(n + 1).padStart(2, "0")}</span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {p.reflection && (
                  <div className="cs-block rv" style={{ marginTop: 40 }}>
                    <h3>Reflection</h3>
                    <p>{p.reflection}</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        <Link href={`/work/${next.slug}`} className="nextproj" data-cursor="Next">
          <div className="shell">
            <p className="meta rv">Next project — {next.index}</p>
            <h2 className="nextproj-title" style={{ marginTop: 14 }}>
              {next.title}
            </h2>
            <p
              className="meta"
              style={{ marginTop: 18, display: "inline-flex", gap: 10, alignItems: "center" }}
            >
              View case study <Arrow />
            </p>
          </div>
        </Link>
      </article>

      <Contact />
    </>
  );
}
