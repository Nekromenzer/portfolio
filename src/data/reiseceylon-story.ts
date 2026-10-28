import { BookOpen, Globe2, Layers3, Map } from "lucide-react";
import type { ProjectChapter } from "./project-stories";

export const reiseceylonChapters: ProjectChapter[] = [
  {
    id: "overview",
    title: "Travel discovery, planning, and publishing in one platform",
    paragraphs: [
      "ReiseCeylon is a full-stack Sri Lanka travel platform combining destination discovery, interactive itinerary planning, multilingual content management, AI-assisted blog publishing, and technical SEO. Travellers can explore an atlas of 174 destinations, discover curated journeys, and create personalized itineraries through an interactive map.",
      "The work spans the Next.js application, Sanity content architecture, journey-planning logic, enquiry APIs, and publishing automation. Four-language content delivery connects travel guides, destination pages, and journey enquiries in English, German, French, and Dutch.",
    ],
  },
  {
    id: "destination-atlas",
    title: "A structured atlas of Sri Lanka",
    paragraphs: [
      "The destination atlas contains 174 places across 13 landscape categories and all nine provinces. JSON and GeoJSON records provide coordinates and geographic attributes, while landscape and province filters help travellers narrow their search. Destination detail pages combine these records with CMS-managed descriptions, highlights, imagery, and SEO fields.",
      "Location maps and nearby-place discovery connect individual places to the wider island. Visibility controls let editors hide a destination without deleting its underlying record. Synchronization scripts update factual location fields while preserving editorial content by default, allowing geographic data and written content to evolve independently.",
    ],
  },
  {
    id: "localization",
    title: "Four languages from one content model",
    paragraphs: [
      "next-intl handles English, German, French, and Dutch. English uses the default unprefixed routes; other languages use locale-prefixed routes. Localized Sanity fields hold titles, descriptions, and article content, with fallback handling when a translation is missing.",
      "Cached CMS reads are shared across languages, with localized fields selected during content transformation. Language-specific metadata and alternate-language URLs connect the four experiences, reducing duplicated fetching and editorial maintenance.",
    ],
  },
  {
    id: "journey-planner",
    title: "An itinerary that responds as travellers explore",
    paragraphs: [
      "The journey planner supports both ready-made packages and custom itineraries. Travellers can search atlas destinations, reorder stops, and add optional airport pickup and drop-off. External place search runs through an OpenStreetMap-backed API route, and Leaflet renders itinerary routes over OpenStreetMap tiles. Expandable maps and responsive layouts support planning across screen sizes.",
      "Changing stops recalculates estimated distances and driving times locally, using terrain-aware distance factors and regional speed assumptions. This provides immediate planning feedback without making a routing-service request for every interaction. The figures are travel-planning estimates, rather than turn-by-turn routing results.",
    ],
  },
  {
    id: "enquiries",
    title: "Carrying the planned journey into an enquiry",
    paragraphs: [
      "Server-side contact and journey enquiry endpoints integrate with Resend to notify the business and optionally send an itinerary copy to the traveller. Emails include the selected stops, route legs, estimated totals, and optional travel preferences. Custom stops retain their coordinates and map links so the business can understand the complete plan.",
      "Business-email delivery is separate from the optional traveller copy. The API returns delivery state so the interface can accurately report whether a copy was sent, with explicit handling for unavailable email configuration. The enquiry arrives with the itinerary attached to its context, avoiding manual reconstruction by the travel team.",
    ],
  },
  {
    id: "draft-generation",
    title: "Structured multilingual drafts from a topic queue",
    paragraphs: [
      "A topic queue holds primary and secondary keywords, search intent, content briefs, and required internal links. A weekly GitHub Actions workflow selects an unused topic and calls the OpenAI Responses API with a strict JSON schema to generate drafts in English, German, French, and Dutch.",
      "The generated output includes localized titles, excerpts, SEO descriptions, image-alt suggestions, and structured article sections. Validation checks article structure, completeness, headings, and required links before converting the content into Sanity Portable Text. Factual claims requiring editorial verification are recorded, while stable topic identifiers and existing-document checks prevent duplicate draft creation.",
    ],
  },
  {
    id: "editorial-publishing",
    title: "Approval before publication",
    paragraphs: [
      "Draft generation and publication are separate workflows. Sanity fields track review status and scheduled publication time, and automated publication requires editorial approval. Eligibility checks cover the due date, required content, category, cover asset, and image alternative text.",
      "An hourly GitHub Actions publisher checks approved, due articles for conflicting slugs, then publishes the content and removes its draft within a Sanity transaction. Dry-run commands let editors inspect eligible content without publishing it. Automation handles the recurring work while retaining explicit editorial control.",
    ],
  },
  {
    id: "seo-content",
    title: "Connecting useful travel content to discovery",
    paragraphs: [
      "Article briefs cover seasonal travel planning, destination discovery, and itinerary-related search intent. Descriptive internal links connect journal articles to relevant destination and journey pages. Page-specific titles, descriptions, canonical URLs, social previews, hreflang annotations, and a default-language alternate support the localized routes.",
      "The XML sitemap draws from destination, tour, and article records and uses actual CMS update timestamps for modification dates. JSON-LD describes the organization, website, articles, breadcrumbs, destinations, and tours. robots.txt, an RSS feed, and centralized production-origin and localized-URL helpers complete the technical foundation. Google Analytics and Vercel Analytics integrations provide analytics tooling; this case study makes no claim about measured SEO outcomes.",
    ],
  },
  {
    id: "application-cms",
    title: "A shared application with independent content management",
    paragraphs: [
      "Next.js App Router provides destination discovery and detail routes, journey planning, tour details, journal articles, and enquiries. Shared components, content utilities, location data, and CMS access live in separate modules. Server-side Sanity queries combine CMS-managed records with structured local content and fallback data.",
      "Embedded Sanity Studio at /studio supports editorial management independently of interface code. GROQ retrieves content, and Portable Text represents rich article bodies. Shared design tokens centralize brand colors, typography, and reusable visual styles, with Tailwind CSS, Framer Motion, GSAP, React GSAP integration, and Lenis supporting the interface and motion system.",
    ],
  },
  {
    id: "content-freshness",
    title: "Fresh content without a full deployment",
    paragraphs: [
      "Cached CMS reads are tagged by document type. A signed Sanity webhook endpoint validates incoming signatures before invalidating content, mapping article, destination, tour, and settings changes to their relevant cache tags.",
      "Targeted invalidation refreshes shared content across the supported languages. Editors can publish routine changes through Sanity while the application refreshes the affected content, without requiring a complete application deployment.",
    ],
  },
  {
    id: "quality",
    title: "Operational tools and verification scope",
    paragraphs: [
      "Automated Node.js tests cover blog automation utilities and publishing eligibility. Package scripts expose development, production builds, TypeScript validation, and tests, alongside topic-queue validation and dry-run commands for draft generation and approved-post publishing.",
      "Destination-content audits, synchronization scripts, localization migration scripts, and documentation support CMS setup and publishing operations. These details reflect the supplied repository review. ReiseCeylon’s own tests, builds, live publishing workflows, email delivery, and SEO outcomes were not reverified for this portfolio write-up.",
    ],
  },
  {
    id: "ai-publishing",
    title: "An editorial pipeline with human approval",
    paragraphs: [
      "The publishing pipeline connects a keyword-led topic queue to OpenAI-generated multilingual drafts, structured validation, and Sanity editorial review. Weekly draft generation supplies reviewable content; an hourly publisher handles approved posts once they meet the publication requirements and scheduled time.",
      "Each stage has a defined responsibility: OpenAI produces structured drafts, validation checks the expected content and links, editors review factual claims and approve publication, and Sanity transactions commit the publish operation. Duplicate checks, slug-conflict detection, and dry-run commands make the automated workflow inspectable.",
    ],
  },
  {
    id: "outcomes",
    title: "From discovering Sri Lanka to planning a journey",
    paragraphs: [
      "ReiseCeylon brings a 174-destination atlas, interactive itinerary planning, four-language content, and email-based journey enquiries into one travel platform. A traveller can move from a guide to a destination, build a route around it, and send that plan to the business with its stops and travel preferences preserved.",
      "Behind that experience, Sanity content management, OpenAI-assisted drafting, approval-controlled publishing, localized metadata, and targeted cache invalidation form a connected editorial system. The project combines travel discovery, product engineering, and publishing operations in a shared Next.js application.",
    ],
  },
];

