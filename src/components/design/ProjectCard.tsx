import { ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { WorkItem } from "@/components/Work";

type Props = {
  item: WorkItem;
  anchorId?: string;
  /** outcome line under the title */
  summary?: boolean;
  /** expandable challenge / approach / system / stack panel */
  caseStudy?: boolean;
  /** route used when this card should lead into the portfolio story */
  detailsHref?: string;
};

/** Stable IDs keep links to individual case studies shareable. */
export function projectAnchor(name: string) {
  return `project-${name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;
}

export default function ProjectCard({
  item,
  anchorId,
  summary,
  caseStudy,
  detailsHref,
}: Props) {
  const actionLabel = detailsHref
    ? "View case study"
    : item.href
      ? "Visit project"
      : "Project details";

  const media = (
    <div className="dz-card-media" aria-hidden="true">
      <div className="dz-product-window">
        <div className="dz-product-toolbar">
          <span />
          <span />
          <span />
          <small>{item.name}</small>
          <ArrowUpRight size={14} />
        </div>
        <div className="dz-product-content">
          <span className="dz-product-label">PRODUCT / ENGINEERING</span>
          <strong>{item.name}</strong>
          <div className="dz-product-stack">
            {item.stack.slice(0, 3).map((entry) => (
              <span key={entry}>{entry}</span>
            ))}
          </div>
        </div>
        <div className="dz-product-bottom">
          <span>{item.label.split("•")[0].trim()}</span>
          <span>↗</span>
        </div>
      </div>
    </div>
  );

  const caption = (
    <div className="dz-card-foot">
      <span>
        <ArrowUpRight aria-hidden strokeWidth={2} />
      </span>
      <div>
        <h3>{item.name}</h3>
        <small>{actionLabel}</small>
      </div>
    </div>
  );

  const head = detailsHref ? (
    <Link className="dz-card-link" href={detailsHref}>
      {media}
      {caption}
    </Link>
  ) : item.href ? (
    <a
      className="dz-card-link"
      href={item.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${item.name} — open project`}
    >
      {media}
      {caption}
    </a>
  ) : (
    <div className="dz-card-link">
      {media}
      {caption}
    </div>
  );

  return (
    <article className="dz-card" id={anchorId}>
      {head}

      {summary ? (
        <div className="dz-card-summary">
          <p className="dz-card-meta">{item.meta}</p>
          <p>{item.outcome}</p>
        </div>
      ) : null}

      {caseStudy ? (
        <details className="dz-case">
          <summary>
            <span>
              <strong>Read the full case study</strong>
              <small>Challenge, approach, system, and technology</small>
            </span>
            <span className="dz-case-chevron" aria-hidden>
              <ChevronRight strokeWidth={2} />
            </span>
          </summary>

          <div className="dz-case-panel">
            <div className="dz-case-grid">
              <section>
                <span aria-hidden>01</span>
                <h4>Challenge</h4>
                <p>{item.context}</p>
              </section>
              <section>
                <span aria-hidden>02</span>
                <h4>Approach</h4>
                <p>{item.approach}</p>
              </section>
              <section>
                <span aria-hidden>03</span>
                <h4>System</h4>
                <p>{item.system}</p>
              </section>
            </div>

            <dl className="dz-case-stats">
              {item.stats.map(([value, label]) => (
                <div key={`${item.name}-${value}-${label}`}>
                  <dt>{value}</dt>
                  <dd>{label}</dd>
                </div>
              ))}
            </dl>

            <div className="dz-case-stack">
              <strong>Technology</strong>
              <div className="dz-skill-tags">
                {item.stack.map((entry) => (
                  <span className="dz-tag" key={`${item.name}-${entry}`}>
                    {entry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </details>
      ) : null}
    </article>
  );
}
