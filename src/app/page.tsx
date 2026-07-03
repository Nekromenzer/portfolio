"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronRight,
  CircleX,
  Code2,
  FileText,
  MapPinned,
  Mail,
  MapPin,
  Moon,
  Sun,
} from "lucide-react";
import ExperienceGlobe from "@/components/ExperienceGlobe";
import Work from "@/components/Work";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

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
              <Code2 size={18} />
            </a>
            <a
              href={hero.actions.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness size={18} />
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
                        key={`${selectedExperience.company}-${project}`}
                        className="project-item"
                      >
                        <strong>{experienceSection.projectLabel}</strong>
                        <p>{project}</p>
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
          {contact.items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
            >
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <ArrowUpRight size={18} />
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
