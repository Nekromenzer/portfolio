import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  className?: string;
  children?: ReactNode;
};

export default function SectionHeading({
  eyebrow,
  title,
  className = "section-heading",
  children,
}: Props) {
  return (
    <div className={className}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}
