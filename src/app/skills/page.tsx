import type { Metadata } from "next";
import ContactCta from "@/components/design/ContactCta";
import DockNav from "@/components/design/DockNav";
import SiteFooter from "@/components/design/SiteFooter";
import TopMeta from "@/components/design/TopMeta";
import { portfolioData } from "@/data/portfolio";
import "../design.css";

export const metadata: Metadata = {
  title: "Skills | Maneesha Barandeniya",
  description:
    "The frontend, mobile, quality, platform, AI and library tooling Maneesha Barandeniya runs in production.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  const { stackGroups } = portfolioData;

  return (
    <main className="dz dz-dark">
      <a className="dz-skip" href="#main">
        Skip to main content
      </a>

      <TopMeta />

      <header className="dz-skills-hero" id="main">
        <h1>Skills that fuel my passion</h1>
      </header>

      <div className="dz-masonry">
        {stackGroups.map((group) => (
          <article className="dz-skill-card" key={group.title}>
            <div className="dz-skill-tags">
              {group.items.map((item) => (
                <span className="dz-tag" key={`${group.title}-${item}`}>
                  {item}
                </span>
              ))}
            </div>
            <div className="dz-skill-text">
              <h2>{group.title}</h2>
              <p>{group.note}</p>
            </div>
          </article>
        ))}
      </div>

      <ContactCta />
      <SiteFooter />
      <DockNav />
    </main>
  );
}
