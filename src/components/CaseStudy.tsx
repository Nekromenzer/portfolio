"use client";

import type { WorkItem } from "@/components/Work";
import { ChevronRight } from "lucide-react";
import { useId, useState } from "react";

type Props = {
  item: WorkItem;
};

export default function CaseStudy({ item }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  const toggleCaseStudy = () => {
    setIsOpen((current) => !current);
  };

  return (
    <section className={`ap-case-study${isOpen ? " is-open" : ""}`}>
      <button
        type="button"
        className="ap-case-study-trigger"
        aria-controls={panelId}
        aria-expanded={isOpen}
        onClick={toggleCaseStudy}
      >
        <span>
          <strong>{isOpen ? "Close case study" : "Read the full case study"}</strong>
          <small>Challenge, approach, system, and technology</small>
        </span>
        <span className="ap-case-study-control" aria-hidden>
          <ChevronRight size={19} />
        </span>
      </button>

      {isOpen ? (
        <div className="ap-case-study-panel" id={panelId}>
          <div className="ap-case-study-heading">
            <p className="ap-eyebrow">Case study</p>
            <h3>{item.name}</h3>
          </div>
          <div className="ap-case-study-grid">
            <section>
              <span>01</span>
              <h4>Challenge</h4>
              <p>{item.context}</p>
            </section>
            <section>
              <span>02</span>
              <h4>Approach</h4>
              <p>{item.approach}</p>
            </section>
            <section>
              <span>03</span>
              <h4>System</h4>
              <p>{item.system}</p>
            </section>
          </div>
          <div className="ap-case-study-stack">
            <strong>Technology</strong>
            <div
              className="ap-stack-row"
              aria-label={`${item.name} technology stack`}
            >
              {item.stack.map((entry) => (
                <span key={`${item.name}-${entry}`}>{entry}</span>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
