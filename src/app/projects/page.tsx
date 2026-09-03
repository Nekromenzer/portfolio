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
    "Multi-tenant SaaS, real-time mobility, fintech, AI and open-source systems built by Maneesha Barandeniya.",
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
        <h1 className="dz-page-title" id="main">
          welcome to my realm of wild projects and awesome creations
        </h1>

        <div className="dz-grid">
          {work.map((item) => (
            <ProjectCard item={item} key={item.name} summary caseStudy />
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
