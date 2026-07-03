"use client";

import {
  Activity,
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronRight,
  CircleX,
  Code2,
  FileText,
  Layers3,
  MapPinned,
  Mail,
  MapPin,
  Moon,
  Phone,
  Send,
  Sun,
  UserRound,
} from "lucide-react";
import ExperienceGlobe from "@/components/ExperienceGlobe";
import Work from "@/components/Work";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";
import { type SVGProps, useEffect, useMemo, useState } from "react";

function GithubBrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.7.5.09.68-.22.68-.49v-1.9c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.34 9.34 0 0 1 12 6.95c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.8c0 .27.18.59.69.49A10.18 10.18 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedinBrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M5.15 8.46H2.27V21h2.88V8.46ZM3.71 3C2.76 3 2 3.76 2 4.7c0 .92.74 1.69 1.67 1.69h.02c.97 0 1.72-.77 1.72-1.7C5.39 3.76 4.66 3 3.71 3Zm8.22 5.17c-1.56 0-2.54.86-2.98 1.46V8.46H6.08V21h2.87v-7.02c0-.38.03-.75.14-1.02.31-.75 1.02-1.52 2.2-1.52 1.55 0 2.17 1.18 2.17 2.91V21h2.87v-6.98c0-3.74-2-5.85-4.4-5.85Z" />
    </svg>
  );
}

function YoutubeBrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.58 7.18a2.78 2.78 0 0 0-1.96-1.97C17.9 4.75 12 4.75 12 4.75s-5.9 0-7.62.46a2.78 2.78 0 0 0-1.96 1.97A29.08 29.08 0 0 0 2 12a29.08 29.08 0 0 0 .42 4.82 2.78 2.78 0 0 0 1.96 1.97c1.72.46 7.62.46 7.62.46s5.9 0 7.62-.46a2.78 2.78 0 0 0 1.96-1.97A29.08 29.08 0 0 0 22 12a29.08 29.08 0 0 0-.42-4.82ZM10 15.25v-6.5L15.2 12 10 15.25Z" />
    </svg>
  );
}

function TiktokBrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.6 3c.28 2.2 1.5 3.52 3.7 3.66v3.12a6.95 6.95 0 0 1-3.63-1.08v5.68c0 2.88-1.75 5.62-5.47 5.62-3.1 0-5.5-2.08-5.5-5.08 0-3.32 2.7-5.3 5.98-5.05v3.17c-1.5-.22-2.72.47-2.72 1.78 0 1.1.86 1.86 2.05 1.86 1.36 0 2.2-.78 2.2-2.65V3h3.39Z" />
    </svg>
  );
}

function formatTime(zone: string) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: zone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

function getContactIcon(icon: string | undefined) {
  switch (icon) {
    case "resume":
      return FileText;
    case "email":
      return Mail;
    case "github":
      return GithubBrandIcon;
    case "linkedin":
      return LinkedinBrandIcon;
    case "youtube":
      return YoutubeBrandIcon;
    case "tiktok":
      return TiktokBrandIcon;
    case "phone":
      return Phone;
    case "location":
      return MapPin;
    default:
      return ArrowUpRight;
  }
}

