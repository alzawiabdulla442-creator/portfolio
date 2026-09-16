export type Img = { src: string; w: number; h: number; alt: string };

// A client project folded into a larger engagement, so the merged case study
// can still tell each one's story instead of flattening them into one paragraph.
// A strand owns its own imagery — the case study tabs the strands apart rather
// than pouring every client into one undifferentiated grid.
export type Strand = { name: string; kind: string; body: string; gallery?: Img[] };

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  client: string;
  // `rights` is the full ownership line, shown only on the case study.
  // `credit` is how the engagement reads on the index — it has to sit beside a
  // 4rem title without wrapping, so it stays short.
  rights?: string;
  credit?: string;
  disciplines: string[];
  categories: string[];
  summary: string;
  accent: string;
  cover: Img;
  overview?: string;
  context?: string;
  challenge?: string;
  approach?: string;
  process?: string[];
  strands?: Strand[];
  outcome?: string[];
  reflection?: string;
  palette?: { hex: string; name: string }[];
  typefaces?: { label: string; name: string }[];
  // When strands split the gallery by client, `own` labels the tab holding the
  // engagement's own imagery — the studio's or the parent brand's work.
  own?: { name: string; kind: string; body?: string };
  gallery: Img[];
};

const w = (p: string) => `/work/${p}`;

