import type { Metadata } from "next";
import { Contact } from "@/components/sections";
import { rooms, contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Abdullah Alzawi — brand identity, UI/UX, web development and digital marketing. Benghazi, Libya.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="cs-top" data-surface="paper">
        <div className="shell">
          <p className="mono rv">
            <span className="mono-amber">◆</span> {contact.location}
          </p>
          <h1 className="cs-h" style={{ marginTop: 16 }}>
            <span className="clipwrap">
              <span className="clipline">Contact</span>
            </span>
          </h1>
          <p className="lede rv" style={{ maxWidth: "46ch", marginTop: 20 }}>
            Tell me which room you need and I&apos;ll tell you honestly whether I&apos;m the right
            person for it.
          </p>

          <div
            style={{
              display: "grid",
              gap: "clamp(16px,2.2vw,28px)",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              marginTop: "clamp(30px,5vh,56px)",
            }}
          >
            {rooms.map((r) => (
              <div
                key={r.id}
                className="rv"
                style={{ borderTop: "1px solid var(--line)", paddingTop: 16 }}
              >
                <p className="mono mono-amber">
                  {r.index} — Room {r.numeral}
                </p>
                <h2
                  style={{
                    fontSize: "var(--t-1)",
                    fontWeight: 600,
                    letterSpacing: "-0.03em",
                    margin: "8px 0 6px",
                  }}
                >
                  {r.name}
                </h2>
                <p className="mono" style={{ textTransform: "none", letterSpacing: 0 }}>
                  {r.doing.slice(0, 3).join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
