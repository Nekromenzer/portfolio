import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function BlogNav() {
  return (
    <nav className="blog-nav" aria-label="Primary">
      <Link href="/">Home</Link>
      <Link href="/projects">Work</Link>
      <Link href="/experience">Experience</Link>
      <Link href="/blog" className="is-active" aria-current="page">
        Blog
      </Link>
      <a href={portfolioData.hero.actions.resumeView}>Résumé</a>
    </nav>
  );
}
