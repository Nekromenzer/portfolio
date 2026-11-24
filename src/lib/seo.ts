import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const images = [{ url: `${siteUrl}/profile.webp`, alt: "Maneesha Barandeniya" }];
  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}${path}` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      siteName: "Maneesha Barandeniya",
      type: "website",
      images,
    },
    twitter: { card: "summary_large_image", title, description, images },
  };
}
