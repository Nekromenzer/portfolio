import type { Metadata } from "next";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const images = [{ url: "/profile.webp", alt: "Maneesha Barandeniya" }];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Maneesha Barandeniya",
      type: "website",
      images,
    },
    twitter: { card: "summary_large_image", title, description, images },
  };
}
