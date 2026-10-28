import { ArrowUpRight, ChevronDown } from "lucide-react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ContactCta from "@/components/design/ContactCta";
import DockNav from "@/components/design/DockNav";
import SiteFooter from "@/components/design/SiteFooter";
import TopMeta from "@/components/design/TopMeta";
import { portfolioData } from "@/data/portfolio";
import ExperiencePoints from "@/components/ExperiencePoints";
import "../design.css";

export const metadata: Metadata = pageMetadata(
  "Experience | Maneesha Barandeniya",
  "Seven years of frontend delivery across Dubai Technologies, Parkway Labs, Qualia Tech International and Treeloq.",
  "/experience",
);

export default function ExperiencePage() {
  const { experience, experienceSection } = portfolioData;

  return (
    <main className="dz">
      <a className="dz-skip" href="#main">
        Skip to main content
      </a>

      <TopMeta />

      <header className="dz-skills-hero" id="main">
        <h1>Experience that shapes my work.</h1>
      </header>

      <div className="dz-body">
        <div className="dz-list">
          {experience.map((role) => (
            <article className="dz-role" key={`${role.company}-${role.period}`}>
              <div>
                <p className="dz-role-period">
                  {role.period}
                  {role.isCurrent ? <em>{experienceSection.currentBadge}</em> : null}
                </p>
                <h2>{role.role}</h2>
                <p className="dz-role-company">
                  {role.company} · {role.location}
                </p>
              </div>

              <div>
                <ExperiencePoints className="dz-role-body" points={role.body} />
                <details className="dz-role-deliveries" open={role.isCurrent}>
                  <summary>
                    <span>
                      View {role.projects.length} delivered project
                      {role.projects.length === 1 ? "" : "s"}
                    </span>
                    <ChevronDown aria-hidden />
                  </summary>
                  <div className="dz-role-projects">
                    {role.projects.map((project) => (
                      <div
                        className="dz-role-project"
                        key={`${role.company}-${project.title}`}
                      >
                        <h3>{project.title}</h3>
                        <ExperiencePoints points={project.description} />
                        {"href" in project && project.href ? (
                          <a href={project.href} target="_blank" rel="noreferrer">
                            Visit product
                            <ArrowUpRight size={14} aria-hidden />
                          </a>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ContactCta />
      <SiteFooter />
      <DockNav />
    </main>
  );
}
