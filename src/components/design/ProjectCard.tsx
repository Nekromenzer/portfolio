import { ArrowUpRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import type { WorkItem } from "@/components/Work";

type Props = {
  item: WorkItem;
  /** outcome line under the title */
  summary?: boolean;
  /** expandable challenge / approach / system / stack panel */
  caseStudy?: boolean;
};

/**
 * Figma project tile — 807x470 media at r=42, 29px gap, then a caption row of a
 * 68px circled arrow + 13px gap + Inter 400/40px title.
 */
export default function ProjectCard({ item, summary, caseStudy }: Props) {
  const media = (
    <div
      className="dz-card-media"
      style={
        {
          background: `radial-gradient(120% 120% at 50% 30%, color-mix(in srgb, ${item.accent} 26%, #141414) 0%, #141414 72%)`,
        } as CSSProperties
      }
    >
      <span className="dz-card-tag">{item.label}</span>
      {item.logo.src ? (
        <span className="dz-card-logo">
          <Image
            src={item.logo.src}
            alt={item.logo.alt ?? `${item.name} logo`}
            width={500}
            height={500}
            sizes="(max-width: 860px) 40vw, 14vw"
          />
        </span>
      ) : (
        <span className="dz-card-initials" aria-hidden>
          {item.logo.initials}
        </span>
      )}
    </div>
  );

  const caption = (
    <div className="dz-card-foot">
      <span>
        <ArrowUpRight aria-hidden strokeWidth={2} />
      </span>
      <h3>{item.name}</h3>
    </div>
  );

  const head = item.href ? (
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
    <article className="dz-card">
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
