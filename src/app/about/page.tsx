import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import ContactCta from "@/components/design/ContactCta";
import DockNav from "@/components/design/DockNav";
import SiteFooter from "@/components/design/SiteFooter";
import TopMeta from "@/components/design/TopMeta";
import { portfolioData } from "@/data/portfolio";
import "../design.css";

export const metadata: Metadata = {
  title: "About | Maneesha Barandeniya",
  description:
    "Maneesha Barandeniya — Senior Frontend Engineer with 7 years across SaaS, fintech, enterprise and real-time mobility products.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const { about, education, educationSection, impact, impactSection, proof } =
    portfolioData;

  return (
    <main className="dz">
      <a className="dz-skip" href="#main">
        Skip to main content
      </a>

      <TopMeta />

      <header className="dz-skills-hero" id="main">
        <h1>{about.title}</h1>
      </header>

      <div className="dz-body">
        <section className="dz-prose">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </section>

        <section className="dz-section">
          <div className="dz-headline">
            <h2>{impactSection.title}</h2>
            <p>{impactSection.eyebrow}</p>
          </div>
          <div className="dz-tiles">
            {impact.map(([value, label, context]) => (
              <article className="dz-tile" key={`${value}-${label}`}>
                <strong>{value}</strong>
                <span>{label}</span>
                <small>{context}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="dz-section">
          <div className="dz-headline">
            <h2>{proof.title}</h2>
            <p>{proof.eyebrow}</p>
          </div>
          <div className="dz-cards-3">
            {proof.items.map((item) => (
              <article className="dz-skill-card" key={item.title}>
                <div className="dz-skill-text">
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="dz-section">
          <div className="dz-headline">
            <h2>{educationSection.title}</h2>
            <p>{educationSection.eyebrow}</p>
          </div>
          <div className="dz-cards-3">
            {education.map((item) => (
              <article className="dz-skill-card" key={`${item.title}-${item.period}`}>
                <p className="dz-role-period">{item.period}</p>
                <div className="dz-skill-text">
                  <h2>{item.title}</h2>
                  <p>
                    {item.place} — {item.result}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Link className="dz-link-lg" href="/experience">
          See the full career
          <span>
            <ArrowUpRight aria-hidden strokeWidth={2} />
          </span>
        </Link>
      </div>

      <ContactCta />
      <SiteFooter />
      <DockNav />
    </main>
  );
}
