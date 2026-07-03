"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  FileText,
  Mail,
  MapPin,
  Moon,
  Sun,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const navItems = ["ABOUT", "EXPERIENCE", "IMPACT", "WORK", "STACK", "CONTACT"];

const work = [
  {
    name: "AI-based Resume Management System",
    label: "AI PRODUCT • IN DEVELOPMENT",
    meta: "Personal • May 2022 - Present",
    context:
      "Job seekers need role-specific resumes, while employers need stronger candidate matching instead of generic profile screening.",
    approach:
      "Built React and TypeScript interfaces for resume generation, candidate management, and AI-powered enhancement from job descriptions.",
    system:
      "The product combines guided resume creation, content generation, job-description tailoring, and employer-facing candidate review workflows.",
    outcome:
      "Improves resume quality, application relevance, and candidate matching accuracy through AI-assisted content and structured workflows.",
  },
  {
    name: "TurnTaxi",
    label: "MOBILITY • REAL-TIME SYSTEM",
    meta: "Commercial project • Jun 2024 - Present",
    context:
      "A ride platform needs live driver visibility, reliable trip states, fare calculation, routing, and instant user feedback.",
    approach:
      "Implemented an Uber-style product with live driver tracking, Google Maps routing, push notifications, and trip state management.",
    system:
      "Firebase Firestore powers real-time synchronization between ride state, location updates, and mobile app interactions.",
    outcome:
      "Optimized Firestore usage by 40% while keeping the core ride experience responsive and predictable.",
    href: "https://turntaxi.com/",
  },
  {
    name: "Micro-frontend map platform",
    label: "CLIENT DELIVERY • ENTERPRISE FRONTEND",
    meta: "Dubai Technologies • Nov 2024 - Present",
    context:
      "Large teams needed modular frontend delivery while map-heavy workflows had to render geolocation data quickly and reliably.",
    approach:
      "Designed scalable React micro-frontends and engineered Leaflet/Mapbox map features with secure authentication practices.",
    system:
      "Independent frontend modules support team deployments, while map rendering and auth flows are optimized around production constraints.",
    outcome:
      "Improved geolocation data rendering speed by 60% and strengthened frontend security practices around XSS and CSRF.",
  },
  {
    name: "Finance and mobile systems",
    label: "FINTECH • MOBILE PRODUCT",
    meta: "Parkway Labs • Feb 2022 - Nov 2024",
    context:
      "Finance, crypto bot, and real estate products required secure mobile UX, API reliability, and reusable frontend architecture.",
    approach:
      "Led React Native apps, built React and Redux web apps, and integrated APIs, smart contracts, tests, and client requirements.",
    system:
      "Monorepo architecture improved code reuse, scalability, collaboration, and consistency across multiple product surfaces.",
    outcome:
      "Delivered high-quality cross-platform apps with robust performance, security standards, and unit/integration coverage.",
  },
];

const experience = [
  {
    period: "11/2024 - Present",
    role: "Senior React Developer",
    company: "Dubai Technologies",
    location: "Dubai, UAE",
    body: "React micro-frontends, map-heavy geolocation UX, Leaflet/Mapbox rendering, secure auth flows, frontend security, mentoring, and code review.",
  },
  {
    period: "02/2022 - 11/2024",
    role: "Software Engineer",
    company: "Parkway Labs",
    location: "Remote, Netherlands",
    body: "React Native apps for crypto bots, real estate, and finance; monorepo architecture; React/Redux web apps; smart-contract and API integrations; Jest and React Testing Library.",
  },
  {
    period: "06/2021 - 02/2022",
    role: "Software Developer",
    company: "Qualia Tech International",
    location: "Remote, Sweden",
    body: "Mobile-friendly SaaS admin panel work with Chakra UI, React, Next.js, TypeScript, Storybook, ES6, generics, utility types, and reusable components.",
  },
  {
    period: "09/2019 - 06/2021",
    role: "Frontend Developer",
    company: "Treeloq",
    location: "Hybrid, Sri Lanka",
    body: "Online resume builder and cover letter app, JSX template conversion, SEO improvements, WCAG-friendly interfaces, keyboard navigation, and 30% faster page loads.",
  },
];

