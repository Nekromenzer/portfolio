import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactCta from "@/components/design/ContactCta";
import DockNav from "@/components/design/DockNav";
import ProjectLogo from "@/components/design/ProjectLogo";
import ProjectStory from "@/components/design/ProjectStory";
import SiteFooter from "@/components/design/SiteFooter";
import TopMeta from "@/components/design/TopMeta";
import { projectStories } from "@/data/project-stories";
import { getProject, projects } from "@/lib/projects";
import "../../design.css";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return {
    title: `${project.name} | Projects | Maneesha Barandeniya`,
    description: project.outcome,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const nextProject =
    projects[
      (projects.findIndex((item) => item.slug === slug) + 1) % projects.length
    ];
  const sections = projectStories[slug] ?? [
    { id: "overview", title: "The challenge", text: project.context },
    { id: "approach", title: "The approach", text: project.approach },
    { id: "architecture", title: "How it works", text: project.system },
    { id: "outcomes", title: "Outcomes & impact", text: project.outcome },
  ].map(({ id, title, text }) => ({ id, title, paragraphs: [text] }));

  return (
    <main className="dz">
      <a className="dz-skip" href="#main">
        Skip to main content
      </a>
      <TopMeta />
      <article className="dz-project-page" id="main">
        <nav className="dz-project-breadcrumb" aria-label="Breadcrumb">
          <Link href="/projects">
            <ArrowLeft size={16} aria-hidden /> Projects
          </Link>
          <span aria-hidden>/</span>
          <span aria-current="page">{project.name}</span>
        </nav>
        <header className="dz-project-header">
          <div>
            <p className="dz-eyebrow">{project.label}</p>
            <h1>{project.name}</h1>
            <p className="dz-project-description">{slug === "showloomz" ? "A home for the portfolio. A workspace for the business. Websites, galleries, client proofing, and invoicing — brought together for photographers and studios." : project.outcome}</p>
            <p className="dz-project-meta">{project.meta}</p>
            {project.href ? (
              <a
                className="dz-button dz-button-primary"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                Visit project <ArrowUpRight aria-hidden />
              </a>
            ) : null}
          </div>
          <div className="dz-project-identity">
            <ProjectLogo item={project} />
          </div>
        </header>
        {project.cover ? (
          <figure className="dz-project-cover">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              width={1440}
              height={900}
              sizes="(max-width: 700px) 100vw, 1120px"
            />
            <figcaption>{project.cover.alt}</figcaption>
          </figure>
        ) : null}
        {projectStories[slug] ? <ProjectStory chapters={sections} slug={slug} /> : <div className="dz-project-story">
          {sections.map((section, index) => (
            <section
              className="dz-project-chapter"
              id={section.id}
              key={section.id}
              aria-labelledby={`${section.id}-title`}
            >
              <div>
                <p className="dz-eyebrow">{String(index + 1).padStart(2, "0")}</p>
                <h2 id={`${section.id}-title`}>{section.title}</h2>
              </div>
              <div>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.id === "outcomes" ? (
                  <dl className="dz-project-results">
                    {project.stats.map(([value, label]) => (
                      <div key={label}>
                        <dt>{value}</dt>
                        <dd>{label}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
              </div>
            </section>
          ))}
          <section
            className="dz-project-chapter"
            id="technology"
            aria-labelledby="technology-title"
          >
            <div>
              <p className="dz-eyebrow">{String(sections.length + 1).padStart(2, "0")}</p>
              <h2 id="technology-title">Technology stack</h2>
            </div>
            <div className="dz-skill-tags">
              {project.stack.map((entry) => (
                <span className="dz-tag" key={entry}>
                  {entry}
                </span>
              ))}
            </div>
          </section>
        </div>}
        <nav className="dz-project-pagination" aria-label="More projects">
          <Link className="dz-text-link" href="/projects">
            <ArrowLeft size={16} aria-hidden /> All projects
          </Link>
          <Link
            className="dz-project-next"
            href={`/projects/${nextProject.slug}`}
          >
            <span className="dz-eyebrow">NEXT PROJECT</span>
            <strong>
              {nextProject.name} <ArrowRight size={20} aria-hidden />
            </strong>
          </Link>
        </nav>
      </article>
      <ContactCta />
      <SiteFooter />
      <DockNav />
    </main>
  );
}
