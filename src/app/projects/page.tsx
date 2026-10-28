import type { Metadata } from "next";
import ContactCta from "@/components/design/ContactCta";
import DockNav from "@/components/design/DockNav";
import ProjectCard from "@/components/design/ProjectCard";
import SiteFooter from "@/components/design/SiteFooter";
import TopMeta from "@/components/design/TopMeta";
import { portfolioData } from "@/data/portfolio";
import "../design.css";

export const metadata: Metadata = {
  title: "Projects | Maneesha Barandeniya",
  description:
    "Travel, multi-tenant SaaS, real-time mobility, fintech, AI and open-source systems built by Maneesha Barandeniya.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const { work } = portfolioData;

  return (
    <main className="dz">
      <a className="dz-skip" href="#main">
        Skip to main content
      </a>

      <TopMeta />

      <div className="dz-shell">
        <header className="dz-page-hero" id="main">
          <p>SELECTED PROJECTS · PRODUCT SYSTEMS</p>
          <h1>Complex product problems, shaped into usable systems.</h1>
          <span>
            Open a project to see the challenge, approach, architecture, and
            outcome behind each build.
          </span>
        </header>

        <div className="dz-grid dz-projects-grid">
          {work.map((item) => (
            <ProjectCard item={item} key={item.name} summary />
          ))}
        </div>
      </div>

      <div style={{ height: "var(--dz-gap100)" }} />

      <ContactCta />
      <SiteFooter />
      <DockNav />
    </main>
  );
}
