import type { Metadata } from "next";
import { Contact } from "@/components/sections";
import { contact, capabilities } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Abdullah Alzawi — brand identity, UI/UX, web development and digital marketing. Benghazi, Libya.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section style={{ paddingTop: 130 }}>
        <div className="shell">
          <p className="meta rv">
            <span className="meta-amber">◆</span> {contact.location}
          </p>
          <h1 className="display" style={{ fontSize: "var(--step-4)", marginTop: 18 }}>
            <span className="clipwrap">
              <span className="clipline">Contact</span>
            </span>
          </h1>
          <p className="lede rv" style={{ maxWidth: "46ch", marginTop: 22 }}>
            Brand identity, interface design, front-end build, or the marketing that carries them —
            tell me which room you need and I&apos;ll tell you honestly whether I&apos;m the right
            person for it.
          </p>

          <div className="pos-rooms" style={{ marginTop: "clamp(36px,6vh,64px)" }}>
            {capabilities.map((c) => (
              <div className="pos-room" key={c.id}>
                <span className="meta meta-amber">{c.id}</span>
                <b>{c.title}</b>
                <span>{c.items.slice(0, 3).join(" · ")}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
