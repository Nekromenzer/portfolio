import { contactActions, resumeUrl } from "@/data/contact";
export { resumeUrl } from "@/data/contact";
import type { ExperienceItem } from "@/components/ExperienceGlobe";
import type { WorkItem } from "@/components/Work";

export type ImpactItem = [string, string, string];

export type StackGroup = {
  title: string;
  note: string;
  items: string[];
};

export type EducationItem = {
  title: string;
  place: string;
  period: string;
  result: string;
};

export type ProofItem = {
  title: string;
  body: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon?: "resume" | "email" | "github" | "linkedin" | "youtube" | "tiktok" | "phone" | "location";
  external?: boolean;
};


export const portfolioData = {
  navItems: ["ABOUT", "EXPERIENCE", "IMPACT", "PROJECTS", "STACK", "BLOG", "CONTACT"],
  hero: {
    pretitle:
      "Frontend systems • Mobile products • AI-driven workflows",
    firstName: "Maneesha",
    lastName: "Barandeniya",
    role: "Senior Frontend Engineer",
    company: "Dubai Technologies",
    period: "Nov 2024 - Present",
    imageSrc: "/profile.webp",
    heroImageSrc: "/hero-image.png",
    imageAlt: "Maneesha Barandeniya",
    sideMarkInitial: "MG",
    sideMarkLabel: "Maneesha",
    signal: "BUILDING: PRODUCT FRONTENDS • NOT: STATIC PAGES",
    actions: contactActions,
  },
  about: {
    eyebrow: "ABOUT",
    title: "Building experiences that work beautifully at scale.",
    paragraphs: [

      "I'm a Senior Frontend Engineer with 7 years of experience building scalable, high-performance web and mobile applications using React.js, Next.js, React Native, and TypeScript. I enjoy turning complex business requirements into intuitive, high-performance user experiences.",

      "Throughout my career, I've worked across startups, SaaS products, fintech platforms, enterprise applications, and real-time mobility systems. My experience spans frontend architecture, reusable component systems, API integrations, authentication, state management, and cross-platform development.",

      "Most recently at Dubai Technologies, I've been developing data-intensive geospatial applications using React micro-frontends, Leaflet, and Mapbox. My work focuses on scalable frontend architecture, performance optimization, and rendering large geolocation datasets efficiently.",

      "Beyond commercial projects, I enjoy building products from the ground up. My personal projects include an AI-powered Resume Management System that helps candidates tailor resumes using AI, and TurnTaxi, a real-time ride-hailing platform featuring live tracking, trip management, and optimized Firebase synchronization.",

      "I care about writing clean, maintainable code, creating reusable systems, and building products that people genuinely enjoy using. Whether it's architecting frontend applications, improving performance, or collaborating with cross-functional teams, my goal is always the same—deliver reliable software that scales.",

    ],
  },
  experienceSection: {
    eyebrow: "EXPERIENCE",
    title: "Work mapped by location.",
    currentLabel: "Current location",
    previousLabel: "Previous location",
    currentBadge: "Sri Lanka → Dubai",
    previousBadge: "PREVIOUS LOCATION",
    projectsTitle: "Projects delivered here",
  },
  experience: [
    {
      period: "11/2024 - Present",
      role: "Senior Frontend Engineer",
      company: "Dubai Technologies",
      location: "Remote, Dubai, UAE",
      mapLabel: "UAE",
      countryCode: "UAE",
      latitude: 25.2048,
      longitude: 55.2708,
      isCurrent: true,
      body: [
        "Drove frontend development for government-sector applications used by Dubai’s **Roads and Transport Authority (RTA)** and port operations, delivering production-ready solutions with **React.js** and **TypeScript**.",
        "Collaborated with backend engineers, product teams, and stakeholders to translate complex operational requirements into responsive, maintainable interfaces.",
        "**Mentored frontend engineers** and delivered **knowledge transfer (KT)** sessions on application architecture, reusable components, and performance optimization to support onboarding and ongoing development.",
      ],
      projects: [
        {
          title: "Enterprise Geospatial Mapping Platform",
          place: "Dubai, UAE",
          description: [
            "Developed interactive, data-intensive geospatial interfaces for RTA systems using **React.js**, **TypeScript**, **Leaflet**, and **Mapbox**, helping stakeholders visualize and manage complex operational and location data for **real-time decision-making**.",
            "Improved location-data rendering performance by **approximately 60%** through component optimization, efficient geospatial data processing, and reduced unnecessary re-renders.",
          ],
        },
        {
          title: "Micro-Frontend Enterprise Platform",
          place: "Dubai, UAE",
          description: [
            "Designed and implemented a scalable **React** **micro-frontend architecture** supporting modular development, **independent deployments**, and cross-team integration for government applications.",
            "Built **custom, reusable React components** shared across micro-frontends to improve UI consistency, reduce duplicated work, and streamline maintenance.",
            "Collaborated across teams and provided knowledge transfer on shared modules and integration patterns.",
          ],
        },
        {
          title: "Port Tracking System",
          place: "Dubai, UAE",
          description: [
            "Developed responsive operational interfaces for a **port tracking system** using **React.js** and **TypeScript**, helping stakeholders visualize tracking data and monitor port operations.",
            "Built **custom, reusable React components** and collaborated with backend engineers and stakeholders to translate operational requirements into maintainable features.",
          ],
        },
      ],
    },
    {
      period: "02/2022 - 11/2024",
      role: "Software Engineer",
      company: "Parkway Labs",
      location: "Remote, Netherlands",
      mapLabel: "Netherlands",
      countryCode: "NLD",
      latitude: 52.3676,
      longitude: 4.9041,
      isCurrent: false,
      body: [
        "Built **React Native** and **React** applications for fintech, telephony, crypto and real-estate platforms while leading **frontend architecture** and **reusable component development**.",
      ],
      projects: [
        {
          title: "Tellit - Business Communication App",
          place: "Remote, Sweden",
          href: "https://www.tellit.se/",
          description: [
            "Led the architecture and development of the Tellit mobile app from scratch, a **B2B telephony** solution integrating call management, personalized numbers, presence status, and mobile subscriptions.",
            "Engineered a seamless UI/UX, integrated advanced telephony **APIs**, and optimized **Android** and **iOS** delivery with cross-platform tools.",
          ],
        },
        {
          title: "Tecta - Cloud-Based Real Estate Backoffice System",
          place: "Remote, Sweden",
          href: "https://tecta.se/",
          description: [
            "Developed a secure real estate management platform enabling Swedish users to register properties via **BankID**.",
            "Focused on **frontend architecture**, plugin management, **virtualized data handling**, and responsive dashboards to streamline property and tenant oversight.",
          ],
        },
        {
          title: "TradingBot - Crypto Trading Interface",
          place: "Global",
          description: [
            "Built an intuitive trading dashboard that enabled users to automate strategies, monitor trends, and execute trades on **Binance**.",
            "Collaborated closely with design and backend teams to refine flows and ensure responsive, data-driven UI components.",
          ],
        },
        {
          title: "TaskBuddy - Task Management Tool",
          place: "Remote, Netherlands",
          description: [
            "Contributed to the design and functionality of a productivity app for task tracking and team collaboration, with emphasis on responsive interfaces and clean user flows.",
          ],
        },
      ],
    },
    {
      period: "06/2021 - 02/2022",
      role: "Software Developer",
      company: "Qualia Tech International",
      location: "Remote, Sweden",
      mapLabel: "Sweden",
      countryCode: "SWE",
      latitude: 59.3293,
      longitude: 18.0686,
      isCurrent: false,
      body: [
        "Developed modern SaaS applications using **React**, **Next.js**, **TypeScript** and **GraphQL** while improving **reusable UI architecture** and application performance.",
      ],
      projects: [
        {
          title: "Next.js Development",
          description: [
            "Built dynamic, scalable web applications leveraging **server-side rendering** and **static site generation** for optimal performance and **SEO** impact.",
          ],
        },
        {
          title: "GraphQL Integration",
          description: [
            "Designed and implemented a robust **GraphQL** layer to streamline data fetching, reduce over-fetching, and improve client-server communication efficiency.",
          ],
        },
        {
          title: "TypeScript Adoption",
          description: [
            "Utilized **TypeScript** to enhance code quality, enforce type safety, and improve code maintainability and developer productivity across the codebase.",
          ],
        },
        {
          title: "Cross-Functional Collaboration",
          description: [
            "Worked closely with designers, backend engineers, and product managers to gather requirements and deliver user-centric solutions that aligned with business goals.",
          ],
        },
        {
          title: "Code Quality & Best Practices",
          description: [
            "Participated actively in **code reviews**, promoted clean code standards, and ensured adherence to modern frontend development best practices.",
          ],
        },
        {
          title: "Continuous Learning & Innovation",
          description: [
            "Explored and integrated emerging tools and technologies to optimize development workflows and stay ahead of industry trends.",
          ],
        },
      ],
    },
    {
      period: "09/2019 - 06/2021",
      role: "Frontend Developer",
      company: "Treeloq",
      location: "Hybrid, Sri Lanka",
      mapLabel: "Sri Lanka",
      countryCode: "LKA",
      latitude: 6.9271,
      longitude: 79.8612,
      isCurrent: false,
      body: [
        "Built online resume and cover letter products with **React** while improving **SEO**, **accessibility**, performance and **frontend architecture**.",
      ],
      projects: [
        {
          title: "Modern Web Development",
          description: [
            "Built responsive and accessible UIs using **React.js**, **HTML5**, **CSS3**, **JavaScript ES6+**, and **Tailwind CSS**, ensuring cross-device compatibility and fast load times.",
            "Improved page load performance by **approximately 30%**, leading to a smoother user experience.",
          ],
        },
        {
          title: "Machine Learning Personalization",
          description: [
            "Integrated **machine learning** algorithms through **TensorFlow.js** and backend **APIs** to deliver real-time content suggestions based on user behavior and input context.",
            "Boosted user engagement by **30%** through personalized document guidance.",
          ],
        },
        {
          title: "SEO Optimization",
          description: [
            "Implemented a robust **SEO** strategy using **Next.js**, structured metadata, keyword optimization, and canonical tagging.",
            "Achieved a **60%** increase in organic traffic and improved SERP ranking for targeted keywords.",
          ],
        },
        {
          title: "Collaborative UI/UX Delivery",
          description: [
            "Worked alongside **Figma**-based UX/UI designs to implement visually polished and highly usable components.",
            "Contributed to increasing user retention by **25%** through consistent design language and improved navigation flows.",
          ],
        },
        {
          title: "Agile & Feedback-Driven Development",
          description: [
            "Collaborated in an **Agile** environment with product managers and QA teams.",
            "Gathered user feedback through analytics and **A/B testing**, then iterated on features for better usability and adoption.",
          ],
        },
        {
          title: "Cross-Team Communication",
          description: [
            "Acted as the bridge between frontend, ML, and backend teams, ensuring seamless integration of **APIs**, personalized logic, and frontend performance.",
          ],
        },
      ],
    },
  ] satisfies ExperienceItem[],

  impactSection: {
    eyebrow: "IMPACT",
    title: "Proof, not promises.",
  },

  impact: [
    ["60%", "faster geolocation rendering", "Leaflet / Mapbox platform"],
    ["3", "connected applications", "TurnTaxi passenger, driver & admin"],
    ["30%", "page load reduction", "Treeloq resume builder"],
    ["7", "years of experience", "SaaS, FinTech, enterprise"],
    ["20+", "tools and frameworks", "Frontend and mobile stack"],
    ["1000s", "users served", "multi-region SaaS products"],
    ["4", "major role chapters", "startup to enterprise delivery"],
    ["2", "formal qualifications", "BEng + IT diploma"],
  ] satisfies ImpactItem[],

  workSection: {
    eyebrow: "PROJECTS",
    title: "Systems that had to hold.",
    copy: "Selected builds arranged like a project wall. Open any tile for the full delivery story.",
  },

  work: [
    {
      slug: "reiseceylon",
      name: "ReiseCeylon",
      label: "MULTILINGUAL TRAVEL • ITINERARY PLANNING & AI PUBLISHING",
      meta: "Live Product • Sri Lanka Travel",
      cover: {
        src: "/projects-logo/reiseceylon-home.webp",
        alt: "ReiseCeylon homepage presenting private journeys across Sri Lanka",
      },
      logo: {
        initials: "RC",
        src: "/projects-logo/reise-ceylon-logo.webp",
        alt: "ReiseCeylon",
      },
      context:
        "A Sri Lankan travel business needed more than a polished brochure: it needed a fast, multilingual discovery experience that could earn search visibility, help real travellers explore the island, and turn that interest into direct journey enquiries.",
      approach:
        "Built the Next.js application, Sanity content architecture, interactive journey planner, enquiry APIs, and AI-assisted publishing workflows. Combined a structured atlas of 174 destinations with four-language content delivery and technical SEO to connect travel guides, destination pages, and journey enquiries.",
      system:
        "Next.js and next-intl serve English, German, French, and Dutch from shared Sanity content models. JSON and GeoJSON describe 174 destinations across 13 landscape categories and nine provinces. Leaflet and OpenStreetMap support searchable, reorderable itinerary stops, airport transfers, and locally calculated travel estimates. Resend enquiry APIs deliver route details to the business and optional copies to travellers. A weekly GitHub Actions workflow uses the OpenAI Responses API to generate validated multilingual Sanity drafts; an hourly publisher checks editorial approval, eligibility, and slug conflicts before transactional publication. Localized metadata, hreflang, JSON-LD, CMS-driven sitemaps, RSS, and signed webhook cache invalidation connect publishing to the public application.",
      outcome:
        "A multilingual Sri Lanka travel platform connecting a 174-destination atlas, interactive itinerary planning, and journey enquiries with an AI-assisted, approval-controlled publishing system.",
      href: "https://www.reiseceylon.com/",
      accent: "#d4a83f",
      stats: [
        ["4 Locales", "English, German, French, Dutch"],
        ["174 Places", "13 Landscapes · 9 Provinces"],
        ["Draft → Review", "Human-Gated AI Publishing"],
      ],
      stack: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "next-intl",
        "Sanity",
        "Sanity Studio",
        "GROQ",
        "Portable Text",
        "OpenAI Responses API",
        "GitHub Actions",
        "Node.js",
        "Next.js Metadata API",
        "Structured Data",
        "Technical SEO",
        "RSS",
        "Google Analytics",
        "Vercel Analytics",
        "Framer Motion",
        "GSAP",
        "Lenis",
        "Leaflet",
        "React Leaflet",
        "OpenStreetMap",
        "GeoJSON",
        "Resend",
        "Node.js Test Runner",
      ],
    },
    {
      slug: "showloomz",
      name: "Showloomz",
      label: "MULTI-TENANT SAAS • PHOTOGRAPHY & STUDIO PLATFORM",
      meta: "Product • Jun 2026 - Present",
      logo: {
        initials: "SL",
        alt: "Showloomz",
        src: "/projects-logo/showloomz-logo.webp",
      },
      context:
        "Photographers, studios, and visual businesses need one workspace to publish portfolio websites, manage cloud galleries, collect client photo selections, generate invoices, and manage subscriptions. Showloomz brings these workflows together with separate experiences for public visitors, business owners, team members, and platform administrators.",
      approach:
        "Built Showloomz end to end across the frontend, backend workflows, PostgreSQL data layer, third-party integrations, and container deployment configuration. Used an agentic development workflow with AI tools including Codex, OpenAI, and Claude to support implementation and iteration. Businesses configure themes, navigation, homepage layouts, custom page blocks, typography, and publishing from a shared dashboard, with Zod validation and HTML sanitization for editable content.",
      system:
        "Next.js 16, React 19, and TypeScript power hostname-based tenant routing, custom domains, and role-based dashboards. Amazon Cognito and Google OAuth with PKCE handle identity, while PostgreSQL stores application sessions, tenant membership, and business data through parameterized SQL and transactions. A compatibility bridge retains existing operation interfaces while replacing their earlier Firebase execution layer with direct PostgreSQL queries. Cloudflare R2 receives signed browser uploads, with tenant-scoped ownership checks, transactional metadata commits, row locking, and storage reconciliation. Client proofing supports access-code protection, selections, notes, share revocation, archive downloads, and Lightroom/XMP exports. Dodo Payments checkout connects verified, duplicate-safe webhooks to versioned plans and server-side entitlements. Multi-currency invoices use integer minor units, revision snapshots, public sharing, and branded PDF generation. Business tools cover enquiries, services, testimonials, configurable forms, team invitations, support, and referrals; platform administration covers tenants, plans, payments, and domains. Tenant analytics, a structured SEO blog, and English, Sinhala, and Tamil language infrastructure support discovery and operations. Deployment configuration combines AWS Lightsail, CloudFormation, Docker Compose, GitHub Actions, GHCR, startup migrations, and systemd-based image updates with health checks and previous-image restoration. Vitest coverage spans routing, authorization, billing, uploads, invoice calculations, website configuration, and localization.",
      outcome:
        "A full-stack SaaS platform unifying customizable portfolio websites, cloud galleries, client proofing, Lightroom/XMP exports, subscription billing, multi-currency PDF invoices, and platform administration for photographers and visual businesses.",
      href: "https://showloomz.online/",
      accent: "#c9a0ff",
      stats: [
        ["Multi-Tenant", "Hostname Routing"],
        ["Client Proofing", "Selections & Lightroom/XMP Exports"],
        ["Webhook-Driven", "Subscription Billing"],
      ],
      stack: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind v4",
        "Radix UI",
        "Lucide",
        "React Hook Form",
        "Zod",
        "PostgreSQL",
        "pg",
        "AWS Cognito",
        "Google OAuth / PKCE",
        "Cloudflare R2",
        "AWS SDK (S3)",
        "Dodo Payments",
        "Standard Webhooks",
        "Resend",
        "pdf-lib",
        "fontkit",
        "Archiver",
        "Lightroom / XMP",
        "Google Analytics",
        "GSAP",
        "Vitest",
        "ESLint",
        "pnpm",
        "Docker Compose",
        "AWS Lightsail",
        "CloudFormation",
        "GitHub Actions",
        "GHCR",
        "systemd",
        "Codex",
        "OpenAI",
        "Claude",
      ],
    },
    {
      slug: "ai-resume-management-system",
      name: "AI-based Resume Management System",
      label: "AI PRODUCT • IN DEVELOPMENT",
      meta: "Personal Project • May 2022 - Present",
      logo: {
        initials: "RS",
        alt: "AI Resume Management System",
      },
      context:
        "Job seekers struggle to tailor resumes while recruiters spend significant time reviewing irrelevant applications.",
      approach:
        "Developed an AI-powered platform that generates resumes, enhances existing resumes from job descriptions and streamlines candidate management.",
      system:
        "Built structured resume generation, AI content enhancement, candidate tracking and employer matching workflows using modern React architecture.",
      outcome:
        "Improves resume quality, job relevance and recruiter efficiency through AI-assisted resume optimization.",
      accent: "#61d3c3",
      stats: [
        ["AI", "Resume Generation"],
        ["B2B + B2C", "Candidate Platform"],
        ["May 2022", "Started"],
      ],
      stack: [
        "React",
        "TypeScript",
        "OpenAI",
        "AI",
        "Structured Forms",
        "RXJS",
        "GatsBy",
        "Docker"
      ],
    },
    {
      slug: "turntaxi",
      name: "TurnTaxi",
      label: "RIDE BOOKING • DRIVER OPERATIONS & ADMINISTRATION",
      meta: "Commercial Project • Jun 2024 - Present",
      logo: {
        initials: "TT",
        alt: "TurnTaxi",
        src: '/projects-logo/logo-trans.webp'
      },
      context:
        "A Sri Lankan tuk-tuk service needs to connect passenger requests, driver availability, fare offers, and administrative operations. Turn Taxi brings these workflows together through separate passenger and driver mobile applications and a shared operations dashboard.",
      approach:
        "Built two React Native applications with Expo and a React administration dashboard. Implemented map-based ride requests, competitive driver quotations, transactional offer acceptance, synchronized ride progress, driver document submission, and English, Sinhala, and Tamil mobile resources.",
      system:
        "Firestore stores operational ride, driver, user, and notification records, while Realtime Database carries live driver positions and Firebase Storage holds onboarding documents. Google mapping integrations support place search, pickup adjustment, and route metrics. Drivers submit fare offers that passengers compare and accept through a Firestore transaction. Expo Location and Task Manager publish throttled background location updates with explicit tracking controls. Firebase Functions select nearby driver candidates, enforce subscription expiry, and publish scheduled notifications. The React dashboard supports driver review, subscription adjustments, permission-aware administration, activity calendars, Recharts summaries, and CSV reports. Transactional ratings account for new and edited feedback, and EAS profiles support release preparation.",
      outcome:
        "A three-application transport platform connecting passenger booking, driver fare offers, live tracking, and shared ride progress with driver approval, subscription administration, targeted notifications, and activity reporting.",
      href: "https://turntaxi.com/",
      accent: "#8cb3ff",
      stats: [
        ["3 Apps", "Passenger · Driver · Admin"],
        ["3 Languages", "English · Sinhala · Tamil"],
        ["Live Offers", "Transactional Acceptance"],
      ],
      stack: [
        "React Native",
        "Expo",
        "React",
        "TypeScript",
        "JavaScript",
        "Expo Router",
        "Vite",
        "React Router",
        "NativeWind",
        "Tailwind CSS",
        "Ant Design",
        "Expo Vector Icons",
        "Zustand",
        "AsyncStorage",
        "Redux Toolkit",
        "React Redux",
        "Firebase Authentication",
        "Google Sign-In",
        "Cloud Firestore",
        "Firebase Realtime Database",
        "Firebase Storage",
        "Expo Image Picker",
        "React Native Maps",
        "Google Places APIs",
        "React Native Maps Directions",
        "Expo Location",
        "Expo Task Manager",
        "i18next",
        "react-i18next",
        "Expo Notifications",
        "Expo Push API",
        "Firebase Functions v2",
        "Firebase Admin SDK",
        "Node.js 22",
        "Recharts",
        "CSV Export",
        "EAS Build",
        "ESLint",
        "Prettier",
      ],
    },
    {
      slug: "cookiz-auth",
      name: "cookiz-auth",
      label: "OPEN SOURCE • REACT AUTH LIBRARY",
      meta: "NPM Package • Open Source • Aug 2025 - Present",
      logo: {
        initials: "CA",
        alt: "cookiz-auth",
      },
      context:
        "React applications often rely on localStorage token handling, which can create security risks and repetitive authentication setup across projects.",
      approach:
        "Built a lightweight React authentication library using secure HTTP-only cookies, customizable backend endpoints, React context, and reusable auth hooks.",
      system:
        "The package provides an AuthProvider, useAuth hook, configurable login/logout/user/refresh endpoints, TypeScript support, and backend-agnostic session handling.",
      outcome:
        "Helps React developers integrate secure cookie-based authentication faster without storing tokens in localStorage.",
      href: "https://www.npmjs.com/package/cookiz-auth",
      accent: "#f0b46a",
      stats: [
        ["NPM", "Published Package"],
        ["HTTP-only", "Cookie Auth"],
        ["React", "Auth Provider + Hook"],
      ],
      stack: [
        "React",
        "TypeScript",
        "HTTP-only Cookies",
        "Authentication",
        "React Context",
        "NPM Package",
      ],
    },
    {
      slug: "trust-ora",
      name: "Trust-ora",
      label: "AI-ASSISTED • SECURE FINTECH PLATFORM",
      meta: "Mobile App • Admin Dashboard • Backend System",
      logo: {
        initials: "TO",
        alt: "Trust Ora",
        src: '/projects-logo/trustora-mark.webp'
      },
      context:
        "Financial service platforms require secure user onboarding, reliable account management, protected admin operations, and smooth handling of loans, collections, and customer data across multiple applications.",
      approach:
        "Built an AI-assisted fintech application ecosystem with a secure mobile experience, role-based admin dashboard, backend-owned data workflows, and structured API integrations for scalable financial operations.",
      system:
        "The platform includes customer mobile flows, admin user management, RBAC permissions, loan and collection management, profile and bank account handling, backend pagination/filtering, authentication flows, and documented frontend-backend API contracts.",
      outcome:
        "Provides a secure and extensible foundation for managing financial users, loans, collections, and administrative operations while improving development speed through AI-assisted implementation and verification.",
      accent: "#4fffbe",
      stats: [
        ["AI-Assisted", "Full-Stack Development"],
        ["RBAC", "Secure Admin Access"],
        ["Mobile + Admin", "Fintech Operations"],
      ],
      stack: [
        "Flutter",
        "Go",
        "AI-Assisted Development",
        "TypeScript",
        "React",
        "Authentication",
        "RBAC",
        "REST APIs",
        "PostgreSQL",
        "Docker",
        "AWS",
        "Secure App Development",
      ],
    }
  ] satisfies WorkItem[],

  proof: {
    eyebrow: "RECOMMENDATIONS",
    title: "What teams get.",
    items: [
      {
        title: "Architecture that scales",
        body: "Micro-frontends, monorepos, reusable components, and type-safe patterns that support larger teams.",
      },
      {
        title: "Delivery under real constraints",
        body: "Product work across remote teams, client delivery, security needs, API contracts, performance targets, and test coverage.",
      },
      {
        title: "Interfaces that stay usable",
        body: "Accessibility, keyboard navigation, responsive behavior, and fast-loading screens designed for actual user workflows.",
      },
    ] satisfies ProofItem[],
  },

  stackSection: {
    eyebrow: "STACK",
    title: "What I run in production.",
    cardEyebrow: "OPERATING MODEL",
    cardTitle: "Build the interface, the system around it, and the guardrails.",
    cardBody:
      "The stack is less about tool collection and more about shipping frontend systems that stay fast, testable, and adaptable as the product grows.",
    signals: [
      ["30+", "core tools used in production"],
      ["5", "delivery lanes across web, mobile, scale, platform"],
    ],
  },

  stack: [
    "React.js",
    "React Native",
    "Next.js",
    "TypeScript",
    "JavaScript ES6+",
    "Redux",
    "Zustand",
    "Jest",
    "React Testing Library",
    "Storybook",
    "Micro Frontends",
    "Monorepo",
    "API Integration",
    "MUI",
    "Ant Design",
    "Tailwind CSS",
    "SASS",
    "Firebase",
    "Docker",
    "Azure",
    "Vite",
    "Expo",
  ],

  stackGroups: [
    {
      title: "Frontend systems",
      note: "Product UI, architecture, and maintainable component work.",
      items: ["React.js", "Next.js", "TypeScript", "JavaScript ES6+", "Storybook"],
    },
    {
      title: "Mobile delivery",
      note: "Cross-platform app work with production-focused state and release flow.",
      items: ["React Native", "Expo", "Redux", "Zustand", "Context API"],
    },
    {
      title: "Quality and scale",
      note: "Patterns used when interfaces need to stay reliable under growth.",
      items: [
        "Jest",
        "React Testing Library",
        "Micro Frontends",
        "Monorepo",
        "web hooks",
        "Graph QL",
        "API Integration",
        "Prettier"
      ],
    },
    {
      title: "Design and platform",
      note: "UI libraries, styling systems, and infrastructure around delivery.",
      items: [
        "MUI",
        "Ant Design",
        "Tailwind CSS",
        "SASS",
        "Chakra UI",
        "Google Cloud Platform",
        "Firebase",
        "Docker",
        "Azure",
        "Vite",
      ],
    },
    {
      title: "AI & Agentic Development",
      note: "AI-assisted development, autonomous coding workflows, and modern LLM tooling used to accelerate software delivery.",
      items: [
        "OpenAI",
        "ChatGPT",
        "GitHub Copilot",
        "Claude Code",
        "OpenAI Codex",
        "Cursor",
        "Agentic Development",
        "Prompt Engineering",
        "AI-assisted Development",
        "LLM Integration",
      ],
    },
    {
      title: "Frontend Libraries",
      note: "Battle-tested libraries used to build scalable, interactive, and data-driven React applications.",
      items: [
        "Chart.js",
        "Recharts",
        "TanStack Query",
        "Formik",
        "Yup",
        "Gatsby",
        "React Hook Form",
        "Tree Js",
        "Framer Motion",
      ],
    },
  ] satisfies StackGroup[],

  educationSection: {
    eyebrow: "EDUCATION",
    title: "Formal foundation.",
  },

  education: [
    {
      title: "BEng in Software Engineering",
      place: "London Metropolitan University",
      period: "02/2023 - 01/2024",
      result: "Upper Second Class Honors",
    },
    {
      title: "Diploma in Information Technology",
      place: "University of Colombo",
      period: "01/2021 - 01/2022",
      result: "IT",
    },
  ] satisfies EducationItem[],

  contact: {
    eyebrow: "CONTACT",
    title: "Hard frontend problems welcome.",
    items: [
      {
        label: "RESUME",
        value: "View resume",
        href: resumeUrl,
        external: true,
        icon: "resume",
      },
      {
        label: "EMAIL",
        value: "bagimshan@gmail.com",
        href: "mailto:bagimshan@gmail.com",
        icon: "email",
      },
      {
        label: "GITHUB",
        value: "github.com/nekromenzer",
        href: "https://github.com/nekromenzer",
        icon: "github",
        external: true,
      },
      {
        label: "LINKEDIN",
        value: "linkedin.com/in/maneesha-gimshan",
        href: "https://www.linkedin.com/in/maneesha-gimshan/",
        icon: "linkedin",
        external: true,
      },
      {
        label: "PHONE",
        value: "+971 55 288 3528",
        href: "tel:+971552883528",
        icon: "phone",
      },
      {
        label: "LOCATION",
        value: "Dubai, UAE",
        href: "https://maps.google.com/?q=Dubai,UAE",
        icon: "location",
        external: true,
      },
    ] satisfies ContactItem[],
  },
};
