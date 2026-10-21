import type { Metadata } from "next";
import TopMeta from "@/components/design/TopMeta";
import SiteFooter from "@/components/design/SiteFooter";
import DockNav from "@/components/design/DockNav";
import "../design.css";
import SocialLinks from "./SocialLinks";
import "./links.css";

export const metadata: Metadata = {
  title: "Social links | Maneesha Gimshan · Nekromenzer",
  description: "Find Maneesha Gimshan on GitHub, YouTube, LinkedIn, Facebook, Telegram, Discord, TikTok, and WhatsApp. All my links in one place.",
  alternates: { canonical: "/links" },
  openGraph: {
    title: "Maneesha Gimshan · All my links",
    description: "Building things. Sharing what I learn. Find me around the web.",
    url: "/links",
    type: "website",
  },
};

export default function LinksPage() {
  return (
    <main className="dz dz-dark dz-links">
      <a className="dz-skip" href="#links">Skip to links</a>
      <TopMeta />
      <header className="dz-skills-hero dz-links-hero">
        <h1>Find me around the web.</h1>
        <p>Code, ideas, and conversations. All my links in one place.</p>
      </header>
      <SocialLinks />
      <SiteFooter />
      <DockNav />
    </main>
  );
}
