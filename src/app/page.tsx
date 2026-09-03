import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactCta from "@/components/design/ContactCta";
import DockNav from "@/components/design/DockNav";
import ProjectCard from "@/components/design/ProjectCard";
import SiteFooter from "@/components/design/SiteFooter";
import TopMeta from "@/components/design/TopMeta";
import VisitLogger from "@/components/VisitLogger";
import { portfolioData } from "@/data/portfolio";
import "./design.css";

export default function Home() {
  const { about, hero, work, workSection } = portfolioData;
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
            src={hero.imageSrc}
            alt={hero.imageAlt}
            fill
            sizes="100vw"
            priority
          />
        </div>

        <TopMeta />

        <a className="dz-hero-arrow" href="#main" aria-label="Scroll to content">
          <ArrowUpRight aria-hidden strokeWidth={1.2} />
        </a>

        <h1 className="dz-hero-title">{hero.role}</h1>
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
            <h2>Impressive Works</h2>
            <p>{workSection.copy}</p>
          </div>

          <div className="dz-grid">
            {featured.map((item) => (
              <ProjectCard item={item} key={item.name} summary />
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
