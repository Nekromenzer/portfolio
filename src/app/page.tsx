import VisitLogger from "@/components/VisitLogger";
import PortfolioHeader from "@/components/PortfolioHeader";
import CaseStudy from "@/components/CaseStudy";
import type { WorkItem } from "@/components/Work";
import { portfolioData } from "@/data/portfolio";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronRight,
  Download,
  Mail,
} from "lucide-react";
import Image from "next/image";
import "./portfolio.css";

const primaryNav = [
  ["About", "#about"],
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["Expertise", "#expertise"],
  ["Journal", "/blog"],
] as const;

function ProjectMark({ item }: { item: WorkItem }) {
  if (item.logo.src) {
    return (
      <Image
        src={item.logo.src}
        alt={item.logo.alt ?? `${item.name} logo`}
        width={240}
        height={240}
        sizes="(max-width: 640px) 120px, 180px"
      />
    );
  }

  return <span aria-hidden>{item.logo.initials}</span>;
}

export default function Home() {
  const {
    about,
    contact,
    education,
    experience,
    hero,
    impact,
    proof,
    stackGroups,
    work,
  } = portfolioData;

  return (
    <main className="apple-portfolio">
      <VisitLogger />
      <a className="ap-skip-link" href="#main-content">
        Skip to main content
      </a>

      <PortfolioHeader
        emailHref={hero.actions.email}
        items={primaryNav}
        resumeHref={hero.actions.resumeView}
      />

      <div id="main-content">
        <section className="ap-hero" id="about">
          <div className="ap-hero-copy">
            <p className="ap-kicker">{hero.pretitle}</p>
            <h1>Frontend engineering that feels simple.</h1>
            <p className="ap-lead">
              I design and build dependable web and mobile products—from polished
              interfaces to the systems that keep them fast, scalable, and useful.
            </p>
            <div className="ap-actions">
              <a className="ap-pill" href="#work">
                Explore my work
              </a>
              <a className="ap-text-link" href={hero.actions.resumeDownload}>
                Download résumé
                <Download size={17} aria-hidden />
              </a>
            </div>
            <dl className="ap-hero-facts">
              <div>
                <dt>Experience</dt>
                <dd>6+ years</dd>
              </div>
              <div>
                <dt>Currently</dt>
                <dd>{hero.company}</dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>Dubai, UAE</dd>
              </div>
            </dl>
          </div>

          <figure className="ap-portrait">
            <div className="ap-portrait-stage">
              <Image
                src={hero.imageSrc}
                alt={hero.imageAlt}
                width={720}
                height={720}
                sizes="(max-width: 833px) 88vw, 44vw"
                priority
              />
            </div>
            <figcaption>
              <span>{hero.role}</span>
              <strong>Product-minded. Systems-focused.</strong>
            </figcaption>
          </figure>

          <a
            className="ap-scroll-cue"
            href="#story"
            aria-label="Continue to about section"
          >
            <ArrowDown size={17} aria-hidden />
            Scroll to explore
          </a>
        </section>

        <section className="ap-story ap-section-light" id="story">
          <div className="ap-narrow">
            <p className="ap-eyebrow">About</p>
            <h2>{about.title}</h2>
            <div className="ap-story-grid">
              <p>{about.paragraphs[0]}</p>
              <p>{about.paragraphs[2]}</p>
            </div>
          </div>
        </section>

        <section className="ap-work-intro ap-section-dark" id="work">
          <div className="ap-narrow ap-centered">
            <p className="ap-eyebrow">Selected work</p>
            <h2>Products designed to hold up in the real world.</h2>
            <p>
              Multi-tenant SaaS, mobility, fintech, AI, and open-source systems—built
              around clear user journeys and reliable architecture.
            </p>
          </div>
        </section>

        <div className="ap-project-list" aria-label="Selected projects">
          {work.map((item, index) => {
            const isDark = index % 2 === 0;

            return (
              <article
                className={`ap-project ${isDark ? "ap-project-dark" : "ap-project-light"}`}
                key={item.name}
              >
                <div className="ap-project-inner">
                  <div className="ap-project-copy">
                    <p className="ap-eyebrow">{item.label}</p>
                    <h2>{item.name}</h2>
                    <p className="ap-project-meta">{item.meta}</p>
                    <p className="ap-project-outcome">{item.outcome}</p>

                    <div className="ap-actions">
                      {item.href ? (
                        <a
                          className="ap-pill"
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visit project
                          <ArrowUpRight size={17} aria-hidden />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <div className="ap-product-stage">
                    <div className="ap-project-mark">
                      <ProjectMark item={item} />
                    </div>
                    <dl className="ap-project-stats">
                      {item.stats.map(([value, label]) => (
                        <div key={`${item.name}-${value}-${label}`}>
                          <dt>{value}</dt>
                          <dd>{label}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

                <CaseStudy item={item} />
              </article>
            );
          })}
        </div>

        <section
          className="ap-experience ap-section-parchment"
          id="experience"
        >
          <div className="ap-wide">
            <div className="ap-section-heading">
              <div>
                <p className="ap-eyebrow">Experience</p>
                <h2>A career built across products, teams, and regions.</h2>
              </div>
              <p>
                From startup product delivery to enterprise geospatial platforms,
                each role added a deeper layer of frontend ownership.
              </p>
            </div>

            <div className="ap-timeline">
              {experience.map((role, index) => (
                <article
                  className={role.isCurrent ? "is-current" : ""}
                  key={`${role.company}-${role.period}`}
                >
                  <div className="ap-timeline-index" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="ap-timeline-main">
                    <p className="ap-timeline-period">
                      {role.period}
                      {role.isCurrent ? <span>Current</span> : null}
                    </p>
                    <h3>{role.role}</h3>
                    <p className="ap-company">
                      {role.company} · {role.location}
                    </p>
                    <p>{role.body}</p>
                    <details className="ap-role-details">
                      <summary>
                        Projects delivered here
                        <ChevronRight size={17} aria-hidden />
                      </summary>
                      <div>
                        {role.projects.map((project) => (
                          <section key={`${role.company}-${project.title}`}>
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            {"href" in project && project.href ? (
                              <a
                                href={project.href}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Visit product
                                <ArrowUpRight size={15} aria-hidden />
                              </a>
                            ) : null}
                          </section>
                        ))}
                      </div>
                    </details>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ap-impact ap-section-dark" id="impact">
          <div className="ap-wide">
            <div className="ap-section-heading">
              <div>
                <p className="ap-eyebrow">Measured impact</p>
                <h2>Proof, not promises.</h2>
              </div>
              <p>
                Selected outcomes from production systems and multi-region product
                work.
              </p>
            </div>
            <dl className="ap-impact-grid">
              {impact.slice(0, 6).map(([value, label, context]) => (
                <div key={`${value}-${label}`}>
                  <dt>{value}</dt>
                  <dd>{label}</dd>
                  <span>{context}</span>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="ap-expertise ap-section-light" id="expertise">
          <div className="ap-wide">
            <div className="ap-section-heading">
              <div>
                <p className="ap-eyebrow">Expertise</p>
                <h2>The toolkit behind the interface.</h2>
              </div>
              <p>Chosen for the product problem—not collected for the résumé.</p>
            </div>
            <div className="ap-capability-grid">
              {stackGroups.map((group) => (
                <article key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.note}</p>
                  <div className="ap-stack-row">
                    {group.items.map((item) => (
                      <span key={`${group.title}-${item}`}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="ap-proof-grid" aria-label="What teams get">
              {proof.items.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="ap-education ap-section-parchment"
          id="education"
        >
          <div className="ap-wide">
            <p className="ap-eyebrow">Education</p>
            <h2>Formal foundation. Continuous practice.</h2>
            <div className="ap-education-list">
              {education.map((item) => (
                <article key={`${item.title}-${item.period}`}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.place}</p>
                  </div>
                  <div>
                    <span>{item.period}</span>
                    <strong>{item.result}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ap-contact ap-section-black" id="contact">
          <div className="ap-narrow ap-centered">
            <p className="ap-eyebrow">Let&apos;s build</p>
            <h2>Have a hard frontend problem?</h2>
            <p>
              I&apos;m open to senior frontend, product engineering, and ambitious
              cross-platform work.
            </p>
            <div className="ap-actions ap-actions-centered">
              <a className="ap-pill" href={hero.actions.email}>
                <Mail size={17} aria-hidden />
                Start a conversation
              </a>
              <a
                className="ap-text-link ap-text-link-dark"
                href={hero.actions.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
                <ArrowUpRight size={17} aria-hidden />
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer className="ap-footer">
        <div className="ap-footer-grid">
          <div>
            <strong>Maneesha Barandeniya</strong>
            <p>
              Senior Frontend Engineer building thoughtful systems for web and mobile.
            </p>
          </div>
          <nav aria-label="Portfolio links">
            <strong>Explore</strong>
            {primaryNav.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <nav aria-label="Contact links">
            <strong>Connect</strong>
            {contact.items
              .filter((item) =>
                ["EMAIL", "GITHUB", "LINKEDIN", "PHONE"].includes(item.label),
              )
              .map((item) => (
                <a
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                >
                  {item.label === "EMAIL"
                    ? "Email"
                    : item.label.charAt(0) + item.label.slice(1).toLowerCase()}
                </a>
              ))}
          </nav>
        </div>
        <div className="ap-footer-legal">
          <span>© {new Date().getFullYear()} Maneesha Barandeniya</span>
          <span>Designed and built with care in Dubai.</span>
        </div>
      </footer>
    </main>
  );
}
