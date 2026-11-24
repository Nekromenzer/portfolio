import { getBlogPosts } from "@/lib/blog";
import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...["projects", "skills", "about", "experience", "links"].map((path) => ({
      url: `${siteUrl}/${path}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: `${siteUrl}/blog`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...posts,
  ];
}
