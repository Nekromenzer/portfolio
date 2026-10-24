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

export const resumeUrl = "https://rxresu.me/bagimshan/maneesha-gimshan-2026-eu";

export const portfolioData = {
  navItems: ["ABOUT", "EXPERIENCE", "IMPACT", "WORK", "STACK", "BLOG", "CONTACT"],
  hero: {
    pretitle:
      "Frontend systems • Mobile products • AI-driven workflows",
    firstName: "Maneesha",
    lastName: "Barandeniya",
    role: "Senior Frontend Engineer",
    company: "Dubai Technologies",
    period: "Nov 2024 - Present",
    imageSrc: "/profile.png",
    heroImageSrc: "/hero-image.png",
    imageAlt: "Maneesha Barandeniya",
    sideMarkInitial: "MG",
    sideMarkLabel: "Maneesha",
    signal: "BUILDING: PRODUCT FRONTENDS • NOT: STATIC PAGES",
    actions: {
      email: "mailto:bagimshan@gmail.com",
      github: "https://github.com/nekromenzer",
      linkedin: "https://www.linkedin.com/in/maneesha-gimshan/",
      resumeView: resumeUrl,
      resumeViewLabel: "VIEW RESUME",
    },
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
    currentBadge: "CURRENT LOCATION",
    previousBadge: "PREVIOUS LOCATION",
    projectsTitle: "Projects delivered here",
  },
  experience: [
    {
      period: "11/2024 - Present",
      role: "Senior Frontend Engineer",
      company: "Dubai Technologies",
      location: "Dubai, UAE",
      mapLabel: "UAE",
      countryCode: "UAE",
      latitude: 25.2048,
      longitude: 55.2708,
      isCurrent: true,
      body: "Designing scalable React micro-frontends and data-intensive geospatial interfaces with Leaflet and Mapbox. Improved geolocation data rendering performance by approximately 60% through component and data-processing optimization.",
      projects: [
        {
          title: "Enterprise Geospatial Mapping Platform",
          place: "Dubai, UAE",
          description:
            "Developed responsive, data-intensive geospatial interfaces using React.js, Leaflet and Mapbox, with a focus on efficient rendering at scale.",
        },
        {
          title: "Micro-Frontend Enterprise Platform",
          place: "Dubai, UAE",
          description:
            "Worked across multiple React micro-frontends delivering reusable modules, scalable architecture and seamless cross-team integration.",
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
      body: "Built React Native and React applications for fintech, telephony, crypto and real-estate platforms while leading frontend architecture and reusable component development.",
      projects: [
        {
          title: "Tellit - Business Communication App",
          place: "Remote, Sweden",
          href: "https://www.tellit.se/",
          description:
            "Led the architecture and development of the Tellit mobile app from scratch, a B2B telephony solution integrating call management, personalized numbers, presence status, and mobile subscriptions. Engineered a seamless UI/UX, integrated advanced telephony APIs, and optimized Android and iOS delivery with cross-platform tools.",
        },
        {
          title: "Tecta - Cloud-Based Real Estate Backoffice System",
          place: "Remote, Sweden",
          href: "https://tecta.se/",
          description:
            "Developed a secure real estate management platform enabling Swedish users to register properties via BankID. Focused on frontend architecture, plugin management, virtualized data handling, and responsive dashboards to streamline property and tenant oversight.",
        },
        {
          title: "TradingBot - Crypto Trading Interface",
          place: "Global",
          description:
            "Built an intuitive trading dashboard that enabled users to automate strategies, monitor trends, and execute trades on Binance. Collaborated closely with design and backend teams to refine flows and ensure responsive, data-driven UI components.",
        },
        {
          title: "TaskBuddy - Task Management Tool",
          place: "Remote, Netherlands",
          description:
            "Contributed to the design and functionality of a productivity app for task tracking and team collaboration, with emphasis on responsive interfaces and clean user flows.",
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
      body: "Developed modern SaaS applications using React, Next.js, TypeScript and GraphQL while improving reusable UI architecture and application performance.",
      projects: [
        {
          title: "Next.js Development",
          description:
            "Built dynamic, scalable web applications leveraging server-side rendering and static site generation for optimal performance and SEO impact.",
        },
        {
          title: "GraphQL Integration",
          description:
            "Designed and implemented a robust GraphQL layer to streamline data fetching, reduce over-fetching, and improve client-server communication efficiency.",
        },
        {
          title: "TypeScript Adoption",
          description:
            "Utilized TypeScript to enhance code quality, enforce type safety, and improve code maintainability and developer productivity across the codebase.",
        },
        {
          title: "Cross-Functional Collaboration",
          description:
            "Worked closely with designers, backend engineers, and product managers to gather requirements and deliver user-centric solutions that aligned with business goals.",
        },
        {
          title: "Code Quality & Best Practices",
          description:
            "Participated actively in code reviews, promoted clean code standards, and ensured adherence to modern frontend development best practices.",
        },
        {
          title: "Continuous Learning & Innovation",
          description:
            "Explored and integrated emerging tools and technologies to optimize development workflows and stay ahead of industry trends.",
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
      body: "Built online resume and cover letter products with React while improving SEO, accessibility, performance and frontend architecture.",
      projects: [
        {
          title: "Modern Web Development",
          description:
            "Built responsive and accessible UIs using React.js, HTML5, CSS3, JavaScript ES6+, and Tailwind CSS, ensuring cross-device compatibility and fast load times. Improved page load performance by approximately 30%, leading to a smoother user experience.",
        },
        {
          title: "Machine Learning Personalization",
          description:
            "Integrated machine learning algorithms through TensorFlow.js and backend APIs to deliver real-time content suggestions based on user behavior and input context. Boosted user engagement by 30% through personalized document guidance.",
        },
        {
          title: "SEO Optimization",
          description:
            "Implemented a robust SEO strategy using Next.js, structured metadata, keyword optimization, and canonical tagging. Achieved a 60% increase in organic traffic and improved SERP ranking for targeted keywords.",
        },
        {
          title: "Collaborative UI/UX Delivery",
          description:
            "Worked alongside Figma-based UX/UI designs to implement visually polished and highly usable components. Contributed to increasing user retention by 25% through consistent design language and improved navigation flows.",
        },
        {
          title: "Agile & Feedback-Driven Development",
          description:
            "Collaborated in an Agile environment with product managers and QA teams. Gathered user feedback through analytics and A/B testing, then iterated on features for better usability and adoption.",
        },
        {
          title: "Cross-Team Communication",
          description:
            "Acted as the bridge between frontend, ML, and backend teams, ensuring seamless integration of APIs, personalized logic, and frontend performance.",
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
    ["40%", "Firestore usage optimized", "TurnTaxi real-time sync"],
    ["30%", "page load reduction", "Treeloq resume builder"],
    ["7", "years of experience", "SaaS, FinTech, enterprise"],
    ["20+", "tools and frameworks", "Frontend and mobile stack"],
    ["1000s", "users served", "multi-region SaaS products"],
    ["4", "major role chapters", "startup to enterprise delivery"],
    ["2", "formal qualifications", "BEng + IT diploma"],
  ] satisfies ImpactItem[],

  workSection: {
    eyebrow: "WORK",
    title: "Systems that had to hold.",
    copy: "Selected builds arranged like a project wall. Open any tile for the full delivery story.",
  },

  work: [
    {
      name: "ReiseCeylon",
      label: "TRAVEL PLATFORM • SEO & CONTENT SYSTEM",
      meta: "Live Product • Sri Lanka Travel",
      cover: {
        src: "/projects-logo/reiseceylon-home.webp",
        alt: "ReiseCeylon homepage presenting private journeys across Sri Lanka",
      },
      logo: {
        initials: "RC",
        alt: "ReiseCeylon",
      },
      context:
        "A Sri Lankan travel business needed more than a polished brochure: it needed a fast, multilingual discovery experience that could earn search visibility, help real travellers explore the island, and turn that interest into direct journey enquiries.",
      approach:
        "Designed and built a story-led travel platform around destination discovery, practical journey planning, strong technical SEO, and a generative journal workflow that expands useful search content without removing editorial control.",
      system:
        "Next.js serves localized routes in English, German, French, and Dutch with responsive imagery, route-level metadata, canonical URLs, structured data, sitemaps, and lean client translation payloads. Sanity manages destinations and journal content, while GitHub Actions and OpenAI create multilingual blog drafts with validated internal links. Every generated article remains gated by human fact-checking, translation review, image ownership, scheduling, and approval before publication; Sanity webhooks then invalidate the relevant cached pages.",
      outcome:
        "A live, search-ready travel product that connects organic discovery to destination exploration and direct planning enquiries, supported by a scalable human-reviewed content engine rather than one-off pages.",
      href: "https://www.reiseceylon.com/",
      accent: "#d4a83f",
      stats: [
        ["4 Locales", "English, German, French, Dutch"],
        ["75 Places", "Searchable Island Atlas"],
        ["Draft → Review", "Human-Gated AI Publishing"],
      ],
      stack: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "next-intl",
        "Sanity",
        "OpenAI",
        "GitHub Actions",
        "Structured Data",
        "Technical SEO",
        "Vercel Analytics",
        "GSAP",
        "Leaflet",
        "Resend",
      ],
    },
    {
      name: "Showloomz",
      label: "MULTI-TENANT SAAS • PORTFOLIO PLATFORM",
      meta: "Product • Jun 2026 - Present",
      logo: {
        initials: "SL",
        alt: "Showloomz",
        src: "/projects-logo/showloomz-logo.png",
      },
      context:
        "Photographers, studios and visual businesses need a premium portfolio site on their own domain, plus galleries, client proofing, invoicing and billing — without managing any infrastructure themselves.",
      approach:
        "Built a multi-tenant SaaS end to end where a business subscribes to a plan, picks a theme, connects a custom domain and gets a fully managed website backed by a content dashboard.",
      system:
        "One Next.js application serves three surfaces — public tenant sites resolved by hostname middleware across three designed themes, a tenant dashboard for galleries, packages, enquiries, invoices, domains and billing, and a platform admin console for tenant lifecycle, plan versions and payments. Tenant isolation is an invariant, entitlements resolve from immutable plan versions, billing runs on idempotent payment webhooks, uploads go presigned direct to Cloudflare R2, and client proofing uses unguessable share tokens gated to the signed-in matching email.",
      outcome:
        "A managed platform that launches a premium portfolio site on a custom domain with proofing, invoicing and subscription billing, without the tenant touching infrastructure.",
      href: "https://showloomz.online/",
      accent: "#c9a0ff",
      stats: [
        ["Multi-Tenant", "Hostname Routing"],
        ["3 Themes", "Designed Tenant Sites"],
        ["Webhook-Driven", "Subscription Billing"],
      ],
      stack: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind v4",
        "Radix / shadcn",
        "React Hook Form",
        "Zod",
        "PostgreSQL",
        "AWS Cognito",
        "Cloudflare R2",
        "Dodo Payments",
        "Resend",
        "pdf-lib",
        "GSAP",
        "Vitest",
        "Docker",
      ],
    },
    {
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
      name: "TurnTaxi",
      label: "REAL-TIME MOBILITY PLATFORM",
      meta: "Commercial Project • Jun 2024 - Present",
      logo: {
        initials: "TT",
        alt: "TurnTaxi",
        src: '/projects-logo/logo-trans.png'
      },
      context:
        "A ride-hailing application requiring reliable real-time driver tracking, routing, fare calculation and trip state management.",
      approach:
        "Built a complete Uber-style experience using React Native with Google Maps, Firebase, push notifications and real-time synchronization.",
      system:
        "Implemented live driver tracking, trip state machine, routing, fare calculation, Firestore synchronization and notification workflows.",
      outcome:
        "Optimized Firestore usage by 40% while delivering a fast and reliable ride-booking experience.",
      href: "https://turntaxi.com/",
      accent: "#8cb3ff",
      stats: [
        ["40%", "Firestore Optimization"],
        ["Realtime", "Driver Tracking"],
        ["Google Maps", "Navigation"],
      ],
      stack: [
        "React Native",
        "Firebase",
        "Google Maps",
        "Firestore",
        "GCP",
        "Push Notifications",
      ],
    },
    {
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
      name: "Trust-ora",
      label: "AI-ASSISTED • SECURE FINTECH PLATFORM",
      meta: "Mobile App • Admin Dashboard • Backend System",
      logo: {
        initials: "TO",
        alt: "Trust Ora",
        src: '/projects-logo/trustora-mark.png'
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
