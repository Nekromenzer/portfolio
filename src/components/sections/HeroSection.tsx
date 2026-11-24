import {
  GithubBrandIcon,
  LinkedinBrandIcon,
} from "@/components/icons/BrandIcons";
import { FileText, Mail } from "lucide-react";
import Image from "next/image";
import { assetPath } from "@/lib/site";
import type { PortfolioData } from "./types";

type Props = {
  hero: PortfolioData["hero"];
  pointer: {
    x: string;
    y: string;
  };
  topStack: string;
};

export default function HeroSection({ hero, pointer, topStack }: Props) {
  return (
    <section className="hero section" id="about">
      <div className="hero-copy">
        <p className="pretitle">{hero.pretitle}</p>
        <h1>
          <span>{hero.firstName}</span>
          <span>{hero.lastName}</span>
        </h1>

        <div className="hero-meta">
          <div>
            <span>ROLE</span>
            <strong>{hero.role}</strong>
          </div>
          <div>
            <span>COMPANY</span>
            <strong>{hero.company}</strong>
            <em>{hero.period}</em>
          </div>
        </div>

        <div className="hero-actions">
          <a href={hero.actions.email} aria-label="Email">
            <Mail size={18} />
          </a>
          <a
            href={hero.actions.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubBrandIcon width={18} height={18} />
          </a>
          <a
            href={hero.actions.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinBrandIcon width={18} height={18} />
          </a>
          <a className="resume-link" href={hero.actions.resumeView}>
            <FileText size={16} />
            {hero.actions.resumeViewLabel}
          </a>
        </div>
      </div>

      <div className="portrait-panel">
        <Image
          src={assetPath(hero.imageSrc)}
          alt={hero.imageAlt}
          width={400}
          height={400}
          priority
        />
        <div>
          <span>{topStack}</span>
          <strong>{hero.signal}</strong>
        </div>
      </div>

      <div className="coordinate-panel" aria-hidden>
        <span>X {pointer.x}</span>
        <span>Y {pointer.y}</span>
      </div>
    </section>
  );
}
