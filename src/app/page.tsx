import { ArrowDown, ArrowUpRight, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactCta from "@/components/design/ContactCta";
import DockNav from "@/components/design/DockNav";
import ProjectCard, { projectAnchor } from "@/components/design/ProjectCard";
import SiteFooter from "@/components/design/SiteFooter";
import TopMeta from "@/components/design/TopMeta";
import VisitLogger from "@/components/VisitLogger";
import { portfolioData } from "@/data/portfolio";
import "./design.css";

export default function Home() {
  const { about, hero, work } = portfolioData;
  const featured = work.slice(0, 4);

  return (
    <main className="dz">
      <VisitLogger />
      <a className="dz-skip" href="#main">
        Skip to main content
      </a>

      {/* Figma "Frame 15" — 1920x972 image fill */}
      <section className="dz-hero">
        <div className="dz-hero-media">
          <Image
            src={hero.heroImageSrc}
            alt={hero.imageAlt}
            fill
            sizes="100vw"
            quality={95}
            priority
          />
        </div>

        <TopMeta />

        <div className="dz-hero-content">
          <p className="dz-hero-kicker">
            {hero.firstName} {hero.lastName} · {hero.role}
          </p>
          <h1>Product experiences built for real-world scale.</h1>
          <p className="dz-hero-summary">
            7 years building high-performance web, mobile, and AI products
            with React, Next.js, React Native, and TypeScript.
          </p>
          <div className="dz-hero-actions">
            <a className="dz-button dz-button-primary" href="#work">
              View selected work
              <ArrowDown aria-hidden strokeWidth={2} />
            </a>
            <a className="dz-button dz-button-ghost" href={hero.actions.resumeView}>
              <FileText aria-hidden strokeWidth={2} />
              View résumé
            </a>
          </div>
        </div>
      </section>

      <div className="dz-body" id="main">
        {/* Figma "Frame 13" */}
        <section className="dz-intro" id="about">
          <p className="dz-intro-lead">{about.paragraphs[0]}</p>
          <div className="dz-intro-side">
            <p className="dz-intro-note">{about.paragraphs[2]}</p>
            <Link className="dz-link-lg" href="/about">
              More about me
              <span>
                <ArrowUpRight aria-hidden strokeWidth={2} />
              </span>
            </Link>
          </div>
        </section>

        {/* Figma "Frame 18" — header + 2x2 grid + explore pill */}
        <section className="dz-works" id="work">
          <div className="dz-headline">
            <h2>Selected work</h2>
            <p>Products, systems, and measurable outcomes.</p>
          </div>

          <div className="dz-grid">
            {featured.map((item) => (
              <ProjectCard
                item={item}
                key={item.name}
                summary
                detailsHref={`/projects#${projectAnchor(item.name)}`}
              />
            ))}
          </div>

          <Link className="dz-pill" href="/projects">
            Explore more
          </Link>
        </section>
      </div>

      <ContactCta />
      <SiteFooter />
      <DockNav />
    </main>
  );
}
