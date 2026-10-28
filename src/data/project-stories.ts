import { reiseceylonChapters } from "./reiseceylon-story";

export type ProjectChapter = {
  id: string;
  title: string;
  paragraphs: string[];
};

/** Detailed case studies stay on the server-rendered project page. */
export const projectStories: Record<string, ProjectChapter[]> = {
  reiseceylon: reiseceylonChapters,
  showloomz: [
    {
      id: "overview",
      title: "Bringing a photography business into one workspace",
      paragraphs: [
        "Showloomz is a full-stack, multi-tenant SaaS platform for photographers, studios, and visual businesses. It brings website publishing, media delivery, client workflows, subscriptions, and platform operations into one product. A business can create a portfolio website, manage galleries, collect client photo selections, generate invoices, and manage its subscription from the same dashboard.",
        "The engineering scope covers the frontend, backend workflows, PostgreSQL data layer, third-party integrations, and container deployment configuration. The product serves public visitors, business owners, team members, and platform administrators, each with a different set of responsibilities and permissions.",
      ],
    },
    {
      id: "agentic-development",
      title: "Building with an agentic development workflow",
      paragraphs: [
        "Showloomz was developed using an agentic development workflow with AI tools including Codex, OpenAI, and Claude to support implementation and iteration across the product. This workflow forms part of how the platform was engineered, alongside its application architecture, integrations, and delivery tooling.",
        "The technical story includes both the product features and the engineering work behind them: tenant boundaries, payment event handling, concurrent media updates, currency calculations, and deployment recovery. These details make the implementation and its verification requirements concrete.",
      ],
    },
    {
      id: "architecture",
      title: "One application, separate business workspaces",
      paragraphs: [
        "A shared Next.js application provides the marketing site, tenant websites, business dashboards, APIs, and platform administration. Tenant resolution uses subdomains and registered custom hostnames. Next.js request proxy logic rewrites tenant traffic into shared website routes while keeping marketing, dashboard, API, and tenant website routing distinct.",
        "Tenant ownership checks live in server repositories and mutations. Public website availability checks account for publishing state and account access. This architecture lets multiple businesses share one application while maintaining separate content, permissions, subscription plans, and website settings.",
      ],
    },
    {
      id: "identity-onboarding",
      title: "Identity, permissions, and onboarding",
      paragraphs: [
        "Amazon Cognito handles authentication, with Google sign-in integrated through the authorization code flow and PKCE. Application sessions are backed by PostgreSQL. Server-side checks distinguish tenant membership, business roles, and platform administrator privileges, with owner, administrator, editor, and viewer roles.",
        "Onboarding collects business details, a website slug, plan selection, theme, and policy acceptance. Registration invitation policies and team invitation acceptance workflows control entry into the product. Team seat allowances are enforced when invitations are accepted, connecting collaboration access to the business plan.",
      ],
    },
    {
      id: "website-builder",
      title: "A configurable website builder",
      paragraphs: [
        "The dashboard editor lets businesses configure navigation labels and visibility, hero copy, calls to action, homepage sections, and section order. Custom pages support heading, text, image, button, HTML, and divider blocks. Typography, content width, spacing, and motion settings provide further control, with full-width, split, and bento section layouts.",
        "Website configurations are validated with Zod, and editable HTML passes through server-side sanitization. Publish and unpublish controls determine when a website becomes publicly available. Structured configuration gives each business control over its presentation while keeping the websites on a shared codebase.",
      ],
    },
    {
      id: "media-storage",
      title: "Cloud galleries and transactional media management",
      paragraphs: [
        "Gallery workflows cover creation, editing, visibility, image ordering, captions, and alt text. Browsers upload directly to Cloudflare R2 using short-lived signed URLs, with objects organized under tenant and gallery prefixes. Upload policies check file type, size, and object ownership.",
        "File upload and database metadata commitment are separate steps. Transactional image commits use row locking and duplicate handling to coordinate updates, while storage usage is reconciled from active gallery image records. Object storage holds the media; PostgreSQL records ownership, metadata, ordering, and usage. Receipts and support attachments use separate access-controlled paths.",
      ],
    },
    {
      id: "client-proofing",
      title: "Connecting client selections to the editing workflow",
      paragraphs: [
        "Shared customer galleries support access controls and access-code protection. Clients can select photos and leave notes, and businesses can revoke shares when access should end. Archive download workflows support delivery of gallery files.",
        "Selected-photo exports connect proofing to Adobe Lightroom through catalog and XMP sidecar generation. Export archives handle duplicate filenames so similarly named source files can be packaged correctly. These workflows connect the public gallery, client feedback, and the photographer’s editing process.",
      ],
    },
    {
      id: "subscriptions",
      title: "Subscriptions driven by verified payment events",
      paragraphs: [
        "Dodo Payments powers subscription checkout and webhook processing. A payment provider abstraction includes a separate development provider. Webhook signature verification and duplicate-event handling support payment, refund, renewal, cancellation, and past-due events, with subscription fulfilment tied to verified provider events.",
        "A shared plan catalog serves marketing pricing, tenant billing, and platform administration. Plan versions preserve purchased pricing and feature snapshots. Effective-plan resolution and server-side feature gates determine access, alongside scheduled plan changes, trial and access-period logic, and manual payment workflows. Catalog changes can therefore preserve existing subscription history.",
      ],
    },
    {
      id: "invoicing",
      title: "Multi-currency invoices and branded documents",
      paragraphs: [
        "Businesses can create and edit invoices with customer details, line items, tax, discounts, totals, and statuses. Revision snapshots preserve invoice history, and public sharing and PDF download routes support customer delivery. Branded documents are generated using pdf-lib and fontkit.",
        "A searchable currency picker supports currencies with different decimal rules. Calculations use integer minor units rather than assuming that every currency has two decimal places. When changing currency, the workflow preserves the entered major-unit amounts and rounds to the selected currency’s precision.",
      ],
    },
    {
      id: "business-workflows",
      title: "The day-to-day tools around a studio",
      paragraphs: [
        "Business management covers profiles, service packages, testimonials, and enquiries. A custom form builder produces public shareable forms, validates submissions against configured fields, and applies honeypot and rate-limiting checks to public submissions.",
        "Team invitations and member role management support collaboration. Support tickets include replies, attachments, and status updates. Referral workflows track conversions, reward approvals, and an access-credit ledger. The product also includes Facebook Page connection workflows, Resend notifications, and WhatsApp integration helpers.",
      ],
    },
    {
      id: "platform-operations",
      title: "Operating the platform across tenants",
      paragraphs: [
        "The administrative experience covers tenants, plans, subscriptions, payments, domains, support, invitations, and affiliates. Administrators can manage tenant status and plans, inspect operational summaries and storage usage, and review manual payments and receipts.",
        "Private and custom plans support configurable features. Administrative actions include audit recording where implemented, and export utilities support operational records. These tools provide the controls needed to manage businesses across the shared platform.",
      ],
    },
    {
      id: "analytics-discovery",
      title: "Analytics, search discovery, and localization",
      paragraphs: [
        "Tenant visit tracking records page paths, referral sources, and daily visitor hashes, feeding visit summaries and dashboard charts. Site-wide Google Analytics provides an additional analytics integration.",
        "A JSON-backed marketing blog avoids the need for a separate CMS. Article metadata, canonical URLs, social previews, structured data, and sitemap entries support search discovery, with explicit HTTP 404 handling for unknown articles. Application language infrastructure supports English, Sinhala, and Tamil.",
      ],
    },
    {
      id: "database-engineering",
      title: "A PostgreSQL foundation and an architecture transition",
      paragraphs: [
        "The relational data model covers tenants, membership, galleries, subscriptions, invoices, payments, domains, support, and referrals. Parameterized SQL, transaction helpers, relational constraints, indexes, timestamps, soft-deletion patterns, and incremental migrations support application workflows. Row locking coordinates concurrent gallery metadata updates, and reconciliation queries account for storage usage.",
        "The current runtime uses Cognito and direct PostgreSQL. A compatibility bridge reuses existing generated operation wrappers while replacing their Firebase execution layer with locally executed SQL. Firebase dependencies and generated operation names remain from the earlier architecture; the compatibility adapter does not contact Firebase Data Connect. This transition retained the application’s existing operation interfaces.",
      ],
    },
    {
      id: "deployment",
      title: "Container delivery and recovery-aware deployment",
      paragraphs: [
        "CloudFormation defines AWS Lightsail infrastructure, and Docker Compose configures the application and PostgreSQL environment. GitHub Actions builds application images and publishes them to GitHub Container Registry with commit-specific and latest tags. A systemd timer provides automated image deployment.",
        "Deployment scripts perform health checks and restore the previous image when a new deployment fails. Application startup includes database migration execution. Database restore instructions and operational runbooks document recovery procedures. AWS account security infrastructure definitions include CloudTrail auditing, private audit storage, and IAM Access Analyzer.",
      ],
    },
    {
      id: "quality",
      title: "Testing the boundaries that matter",
      paragraphs: [
        "The repository contains Vitest coverage for tenant hostname routing and authorization; onboarding, registration policies, and invitations; payment providers, webhook handling, catalog synchronization, and checkout rules; upload policies and gallery metadata commits; invoice calculations and currency handling; website configuration and HTML sanitization; blog publication integrity and missing-article routing; and localization and access-period logic.",
        "These are repository-backed capabilities and infrastructure definitions from the supplied project review. That review did not run tests, builds, or live integration checks, and production provider flows and deployed infrastructure require separate verification. The case study makes no claims about customer counts, revenue, uptime, or measured performance gains.",
      ],
    },
    {
      id: "outcomes",
      title: "A complete product engineering story",
      paragraphs: [
        "Showloomz brings customizable websites, cloud media management, client proofing, Lightroom/XMP exports, subscription billing, multi-currency invoices, business workflows, and platform administration into a single SaaS product. The work spans user-facing interfaces, tenant-scoped backend logic, relational data modeling, provider integrations, and delivery automation.",
        "The resulting platform connects a photography business’s public presence to its internal operations: publishing work, collecting client feedback, preparing editing exports, invoicing customers, and managing access through subscription plans. Agentic development with Codex, OpenAI, and Claude is part of the development workflow behind that implementation.",
      ],
    },
  ],
};