const impact = [
  ["60%", "faster geolocation rendering", "Leaflet / Mapbox platform"],
  ["40%", "Firestore usage optimized", "TurnTaxi real-time sync"],
  ["30%", "page load reduction", "Treeloq resume builder"],
  ["4+", "years production React", "SaaS, FinTech, enterprise"],
  ["20+", "tools and frameworks", "Frontend and mobile stack"],
  ["1000s", "users served", "multi-region SaaS products"],
  ["4", "major role chapters", "startup to enterprise delivery"],
  ["2", "formal qualifications", "BEng + IT diploma"],
];

const stack = [
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
];

const education = [
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
];

function formatTime(zone: string) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: zone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [clock, setClock] = useState({ dxb: "--:--:--", cmb: "--:--:--" });
  const [pointer, setPointer] = useState({ x: "0.0000", y: "0.0000" });

  useEffect(() => {
    const savedTheme =
      window.localStorage.getItem("theme") === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = savedTheme;

    const timeout = window.setTimeout(() => setTheme(savedTheme), 0);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const tick = () =>
      setClock({
        dxb: formatTime("Asia/Dubai"),
        cmb: formatTime("Asia/Colombo"),
      });

    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const updatePointer = (event: PointerEvent) => {
      setPointer({
        x: (event.clientX / window.innerWidth).toFixed(4),
        y: (event.clientY / window.innerHeight).toFixed(4),
      });
    };

    window.addEventListener("pointermove", updatePointer);
    return () => window.removeEventListener("pointermove", updatePointer);
  }, []);

  const topStack = useMemo(() => stack.slice(0, 8).join(" • "), []);

  return (
    <main className="site-shell">
      <div className="noise-layer" />
      <aside className="side-mark" aria-hidden>
        <span>M.</span>
        <strong>Maneesha</strong>
      </aside>

      <header className="topbar">
        <div className="telemetry">
          <span>DXB</span>
          <strong>{clock.dxb}</strong>
          <span>CMB</span>
          <strong>{clock.cmb}</strong>
        </div>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="theme-toggle"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          <span>{theme === "dark" ? "LIGHT" : "DARK"}</span>
        </button>
      </header>

      <section className="hero section" id="about">
        <div className="hero-copy">
          <p className="pretitle">
            Senior React Developer • Frontend systems • Mobile products •
            AI-driven workflows
          </p>
          <h1>
            <span>Maneesha</span>
            <span>Barandeniya</span>
          </h1>

          <div className="hero-meta">
            <div>
              <span>ROLE</span>
              <strong>Senior React Developer</strong>
            </div>
            <div>
              <span>COMPANY</span>
              <strong>Dubai Technologies</strong>
              <em>Nov 2024 - Present</em>
            </div>
          </div>

          <div className="hero-actions">
            <a href="mailto:bagimshan@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
            <a
              href="https://github.com/nekromenzer"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Code2 size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/maneesha-gimshan/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness size={18} />
            </a>
            <a className="resume-link" href="/maneesha-gimshan.pdf">
              <FileText size={16} />
              DOWNLOAD RESUME
            </a>
          </div>
        </div>

        <div className="portrait-panel">
          <Image
            src="/profile.jpeg"
            alt="Maneesha Barandeniya"
            width={400}
            height={400}
            priority
          />
          <div>
            <span>{topStack}</span>
            <strong>BUILDING: PRODUCT FRONTENDS • NOT: STATIC PAGES</strong>
          </div>
        </div>

        <div className="coordinate-panel" aria-hidden>
          <span>X {pointer.x}</span>
          <span>Y {pointer.y}</span>
        </div>
      </section>

      <section className="section about-grid">
        <div>
          <p className="eyebrow">ABOUT</p>
          <h2>Frontend is easy. Product-grade frontend is not.</h2>
        </div>
        <div className="about-body">
          <p>
            Senior Frontend Engineer specializing in React.js, TypeScript,
            Next.js, and React Native with extensive experience building SaaS,
            FinTech, and enterprise applications.
          </p>
          <p>
            Strong expertise in frontend architecture, API integration, testing,
            accessibility, performance optimization, responsive UI development,
            and leading technical initiatives that improve developer experience.
          </p>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">EXPERIENCE</p>
          <h2>The trajectory.</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article key={`${item.company}-${item.period}`} className="timeline-row">
              <div>
                <span>{item.period}</span>
                <strong>{item.location}</strong>
              </div>
              <div>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="impact">
        <div className="section-heading">
          <p className="eyebrow">IMPACT</p>
          <h2>Proof, not promises.</h2>
        </div>
        <div className="impact-grid">
          {impact.map(([value, label, source]) => (
            <a key={`${value}-${label}`} href="#work" className="impact-card">
              <strong>{value}</strong>
              <span>{label}</span>
              <em>{source}</em>
            </a>
          ))}
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-heading">
          <p className="eyebrow">WORK</p>
          <h2>Systems that had to hold.</h2>
        </div>
        <div className="work-grid">
          {work.map((item) => (
            <a
              key={item.name}
              href={item.href ?? "#contact"}
              target={item.href ? "_blank" : undefined}
              rel={item.href ? "noreferrer" : undefined}
              className="work-card"
            >
              <div className="work-card-head">
                <span>{item.name}</span>
                <ArrowUpRight size={18} />
              </div>
              <p className="tagline">{item.label}</p>
              <p className="meta-line">{item.meta}</p>
              <dl>
                <dt>CONTEXT</dt>
                <dd>{item.context}</dd>
                <dt>APPROACH</dt>
                <dd>{item.approach}</dd>
                <dt>SYSTEM</dt>
                <dd>{item.system}</dd>
                <dt>OUTCOME</dt>
                <dd>{item.outcome}</dd>
              </dl>
            </a>
          ))}
        </div>
      </section>

      <section className="section proof-band">
        <div>
          <p className="eyebrow">RECOMMENDATIONS</p>
          <h2>What teams get.</h2>
        </div>
        <div className="proof-grid">
          <article>
            <Code2 size={18} />
            <h3>Architecture that scales</h3>
            <p>
              Micro-frontends, monorepos, reusable components, and type-safe
              patterns that support larger teams.
            </p>
          </article>
          <article>
            <BriefcaseBusiness size={18} />
            <h3>Delivery under real constraints</h3>
            <p>
              Product work across remote teams, client delivery, security
              needs, API contracts, performance targets, and test coverage.
            </p>
          </article>
          <article>
            <MapPin size={18} />
            <h3>Interfaces that stay usable</h3>
            <p>
              Accessibility, keyboard navigation, responsive behavior, and
              fast-loading screens designed for actual user workflows.
            </p>
          </article>
        </div>
      </section>

      <section className="section" id="stack">
        <div className="section-heading">
          <p className="eyebrow">STACK</p>
          <h2>What I run in production.</h2>
        </div>
        <div className="stack-list">
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section education-section">
        <div className="section-heading">
          <p className="eyebrow">ARTICLES</p>
          <h2>Formal base.</h2>
        </div>
        <div className="education-grid">
          {education.map((item) => (
            <article key={item.title}>
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <p>{item.place}</p>
              <strong>{item.result}</strong>
            </article>
          ))}
        </div>
      </section>

      <footer className="section contact-section" id="contact">
        <div>
          <p className="eyebrow">CONTACT</p>
          <h2>Hard frontend problems welcome.</h2>
        </div>
        <div className="contact-links">
          <a href="/maneesha-gimshan.pdf">
            <span>RESUME</span>
            <strong>maneesha-gimshan.pdf</strong>
            <ArrowUpRight size={18} />
          </a>
          <a href="mailto:bagimshan@gmail.com">
            <span>EMAIL</span>
            <strong>bagimshan@gmail.com</strong>
            <ArrowUpRight size={18} />
          </a>
          <a href="https://github.com/nekromenzer" target="_blank" rel="noreferrer">
            <span>GITHUB</span>
            <strong>github.com/nekromenzer</strong>
            <ArrowUpRight size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/maneesha-gimshan/"
            target="_blank"
            rel="noreferrer"
          >
            <span>LINKEDIN</span>
            <strong>linkedin.com/in/maneesha-gimshan</strong>
            <ArrowUpRight size={18} />
          </a>
          <a href="tel:+971552883528">
            <span>PHONE</span>
            <strong>+971 55 288 3528</strong>
            <ArrowUpRight size={18} />
          </a>
          <a href="https://maps.google.com/?q=Dubai,UAE" target="_blank" rel="noreferrer">
            <span>LOCATION</span>
            <strong>Dubai, UAE</strong>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </footer>
    </main>
  );
}
