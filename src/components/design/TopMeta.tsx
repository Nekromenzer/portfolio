import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function TopMeta() {
  return (
    <header className="dz-topbar">
      <Link
        className="dz-topbar-brand"
        href="/"
        aria-label="Maneesha Barandeniya — home"
      >
        <span className="dz-brand-mark" aria-hidden>
          m.
        </span>
        <span>
          Maneesha Barandeniya
          <span className="dz-brand-caption">
            Frontend engineer & product builder
          </span>
        </span>
      </Link>
      <a
        className="dz-button dz-button-outline"
        href={portfolioData.hero.actions.email}
      >
        Let’s talk <ArrowUpRight aria-hidden />
      </a>
    </header>
  );
}
