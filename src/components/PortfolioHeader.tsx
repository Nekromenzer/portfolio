"use client";

import { ChevronRight, Menu, X } from "lucide-react";
import { useId, useState } from "react";

type NavItem = readonly [label: string, href: string];

type Props = {
  emailHref: string;
  items: readonly NavItem[];
  resumeHref: string;
};

export default function PortfolioHeader({ emailHref, items, resumeHref }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  return (
    <>
      <header
        className="ap-global-nav"
        onKeyDown={(event) => {
          if (event.key === "Escape") setIsOpen(false);
        }}
      >
        <nav className="ap-global-nav-inner" aria-label="Primary navigation">
          <a
            className="ap-wordmark"
            href="#about"
            aria-label="Maneesha Barandeniya, home"
          >
            MB
          </a>
          <div className="ap-desktop-links">
            {items.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </div>
          <a className="ap-global-contact" href={emailHref}>
            Contact
          </a>
          <button
            type="button"
            className="ap-mobile-menu-trigger"
            aria-controls={menuId}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={19} aria-hidden /> : <Menu size={19} aria-hidden />}
          </button>
        </nav>

        {isOpen ? (
          <nav className="ap-mobile-panel" id={menuId} aria-label="Mobile navigation">
            {items.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setIsOpen(false)}>
                {label}
                <ChevronRight size={16} aria-hidden />
              </a>
            ))}
          </nav>
        ) : null}
      </header>

      <nav className="ap-subnav" aria-label="Portfolio navigation">
        <div className="ap-subnav-inner">
          <a href="#about" className="ap-subnav-title">
            Maneesha Barandeniya
          </a>
          <span className="ap-subnav-role">Senior Frontend Engineer</span>
          <a className="ap-pill ap-pill-small" href={resumeHref}>
            View résumé
          </a>
        </div>
      </nav>
    </>
  );
}