export const projects: Project[] = [
  {
    slug: "padel-gulf",
    index: "01",
    title: "Padel Gulf",
    subtitle: "Identity system and a full season of match-day campaign design",
    year: "2026",
    role: "Brand Designer · Campaign Designer",
    client: "Padel Gulf — Benghazi",
    credit: "Freelance",
    disciplines: ["Brand Identity", "Brand Guidelines", "Campaign Design", "Social Media"],
    categories: ["Branding", "Social Media"],
    accent: "#F38222",
    summary:
      "A racket-sports club rebuilt from the mark outward — corrected logo geometry, a full brand book, and the match-day campaign language that ran across an entire championship.",
    cover: { src: w("padel-gulf/hero.webp"), w: 1666, h: 937, alt: "Padel Gulf identity applied to a racket and court photograph" },
    overview:
      "Padel Gulf is a racket-sports club in Benghazi running padel, touch tennis, pickleball, mini tennis and 3v3 mini goal on one site. The work covered two halves that usually sit with two different suppliers: the identity system itself, and the week-to-week campaign design that puts it in front of an audience.",
    context:
      "The club already had a logo, but it had been drawn without consistent proportion or optical balance, and there was no document telling anyone how to use it. Every new application — a shirt, a sign, a fixture post — was a fresh negotiation.",
    challenge:
      "Fix the mark without throwing away the recognition it had already earned, then build enough system around it that a season's worth of content could be produced quickly and still look like one brand.",
    approach:
      "I retraced the logo from scratch, correcting its proportions and visual balance rather than replacing it. From the corrected mark I built out a family of variations for the situations the club actually encounters — horizontal lockups, the shield on its own, reversed versions for dark surfaces. The court-net crack became a brand pattern, which meant every piece of campaign artwork had a texture to sit on that belonged to the brand rather than to a stock library.",
    process: [
      "Retraced and refined the primary mark, correcting proportion and optical balance",
      "Built logo variations for horizontal, stacked, icon-only and reversed applications",
      "Set the palette around a single high-energy orange against black and white",
      "Developed a brand pattern derived from the court net",
      "Wrote a full brand book covering logo, clear space, colour, typography, pattern and visual tone",
      "Designed the match-day campaign system: fixtures, results, rules explainers, facility posts",
    ],
    outcome: [
      "A complete visual identity manual covering logo, colour, typography, pattern and application",
      "A logo variation set sized for signage, apparel, lanyards, billboards and social",
      "A campaign template system used across an entire championship — kick-off, semi-finals, qualifying, final and winners",
      "Sport-specific content sets for padel, touch tennis, pickleball, mini tennis and 3v3",
    ],
    reflection:
      "The interesting constraint here was speed. A brand book is only as good as the work produced under pressure the week after it ships — so the pattern, the colour and the typographic hierarchy were all chosen for how fast they could be reassembled on a match night, not for how they looked on a presentation slide.",
    palette: [
      { hex: "#F38222", name: "Court Orange" },
      { hex: "#000000", name: "Black" },
      { hex: "#FFFFFF", name: "White" },
    ],
    typefaces: [{ label: "English", name: "Anybody" }],
    gallery: [
      { src: w("padel-gulf/g1.webp"), w: 1300, h: 731, alt: "Padel Gulf visual identity manual cover" },
      { src: w("padel-gulf/g5.webp"), w: 1300, h: 731, alt: "Padel Gulf logo variation grid" },
      { src: w("padel-gulf/g6.webp"), w: 1300, h: 731, alt: "Padel Gulf brand pattern derived from the court net" },
      { src: w("padel-gulf/g2.webp"), w: 1300, h: 731, alt: "Padel Gulf championship billboard in situ" },
      { src: w("padel-gulf/g3.webp"), w: 1300, h: 731, alt: "Padel Gulf branded hoodie application" },
      { src: w("padel-gulf/g4.webp"), w: 1300, h: 731, alt: "Padel Gulf staff lanyards and access cards" },
      { src: w("padel-gulf/g7.webp"), w: 1205, h: 1507, alt: "Padel Gulf championship kick-off campaign post" },
      { src: w("padel-gulf/g13.webp"), w: 1205, h: 1507, alt: "Al-Khalij first padel tennis championship announcement" },
      { src: w("padel-gulf/g8.webp"), w: 1205, h: 1507, alt: "Championship winners campaign post" },
      { src: w("padel-gulf/g9.webp"), w: 1205, h: 1507, alt: "VIP gaming room campaign post" },
      { src: w("padel-gulf/g10.webp"), w: 1205, h: 1507, alt: "Touch tennis sport announcement post" },
      { src: w("padel-gulf/g11.webp"), w: 1205, h: 1507, alt: "Padel tennis sport announcement post" },
      { src: w("padel-gulf/g12.webp"), w: 1205, h: 1507, alt: "Just Play Padel Gulf campaign post" },
    ],
  },
  {
    slug: "geotechnica",
    index: "02",
    title: "Geotechnica",
    subtitle: "A drilling rig hidden inside a letterform",
    year: "2026",
    role: "Brand Designer",
    client: "Geotechnica — Soil Investigation & Deep Foundations",
    credit: "Freelance",
    disciplines: ["Brand Identity", "Brand Guidelines", "Visual Direction"],
    categories: ["Branding"],
    accent: "#DC1419",
    summary:
      "An engineering firm that works below ground needed a mark that showed it. The central T became a drilling rig — and the rig became the pattern, the icon and the site hoarding.",
    cover: { src: w("geotechnica/hero.webp"), w: 1664, h: 936, alt: "Geotechnica branded site hoarding at a construction site" },
    overview:
      "Geotechnica works in geotechnical engineering and deep foundation solutions — soil investigation, drilling, ground work. The identity had to read as technical and dependable at the distance of a site hoarding, and still hold together in a printed business book.",
    context:
      "Geotechnical work is invisible by definition; it happens under the building. The brand needed to make the specialism legible to clients who mostly see the finished structure, not the ground beneath it.",
    challenge:
      "Build a mark that says what the company actually does, without falling back on generic construction iconography — and extend it into a system durable enough for helmets, vests, vehicles and weather-exposed hoardings.",
    approach:
      "The central \"T\" of the wordmark is drawn as a drilling rig. That single decision carried the rest of the system: the rig silhouette became the icon, its cuttings became a particle pattern, and the repeated glyph became a texture. A single high-visibility red against black and white kept everything readable in site conditions.",
    process: [
      "Developed the wordmark with the central T built as a drilling rig",
      "Derived three pattern systems from the mark — earth particle, drilling machine and repeated logo",
      "Set a high-visibility red palette for site legibility",
      "Paired Inter for English with Almarai for Arabic across the system",
      "Extended the identity to safety helmets, hi-vis vests, fleet vehicles and site hoardings",
      "Produced a professional business book tailored to the company's expectations",
    ],
    outcome: [
      "A complete brand guide covering logo, pattern, colour, typography and visuals",
      "Primary, reversed and dark-background lockups",
      "Applied identity for PPE, fleet and site hoarding",
      "A business book giving the company a consistent, polished set of materials",
    ],
    reflection:
      "Bilingual systems are where a lot of identities quietly break. Setting the Arabic and English typography together from the start — rather than retrofitting Arabic later — kept the wordmark balanced in both directions.",
    palette: [
      { hex: "#DC1419", name: "Signal Red" },
      { hex: "#000000", name: "Black" },
      { hex: "#FFFFFF", name: "White" },
    ],
    typefaces: [
      { label: "English", name: "Inter" },
      { label: "Arabic", name: "Almarai" },
    ],
    gallery: [
      { src: w("geotechnica/g8.webp"), w: 1300, h: 731, alt: "Geotechnica primary wordmark with the drilling rig T" },
      { src: w("geotechnica/g1.webp"), w: 1300, h: 731, alt: "Geotechnica brand guide cover typography" },
      { src: w("geotechnica/g7.webp"), w: 1300, h: 731, alt: "Geotechnica brand pattern and colour system" },
      { src: w("geotechnica/g5.webp"), w: 1300, h: 731, alt: "Three Geotechnica pattern systems side by side" },
      { src: w("geotechnica/g6.webp"), w: 1300, h: 731, alt: "Geotechnica colour palette swatches" },
      { src: w("geotechnica/g2.webp"), w: 1300, h: 731, alt: "Geotechnica branded safety helmets" },
      { src: w("geotechnica/g3.webp"), w: 1300, h: 731, alt: "Geotechnica hi-vis vest application" },
      { src: w("geotechnica/g4.webp"), w: 1300, h: 731, alt: "Geotechnica branded fleet vehicle" },
    ],
  },
  {
    slug: "leyan-boutique",
    index: "03",
    title: "Leyan Boutique",
    subtitle: "Heritage dress, drawn as a contemporary mark",
    year: "2026",
    role: "Brand Designer",
    client: "Leyan Boutique — Cultural Clothing",
    credit: "Freelance",
    disciplines: ["Brand Identity", "Brand Guidelines", "Pattern Design"],
    categories: ["Branding"],
    accent: "#64329A",
    summary:
      "A complete identity for a cultural clothing brand — a visual language that carries heritage and craft without turning into costume.",
    cover: { src: w("leyan-boutique/hero.webp"), w: 1640, h: 923, alt: "Leyan Boutique identity over a photograph of an abaya" },
    overview:
      "Leyan Boutique sells cultural clothing. The identity had to hold two things at once: the heritage the garments come from, and a contemporary retail presence that works on a hang tag, a shopfront sign and a phone screen.",
    context:
      "Heritage brands tend to drift toward pastiche — ornament used as decoration rather than meaning. The brief was a visual language that reflects the brand's heritage and culture while staying distinctly modern.",
    challenge:
      "Find a single symbol that reads as both garment and gesture, and build a system minimal enough to survive the small applications retail demands.",
    approach:
      "The mark is a figure drawn inside a soft arch — a silhouette that reads as a garment, a doorway and a face depending on scale. A pair of open hands became the secondary motif, and repeated, the arch became the brand pattern that lines the guide and the packaging. A single deep violet did the work of an entire palette.",
    process: [
      "Developed the primary mark and its Arabic and Latin lockups",
      "Built logo variations, clear-space rules and reversed treatments",
      "Designed a repeating brand pattern from the arch motif",
      "Set Chiron Sung HK for English against KufiStandardGK for Arabic",
      "Applied the identity to hang tags, hangers, garment care, signage and campaign imagery",
    ],
    outcome: [
      "A full brand guide covering logo, pattern, colour, typography and visual samples",
      "Retail applications: hang tags, hangers, shopfront signage",
      "Bilingual campaign artwork built on the identity system",
    ],
    palette: [
      { hex: "#64329A", name: "Deep Violet" },
      { hex: "#000000", name: "Black" },
      { hex: "#FFFFFF", name: "White" },
    ],
    typefaces: [
      { label: "English", name: "Chiron Sung HK" },
      { label: "Arabic", name: "KufiStandardGK" },
    ],
    gallery: [
      { src: w("leyan-boutique/g7.webp"), w: 1300, h: 732, alt: "Leyan Boutique primary logo construction" },
      { src: w("leyan-boutique/g5.webp"), w: 1300, h: 732, alt: "Leyan Boutique brand pattern and hands motif" },
      { src: w("leyan-boutique/g6.webp"), w: 1300, h: 732, alt: "Leyan Boutique colour palette" },
      { src: w("leyan-boutique/g2.webp"), w: 1300, h: 732, alt: "Leyan Boutique hang tag" },
      { src: w("leyan-boutique/g4.webp"), w: 1300, h: 732, alt: "Leyan Boutique branded hanger and garment" },
      { src: w("leyan-boutique/g3.webp"), w: 1300, h: 732, alt: "Leyan Boutique shopfront signage mockup" },
      { src: w("leyan-boutique/g1.webp"), w: 1300, h: 732, alt: "Leyan Boutique bilingual campaign artwork" },
    ],
  },
  {
    slug: "sala-sony",
    index: "04",
    title: "Sala Sony",
    subtitle: "A gaming hall that had to look like the thing it sells",
    year: "2026",
    role: "Brand Designer",
    client: "Sala Sony — PlayStation Hall",
    credit: "Freelance",
    disciplines: ["Brand Identity", "Brand Guidelines", "App Icon"],
    categories: ["Branding"],
    accent: "#FE010C",
    summary:
      "PlayStation culture rebuilt as a brand system — four hard colours, a plate-shaped logo, and a pattern made of the shapes everyone already recognises.",
    cover: { src: w("sala-sony/hero.webp"), w: 1900, h: 1069, alt: "Sala Sony illuminated storefront sign at night" },
    overview:
      "Sala Sony is an entertainment destination where gaming, relaxation and social experiences come together — PlayStation gaming, billiards and VIP lounges under one roof.",
    context:
      "The brand is competing for attention in a category built entirely on recognisable visual codes. Ignoring those codes would make it invisible; copying them would make it generic.",
    challenge:
      "Build something that reads instantly as gaming culture but still functions as an owned identity — legible on an illuminated storefront, an app icon and a phone-sized post.",
    approach:
      "The logo is set inside a controller-plate frame, with the geometric shapes stacked as colour bars beside the Arabic wordmark. Those four colours became the palette; stacked and repeated, they became the pattern. Changa carries both Arabic and English so the bilingual voice stays in one family.",
    process: [
      "Developed the primary mark as a bilingual plate lockup",
      "Built an app icon variant that survives at 60px",
      "Set a four-colour palette against black and white",
      "Designed a stacked colour-bar brand pattern",
      "Applied the identity to storefront signage and social artwork",
    ],
    outcome: [
      "A complete brand guide covering logo, colour, typography, pattern and visuals",
      "Primary, reversed and dark-background lockups",
      "App icon and storefront signage applications",
    ],
    palette: [
      { hex: "#FE010C", name: "Red" },
      { hex: "#FDB900", name: "Amber" },
      { hex: "#05DCDE", name: "Cyan" },
      { hex: "#0F9FFF", name: "Blue" },
      { hex: "#000000", name: "Black" },
    ],
    typefaces: [{ label: "Arabic & English", name: "Changa" }],
    gallery: [
      { src: w("sala-sony/g7.webp"), w: 1300, h: 732, alt: "Sala Sony primary logo on black" },
      { src: w("sala-sony/g1.webp"), w: 1300, h: 732, alt: "Sala Sony app icon in context on a phone home screen" },
      { src: w("sala-sony/g2.webp"), w: 1300, h: 732, alt: "Sala Sony app icon variants" },
      { src: w("sala-sony/g3.webp"), w: 1300, h: 732, alt: "Sala Sony colour palette swatches" },
      { src: w("sala-sony/g4.webp"), w: 1300, h: 732, alt: "Sala Sony brand typography specimen in Changa" },
      { src: w("sala-sony/g5.webp"), w: 1300, h: 732, alt: "Sala Sony stacked colour-bar brand pattern" },
      { src: w("sala-sony/g6.webp"), w: 1300, h: 731, alt: "Sala Sony social visual samples" },
    ],
  },
  {
    slug: "senwan-gardens",
    index: "05",
    title: "Senwan Gardens",
    subtitle: "Selling a place that doesn't exist yet",
    year: "2026",
    role: "Social Media & Digital Marketing Manager",
    client: "Sonwan Holding Group — Real Estate Investment",
    credit: "Freelance",
    disciplines: ["Digital Marketing", "Social Media", "Content Planning", "Campaign Coordination"],
    categories: ["Digital Marketing", "Social Media"],
    accent: "#1F4D3D",
    summary:
      "A residential development marketed one component at a time — villas, townhouses, apartments, retail, school, club house — as a single, patient content system.",
    cover: { src: w("senwan-gardens/hero.webp"), w: 1255, h: 1569, alt: "Senwan Gardens club house and central gardens render" },
    overview:
      "Senwan Gardens is a residential development under Sonwan Holding Group. As Social Media & Digital Marketing Manager I prepared and coordinated the content plans and campaign activity for the development alongside the group's other brands.",
    context:
      "Off-plan real estate is sold before it exists. The only material available is architectural rendering, which means the content system has to carry all the meaning — pacing, hierarchy, and the sense that this is one place rather than a folder of pictures.",
    challenge:
      "Turn a set of renders into a campaign that builds a place in someone's head, and keep it visually distinct from the group's other brands running on the same calendar.",
    approach:
      "The development was broken into components and released as a sequence — Villas, Townhouse, Apartments, Retail Plaza, Office, School, Club House & Central Gardens, Nature Trail. Each post uses the same restrained typographic frame so the renders do the talking, with a deep green and a fixed lockup holding the series together.",
    process: [
      "Prepared and coordinated the content plan across the development's components",
      "Set a consistent typographic frame so every render read as part of one place",
      "Coordinated with designers, photographers and video production to execute the content",
      "Maintained the development's identity separately from the group's other brands on the same calendar",
    ],
    outcome: [
      "A component-by-component campaign series covering residential, retail, civic and landscape",
      "A repeatable post frame that keeps a long release schedule coherent",
      "Supporting campaign work for the group's wider real-estate and exhibition activity",
    ],
    gallery: [
      { src: w("senwan-gardens/g2.webp"), w: 1255, h: 1569, alt: "Senwan Gardens villas render" },
      { src: w("senwan-gardens/g3.webp"), w: 1255, h: 1569, alt: "Senwan Gardens townhouse render" },
      { src: w("senwan-gardens/g4.webp"), w: 1255, h: 1569, alt: "Senwan Gardens apartments render" },
      { src: w("senwan-gardens/g5.webp"), w: 1255, h: 1569, alt: "Senwan Gardens retail plaza render" },
      { src: w("senwan-gardens/g6.webp"), w: 1255, h: 1569, alt: "Senwan Gardens office render" },
      { src: w("senwan-gardens/g7.webp"), w: 1255, h: 1569, alt: "Senwan Gardens school render" },
      { src: w("senwan-gardens/g1.webp"), w: 1255, h: 1569, alt: "Senwan Gardens nature trail render" },
      { src: w("senwan-gardens/g8.webp"), w: 1300, h: 1293, alt: "Sonwan Holding Group exhibition campaign artwork" },
    ],
  },
  {
    slug: "geant-libya",
    index: "06",
    title: "Géant Libya",
    subtitle: "Retail, at retail speed",
    year: "2026",
    role: "Social Media & Digital Marketing Manager",
    client: "Sonwan Holding Group — Géant Libya",
    credit: "Freelance",
    disciplines: ["Digital Marketing", "Social Media", "Content Planning"],
    categories: ["Digital Marketing", "Social Media"],
    accent: "#E4032E",
    summary:
      "Hypermarket content run on a retail calendar — clearance, seasonal, countdown — where the brand has to stay recognisable while the message changes every week.",
    cover: { src: w("geant-libya/hero.webp"), w: 1687, h: 1687, alt: "Géant Libya clearance campaign artwork" },
    overview:
      "Géant Libya is one of the hypermarket brands whose social presence I supervise under Sonwan Holding Group, alongside Ghout Al-Sultan, Sonwan Academy, 5.1.1 Tactical Benghazi and the group's other companies.",
    context:
      "Retail social is the opposite of a brand campaign. The offer changes constantly, the deadlines are short, and the only thing holding it together is the system underneath.",
    challenge:
      "Keep a high-frequency promotional calendar visually consistent, in Arabic, across price-led, seasonal and brand-led posts.",
    approach:
      "A fixed red-and-white frame with a repeating geometric motif carries every format. Promotional posts lead with price and product cut-outs; seasonal posts swap to illustration and calligraphy while keeping the same frame, so the feed stays recognisably one brand across very different messages.",
    process: [
      "Prepared content plans and promotional calendars for the brand",
      "Coordinated with designers and photographers to execute campaign artwork",
      "Managed multiple group brands in parallel while keeping each identity distinct",
    ],
    outcome: [
      "Price-led clearance and promotional campaign artwork",
      "Seasonal and celebratory campaign sets",
      "Countdown and store-category content series",
    ],
    gallery: [
      { src: w("geant-libya/g1.webp"), w: 1300, h: 1300, alt: "Géant Libya general markets category post" },
      { src: w("geant-libya/g2.webp"), w: 1300, h: 1300, alt: "Géant Libya hypermarket category post" },
      { src: w("geant-libya/g3.webp"), w: 1300, h: 683, alt: "Géant Libya countdown campaign banner" },
      { src: w("geant-libya/g4.webp"), w: 1300, h: 1300, alt: "Géant Libya seasonal greeting artwork" },
      { src: w("ghout-al-sultan/hero.webp"), w: 1687, h: 1687, alt: "Ghout Al-Sultan retail point campaign artwork" },
    ],
  },
  {
    slug: "frame-agency",
    index: "07",
    title: "Frame Agency",
    subtitle: "A screen company and a dental centre, in the same week",
    year: "2026",
    role: "Graphic Designer",
    client: "Frame Agency — Benghazi",
    rights: "All rights reserved to Frame Agency",
    credit: "© Frame Agency",
    disciplines: ["Campaign Design", "Social Media", "Graphic Design"],
    categories: ["Graphic Design", "Social Media"],
    accent: "#9050F0",
    summary:
      "Client campaign design at a Benghazi studio — an advertising company that sells LED screens, and a dental centre that sells calm. Two systems built far enough apart that neither leaks into the other.",
    cover: { src: w("united-frames/hero.webp"), w: 1080, h: 1350, alt: "United Frames campaign post imagining its screens as an 80s billboard" },
    overview:
      "Frame Agency is a studio in Benghazi; this is the client work I designed there. Two of the accounts can be shown: United Frames, which builds, rents and maintains LED advertising screens, and Alasri, a dental and oral surgery centre. All of it is campaign design — work that has to land in a feed, in Arabic, and still read as the brand it belongs to.",
    context:
      "Agency work means holding unrelated audiences in your head on the same calendar. United Frames sells to a business owner deciding where an advertising budget goes. Alasri talks to a family deciding where to take a child with toothache. Nothing about the two should look alike.",
    challenge:
      "Build two campaign systems that stay recognisable week to week and stay completely distinct from each other — without either drifting into the generic Arabic social template they sit next to in the feed.",
    approach:
      "In both cases the system came before the posts. For United Frames the angled panel from the brand mark became a drifting background motif, the ground went to near-black with one saturated accent per series, and every headline was set with the kashida stretched so the Arabic carries as display type rather than as caption. For Alasri the same discipline points the other way: organic shapes cut from the brand blue, a tooth silhouette that recurs without ever being explained, and enough cream space around it that a clinic still feels like a clinic.",
    process: [
      "Built a repeatable post frame per client, then produced against it",
      "Set Arabic display typography with stretched kashida so headlines carry as image, not caption",
      "Composited product, architectural and 3D imagery into each scene",
      "Designed multi-slide carousels — an educational sequence and a three-step purchase explainer",
      "Adapted both systems to national occasions without breaking either frame",
    ],
    strands: [
      {
        name: "United Frames",
        kind: "LED advertising screens — 2026",
        body:
          "A company whose product is a screen has a particular problem: its own advertising has to prove the thing it sells. The system answers by staging the screens in place — on a tower block, on a minaret, over a shop counter, inside a clinic reception — so each post is a demonstration rather than a claim. Around that, a violet-on-black frame with the brand's angled panel drifting through the background, and two carousels doing the persuasion: four facts arguing that a screen is a medium and not a cost, and a three-step explainer that ends with leaving the rest to them. The strongest piece in the set is the one selling nothing at all — the company's own screens reimagined as an 80s billboard, painted with period Libyan soft-drink bottles.",
        gallery: [
          { src: w("united-frames/g1.webp"), w: 1080, h: 1350, alt: "United Frames carousel cover — four facts that change how you see screens" },
          { src: w("united-frames/g2.webp"), w: 1080, h: 1350, alt: "United Frames post arguing a screen is a medium rather than a cost" },
          { src: w("united-frames/g3.webp"), w: 1080, h: 1350, alt: "United Frames post about changing screen content, shown on a roadside billboard" },
          { src: w("united-frames/g4.webp"), w: 1080, h: 1350, alt: "United Frames long-term investment post with a screen mounted on an office tower" },
          { src: w("united-frames/g5.webp"), w: 1080, h: 1350, alt: "United Frames maintenance post showing an LED panel being serviced" },
          { src: w("united-frames/g6.webp"), w: 1080, h: 1350, alt: "United Frames carousel closing slide with a save-the-post prompt" },
          { src: w("united-frames/g7.webp"), w: 1080, h: 1350, alt: "United Frames carousel cover — buying your own display screen in three steps" },
          { src: w("united-frames/g8.webp"), w: 1080, h: 1350, alt: "United Frames step one — take our number, shown on a vintage mobile phone" },
          { src: w("united-frames/g9.webp"), w: 1080, h: 1350, alt: "United Frames step two — a site visit for location and measurements" },
          { src: w("united-frames/g10.webp"), w: 1080, h: 1350, alt: "United Frames step three — leave the rest to us, shown on a glass facade" },
          { src: w("united-frames/g11.webp"), w: 1080, h: 1350, alt: "United Frames screens installed in a clinic reception" },
          { src: w("united-frames/g12.webp"), w: 1080, h: 1350, alt: "United Frames video wall post asking which panel completes the screen" },
          { src: w("united-frames/g13.webp"), w: 1080, h: 1350, alt: "United Frames LED reception counter turned into advertising space" },
          { src: w("united-frames/g14.webp"), w: 1080, h: 1350, alt: "United Frames Martyr's Day post with archive photography on a minaret screen" },
        ],
      },
      {
        name: "Alasri",
        kind: "Dental centre — 2026",
        body:
          "Dentistry advertises to people who would rather not think about dentistry, so the system is built to lower the temperature. A soft blue and cream ground, organic shapes borrowed from the curve of the brand's tooth mark, and a lot of air. The content moves between registers without changing the frame — children's dentistry shot warm and playful, late-night emergency hours shot at the actual building after dark, a Friday greeting, a Martyr's Day piece in sepia. The mark sits in the same corner every time, which is most of what makes a small feed feel established.",
        gallery: [
          { src: w("alasri/g1.webp"), w: 1081, h: 1351, alt: "Alasri children's dentistry campaign post" },
          { src: w("alasri/g2.webp"), w: 1081, h: 1351, alt: "Alasri late-night emergency hours post shot at the clinic building" },
          { src: w("alasri/g3.webp"), w: 1081, h: 1351, alt: "Alasri Friday greeting post" },
          { src: w("alasri/g4.webp"), w: 1081, h: 1351, alt: "Alasri Martyr's Day post honouring Omar Al-Mukhtar" },
        ],
      },
    ],
    outcome: [
      "A campaign system for United Frames spanning education, sales explainer, in-situ product staging and national occasions",
      "Two multi-slide carousels built to be read in sequence",
      "A calm, family-facing system for Alasri across service, hours, greeting and occasion posts",
      "Arabic display typesetting across both, with the headline treated as the primary image element",
    ],
    reflection:
      "The two accounts ran close enough together that the discipline was in the restraint, not the ideas. It would have been easy to let the screen company's contrast and the clinic's softness meet somewhere in the middle. Keeping them apart — same hand, no shared reflexes — was the actual job.",
    gallery: [],
  },
  {
    slug: "libyan-elite",
    index: "08",
    title: "Libyan Elite",
    subtitle: "Infrastructure, sold two ways",
    year: "2026",
    role: "Graphic Designer",
    client: "Libyan Elite Technical Solutions — Benghazi",
    credit: "Freelance",
    disciplines: ["Campaign Design", "Social Media", "Graphic Design"],
    categories: ["Graphic Design", "Social Media"],
    accent: "#B00020",
    summary:
      "A technical group with brands across fibre, hosting, broadcast and radio — and LINK, the internet company underneath it that customers actually buy from. One crimson system for the group, a separate navy one for the network, and a lockup that keeps them related.",
    cover: { src: w("libyan-elite/hero.webp"), w: 1900, h: 1344, alt: "Libyan Elite campaign artwork announcing network coverage across 52 cities" },
    overview:
      "Libyan Elite Technical Solutions sits above a set of companies — LINK Communication, LINK Plus, iMagine, ServerLibya, imagine 101.1, LibyaPress.tv and LibyaFlix. The freelance engagement covered campaign design for the group itself and for LINK, its internet provider.",
    context:
      "The group sells what nobody sees: fibre in the ground, servers in a rack, coverage on a map. Its audience is institutional — partners, sponsors, business clients. LINK's audience is the household or the office choosing who to buy internet from this month. The same infrastructure, two completely different arguments.",
    challenge:
      "Give the parent a presence that reads as scale and reliability, give LINK one that reads as speed and offer, and keep the family resemblance visible without letting the two become interchangeable.",
    approach:
      "The group takes crimson — a deep red gradient, fibre-optic and isometric imagery, and a fixed strip of subsidiary marks along the bottom of every post, which is the cheapest and clearest way to show that a group is a group. LINK takes deep navy and electric blue, with real product in the frame: the dish on the mast, the tower network, the card sitting inside banking apps people already have. One device ties them — a Powered By Libyan Elite lockup in the corner of every LINK post — so the endorsement travels without the crimson having to.",
    process: [
      "Set a crimson gradient system for the group, with a permanent subsidiary logo strip",
      "Built a separate navy system for LINK, with product and 3D staged inside the frame",
      "Designed the Powered By Libyan Elite endorsement lockup carried across LINK's posts",
      "Set Arabic headlines with stretched kashida so numbers and claims hold at feed size",
      "Produced proof-led posts — coverage, partnership, sponsorship, location and payment reach",
    ],
    strands: [
      {
        name: "LINK Communication",
        kind: "Internet provider — 2026",
        body:
          "LINK is the part of the group a customer actually signs up to, so its posts argue with evidence rather than adjectives. The network is drawn as an isometric constellation of towers before any claim about speed is made; the switching offer leads with the hardware on the mast and a phone number set large enough to dial from a moving thumb; the prepaid card is shown living inside the banking apps people already have, with the bank marks laid out as a grid of proof. Deep navy keeps it clear of the group's crimson, and the endorsement lockup in the corner does the rest.",
        gallery: [
          { src: w("link/g1.webp"), w: 1600, h: 1236, alt: "LINK Communication post showing its tower network as an isometric constellation" },
          { src: w("link/g2.webp"), w: 1600, h: 1236, alt: "LINK Communication switching offer post with dish hardware mounted on a mast" },
          { src: w("link/g3.webp"), w: 1600, h: 1236, alt: "LINK prepaid card post showing it available inside Libyan banking apps" },
          { src: w("link/g4.webp"), w: 1600, h: 1236, alt: "LINK Communication brand post set against a government headquarters building" },
        ],
      },
    ],
    outcome: [
      "A crimson campaign system for the group covering sponsorship, coverage, partnership and facility announcements",
      "A navy campaign system for LINK covering network, offer, payment and institutional posts",
      "An endorsement lockup connecting every LINK post back to the group",
      "Formats produced at both feed and print scale, including an A4-resolution coverage piece",
    ],
    reflection:
      "Sponsorship and coverage posts are usually where a system quietly dies — partner logos arrive at different sizes, in different colours, and the layout bends to accommodate them. Fixing the subsidiary strip and the partner card as permanent, sized components meant new marks could arrive without the design being renegotiated each time.",
    palette: [
      { hex: "#B00020", name: "Elite Crimson" },
      { hex: "#001080", name: "LINK Navy" },
      { hex: "#FFFFFF", name: "White" },
    ],
    own: {
      name: "Libyan Elite",
      kind: "Group brand — 2026",
      body:
        "The group's own posts do the institutional work — sponsorship, coverage, partnerships, and the buildings behind them — with the subsidiary strip fixed along the bottom of every frame so the scale is stated before the claim is.",
    },
    gallery: [
      { src: w("libyan-elite/g1.webp"), w: 1594, h: 1461, alt: "Libyan Elite post announcing its technical sponsorship of the Benghazi International Construction Exhibition" },
      { src: w("libyan-elite/g2.webp"), w: 1080, h: 764, alt: "Libyan Elite business connectivity post with an isometric workspace forming a network symbol" },
      { src: w("libyan-elite/g3.webp"), w: 1080, h: 764, alt: "Libyan Elite post announcing LINK's presence inside Zaho Tower in Benghazi" },
    ],
  },
  {
    slug: "artisans",
    index: "09",
    title: "Artisans Digital Agency",
    subtitle: "Agency voice, and the client work underneath it",
    year: "2023 — 2026",
    role: "UI/UX Designer · Web Developer · Graphic Designer",
    client: "Artisans Digital Agency — Benghazi",
    rights: "All rights reserved to Artisans Agency",
    credit: "© Artisans Agency",
    disciplines: ["UI/UX Design", "Web Development", "Graphic Design", "Digital Marketing"],
    categories: ["UI/UX", "Web Development", "Graphic Design", "Digital Marketing"],
    accent: "#D9463C",
    summary:
      "Two and a half years across interface design, web development and graphic design — the agency's own voice, which had to be sharper than anything it shipped for clients, and the client campaigns that ran underneath it.",
    cover: { src: w("artisans/hero.webp"), w: 1275, h: 1275, alt: "Artisans Digital Agency brand campaign visual" },
    overview:
      "I joined Artisans on a three-month internship and stayed on full-time. The work moved between UI/UX design, web design and development, and graphic design — often on the same project, and often for clients whose work was confidential. Two of those clients can be shown here: Baitna, a real-estate platform, and Slinger Swap, a game-trading service.",
    context:
      "A small agency doesn't have the luxury of narrow roles. The same person who designs the interface frequently builds it and then designs the campaign that launches it.",
    challenge:
      "Move between disciplines without the quality dropping at the seams — and keep the agency's own presence credible while doing it.",
    approach:
      "Working across the whole chain turned out to be the advantage rather than the compromise. Knowing what the front end would actually do changed how I drew the interface; knowing the interface changed how I designed the campaign around it. I also relied heavily on research and modern AI tooling to compress the parts of the work that don't need a designer's judgement.",
    process: [
      "Designed digital interfaces and experiences for web and mobile application projects",
      "Collaborated with cross-functional teams through design and development phases",
      "Worked on confidential client projects requiring research, adaptability and problem solving",
      "Used Figma, Affinity and WordPress across design and build",
      "Explored digital and AI tooling to improve workflow and project outcomes",
    ],
    strands: [
      {
        name: "Baitna",
        kind: "Property platform — 2025",
        body:
          "A real-estate platform with apps on both stores, and three audiences who open it for different reasons: owners need listing to look easy, agencies need it to look like growth, buyers need the inventory to look real. A marketplace only works if both sides show up, so one blue-to-cyan ground and one typographic frame carry all three audiences in Arabic. What changes between them is the evidence — 3D property iconography for owners, workplace illustration for agencies, and real interface screens for buyers.",
        gallery: [
          { src: w("baitna/hero.webp"), w: 1900, h: 997, alt: "Baitna property app marketing visual with app store links" },
          { src: w("baitna/g1.webp"), w: 1300, h: 1300, alt: "Baitna campaign post aimed at property owners" },
          { src: w("baitna/g5.webp"), w: 1300, h: 1300, alt: "Baitna campaign post aimed at home seekers" },
          { src: w("baitna/g2.webp"), w: 1300, h: 731, alt: "Baitna post covering what matters when buying property" },
          { src: w("baitna/g3.webp"), w: 1300, h: 731, alt: "Baitna listing and management interface visual" },
          { src: w("baitna/g4.webp"), w: 1300, h: 731, alt: "Baitna presence and listing quality visual" },
        ],
      },
      {
        name: "Slinger Swap",
        kind: "Game trading — 2025",
        body:
          "A platform that formalises something players already did informally: swapping physical discs through group chats and comment threads. The campaign's job was to point at the existing behaviour rather than explain a new mechanic. Real catalogue covers do the recognition work, a magenta-into-deep-navy gradient does the atmosphere, and the copy is written in the register of the audience — the question a player would actually ask before they'd consider trading.",
        gallery: [
          { src: w("slinger-swap/hero.webp"), w: 1900, h: 1069, alt: "Slinger Swap game trading campaign visual" },
          { src: w("slinger-swap/g1.webp"), w: 1300, h: 734, alt: "Slinger Swap console and title campaign visual" },
          { src: w("slinger-swap/g2.webp"), w: 1300, h: 731, alt: "Slinger Swap title-led promotional artwork" },
          { src: w("slinger-swap/g3.webp"), w: 1300, h: 731, alt: "Slinger Swap library trading campaign visual" },
        ],
      },
    ],
    outcome: [
      "Client work spanning engineering, dental supply, finance, education and e-commerce",
      "Web and mobile interface design carried through to build",
      "Agency brand and campaign material",
      "Audience-segmented campaign sets for Baitna's owners, agencies and buyers",
      "App-store acquisition creative built on real interface screens",
      "Title-led campaign artwork for Slinger Swap using real catalogue covers",
    ],
    reflection:
      "Three months was supposed to be the whole thing. Staying meant learning the parts of the process I'd otherwise only have seen from one side — which is most of why I can now take a project from mark to interface to campaign without handing it over.",
    own: {
      name: "Artisans",
      kind: "Agency brand and client work — 2023 — 2026",
      body:
        "The agency's own presence, which had to be sharper than anything it shipped, alongside the client work that can be shown — engineering, financing, higher education and dental supply, across identity, interface and campaign.",
    },
    gallery: [
      { src: w("artisans/g6.webp"), w: 1300, h: 1300, alt: "Artisans agency brand post" },
      { src: w("artisans/g5.webp"), w: 1275, h: 1275, alt: "APEX engineering stationery and identity application" },
      { src: w("artisans/g1.webp"), w: 1266, h: 1266, alt: "Nama Tamweel financing website visual" },
      { src: w("artisans/g2.webp"), w: 1265, h: 1265, alt: "Financing platform interface visual" },
      { src: w("artisans/g3.webp"), w: 1267, h: 1267, alt: "College of Graduate Studies website visual" },
      { src: w("artisans/g4.webp"), w: 1266, h: 1266, alt: "Sadeem Dental Co. application visual" },
    ],
  },
];

