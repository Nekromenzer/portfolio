"use client";

import { ArrowUpRight, Boxes, FileText, House, SquareTerminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GithubBrandIcon } from "@/components/icons/BrandIcons";
import { portfolioData } from "@/data/portfolio";

/**
 * Figma "Frame 3" — 456x70, r=18, bg #171717, 7 chips of 50px (r=31, gap 11,
 * padding 10/20). Chip 4 is the avatar; the active chip is filled #d4d4d4.
 */
export default function DockNav() {
  const pathname = usePathname();
  const { actions } = portfolioData.hero;

  const routes = [
    { href: "/", label: "Home", Icon: House },
    { href: "/skills", label: "Skills", Icon: SquareTerminal },
    { href: "/projects", label: "Projects", Icon: Boxes },
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
          <Icon aria-hidden strokeWidth={1.8} />
        </Link>
      ))}

      <Link
        className="dz-dock-item dz-dock-avatar"
        href="/about"
        aria-label="About"
        aria-current={pathname === "/about" ? "page" : undefined}
      >
        <Image
          src={portfolioData.hero.imageSrc}
          alt=""
          width={100}
          height={100}
          aria-hidden
        />
      </Link>

      <a className="dz-dock-item" href={actions.resumeView} aria-label="Resume">
        <FileText aria-hidden strokeWidth={1.8} />
      </a>

      <a
        className="dz-dock-item"
        href={actions.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <GithubBrandIcon />
      </a>

      <a
        className="dz-dock-item"
        href={actions.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <ArrowUpRight aria-hidden strokeWidth={1.8} />
      </a>
    </nav>
  );
}
