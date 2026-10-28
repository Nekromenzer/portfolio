import {
  ArrowDown, ArrowRight, ChevronDown, Globe2, Images,
  Layers3, ReceiptText, Sparkles,
} from "lucide-react";
import type { ProjectChapter } from "@/data/project-stories";
import { reiseceylonPresentation } from "@/data/reiseceylon-story";

const groups = [
  {
    title: "Publish a website that feels like your business.",
    label: "Website & discovery",
    description: "From a custom domain to editable pages, galleries, and search-ready content — a public home for each studio.",
    icon: Globe2,
    chapters: ["website-builder", "analytics-discovery"],
  },
  {
    title: "Take the work from upload to client approval.",
    label: "Galleries & delivery",
    description: "Upload photos, share a protected gallery, collect selections, and bring the chosen images into Lightroom.",
    icon: Images,
    chapters: ["media-storage", "client-proofing"],
  },
  {
    title: "Keep the business moving behind the scenes.",
    label: "Business & billing",
    description: "Invoices, subscriptions, enquiries, and team workflows share the same workspace as the portfolio.",
    icon: ReceiptText,
    chapters: ["invoicing", "subscriptions", "business-workflows"],
  },
  {
    title: "Build the foundation for many businesses.",
    label: "Architecture & operations",
    description: "Tenant boundaries, identity, data integrity, and deployment recovery support the product beneath the interface.",
    icon: Layers3,
    chapters: ["architecture", "identity-onboarding", "database-engineering", "platform-operations", "deployment", "quality"],
  },
];

const previews: Record<string, [string, string]> = {
  "website-builder": ["Website builder", "Themes, page blocks, layouts, and publishing controls"],
  "analytics-discovery": ["Analytics, SEO & languages", "Visit insights, a marketing blog, and three-language infrastructure"],
  "media-storage": ["Cloud gallery management", "Direct R2 uploads with ownership and storage accounting"],
  "client-proofing": ["Client proofing & exports", "Protected sharing, selections, notes, and Lightroom/XMP delivery"],
  invoicing: ["Multi-currency invoicing", "Branded PDFs, revision history, and currency-aware calculations"],
  subscriptions: ["Subscriptions & access", "Verified payment events, versioned plans, and feature gates"],
  "business-workflows": ["Everyday studio workflows", "Enquiries, forms, teams, support, and referral credits"],
  architecture: ["Multi-tenant architecture", "One application with separate content, domains, and permissions"],
  "identity-onboarding": ["Authentication & onboarding", "Cognito, Google sign-in, business roles, and team invitations"],
  "database-engineering": ["PostgreSQL & data integrity", "Transactions, migrations, and the transition from Firebase"],
  "platform-operations": ["Platform administration", "Tenant, plan, payment, domain, and support management"],
  deployment: ["Deployment & recovery", "Container delivery, health checks, and previous-image restoration"],
  quality: ["Testing & verification scope", "Coverage across routing, payments, media, and business rules"],
};

const technologies = [
  ["Application & interface", "Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Radix UI · Lucide · GSAP"],
  ["Forms & data", "React Hook Form · Zod · PostgreSQL · pg · Parameterized SQL · Transactions"],
  ["Identity & media", "Amazon Cognito · Google OAuth / PKCE · Cloudflare R2 · AWS SDK (S3)"],
  ["Payments & business tools", "Dodo Payments · Standard Webhooks · Resend · WhatsApp helpers · Google Analytics"],
  ["Documents & exports", "pdf-lib · fontkit · Archiver · Lightroom catalogs · XMP"],
  ["Infrastructure & quality", "AWS Lightsail · CloudFormation · Docker Compose · GitHub Actions · GHCR · systemd · Vitest · ESLint · pnpm"],
];

const showloomzPresentation = {
  introTitle: ["One workspace.", "The whole photography business."],
  journeyLabel: "THE BUSINESS WORKFLOW",
  journeyTitle: "From first impression to final delivery.",
  steps: [
    ["Publish", "Create a website on your own domain."],
    ["Upload", "Organize work into cloud galleries."],
    ["Collaborate", "Collect client selections and notes."],
    ["Deliver", "Export selected photos and share invoices."],
  ],
  groups,
  previews,
  technologies,
  ai: {
    chapterId: "agentic-development",
    eyebrow: "HOW IT WAS BUILT",
    title: "An agentic development workflow.",
    description: "Built with Codex, OpenAI, and Claude supporting implementation and iteration across the product.",
    tools: ["Codex", "OpenAI", "Claude"],
    toolsLabel: "AI development tools",
    summary: "More about the development approach",
  },
  outcomeTitle: "From a portfolio website to a connected business platform.",
};