export const traveler = {
  slug: "traveler",
  index: "10",
  title: "Traveler",
  year: "2025",
  role: "Developer",
  client: "University of Benghazi — Graduation Project",
  categories: ["Web Development"],
  summary:
    "A trip-planning web application that helps users plan travel inside or outside their city or country — defining destinations, organising budgets and luggage, and surfacing recommendations for well-known places and landmarks at the destination.",
};

export const capabilities = [
  {
    id: "01",
    title: "Brand",
    items: [
      "Brand Identity",
      "Logo Design & Refinement",
      "Brand Guidelines",
      "Brand Patterns & Systems",
      "Visual Direction",
    ],
  },
  {
    id: "02",
    title: "Digital",
    items: ["UI/UX Design", "Web Design", "Web Development", "WordPress"],
  },
  {
    id: "03",
    title: "Marketing",
    items: [
      "Social Media Management",
      "Digital Marketing",
      "Content Planning",
      "Campaign Coordination",
    ],
  },
  {
    id: "04",
    title: "Craft",
    items: ["Graphic Design", "Videography", "Video Editing", "AI Tools & Digital Research"],
  },
];

export const tools = ["Figma", "Affinity", "WordPress", "Claude AI"];

export const experience = [
  {
    from: "2026",
    to: "Present",
    role: "Graphic Designer",
    org: "Frame Agency",
    place: "Benghazi, Libya",
    body: "Campaign and graphic design for the studio's client accounts — among them United Frames, an LED advertising screen company, and Alasri, a dental and oral surgery centre. Building a repeatable campaign system per client and producing against it week to week: Arabic display typesetting, multi-slide carousels, in-situ product staging and national occasion content.",
    tags: ["Graphic Design", "Campaign Design", "Social Media"],
  },
  {
    from: "2025",
    to: "Present",
    role: "Social Media & Digital Marketing Manager",
    org: "Sonwan Holding Group",
    place: "Benghazi, Libya",
    body: "Managing the digital presence and social media content activity for several companies and brands under the group — Géant Libya, Sonwan Academy, 5.1.1 Tactical Benghazi, Sonwan Real Estate Investment, Ghout Al-Sultan and others. Preparing and coordinating content plans, campaigns and digital communication activity; coordinating with designers, photographers and video production teams; running multiple brands in parallel while keeping each identity and objective distinct.",
    tags: ["Digital Marketing", "Social Media", "Content Planning", "Campaign Coordination"],
  },
  {
    from: "2023",
    to: "2026",
    role: "UI/UX Designer · Web Developer · Graphic Designer",
    org: "Artisans Digital Agency",
    place: "Benghazi, Libya",
    body: "Joined on a three-month internship, then continued full-time. Worked across UI/UX design, web design and development, and graphic design — designing digital interfaces for web and mobile projects, collaborating with cross-functional teams through design and build, and working on confidential client projects that demanded research, adaptability and problem solving. Tooling: Figma, Affinity and WordPress.",
    tags: ["UI/UX", "Web Development", "Graphic Design"],
  },
];

export const education = {
  from: "2025",
  degree: "Bachelor of Information Technology — Software Engineering",
  org: "University of Benghazi",
  place: "Benghazi, Libya",
  body: "Graduation project: Traveler, a trip-planning web application for organising destinations, budgets and luggage, with recommendations for landmarks at the destination.",
};

export const contact = {
  email: "alzawiabdulla442@gmail.com",
  phone: "+218 92 160 4875",
  phoneHref: "+218921604875",
  location: "Benghazi, Libya",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/ze.vinci/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abdullah-m-alzawi-625554355/" },
    { label: "X", href: "https://x.com/z3_vinci" },
    { label: "Facebook", href: "https://www.facebook.com/ze.vinci.2025" },
  ],
};

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent" },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const projectSlugs = projects.map((p) => p.slug);
