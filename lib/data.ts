export type Img = { src: string; w: number; h: number; alt: string };

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  client: string;
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
  outcome?: string[];
  reflection?: string;
  palette?: { hex: string; name: string }[];
  typefaces?: { label: string; name: string }[];
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
    disciplines: ["Brand Identity", "Brand Guidelines", "Campaign Design", "Social Media"],
    categories: ["Branding", "Social Media"],
    accent: "#F38222",
    summary:
      "A racket-sports club rebuilt from the mark outward — corrected logo geometry, a full brand book, and the match-day campaign language that ran across an entire championship.",
    cover: { src: w("padel-gulf/hero.webp"), w: 1111, h: 625, alt: "Padel Gulf identity applied to a racket and court photograph" },
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
      { src: w("padel-gulf/g1.webp"), w: 860, h: 484, alt: "Padel Gulf visual identity manual cover" },
      { src: w("padel-gulf/g5.webp"), w: 860, h: 484, alt: "Padel Gulf logo variation grid" },
      { src: w("padel-gulf/g6.webp"), w: 860, h: 484, alt: "Padel Gulf brand pattern derived from the court net" },
      { src: w("padel-gulf/g2.webp"), w: 860, h: 484, alt: "Padel Gulf championship billboard in situ" },
      { src: w("padel-gulf/g3.webp"), w: 860, h: 484, alt: "Padel Gulf branded hoodie application" },
      { src: w("padel-gulf/g4.webp"), w: 860, h: 484, alt: "Padel Gulf staff lanyards and access cards" },
      { src: w("padel-gulf/g7.webp"), w: 804, h: 1005, alt: "Padel Gulf championship kick-off campaign post" },
      { src: w("padel-gulf/g13.webp"), w: 804, h: 1005, alt: "Al-Khalij first padel tennis championship announcement" },
      { src: w("padel-gulf/g8.webp"), w: 804, h: 1005, alt: "Championship winners campaign post" },
      { src: w("padel-gulf/g9.webp"), w: 804, h: 1005, alt: "VIP gaming room campaign post" },
      { src: w("padel-gulf/g10.webp"), w: 804, h: 1005, alt: "Touch tennis sport announcement post" },
      { src: w("padel-gulf/g11.webp"), w: 804, h: 1005, alt: "Padel tennis sport announcement post" },
      { src: w("padel-gulf/g12.webp"), w: 804, h: 1005, alt: "Just Play Padel Gulf campaign post" },
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
    disciplines: ["Brand Identity", "Brand Guidelines", "Visual Direction"],
    categories: ["Branding"],
    accent: "#DC1419",
    summary:
      "An engineering firm that works below ground needed a mark that showed it. The central T became a drilling rig — and the rig became the pattern, the icon and the site hoarding.",
    cover: { src: w("geotechnica/hero.webp"), w: 1110, h: 624, alt: "Geotechnica branded site hoarding at a construction site" },
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
      { src: w("geotechnica/g8.webp"), w: 860, h: 483, alt: "Geotechnica primary wordmark with the drilling rig T" },
      { src: w("geotechnica/g1.webp"), w: 860, h: 483, alt: "Geotechnica brand guide cover typography" },
      { src: w("geotechnica/g7.webp"), w: 860, h: 483, alt: "Geotechnica brand pattern and colour system" },
      { src: w("geotechnica/g5.webp"), w: 860, h: 483, alt: "Three Geotechnica pattern systems side by side" },
      { src: w("geotechnica/g6.webp"), w: 860, h: 483, alt: "Geotechnica colour palette swatches" },
      { src: w("geotechnica/g2.webp"), w: 860, h: 483, alt: "Geotechnica branded safety helmets" },
      { src: w("geotechnica/g3.webp"), w: 860, h: 483, alt: "Geotechnica hi-vis vest application" },
      { src: w("geotechnica/g4.webp"), w: 860, h: 483, alt: "Geotechnica branded fleet vehicle" },
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
    disciplines: ["Brand Identity", "Brand Guidelines", "Pattern Design"],
    categories: ["Branding"],
    accent: "#64329A",
    summary:
      "A complete identity for a cultural clothing brand — a visual language that carries heritage and craft without turning into costume.",
    cover: { src: w("leyan-boutique/hero.webp"), w: 1094, h: 615, alt: "Leyan Boutique identity over a photograph of an abaya" },
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
      { src: w("leyan-boutique/g7.webp"), w: 860, h: 483, alt: "Leyan Boutique primary logo construction" },
      { src: w("leyan-boutique/g5.webp"), w: 860, h: 483, alt: "Leyan Boutique brand pattern and hands motif" },
      { src: w("leyan-boutique/g6.webp"), w: 860, h: 483, alt: "Leyan Boutique colour palette" },
      { src: w("leyan-boutique/g2.webp"), w: 860, h: 483, alt: "Leyan Boutique hang tag" },
      { src: w("leyan-boutique/g4.webp"), w: 860, h: 483, alt: "Leyan Boutique branded hanger and garment" },
      { src: w("leyan-boutique/g3.webp"), w: 860, h: 483, alt: "Leyan Boutique shopfront signage mockup" },
      { src: w("leyan-boutique/g1.webp"), w: 860, h: 483, alt: "Leyan Boutique bilingual campaign artwork" },
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
    disciplines: ["Brand Identity", "Brand Guidelines", "App Icon"],
    categories: ["Branding"],
    accent: "#FE010C",
    summary:
      "PlayStation culture rebuilt as a brand system — four hard colours, a plate-shaped logo, and a pattern made of the shapes everyone already recognises.",
    cover: { src: w("sala-sony/hero.webp"), w: 1180, h: 664, alt: "Sala Sony illuminated storefront sign at night" },
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
      { src: w("sala-sony/g7.webp"), w: 860, h: 484, alt: "Sala Sony primary logo on black" },
      { src: w("sala-sony/g1.webp"), w: 860, h: 484, alt: "Sala Sony app icon in context on a phone home screen" },
      { src: w("sala-sony/g2.webp"), w: 860, h: 484, alt: "Sala Sony app icon variants" },
      { src: w("sala-sony/g3.webp"), w: 860, h: 484, alt: "Sala Sony colour palette swatches" },
      { src: w("sala-sony/g4.webp"), w: 860, h: 484, alt: "Sala Sony brand typography specimen in Changa" },
      { src: w("sala-sony/g5.webp"), w: 860, h: 484, alt: "Sala Sony stacked colour-bar brand pattern" },
      { src: w("sala-sony/g6.webp"), w: 860, h: 484, alt: "Sala Sony social visual samples" },
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
    disciplines: ["Digital Marketing", "Social Media", "Content Planning", "Campaign Coordination"],
    categories: ["Digital Marketing", "Social Media"],
    accent: "#1F4D3D",
    summary:
      "A residential development marketed one component at a time — villas, townhouses, apartments, retail, school, club house — as a single, patient content system.",
    cover: { src: w("senwan-gardens/hero.webp"), w: 837, h: 1046, alt: "Senwan Gardens club house and central gardens render" },
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
      { src: w("senwan-gardens/g2.webp"), w: 837, h: 1046, alt: "Senwan Gardens villas render" },
      { src: w("senwan-gardens/g3.webp"), w: 837, h: 1046, alt: "Senwan Gardens townhouse render" },
      { src: w("senwan-gardens/g4.webp"), w: 837, h: 1046, alt: "Senwan Gardens apartments render" },
      { src: w("senwan-gardens/g5.webp"), w: 837, h: 1046, alt: "Senwan Gardens retail plaza render" },
      { src: w("senwan-gardens/g6.webp"), w: 837, h: 1046, alt: "Senwan Gardens office render" },
      { src: w("senwan-gardens/g7.webp"), w: 837, h: 1046, alt: "Senwan Gardens school render" },
      { src: w("senwan-gardens/g1.webp"), w: 837, h: 1046, alt: "Senwan Gardens nature trail render" },
      { src: w("senwan-gardens/g8.webp"), w: 860, h: 855, alt: "Sonwan Holding Group exhibition campaign artwork" },
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
    disciplines: ["Digital Marketing", "Social Media", "Content Planning"],
    categories: ["Digital Marketing", "Social Media"],
    accent: "#E4032E",
    summary:
      "Hypermarket content run on a retail calendar — clearance, seasonal, countdown — where the brand has to stay recognisable while the message changes every week.",
    cover: { src: w("geant-libya/hero.webp"), w: 1125, h: 1125, alt: "Géant Libya clearance campaign artwork" },
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
      { src: w("geant-libya/g1.webp"), w: 860, h: 860, alt: "Géant Libya general markets category post" },
      { src: w("geant-libya/g2.webp"), w: 860, h: 860, alt: "Géant Libya hypermarket category post" },
      { src: w("geant-libya/g3.webp"), w: 860, h: 452, alt: "Géant Libya countdown campaign banner" },
      { src: w("geant-libya/g4.webp"), w: 860, h: 860, alt: "Géant Libya seasonal greeting artwork" },
      { src: w("ghout-al-sultan/hero.webp"), w: 1125, h: 1125, alt: "Ghout Al-Sultan retail point campaign artwork" },
    ],
  },
  {
    slug: "baitna",
    index: "07",
    title: "Baitna",
    subtitle: "Marketing a property platform to two audiences at once",
    year: "2025",
    role: "UI/UX Designer · Graphic Designer",
    client: "Artisans Digital Agency — client project",
    disciplines: ["Digital Marketing", "UI/UX Design", "Graphic Design"],
    categories: ["Digital Marketing", "UI/UX"],
    accent: "#1E9CF0",
    summary:
      "Product-marketing visuals for a real-estate platform that has to speak to owners, agencies and buyers — each with a different reason to open the app.",
    cover: { src: w("baitna/hero.webp"), w: 1180, h: 619, alt: "Baitna property app marketing visual with app store links" },
    overview:
      "Baitna is a real-estate platform with apps on both stores. The work covered the marketing and product visuals used to explain the platform to its three distinct audiences.",
    context:
      "A marketplace only works if both sides show up. Owners need to believe listing is easy; agencies need to believe it grows their business; buyers need to believe the inventory is real.",
    challenge:
      "Communicate three value propositions from one visual system, in Arabic, without the feed reading as three different products.",
    approach:
      "A single blue-to-cyan ground and one typographic frame run across everything. What changes between audiences is the subject: 3D property iconography for owners, workplace illustration for agencies, and real interface screens for buyers — so each post argues its case with the most convincing available evidence.",
    outcome: [
      "Audience-segmented campaign sets for owners, agencies and buyers",
      "Product-led visuals using real interface screens",
      "App-store acquisition creative",
    ],
    gallery: [
      { src: w("baitna/g1.webp"), w: 860, h: 860, alt: "Baitna campaign post aimed at property owners" },
      { src: w("baitna/g5.webp"), w: 860, h: 860, alt: "Baitna campaign post aimed at home seekers" },
      { src: w("baitna/g2.webp"), w: 860, h: 484, alt: "Baitna post covering what matters when buying property" },
      { src: w("baitna/g3.webp"), w: 860, h: 484, alt: "Baitna listing and management interface visual" },
      { src: w("baitna/g4.webp"), w: 860, h: 484, alt: "Baitna presence and listing quality visual" },
    ],
  },
  {
    slug: "artisans",
    index: "08",
    title: "Artisans Digital Agency",
    subtitle: "Agency voice, and the client work underneath it",
    year: "2023 — 2026",
    role: "UI/UX Designer · Web Developer · Graphic Designer",
    client: "Artisans Digital Agency — Benghazi",
    disciplines: ["UI/UX Design", "Web Development", "Graphic Design", "Digital Marketing"],
    categories: ["UI/UX", "Web Development", "Graphic Design"],
    accent: "#D9463C",
    summary:
      "Two and a half years across interface design, web development and graphic design — plus the agency's own voice, which had to be sharper than anything it shipped for clients.",
    cover: { src: w("artisans/hero.webp"), w: 850, h: 850, alt: "Artisans Digital Agency brand campaign visual" },
    overview:
      "I joined Artisans on a three-month internship and stayed on full-time. The work moved between UI/UX design, web design and development, and graphic design — often on the same project, and often for clients whose work was confidential.",
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
    outcome: [
      "Client work spanning engineering, dental supply, finance, education and e-commerce",
      "Web and mobile interface design carried through to build",
      "Agency brand and campaign material",
    ],
    reflection:
      "Three months was supposed to be the whole thing. Staying meant learning the parts of the process I'd otherwise only have seen from one side — which is most of why I can now take a project from mark to interface to campaign without handing it over.",
    gallery: [
      { src: w("artisans/g6.webp"), w: 860, h: 860, alt: "Artisans agency brand post" },
      { src: w("artisans/g5.webp"), w: 850, h: 850, alt: "APEX engineering stationery and identity application" },
      { src: w("artisans/g1.webp"), w: 844, h: 844, alt: "Nama Tamweel financing website visual" },
      { src: w("artisans/g2.webp"), w: 844, h: 844, alt: "Financing platform interface visual" },
      { src: w("artisans/g3.webp"), w: 845, h: 845, alt: "College of Graduate Studies website visual" },
      { src: w("artisans/g4.webp"), w: 844, h: 844, alt: "Sadeem Dental Co. application visual" },
    ],
  },
  {
    slug: "slinger-swap",
    index: "09",
    title: "Slinger Swap",
    subtitle: "A campaign built on the sentence gamers already say",
    year: "2025",
    role: "Graphic Designer",
    client: "Artisans Digital Agency — client project",
    disciplines: ["Graphic Design", "Digital Marketing", "Social Media"],
    categories: ["Graphic Design", "Social Media"],
    accent: "#E0245E",
    summary:
      "Campaign design for a game-trading platform — dark, neon, and written in the voice of the audience rather than about them.",
    cover: { src: w("slinger-swap/hero.webp"), w: 1180, h: 664, alt: "Slinger Swap game trading campaign visual" },
    overview:
      "Slinger Swap lets players trade physical games instead of buying new ones. The campaign work had to make an unfamiliar mechanic feel obvious.",
    context:
      "The behaviour already existed informally — players swapping discs through group chats and comment threads. The platform's job was to formalise it; the campaign's job was to point at what people were already doing.",
    challenge:
      "Explain a transaction model in a single scroll-stopping frame, in a category where the visual language is loud by default.",
    approach:
      "Real game covers do the recognition work, a magenta-into-deep-navy gradient does the atmosphere, and the copy is written in the audience's own register — the question a player would actually ask before they'd consider trading.",
    outcome: [
      "Campaign artwork explaining the trading mechanic",
      "Title-led promotional sets using real catalogue covers",
      "Social-proof and community-voice campaign posts",
    ],
    gallery: [
      { src: w("slinger-swap/g1.webp"), w: 860, h: 485, alt: "Slinger Swap console and title campaign visual" },
      { src: w("slinger-swap/g2.webp"), w: 860, h: 484, alt: "Slinger Swap title-led promotional artwork" },
      { src: w("slinger-swap/g3.webp"), w: 860, h: 484, alt: "Slinger Swap library trading campaign visual" },
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
    items: ["UI/UX Design", "Web Design", "Web Development", "WordPress", "Programming"],
  },
  {
    id: "03",
    title: "Marketing",
    items: [
      "Social Media Management",
      "Digital Marketing",
      "Content Planning",
      "Campaign Coordination",
      "Market Research",
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
  email: "alzawiabdulla449@gmail.com",
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