export const reiseceylonPresentation = {
  introTitle: ["Discover Sri Lanka.", "Plan the journey your way."],
  journeyLabel: "THE TRAVELLER WORKFLOW",
  journeyTitle: "From a place that inspires you to a journey you can send.",
  steps: [
    ["Discover", "Explore 174 destinations across Sri Lanka."],
    ["Plan", "Choose a package or build your own itinerary."],
    ["Refine", "Reorder stops and compare travel estimates."],
    ["Enquire", "Send the route and your preferences to the team."],
  ],
  groups: [
    {
      title: "Make the island easier to explore.",
      label: "Discovery & languages",
      description: "A destination atlas and four-language content help travellers find places that fit their interests.",
      icon: Globe2,
      chapters: ["destination-atlas", "localization"],
    },
    {
      title: "Turn inspiration into a personal route.",
      label: "Planning & enquiries",
      description: "An interactive map connects destination choices, route estimates, and an enquiry the travel team can act on.",
      icon: Map,
      chapters: ["journey-planner", "enquiries"],
    },
    {
      title: "Build a journal with an editorial process.",
      label: "Content & discovery",
      description: "Multilingual drafts move through validation, review, and scheduled publication, with search discovery built in.",
      icon: BookOpen,
      chapters: ["draft-generation", "editorial-publishing", "seo-content"],
    },
    {
      title: "Keep the application and its content connected.",
      label: "Architecture & operations",
      description: "Shared content models, targeted cache updates, and operational tooling support routine editorial work.",
      icon: Layers3,
      chapters: ["application-cms", "content-freshness", "quality"],
    },
  ],
  previews: {
    "destination-atlas": ["Destination atlas", "174 places, 13 landscape categories, and nine provinces"],
    localization: ["Four-language content", "English, German, French, and Dutch from one content model"],
    "journey-planner": ["Interactive itinerary planning", "Searchable places, reorderable stops, maps, and travel estimates"],
    enquiries: ["Journey enquiries & email", "Route details for the business and an optional traveller copy"],
    "draft-generation": ["AI-assisted article drafts", "Structured multilingual output with validation and duplicate checks"],
    "editorial-publishing": ["Review & scheduled publishing", "Approval gates, publication checks, and transactional publishing"],
    "seo-content": ["Technical SEO & content strategy", "Localized metadata, structured data, internal links, and sitemaps"],
    "application-cms": ["Application & Sanity architecture", "Shared routes, embedded Studio, and independent content management"],
    "content-freshness": ["Cache updates & content freshness", "Signed CMS webhooks and targeted invalidation across languages"],
    quality: ["Testing & operational tools", "Automation tests, content audits, migrations, and dry runs"],
  } as Record<string, string[]>,
  spotlight: {
    chapterId: "ai-publishing",
    eyebrow: "THE PUBLISHING PIPELINE",
    title: "AI-assisted content. Editorial control.",
    description: "OpenAI generates structured drafts. Editors approve the content. Scheduled workflows handle publication.",
    tools: ["OpenAI", "Sanity", "GitHub Actions"],
    toolsLabel: "Content publishing tools",
    summary: "Explore the publishing workflow",
  },
  technologies: [
    ["Application & interface", "Next.js 16 App Router · React 19 · TypeScript · Tailwind CSS · Shared design tokens"],
    ["Motion & interaction", "Framer Motion · GSAP · React GSAP integration · Lenis"],
    ["Content & localization", "Sanity CMS · Embedded Sanity Studio · GROQ · Portable Text · next-intl"],
    ["Maps & journey planning", "Leaflet · React Leaflet · OpenStreetMap · GeoJSON"],
    ["AI & publishing", "OpenAI Responses API · Structured JSON output · GitHub Actions · Scheduled Node.js scripts · Sanity transactions"],
    ["Email, SEO & analytics", "Resend · Next.js Metadata API · JSON-LD · XML sitemap · robots.txt · RSS · Google Analytics · Vercel Analytics"],
    ["Testing & tooling", "Node.js test runner · TypeScript validation · npm scripts"],
  ],
  outcomeTitle: "From discovering a destination to planning the whole journey.",
};
