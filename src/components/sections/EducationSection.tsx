import SectionHeading from "@/components/common/SectionHeading";
import type { EducationItem } from "@/data/portfolio";
import type { PortfolioData } from "./types";

type Props = {
  education: EducationItem[];
  educationSection: PortfolioData["educationSection"];
};

export default function EducationSection({
  education,
  educationSection,
}: Props) {
  return (
    <section className="section education-section">
      <SectionHeading
        eyebrow={educationSection.eyebrow}
        title={educationSection.title}
      />
      <div className="education-grid">
        {education.map((item) => (
          <article key={`${item.title}-${item.period}`}>
            <span>{item.period}</span>
            <h3>{item.title}</h3>
            <p>{item.place}</p>
            <strong>{item.result}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
