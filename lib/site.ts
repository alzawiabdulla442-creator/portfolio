/**
 * Canonical origin for the site. Used for metadataBase, Open Graph image URLs,
 * canonical links, the sitemap and robots.txt.
 *
 * Set NEXT_PUBLIC_SITE_URL in the Vercel project (or a .env file) to override —
 * that way moving to a real domain later means changing one setting, not code.
 */
export const SITE = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://abdullah-alzawi.vercel.app"
).replace(/\/$/, "");
