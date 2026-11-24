"use client";

import {
  Briefcase,
  BookOpen,
  FileText,
  FolderKanban,
  House,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contactActions } from "@/data/contact";

export default function DockNav() {
  const pathname = usePathname();
  const actions = contactActions;

  const routes = [
    { href: "/", label: "Home", Icon: House },
    { href: "/projects", label: "Projects", Icon: FolderKanban },
    { href: "/experience", label: "Experience", Icon: Briefcase },
    { href: "/about", label: "About", Icon: UserRound },
    { href: "/blog", label: "Blog", Icon: BookOpen },
  ];

  return (
    <nav className="dz-dock" aria-label="Primary">
      {routes.map(({ href, label, Icon }) => (
        <Link
          key={href}
          className="dz-dock-item"
          href={href}
          aria-label={label}
          aria-current={
            pathname === href ||
            (href !== "/" && pathname.startsWith(`${href}/`))
              ? "page"
              : undefined
          }
        >
          <Icon aria-hidden />
          <span>{label}</span>
        </Link>
      ))}

      <a className="dz-dock-item" href={actions.resumeView} aria-label="Résumé">
        <FileText aria-hidden />
        <span>Résumé</span>
      </a>
    </nav>
  );
}
