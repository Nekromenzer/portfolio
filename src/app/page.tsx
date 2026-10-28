import { pageMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/site";
import { contactActions } from "@/data/contact";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  FileText,
  Layers,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import ContactCta from "@/components/design/ContactCta";
import DockNav from "@/components/design/DockNav";
import ProjectCard from "@/components/design/ProjectCard";
import SiteFooter from "@/components/design/SiteFooter";
import TopMeta from "@/components/design/TopMeta";
import VisitLogger from "@/components/VisitLogger";
import { portfolioData } from "@/data/portfolio";
import "./design.css";

export const metadata = pageMetadata(
  "Maneesha Barandeniya | Senior Frontend Engineer",
  "Maneesha Barandeniya, Senior Frontend Engineer in Dubai, building React, Next.js, TypeScript and React Native products across SaaS, fintech and AI.",
  "/",
);

export default function Home() {
  const { hero, work, experience } = portfolioData;

  return (
    <main className="dz">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": `${siteUrl}/#person`,
                name: "Maneesha Barandeniya",
                url: siteUrl,
                jobTitle: "Senior Frontend Engineer",
                image: `${siteUrl}/profile.webp`,
                sameAs: [contactActions.github, contactActions.linkedin],
              },
              {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                url: siteUrl,
                name: "Maneesha Barandeniya",
                inLanguage: "en",
                author: { "@id": `${siteUrl}/#person` },
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />
      <VisitLogger />
      <a className="dz-skip" href="#main">
        Skip to main content
      </a>
      <TopMeta />
      <div className="dz-home" id="main">
        <section className="dz-home-hero" aria-labelledby="intro-title">
          <div className="dz-home-intro">
            <p className="dz-eyebrow">
              <span className="dz-status-dot" /> SENIOR FRONTEND ENGINEER
            </p>
            <h1 id="intro-title">
              Thoughtful interfaces.
              <br />
              <span>Reliable systems.</span>
            </h1>
            <p className="dz-home-summary">
              I’m Maneesha, a frontend engineer turning complex ideas into
              intuitive web and mobile products. Built with care. Made to scale.
            </p>
            <div className="dz-hero-actions">
              <a className="dz-button dz-button-primary" href="#projects">
                Explore projects <ArrowDown aria-hidden />
              </a>
              <a
                className="dz-button dz-button-ghost"
                href={hero.actions.resumeView}
              >
                <FileText aria-hidden /> View résumé
              </a>
            </div>
            <p className="dz-location">
              <MapPin size={15} aria-hidden /> Dubai, UAE <span>·</span> 7 years
              building products
            </p>
          </div>
          <aside className="dz-profile-card" aria-label="At a glance">
            <div className="dz-profile-top">
              <span className="dz-monogram">mb.</span>
              <Code2 size={20} aria-hidden />
            </div>
            <div>
              <h2>Maneesha Barandeniya</h2>
              <p>Senior Frontend Engineer</p>
            </div>
            <div className="dz-profile-current">
              <span className="dz-eyebrow">CURRENTLY AT</span>
              <strong>{hero.company}</strong>
              <p>Geospatial interfaces & micro-frontends</p>
            </div>
            <div className="dz-skill-tags">
              {["React", "Next.js", "TypeScript", "React Native"].map(
                (skill) => (
                  <span className="dz-tag" key={skill}>
                    {skill}
                  </span>
                ),
              )}
            </div>
            <a className="dz-profile-link" href={hero.actions.email}>
              Let’s build something <ArrowUpRight size={18} aria-hidden />
            </a>
          </aside>
        </section>

        <div className="dz-expertise" aria-label="Areas of expertise">
          <span>
            <Code2 aria-hidden size={18} /> Frontend engineering
          </span>
          <span>
            <Layers aria-hidden size={18} /> Web & mobile products
          </span>
          <span>React · Next.js · React Native · TypeScript</span>
        </div>

        <section
          className="dz-works"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="dz-section-top">
            <div>
              <p className="dz-eyebrow">A SELECTION OF WHAT I BUILD</p>
              <h2 id="projects-title">From idea to real product.</h2>
            </div>
            <Link className="dz-text-link" href="/projects">
              All projects <ArrowUpRight size={17} aria-hidden />
            </Link>
          </div>
          <div className="dz-grid">
            {work.slice(0, 4).map((item) => (
              <ProjectCard item={item} key={item.name} summary />
            ))}
          </div>
        </section>

        <section
          className="dz-home-background"
          aria-labelledby="background-title"
        >
          <div className="dz-background-copy">
            <p className="dz-eyebrow">THE EXPERIENCE BEHIND THE PROJECTS</p>
            <h2 id="background-title">A builder, through and through.</h2>
            <p>
              From fintech and SaaS to real-time mobility, I help teams build
              fast, maintainable products that people can rely on.
            </p>
            <Link className="dz-text-link" href="/about">
              A little more about me <ArrowUpRight size={17} aria-hidden />
            </Link>
            <div className="dz-resource-links">
              <Link href="/skills">
                My toolkit <ArrowUpRight size={16} aria-hidden />
              </Link>
              <Link href="/blog">
                Engineering notes <ArrowUpRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
          <div className="dz-career-card">
            {experience.slice(0, 3).map((role) => (
              <div className="dz-career-row" key={role.company}>
                <span className="dz-career-dot" />
                <div>
                  <h3>{role.company}</h3>
                  <p>{role.role}</p>
                </div>
                <span>{role.period}</span>
              </div>
            ))}
            <Link className="dz-text-link" href="/experience">
              Explore my experience <ArrowRight size={17} aria-hidden />
            </Link>
          </div>
        </section>
      </div>
      <ContactCta />
      <SiteFooter />
      <DockNav />
    </main>
  );
}
