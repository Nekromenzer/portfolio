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
    sideMarkInitial: "MG",
    sideMarkLabel: "Maneesha",
    signal: "BUILDING: PRODUCT FRONTENDS • NOT: STATIC PAGES",
    actions: {
      email: "mailto:bagimshan@gmail.com",
      github: "https://github.com/nekromenzer",
      linkedin: "https://www.linkedin.com/in/maneesha-gimshan/",
      resumeView: "/api/resume?mode=view",
      resumeDownload: "/api/resume?mode=download",
      resumeLabel: "DOWNLOAD RESUME",
      resumeViewLabel: "VIEW RESUME",
    },
  },
  about: {
    eyebrow: "ABOUT",
    title: "Building experiences that work beautifully at scale.",
    paragraphs: [

      "I'm a Senior React Developer with 6+ years of experience building modern web and mobile applications using React.js, Next.js, React Native, and TypeScript. I enjoy turning complex business requirements into intuitive, high-performance user experiences.",

      "Throughout my career, I've worked across startups, SaaS products, fintech platforms, enterprise applications, and real-time mobility systems. My experience spans frontend architecture, reusable component systems, API integrations, authentication, state management, and cross-platform development.",

      "Most recently at Dubai Technologies, I've been developing enterprise geospatial applications using React micro-frontends, Leaflet, Mapbox, and ArcGIS. My work focuses on scalable frontend architecture, performance optimization, and rendering large geolocation datasets efficiently.",

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
      role: "Senior React Developer",
      company: "Dubai Technologies",
      location: "Dubai, UAE",
      mapLabel: "UAE",
      countryCode: "UAE",
      latitude: 25.2048,
      longitude: 55.2708,
      isCurrent: true,
      body: "Developing enterprise geospatial applications using React, Micro-frontends, Leaflet, Mapbox and ArcGIS. Focused on high-performance rendering, modular architecture, and scalable mapping solutions.",
      projects: [
        {
          title: "Enterprise Geospatial Mapping Platform",
          place: "Dubai, UAE",
          description:
            "Developed advanced geospatial visualization using Leaflet, Mapbox and ArcGIS with custom clustering, polylines and large-scale marker rendering.",
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
          title: "Tellit Business Communication Platform",
          place: "Remote, Netherlands",
          description:
            "Led development of a cross-platform business telephony application with call management, subscriptions, personalized numbers and presence status.",
        },
        {
          title: "Tecta Real Estate Platform",
          place: "Remote, Netherlands",
          description:
            "Developed a cloud-based real-estate back-office system with BankID integration, dashboards, plugin architecture and virtualized data handling.",
        },
        {
          title: "TradingBot",
          place: "Remote, Netherlands",
          description:
            "Built a crypto trading dashboard supporting Binance automation, portfolio monitoring and responsive trading workflows.",
        },
        {
          title: "TaskBuddy",
          place: "Remote, Netherlands",
          description:
            "Developed responsive task management interfaces for productivity and team collaboration.",
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
          title: "SaaS Administration Platform",
          place: "Remote, Sweden",
          description:
            "Developed responsive administration dashboards using React, Next.js, Chakra UI and TypeScript.",
        },
        {
          title: "GraphQL Integration",
          place: "Remote, Sweden",
          description:
            "Implemented GraphQL data layers improving client-server communication and reducing unnecessary network requests.",
        },
        {
          title: "Reusable Component Library",
          place: "Remote, Sweden",
          description:
            "Built reusable Storybook-based UI components following scalable frontend architecture and best practices.",
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
          title: "Resume Builder",
          place: "Sri Lanka",
          description:
            "Developed an online resume builder with reusable templates, dynamic editing and responsive user experience.",
        },
        {
          title: "Cover Letter Builder",
          place: "Sri Lanka",
          description:
            "Built an interactive cover letter generation platform with reusable React components.",
        },
        {
          title: "SEO & Performance Optimization",
          place: "Sri Lanka",
          description:
            "Improved SEO, accessibility and frontend performance resulting in faster page loads and improved search visibility.",
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
    ["6+", "years production React", "SaaS, FinTech, enterprise"],
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
        ,
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
    {
      title: "English Language & Literature",
      place: "University Of Cambridge",
      period: "2016 - 2017",
      result: "B+",
    },
  ] satisfies EducationItem[],

  contact: {
    eyebrow: "CONTACT",
    title: "Hard frontend problems welcome.",
    items: [
      {
        label: "RESUME",
        value: "Download PDF",
        href: "/api/resume?mode=download",
        icon: "resume",
      },
      {
        label: "RESUME",
        value: "View PDF",
        href: "/api/resume?mode=view",
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
