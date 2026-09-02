# Abdullah Alzawi — Portfolio

Personal portfolio site. Next.js 15 (App Router) + TypeScript, no CSS framework —
a hand-built design system in `app/globals.css` and `app/ui.css`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

## Deploy to Vercel

**Option A — CLI (fastest)**

```bash
npm i -g vercel
vercel            # preview
vercel --prod     # production
```

**Option B — Git**

Push this folder to a GitHub/GitLab repo, then import it at
[vercel.com/new](https://vercel.com/new). Vercel auto-detects Next.js; no settings needed.

**Option C — Drag and drop**

Zip this folder (without `node_modules` and `.next`) and drop it on
[vercel.com/new](https://vercel.com/new).

After the first deploy, update the `SITE` constant in `app/layout.tsx`,
`app/sitemap.ts` and `app/robots.ts` to the live domain so canonical URLs,
Open Graph images and the sitemap point at the right place.

## Structure

```
app/
  layout.tsx           root layout, metadata, JSON-LD person schema
  page.tsx             homepage
  globals.css          design tokens, type scale, motion primitives
  ui.css               component styles
  work/page.tsx        project index
  work/[slug]/page.tsx case study template (static per project)
  about/, contact/     secondary pages
  icon.tsx             generated favicon (brand mark)
  opengraph-image.tsx  generated social share image
  sitemap.ts robots.ts
components/
  nav.tsx              header + mobile menu
  sections.tsx         hero, positioning, capabilities, experience, about, brands, contact
  work-index.tsx       hover-preview project index (desktop) + cards (mobile)
  mark.tsx             brand wordmark and glyph as inline SVG
  pattern.tsx          brand pattern
  providers.tsx        smooth scroll (Lenis), custom cursor, scroll reveals
  transition.tsx       page fade + scroll progress
  bits.tsx             shared small pieces
lib/
  data.ts              ALL site content — projects, experience, capabilities, contact
public/
  work/<project>/*.webp   project imagery
  brands/*.svg            client logo marks
```

## Editing content

Almost everything lives in `lib/data.ts`. To add a project, append to the
`projects` array, drop images in `public/work/<slug>/`, and fill in the
`cover` + `gallery` entries with their real pixel dimensions (required by
`next/image`). The case study page and sitemap pick it up automatically.

## Design system

| Token | Value | Use |
| --- | --- | --- |
| `--ink` | `#0A0A0A` | primary background |
| `--paper` | `#F4F1EA` | primary text / inverted sections |
| `--amber` | `#FFA600` | accent — taken from the personal logo |
| `--font-sans` | Fustat Variable | everything |
| `--font-serif` | Instrument Serif | italic editorial accents |

Fonts are self-hosted via `@fontsource` — no external requests at runtime.

Motion respects `prefers-reduced-motion`; smooth scroll and the custom cursor
are disabled on touch/coarse pointers.
