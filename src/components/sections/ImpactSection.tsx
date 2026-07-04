import type { CSSProperties } from "react";
import type { ImpactItem } from "@/data/portfolio";
import type { PortfolioData } from "./types";

type Props = {
  impact: ImpactItem[];
  impactSection: PortfolioData["impactSection"];
};

export default function ImpactSection({ impact, impactSection }: Props) {
  return (
    <section className="section" id="impact">
      <div className="impact-shell">
        <div className="impact-heading-panel">
          <p className="eyebrow">{impactSection.eyebrow}</p>
          <h2>{impactSection.title}</h2>
          <p>Selected proof points before the project work.</p>
        </div>

        <div className="impact-grid">
          {impact.map(([value, label, source], index) => (
            <a
              key={`${value}-${label}`}
              href="#work"
              className="impact-card"
              style={
                {
                  "--impact-index": index,
                  "--impact-progress": `${92 - index * 7}%`,
                } as CSSProperties
              }
            >
              <strong>{value}</strong>
              <span>{label}</span>
              <em>{source}</em>
              <i aria-hidden />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
