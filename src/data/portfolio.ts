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
  navItems: ["ABOUT", "EXPERIENCE", "IMPACT", "WORK", "STACK", "CONTACT"],
  hero: {
    pretitle:
      "Frontend systems • Mobile products • AI-driven workflows",
    firstName: "Maneesha",
    lastName: "Barandeniya",
    role: "Senior React Developer",
    company: "Dubai Technologies",
    period: "Nov 2024 - Present",
    imageSrc: "/profile.png",
    imageAlt: "Maneesha Barandeniya",
    sideMarkInitial: "M.",
    sideMarkLabel: "Maneesha",
    signal: "BUILDING: PRODUCT FRONTENDS • NOT: STATIC PAGES",
    actions: {
      email: "mailto:bagimshan@gmail.com",
      github: "https://github.com/nekromenzer",
      linkedin: "https://www.linkedin.com/in/maneesha-gimshan/",
      resume: "/maneesha-gimshan.pdf",
      resumeLabel: "DOWNLOAD RESUME",
    },
  },
  about: {
    eyebrow: "ABOUT",
    title: "Frontend is easy. Product-grade frontend is not.",
    paragraphs: [
      "Senior Frontend Engineer specializing in React.js, TypeScript, Next.js, and React Native with extensive experience building SaaS, FinTech, and enterprise applications.",
      "Strong expertise in frontend architecture, API integration, testing, accessibility, performance optimization, responsive UI development, and leading technical initiatives that improve developer experience.",
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
      role: "Senior React Developer",
      company: "Dubai Technologies",
      location: "Dubai, UAE",
      mapLabel: "UAE",
      countryCode: "UAE",
      latitude: 25.2048,
      longitude: 55.2708,
      isCurrent: true,
      body: "React micro-frontends, map-heavy geolocation UX, Leaflet/Mapbox rendering, secure auth flows, frontend security, mentoring, and code review.",
      projects: [
        {
          title: "Enterprise logistics dashboard revamp",
          place: "Dubai, UAE",
          description:
            "Modernized operational dashboards with React micro-frontends, cleaner data surfaces, and faster decision workflows for logistics teams.",
        },
        {
          title: "Map-heavy operations console",
          place: "Dubai, UAE",
          description:
            "Built geolocation-heavy interfaces using Leaflet and Mapbox patterns for real-time fleet visibility and map-driven task handling.",
        },
        {
          title: "Secure multi-tenant admin shell",
          place: "Dubai, UAE",
          description:
            "Improved authenticated admin flows, permission-aware navigation, and reusable frontend foundations for multi-tenant enterprise users.",
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
      body: "React Native apps for crypto bots, real estate, and finance; monorepo architecture; React/Redux web apps; smart-contract and API integrations; Jest and React Testing Library.",
      projects: [
        {
          title: "Mobile fintech wallet experience",
          place: "Remote, Netherlands",
          description:
            "Delivered React Native wallet screens, transaction flows, and finance-focused mobile interactions backed by API integrations.",
        },
        {
          title: "Crypto automation dashboard",
          place: "Remote, Netherlands",
          description:
            "Created web dashboard workflows for crypto bots, smart-contract integrations, portfolio controls, and automation visibility.",
        },
        {
          title: "Shared monorepo component library",
          place: "Remote, Netherlands",
          description:
            "Built reusable React and React Native components inside a monorepo to improve delivery speed and interface consistency.",
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
      body: "Mobile-friendly SaaS admin panel work with Chakra UI, React, Next.js, TypeScript, Storybook, ES6, generics, utility types, and reusable components.",
      projects: [
        {
          title: "SaaS admin panel redesign",
          place: "Remote, Sweden",
          description:
            "Reworked admin panel screens with Chakra UI, responsive layouts, and typed React patterns for SaaS operations.",
        },
        {
          title: "Design system component rollout",
          place: "Remote, Sweden",
          description:
            "Expanded reusable TypeScript components and UI patterns to make product screens easier to maintain and extend.",
        },
        {
          title: "Storybook documentation workspace",
          place: "Remote, Sweden",
          description:
            "Documented shared components and interaction states in Storybook so teams could review and reuse interface pieces reliably.",
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
      body: "Online resume builder and cover letter app, JSX template conversion, SEO improvements, WCAG-friendly interfaces, keyboard navigation, and 30% faster page loads.",
      projects: [
        {
          title: "Resume builder product flow",
          place: "Sri Lanka",
          description:
            "Built guided resume creation screens, template conversion flows, and user-friendly editing paths for job seekers.",
        },
        {
          title: "Cover letter generator workspace",
          place: "Sri Lanka",
          description:
            "Created workspace interactions for generating, editing, and managing cover letters alongside resume content.",
        },
        {
          title: "SEO and accessibility overhaul",
          place: "Sri Lanka",
          description:
            "Improved semantic structure, keyboard navigation, WCAG-friendly UI behavior, and page performance for public-facing product pages.",
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
    ["4+", "years production React", "SaaS, FinTech, enterprise"],
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
      name: "AI-based Resume Management System",
      label: "AI PRODUCT • IN DEVELOPMENT",
      meta: "Personal • May 2022 - Present",
      logo: {
        initials: "AI",
        alt: "AI Resume Management System logo placeholder",
      },
      context:
        "Job seekers need role-specific resumes, while employers need stronger candidate matching instead of generic profile screening.",
      approach:
        "Built React and TypeScript interfaces for resume generation, candidate management, and AI-powered enhancement from job descriptions.",
      system:
        "The product combines guided resume creation, content generation, job-description tailoring, and employer-facing candidate review workflows.",
      outcome:
        "Improves resume quality, application relevance, and candidate matching accuracy through AI-assisted content and structured workflows.",
      accent: "#61d3c3",
      stats: [
        ["AI", "resume tailoring engine"],
        ["B2B + B2C", "candidate and employer flow"],
        ["WIP", "still evolving"],
      ],
      stack: ["React", "TypeScript", "Prompt UX", "Structured forms"],
    },
    {
      name: "TurnTaxi",
      label: "MOBILITY • REAL-TIME SYSTEM",
      meta: "Commercial project • Jun 2024 - Present",
      logo: {
        initials: "TT",
        alt: "TurnTaxi logo placeholder",
      },
      context:
        "A ride platform needs live driver visibility, reliable trip states, fare calculation, routing, and instant user feedback.",
      approach:
        "Implemented an Uber-style product with live driver tracking, Google Maps routing, push notifications, and trip state management.",
      system:
        "Firebase Firestore powers real-time synchronization between ride state, location updates, and mobile app interactions.",
      outcome:
        "Optimized Firestore usage by 40% while keeping the core ride experience responsive and predictable.",
      href: "https://turntaxi.com/",
      accent: "#8cb3ff",
      stats: [
        ["40%", "Firestore usage reduction"],
        ["Realtime", "driver and trip sync"],
        ["Maps", "routing and tracking"],
      ],
      stack: ["React Native", "Firebase", "Google Maps", "Push notifications"],
    },
    {
      name: "Micro-frontend map platform",
      label: "CLIENT DELIVERY • ENTERPRISE FRONTEND",
      meta: "Dubai Technologies • Nov 2024 - Present",
      logo: {
        initials: "DT",
        alt: "Dubai Technologies project logo placeholder",
      },
      context:
        "Large teams needed modular frontend delivery while map-heavy workflows had to render geolocation data quickly and reliably.",
      approach:
        "Designed scalable React micro-frontends and engineered Leaflet/Mapbox map features with secure authentication practices.",
      system:
        "Independent frontend modules support team deployments, while map rendering and auth flows are optimized around production constraints.",
      outcome:
        "Improved geolocation data rendering speed by 60% and strengthened frontend security practices around XSS and CSRF.",
      accent: "#f0b46a",
      stats: [
        ["60%", "faster geolocation rendering"],
        ["MFE", "modular team delivery"],
        ["Secure", "auth-first frontend"],
      ],
      stack: ["React", "Micro-frontends", "Leaflet", "Mapbox"],
    },
    {
      name: "Finance and mobile systems",
      label: "FINTECH • MOBILE PRODUCT",
      meta: "Parkway Labs • Feb 2022 - Nov 2024",
      logo: {
        initials: "PL",
        alt: "Parkway Labs project logo placeholder",
      },
      context:
        "Finance, crypto bot, and real estate products required secure mobile UX, API reliability, and reusable frontend architecture.",
      approach:
        "Led React Native apps, built React and Redux web apps, and integrated APIs, smart contracts, tests, and client requirements.",
      system:
        "Monorepo architecture improved code reuse, scalability, collaboration, and consistency across multiple product surfaces.",
      outcome:
        "Delivered high-quality cross-platform apps with robust performance, security standards, and unit/integration coverage.",
      accent: "#d77676",
      stats: [
        ["Cross-platform", "mobile + web delivery"],
        ["Monorepo", "shared product architecture"],
        ["Finance", "secure API-heavy flows"],
      ],
      stack: ["React Native", "React", "Redux", "API integrations"],
    },
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
      ["20+", "core tools used in production"],
      ["4", "delivery lanes across web, mobile, scale, platform"],
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
      items: ["React Native", "Expo", "Redux", "Zustand"],
    },
    {
      title: "Quality and scale",
      note: "Patterns used when interfaces need to stay reliable under growth.",
      items: [
        "Jest",
        "React Testing Library",
        "Micro Frontends",
        "Monorepo",
        "API Integration",
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
        "Firebase",
        "Docker",
        "Azure",
        "Vite",
      ],
    },
  ] satisfies StackGroup[],
  educationSection: {
    eyebrow: "EDUCATION",
    title: "Formal foundation.",
  },
  education: [
    {
      title: "Bachelor of Engineering, Software Engineering",
      place: "London Metropolitan University",
      period: "02/2023 - 01/2024",
      result: "Upper Second Class Honors",
    },
    {
      title: "Diploma in Information Technology",
      place: "University of Colombo",
      period: "01/2021 - 01/2022",
      result: "Colombo",
    },
  ] satisfies EducationItem[],
  contact: {
    eyebrow: "CONTACT",
    title: "Hard frontend problems welcome.",
    items: [
      {
        label: "RESUME",
        value: "maneesha-gimshan.pdf",
        href: "/maneesha-gimshan.pdf",
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
