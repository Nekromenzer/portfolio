import SectionHeading from "@/components/common/SectionHeading";
import type { StackGroup } from "@/data/portfolio";
import type { CSSProperties } from "react";
import type { PortfolioData } from "./types";

type Props = {
  stackGroups: StackGroup[];
  stackSection: PortfolioData["stackSection"];
};

export default function StackSection({ stackGroups, stackSection }: Props) {
  const totalTools = stackGroups.reduce(
    (total, group) => total + group.items.length,
    0,
  );

  return (
    <section className="section" id="stack">
      <SectionHeading
        eyebrow={stackSection.eyebrow}
        title={stackSection.title}
      />
      <div className="stack-shell">
        <article className="stack-intro-card">
          <span>{stackSection.cardEyebrow}</span>
          <h3>{stackSection.cardTitle}</h3>
          <p>{stackSection.cardBody}</p>
          <div className="stack-signal-grid">
            {stackSection.signals.map(([value, label]) => (
              <div key={`${value}-${label}`}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="stack-summary-row" aria-label="Stack summary">
            <span>{stackGroups.length} capability areas</span>
            <span>{totalTools} tools and practices</span>
          </div>
        </article>

        <div className="stack-matrix" aria-label="Technology stack grouped by capability">
          {stackGroups.map((group) => (
            <article key={group.title} className="stack-group">
              <div className="stack-group-head">
                <div>
                  <span>{group.title}</span>
                  <strong>{String(group.items.length).padStart(2, "0")}</strong>
                </div>
                <p>{group.note}</p>
              </div>
              <div className="stack-chip-cloud">
                {group.items.map((item, index) => (
                  <strong
                    key={`${group.title}-${item}`}
                    style={{ "--chip-index": index } as CSSProperties}
                  >
                    {item}
                  </strong>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
