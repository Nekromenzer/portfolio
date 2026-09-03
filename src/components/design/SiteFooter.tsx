import { CornerUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

/**
 * Figma "Frame 27" — 1920x565. Tagline at DM Sans 300/100px, the oversized
 * wordmark at DM Sans 500/300px with 6px tracking, and a 142px disc top-right.
 */
export default function SiteFooter() {
  const { actions } = portfolioData.hero;

  return (
    <footer className="dz-footer">
      <div className="dz-footer-top">
        <p>your friendly frontend engineer</p>
        <a className="dz-footer-arrow" href={actions.email} aria-label="Email Maneesha">
          <CornerUpRight aria-hidden strokeWidth={1.6} />
        </a>
      </div>

      <span className="dz-footer-mark" aria-hidden>
        Maneeshaaa
      </span>
      <span className="dz-sr-only">Maneesha Barandeniya</span>
    </footer>
  );
}
