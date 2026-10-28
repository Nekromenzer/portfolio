import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import TopMeta from "@/components/design/TopMeta";
import SiteFooter from "@/components/design/SiteFooter";
import DockNav from "@/components/design/DockNav";
import "../design.css";
import SocialLinks from "./SocialLinks";
import "./links.css";

export const metadata: Metadata = pageMetadata(
  "Social links | Maneesha Gimshan · Nekromenzer",
  "Find Maneesha Gimshan on GitHub, YouTube, LinkedIn, Facebook, Telegram, Discord, TikTok, and WhatsApp. All my links in one place.",
  "/links",
);

export default function LinksPage() {
  return (
    <main className="dz dz-links">
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
