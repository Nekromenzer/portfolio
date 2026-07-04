import ExperienceGlobe, { type ExperienceItem } from "@/components/ExperienceGlobe";
import SectionHeading from "@/components/common/SectionHeading";
import { ChevronRight, CircleX, ExternalLink, MapPinned } from "lucide-react";
import type { PortfolioData } from "./types";

type Props = {
  activeExperience: number;
  experience: ExperienceItem[];
  experienceSection: PortfolioData["experienceSection"];
  isExperienceOpen: boolean;
  onClose: () => void;
  onSelect: (index: number) => void;
};

export default function ExperienceSection({
  activeExperience,
  experience,
  experienceSection,
  isExperienceOpen,
  onClose,
  onSelect,
}: Props) {
  const selectedExperience = experience[activeExperience];

  return (
    <section className="section" id="experience">
      <SectionHeading
        eyebrow={experienceSection.eyebrow}
        title={experienceSection.title}
      />
      <div className="experience-map-stage">
        <div className="experience-map-toolbar">
          <div className="experience-legend" aria-label="Experience legend">
            <span className="legend-item">
              <i className="legend-dot is-current" aria-hidden />
              {experienceSection.currentLabel}
            </span>
            <span className="legend-item">
              <i className="legend-dot is-previous" aria-hidden />
              {experienceSection.previousLabel}
            </span>
          </div>
          <div
            className="experience-quick-list"
            aria-label="Quick company selector"
          >
            {experience.map((item, index) => (
              <button
                key={`${item.company}-quick`}
                type="button"
                className={index === activeExperience ? "is-active" : ""}
                onClick={() => onSelect(index)}
              >
                <span>{item.company}</span>
                <ChevronRight size={14} />
              </button>
            ))}
          </div>
        </div>

        <ExperienceGlobe
          items={experience}
          activeIndex={activeExperience}
          onSelect={onSelect}
        />

        {isExperienceOpen ? (
          <>
            <button
              type="button"
              className="experience-overlay-dismiss"
              onClick={onClose}
              aria-label="Close experience details"
            />
            <article className="experience-detail-overlay">
              <button
                type="button"
                className="experience-close"
                onClick={onClose}
                aria-label="Close experience details"
              >
                <CircleX size={18} />
              </button>
              <div className="experience-detail-topline">
                <span>{selectedExperience.period}</span>
                <strong
                  className={
                    selectedExperience.isCurrent
                      ? "status-badge is-current"
                      : "status-badge is-previous"
                  }
                >
                  {selectedExperience.isCurrent
                    ? experienceSection.currentBadge
                    : experienceSection.previousBadge}
                </strong>
              </div>
              <h3>{selectedExperience.role}</h3>
              <div className="detail-meta">
                <strong>{selectedExperience.company}</strong>
                <em>{selectedExperience.location}</em>
              </div>
              <p>{selectedExperience.body}</p>
              <div className="project-block">
                <div className="project-block-head">
                  <MapPinned size={16} />
                  <span>{experienceSection.projectsTitle}</span>
                </div>
                <div className="project-list">
                  {selectedExperience.projects.map((project) => (
                    <article
                      key={`${selectedExperience.company}-${project.title}`}
                      className="project-item"
                    >
                      <div className="project-item-head">
                        {project.href ? (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <strong>{project.title}</strong>
                            <ExternalLink size={13} />
                          </a>
                        ) : (
                          <strong>{project.title}</strong>
                        )}
                        {project.place ? <span>{project.place}</span> : null}
                      </div>
                      <p>{project.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </article>
          </>
        ) : null}
      </div>
    </section>
  );
}