export default function ProjectStory({ chapters, slug }: { chapters: ProjectChapter[]; slug: string }) {
  const presentation = slug === "reiseceylon" ? reiseceylonPresentation : showloomzPresentation;
  const chapter = (id: string) => chapters.find((item) => item.id === id)!;

  return (
    <div className="dz-case-study">
      <section className="dz-case-intro" aria-labelledby="overview-title" id="overview">
        <div>
          <p className="dz-eyebrow">THE PRODUCT</p>
          <h2 id="overview-title">{presentation.introTitle[0]}<br />{presentation.introTitle[1]}</h2>
        </div>
        <div className="dz-case-prose">
          {chapter("overview").paragraphs.map((text) => <p key={text}>{text}</p>)}
        </div>
      </section>

      <section className="dz-case-journey" aria-labelledby="journey-title">
        <div className="dz-case-section-heading">
          <p className="dz-eyebrow">{presentation.journeyLabel}</p>
          <h2 id="journey-title">{presentation.journeyTitle}</h2>
        </div>
        <ol>
          {presentation.steps.map(([title, description], index) => (
            <li key={title}>
              <span className="dz-case-step">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              {index < presentation.steps.length - 1 ? <ArrowRight className="dz-case-step-arrow" size={18} aria-hidden /> : null}
            </li>
          ))}
        </ol>
      </section>

      <div className="dz-case-capabilities">
        <div className="dz-case-section-heading">
          <p className="dz-eyebrow">INSIDE THE PRODUCT</p>
          <h2>The experience, and the engineering behind it.</h2>
          <p>Explore each area for the full implementation story.</p>
        </div>
        {presentation.groups.map(({ title, label, description, icon: Icon, chapters: ids }, index) => (
          <section className="dz-case-group" key={label} aria-labelledby={`case-group-${index}`}>
            <div className="dz-case-group-intro">
              <span className="dz-case-icon"><Icon size={22} strokeWidth={1.5} aria-hidden /></span>
              <p className="dz-eyebrow">{label}</p>
              <h3 id={`case-group-${index}`}>{title}</h3>
              <p>{description}</p>
            </div>
            <div className="dz-case-details-list">
              {ids.map((id) => (
                <details className="dz-case-detail" key={id} id={id}>
                  <summary>
                    <span><strong>{presentation.previews[id][0]}</strong><span>{presentation.previews[id][1]}</span></span>
                    <ChevronDown size={18} aria-hidden />
                  </summary>
                  <div className="dz-case-prose dz-case-detail-body">
                    {chapter(id).paragraphs.map((text) => <p key={text}>{text}</p>)}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="dz-case-ai" aria-labelledby="ai-workflow-title" id={presentation.ai.chapterId}>
        <div className="dz-case-section-heading">
          <p className="dz-eyebrow"><Sparkles size={15} aria-hidden /> {presentation.ai.eyebrow}</p>
          <h2 id="ai-workflow-title">{presentation.ai.title}</h2>
          <p>{presentation.ai.description}</p>
        </div>
        <div className="dz-case-ai-tools" aria-label={presentation.ai.toolsLabel}>
          {presentation.ai.tools.map((tool) => <span key={tool}>{tool}</span>)}
        </div>
        <details className="dz-case-detail">
          <summary><strong>{presentation.ai.summary}</strong><ChevronDown size={18} aria-hidden /></summary>
          <div className="dz-case-prose dz-case-detail-body">
            {chapter(presentation.ai.chapterId).paragraphs.map((text) => <p key={text}>{text}</p>)}
          </div>
        </details>
      </section>

      <section className="dz-case-technology" aria-labelledby="technology-title" id="technology">
        <div className="dz-case-section-heading">
          <p className="dz-eyebrow">TECHNOLOGY</p>
          <h2 id="technology-title">The tools behind each layer.</h2>
        </div>
        <dl>
          {presentation.technologies.map(([label, tools]) => <div key={label}><dt>{label}</dt><dd>{tools}</dd></div>)}
        </dl>
      </section>

      <section className="dz-case-outcome" aria-labelledby="outcomes-title" id="outcomes">
        <p className="dz-eyebrow">WHAT IT BRINGS TOGETHER <ArrowDown size={15} aria-hidden /></p>
        <h2 id="outcomes-title">{presentation.outcomeTitle}</h2>
        <div className="dz-case-prose">
          {chapter("outcomes").paragraphs.map((text) => <p key={text}>{text}</p>)}
        </div>
      </section>
    </div>
  );
}
