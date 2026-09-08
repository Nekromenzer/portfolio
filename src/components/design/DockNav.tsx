"use client";

import { Briefcase, FileText, FolderKanban, House, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { portfolioData } from "@/data/portfolio";

/**
 * Figma "Frame 3" — r=18 bar on #171717 with 50px chips (r=31, gap 11,
 * padding 10/20). Chip 5 is the avatar; the active chip is filled #d4d4d4.
 *
 * Icon weight is set in CSS, not per-icon, so the lucide outlines stay uniform;
 * the two brand marks are solid glyphs and carry `dz-dock-brand`, which sizes
 * them down slightly so they don't read heavier than the outlines beside them.
 */
export default function DockNav() {
  const pathname = usePathname();
  const { actions } = portfolioData.hero;

  const routes = [
    { href: "/", label: "Home", Icon: House },
    { href: "/projects", label: "Work", Icon: FolderKanban },
    { href: "/experience", label: "Experience", Icon: Briefcase },
    { href: "/about", label: "About", Icon: UserRound },
  ];

  return (
    <nav className="dz-dock" aria-label="Primary">
      {routes.map(({ href, label, Icon }) => (
        <Link
          key={href}
          className="dz-dock-item"
          href={href}
          aria-label={label}
          aria-current={pathname === href ? "page" : undefined}
        >
          <Icon aria-hidden />
          <span>{label}</span>
        </Link>
      ))}

      <a className="dz-dock-item" href={actions.resumeView} aria-label="Resume">
        <FileText aria-hidden />
        <span>Résumé</span>
      </a>
    </nav>
  );
}
