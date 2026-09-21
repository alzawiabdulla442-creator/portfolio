# Working in this repo

Personal portfolio for Abdullah Alzawi. Next.js 15 App Router, React 19,
TypeScript, no CSS framework. `README.md` covers what the site is and how to run
it — this file covers how to work on it without breaking things.

## The one rule that matters

**Never run `npm run build` while the dev server is running.** Both write to
`.next`, and the production build overwrites the dev server's chunks. The dev
server then throws `Cannot find module './vendor-chunks/lenis.js'` on every
request and stays broken until you stop it, `rm -rf .next`, and start it again.
Deleting `.next` under a *running* server breaks it the same way. Stop the
server first, always.

## Content

Effectively all site content is in `lib/data.ts` — projects, experience,
education, capabilities, contact, languages. Page components read from it; they
rarely need editing. Two exceptions, both hand-written prose that must be kept
in sync by hand when a job or sector is added:

- the bio paragraphs in `app/about/page.tsx`
- the sector line in `app/work/page.tsx`

### Projects

`projects` is an ordered array; `index` (`"01"`, `"02"`, …) is a manual string,
so inserting a project means renumbering the ones below it. `traveler` is
exported separately, sits last on the work index, and is numbered by hand as
`projects.length + 1`.

`credit` shows on the work index beside the title and must stay short enough to
sit next to a 4rem heading without wrapping. `rights` is the longer ownership
line and shows only inside the case study. Employed or agency work carries a
`©` credit; independent work says `Freelance`.

### Engagements covering several companies

A `Strand` is one client folded into a larger engagement. Each strand owns its
own `gallery`, and `Project.own` names the tab holding the engagement's *own*
imagery — the studio's or the parent brand's. The case study tabs these apart
(`components/case-gallery.tsx`): one tab per company, each with its own kind
line, framing paragraph and images.

A project with no strands passes a single group and renders a plain grid with no
tabs. A project whose imagery all belongs to clients — Frame Studio — has
`gallery: []` and no `own`, so it gets one tab per client and nothing else.

Panels all stay in the DOM with `hidden` on the inactive ones, so every client's
alt text still ships with the page. Don't "optimise" that into rendering only
the active panel.

## Images

Source artwork is PNG exports elsewhere on disk; the repo only holds webp.
Convert with `sharp`, which is present as a transitive dependency of Next but is
not in `package.json` — a standalone script outside the project root has to
import it by absolute path (`node_modules/sharp/lib/index.js`) rather than by
name. Settings used so far:

- gallery images: max width **1600**, `withoutEnlargement`
- hero/cover: max width **1900**
- `webp({ quality: 82, effort: 6 })`
- one folder per company: `public/work/<company>/`, named `hero.webp` and
  `g1.webp`…`gN.webp`

`next/image` needs exact pixel dimensions, so every `Img` declares `w` and `h`.
**A wrong number silently distorts the layout** — after adding images, check
each declared size against the file on disk with `sharp().metadata()` and
confirm the file exists. Getting this wrong is the most likely way to ship a
broken gallery.

Accent colours and palettes are sampled from the actual artwork rather than
guessed — quantise a downscaled raster and take the most frequent saturated
colour.

## Design system

Tokens in `app/globals.css` (`--ink`, `--paper`, `--amber`, type scale, easings);
component styles in `app/ui.css`. Both are hand-written — match the surrounding
conventions rather than introducing utilities.

The site's active-state idiom is an **amber pill** with an outline scaling in on
hover (see `.nav-link`, `.csg-tab`). Reuse it rather than inventing a new one.

`RevealObserver` in `components/providers.tsx` adds `.in` to every `.rv`,
`.imgmask` and `.clipwrap` entering the viewport. Reduced motion is handled
globally in `globals.css`; smooth scroll (Lenis) and the custom cursor are off
for coarse pointers. Fonts are self-hosted via `@fontsource` — no runtime
requests.

When verifying in a browser, note that programmatic scrolling
(`scrollIntoView`, `window.scrollTo`) often leaves `.rv` elements unrevealed and
screenshots come back blank. Scroll with real wheel events instead.

## Deploying

Pushing to `main` deploys straight to Vercel production. **There is no staging
step and no review app** — a push is a publish. Ask before pushing.

The canonical origin is `lib/site.ts` (`NEXT_PUBLIC_SITE_URL` overrides it);
it feeds `metadataBase`, canonicals, Open Graph URLs, the sitemap and robots.

## Setting up on another machine

Clone the repo and `npm install` — don't copy `node_modules`, since `sharp` has
architecture-specific native binaries.

Note that `.claude/` (Claude Code's `launch.json` and skills) lives in the
**parent** folder, one level above this repo, and is not tracked here. Its dev
server entry runs `npm --prefix portfolio-site run dev`, so the preview only
works when Claude Code is opened on that parent folder, not on this repo
directly.
