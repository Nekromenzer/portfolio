import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function SiteFooter() {
  const { actions } = portfolioData.hero;
  return (
    <footer className="dz-footer">
      <p>© {new Date().getFullYear()} Maneesha Barandeniya</p>
      <div>
        <a href={actions.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={actions.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <Link href="/blog">Writing</Link>
        <a href="#" aria-label="Back to top">
          Back to top <ArrowUp size={14} aria-hidden />
        </a>
      </div>
    </footer>
  );
}
