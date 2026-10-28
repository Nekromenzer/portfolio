import type { WorkItem } from "@/components/Work";
import { portfolioData } from "@/data/portfolio";

export const projects: WorkItem[] = portfolioData.work;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

/** Retain existing project fragment links on the index. */
export function projectAnchor(name: string) {
  return `project-${name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;
}
