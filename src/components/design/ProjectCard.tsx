import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { WorkItem } from "@/components/Work";
import ProjectLogo from "@/components/design/ProjectLogo";
import { projectAnchor } from "@/lib/projects";

export default function ProjectCard({
  item,
  summary,
}: {
  item: WorkItem;
  summary?: boolean;
}) {
  return (
    <article className="dz-card" id={projectAnchor(item.name)}>
      <Link className="dz-card-link" href={`/projects/${item.slug}`}>
        <div className="dz-card-media dz-project-brand">
          <span className="dz-project-category">
            {item.label.split("•")[0].trim()}
          </span>
          <ProjectLogo item={item} />
          <div className="dz-product-stack" aria-hidden="true">
            {item.stack.slice(0, 3).map((entry) => (
              <span key={entry}>{entry}</span>
            ))}
          </div>
        </div>
        <div className="dz-card-foot">
          <span>
            <ArrowUpRight aria-hidden strokeWidth={2} />
          </span>
          <div>
            <h3>{item.name}</h3>
            <small>Explore project</small>
          </div>
        </div>
      </Link>
      {summary ? (
        <div className="dz-card-summary">
          <p className="dz-card-meta">{item.meta}</p>
          <p>{item.outcome}</p>
        </div>
      ) : null}
    </article>
  );
}
