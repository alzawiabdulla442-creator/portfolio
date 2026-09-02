import type { MetadataRoute } from "next";
import { projectSlugs } from "@/lib/data";

const SITE = "https://portfolio-site-two-zeta-98.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    ...projectSlugs.map((s) => ({
      url: `${SITE}/work/${s}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
