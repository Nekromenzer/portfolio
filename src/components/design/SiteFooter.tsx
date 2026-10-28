import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { contactActions } from "@/data/contact";

export default function SiteFooter() {
  const actions = contactActions;
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
