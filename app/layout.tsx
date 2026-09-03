import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fustat";
import "@fontsource/martian-mono/400.css";
import "@fontsource/martian-mono/500.css";
import "@fontsource/martian-mono/600.css";
import "./globals.css";
import "./ui.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections";
import { SmoothScroll, Cursor, RevealObserver, SurfaceSync } from "@/components/providers";

const SITE = "https://portfolio-site-two-zeta-98.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Abdullah Alzawi — Brand, Digital & Marketing Design",
    template: "%s — Abdullah Alzawi",
  },
  description:
    "Abdullah Alzawi is a multidisciplinary designer in Benghazi, Libya working across brand identity, UI/UX, web development, social media and digital marketing. Software engineering graduate, University of Benghazi.",
  keywords: [
    "Abdullah Alzawi",
    "Abdulla Alzawi",
    "brand identity designer",
    "UI UX designer Libya",
    "graphic designer Benghazi",
    "digital marketing Libya",
    "social media manager Benghazi",
    "web developer Libya",
    "portfolio",
  ],
  authors: [{ name: "Abdullah Alzawi" }],
  creator: "Abdullah Alzawi",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE,
    siteName: "Abdullah Alzawi",
    title: "Abdullah Alzawi — Brand, Digital & Marketing Design",
    description:
      "Brand studios draw the logo. Product teams build the interface. Agencies run the feed. I work in all three. Benghazi, Libya.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Alzawi — Brand, Digital & Marketing Design",
    description:
      "Brand studios draw the logo. Product teams build the interface. Agencies run the feed. I work in all three.",
    creator: "@z3_vinci",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f7f4ee",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdullah Alzawi",
  alternateName: "Abdulla Muftah Abdulla Salem Alzawi",
  url: SITE,
  email: "mailto:alzawiabdulla449@gmail.com",
  telephone: "+218921604875",
  jobTitle: "Social Media & Digital Marketing Manager",
  address: { "@type": "PostalAddress", addressLocality: "Benghazi", addressCountry: "LY" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Benghazi" },
  knowsAbout: [
    "Brand Identity",
    "UI/UX Design",
    "Web Development",
    "Digital Marketing",
    "Social Media Management",
    "Graphic Design",
  ],
  sameAs: [
    "https://www.linkedin.com/in/abdullah-m-alzawi-625554355/",
    "https://www.instagram.com/ze.vinci/",
    "https://x.com/z3_vinci",
    "https://www.facebook.com/ze.vinci.2025",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a className="skip" href="#main">
          Skip to content
        </a>
        <SmoothScroll />
        <Cursor />
        <RevealObserver />
        <SurfaceSync />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
