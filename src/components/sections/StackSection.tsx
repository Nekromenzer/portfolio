import SectionHeading from "@/components/common/SectionHeading";
import type { StackGroup } from "@/data/portfolio";
import type { PortfolioData } from "./types";

type Props = {
  stackGroups: StackGroup[];
  stackSection: PortfolioData["stackSection"];
};

export default function StackSection({ stackGroups, stackSection }: Props) {
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
        </article>

        <div className="stack-group-list">
          {stackGroups.map((group) => (
            <article key={group.title} className="stack-group">
              <div className="stack-group-head">
                <span>{group.title}</span>
                <p>{group.note}</p>
              </div>
              <div className="stack-chip-cloud">
                {group.items.map((item) => (
                  <strong key={`${group.title}-${item}`}>{item}</strong>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

