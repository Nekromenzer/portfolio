import Image from "next/image";
import type { WorkItem } from "@/components/Work";

export default function ProjectLogo({ item }: { item: WorkItem }) {
  return (
    <span className="dz-project-logo">
      {item.logo.src ? (
        <Image
          src={item.logo.src}
          alt={item.logo.alt ?? `${item.name} logo`}
          width={144}
          height={144}
          sizes="144px"
        />
      ) : (
        <span className="dz-project-initials" aria-hidden="true">
          {item.logo.initials}
        </span>
      )}
    </span>
  );
}
