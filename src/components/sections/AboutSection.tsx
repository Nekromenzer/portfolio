import type { PortfolioData } from "./types";

type Props = {
  about: PortfolioData["about"];
};

export default function AboutSection({ about }: Props) {
  return (
    <section className="section about-grid">
      <div>
        <p className="eyebrow">{about.eyebrow}</p>
        <h2>{about.title}</h2>
      </div>
      <div className="about-body">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