export default function Home() {
  const {
    about,
    contact,
    education,
    educationSection,
    experience,
    experienceSection,
    hero,
    impact,
    impactSection,
    navItems,
    proof,
    stack,
    stackGroups,
    stackSection,
    work,
    workSection,
  } = portfolioData;
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [clock, setClock] = useState({ dxb: "--:--:--", cmb: "--:--:--" });
  const [pointer, setPointer] = useState({ x: "0.0000", y: "0.0000" });
  const [activeExperience, setActiveExperience] = useState(0);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);

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

  const topStack = useMemo(() => stack.slice(0, 8).join(" • "), [stack]);
  const selectedExperience = experience[activeExperience];
  const navIcons = {
    ABOUT: UserRound,
    EXPERIENCE: MapPinned,
    IMPACT: Activity,
    WORK: BriefcaseBusiness,
    STACK: Layers3,
    CONTACT: Send,
  };

  return (
    <main className="site-shell">
      <div className="noise-layer" />
      <aside className="side-mark" aria-hidden>
        <span>{hero.sideMarkInitial}</span>
        <strong>{hero.sideMarkLabel}</strong>
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
              {(() => {
                const Icon = navIcons[item as keyof typeof navIcons];
                return <Icon size={15} aria-hidden />;
              })()}
              <span>{item}</span>
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
            {hero.pretitle}
          </p>
          <h1>
            <span>{hero.firstName}</span>
            <span>{hero.lastName}</span>
          </h1>

          <div className="hero-meta">
            <div>
              <span>ROLE</span>
              <strong>{hero.role}</strong>
            </div>
            <div>
              <span>COMPANY</span>
              <strong>{hero.company}</strong>
              <em>{hero.period}</em>
            </div>
          </div>

          <div className="hero-actions">
            <a href={hero.actions.email} aria-label="Email">
              <Mail size={18} />
            </a>
            <a
              href={hero.actions.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GithubBrandIcon width={18} height={18} />
            </a>
            <a
              href={hero.actions.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinBrandIcon width={18} height={18} />
            </a>
            <a className="resume-link" href={hero.actions.resume}>
              <FileText size={16} />
              {hero.actions.resumeLabel}
            </a>
          </div>
        </div>

        <div className="portrait-panel">
          <Image
            src={hero.imageSrc}
            alt={hero.imageAlt}
            width={400}
            height={400}
            priority
          />
          <div>
            <span>{topStack}</span>
            <strong>{hero.signal}</strong>
          </div>
        </div>

        <div className="coordinate-panel" aria-hidden>
          <span>X {pointer.x}</span>
          <span>Y {pointer.y}</span>
        </div>
      </section>

      <section className="section about-grid">
        <div>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2>{about.title}</h2>
        </div>
        <div className="about-body">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">{experienceSection.eyebrow}</p>
          <h2>{experienceSection.title}</h2>
        </div>
        <div className="experience-map-stage">
          <div className="experience-map-toolbar">
            <div className="experience-legend" aria-label="Experience legend">
              <span className="legend-item">
                <i className="legend-dot is-current" aria-hidden />
                {experienceSection.currentLabel}
              </span>
              <span className="legend-item">
                <i className="legend-dot is-previous" aria-hidden />
                {experienceSection.previousLabel}
              </span>
            </div>
            <div className="experience-quick-list" aria-label="Quick company selector">
              {experience.map((item, index) => (
                <button
                  key={`${item.company}-quick`}
                  type="button"
                  className={index === activeExperience ? "is-active" : ""}
                  onClick={() => {
                    setActiveExperience(index);
                    setIsExperienceOpen(true);
                  }}
                >
                  <span>{item.company}</span>
                  <ChevronRight size={14} />
                </button>
              ))}
            </div>
          </div>

          <ExperienceGlobe
            items={experience}
            activeIndex={activeExperience}
            onSelect={(index) => {
              setActiveExperience(index);
              setIsExperienceOpen(true);
            }}
          />

          {isExperienceOpen ? (
            <>
              <button
                type="button"
                className="experience-overlay-dismiss"
                onClick={() => setIsExperienceOpen(false)}
                aria-label="Close experience details"
              />
              <article className="experience-detail-overlay">
                <button
                  type="button"
                  className="experience-close"
                  onClick={() => setIsExperienceOpen(false)}
                  aria-label="Close experience details"
                >
                  <CircleX size={18} />
                </button>
                <div className="experience-detail-topline">
                  <span>{selectedExperience.period}</span>
                  <strong
                    className={
                      selectedExperience.isCurrent
                        ? "status-badge is-current"
                        : "status-badge is-previous"
                    }
                  >
                    {selectedExperience.isCurrent
                      ? experienceSection.currentBadge
                      : experienceSection.previousBadge}
                  </strong>
                </div>
                <h3>{selectedExperience.role}</h3>
                <div className="detail-meta">
                  <strong>{selectedExperience.company}</strong>
                  <em>{selectedExperience.location}</em>
                </div>
                <p>{selectedExperience.body}</p>
                <div className="project-block">
                  <div className="project-block-head">
                    <MapPinned size={16} />
                    <span>{experienceSection.projectsTitle}</span>
                  </div>
                  <div className="project-list">
                    {selectedExperience.projects.map((project) => (
                      <article
                        key={`${selectedExperience.company}-${project.title}`}
                        className="project-item"
                      >
                        <div className="project-item-head">
                          <strong>{project.title}</strong>
                          <span>{project.place}</span>
                        </div>
                        <p>{project.description}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </article>
            </>
          ) : null}
        </div>
      </section>

      <section className="section" id="impact">
        <div className="section-heading">
          <p className="eyebrow">{impactSection.eyebrow}</p>
          <h2>{impactSection.title}</h2>
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

      <Work items={work} heading={workSection} />

      <section className="section proof-band">
        <div>
          <p className="eyebrow">{proof.eyebrow}</p>
          <h2>{proof.title}</h2>
        </div>
        <div className="proof-grid">
          {proof.items.map((item, index) => {
            const Icon = [Code2, BriefcaseBusiness, MapPin][index] ?? Code2;

            return (
              <article key={item.title}>
                <Icon size={18} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section" id="stack">
        <div className="section-heading">
          <p className="eyebrow">{stackSection.eyebrow}</p>
          <h2>{stackSection.title}</h2>
        </div>
        <div className="stack-shell">
          <article className="stack-intro-card">
            <span>{stackSection.cardEyebrow}</span>
            <h3>{stackSection.cardTitle}</h3>
            <p>{stackSection.cardBody}</p>
            <div className="stack-signal-grid">
              {stackSection.signals.map(([value, label]) => (
                <div key={`${value}-${label}`}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </article>

          <div className="stack-group-list">
            {stackGroups.map((group) => (
              <article key={group.title} className="stack-group">
                <div className="stack-group-head">
                  <span>{group.title}</span>
                  <p>{group.note}</p>
                </div>
                <div className="stack-chip-cloud">
                  {group.items.map((item) => (
                    <strong key={`${group.title}-${item}`}>{item}</strong>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section education-section">
        <div className="section-heading">
          <p className="eyebrow">{educationSection.eyebrow}</p>
          <h2>{educationSection.title}</h2>
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
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2>{contact.title}</h2>
        </div>
        <div className="contact-links">
          {contact.items.map((item) => {
            const Icon = getContactIcon(item.icon);

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
              >
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <Icon className="contact-link-icon" width={18} height={18} />
              </a>
            );
          })}
        </div>
      </footer>
    </main>
  );
}
