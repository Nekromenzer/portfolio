"use client";

import { ArrowUpRight, CircleX } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { useState } from "react";

export type WorkItem = {
  name: string;
  label: string;
  meta: string;
  logo: {
    initials: string;
    src?: string;
    alt?: string;
  };
  context: string;
  approach: string;
  system: string;
  outcome: string;
  href?: string;
  accent: string;
  stats: [string, string][];
  stack: string[];
};

type Props = {
  items: WorkItem[];
  heading: {
    eyebrow: string;
    title: string;
    copy: string;
  };
};

export default function Work({ items, heading }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex === null ? null : items[activeIndex];

  const renderLogo = (item: WorkItem) => (
    <span className="work-logo" aria-label={item.logo.alt ?? `${item.name} logo placeholder`}>
      {item.logo.src ? (
        <Image
          src={item.logo.src}
          alt={item.logo.alt ?? `${item.name} logo`}
          width={72}
          height={72}
          style={{
            padding:0
          }}
        />
      ) : (
        <strong>{item.logo.initials}</strong>
      )}
    </span>
  );

  return (
    <section className="section" id="work">
      <div className="section-heading work-heading">
        <div>
          <p className="eyebrow">{heading.eyebrow}</p>
          <h2>{heading.title}</h2>
        </div>
        <p className="work-heading-copy">{heading.copy}</p>
      </div>

      <div className="work-showcase-grid">
        {items.map((item, index) => (
          <button
            key={item.name}
            type="button"
            className={`work-tile${index === 0 ? " is-featured" : ""}`}
            onClick={() => setActiveIndex(index)}
            style={{ "--work-accent": item.accent } as CSSProperties}
          >
            <div className="work-tile-surface" />
            {renderLogo(item)}
            <div className="work-tile-topline">
              <span>{item.label}</span>
              <strong>{item.meta}</strong>
            </div>
            <div className="work-tile-body">
              <h3>{item.name}</h3>
              <p>{item.outcome}</p>
            </div>
            <div className="work-tile-footer">
              <div className="work-tile-stack">
                {item.stack.slice(0, 3).map((entry) => (
                  <span key={`${item.name}-${entry}`}>{entry}</span>
                ))}
              </div>
              <span className="work-tile-open">
                Open case
                <ArrowUpRight size={16} />
              </span>
            </div>
          </button>
        ))}
      </div>

      {activeItem ? (
        <div className="work-drawer-shell" role="dialog" aria-modal="true" aria-label={activeItem.name}>
          <button
            type="button"
            className="work-drawer-backdrop"
            aria-label="Close project details"
            onClick={() => setActiveIndex(null)}
          />
          <article className="work-drawer">
            <button
              type="button"
              className="work-drawer-close"
              onClick={() => setActiveIndex(null)}
              aria-label="Close project details"
            >
              <CircleX size={20} />
            </button>

            <div className="work-drawer-hero" style={{ "--work-accent": activeItem.accent } as CSSProperties}>
              <div className="work-drawer-hero-copy">
                {renderLogo(activeItem)}
                <span>{activeItem.label}</span>
                <h3>{activeItem.name}</h3>
                <p>{activeItem.meta}</p>
              </div>
              <div className="work-drawer-stats">
                {activeItem.stats.map(([value, label]) => (
                  <article key={`${activeItem.name}-${value}-${label}`}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </article>
                ))}
              </div>
            </div>

            <div className="work-drawer-body">
              <div className="work-drawer-copy">
                <article>
                  <span>CONTEXT</span>
                  <p>{activeItem.context}</p>
                </article>
                <article>
                  <span>APPROACH</span>
                  <p>{activeItem.approach}</p>
                </article>
                <article>
                  <span>SYSTEM</span>
                  <p>{activeItem.system}</p>
                </article>
                <article>
                  <span>OUTCOME</span>
                  <p>{activeItem.outcome}</p>
                </article>
              </div>

              <aside className="work-drawer-side">
                <div className="work-drawer-stack">
                  <span>STACK</span>
                  <div>
                    {activeItem.stack.map((entry) => (
                      <strong key={`${activeItem.name}-${entry}`}>{entry}</strong>
                    ))}
                  </div>
                </div>

                <div className="work-drawer-actions">
                  {activeItem.href ? (
                    <a href={activeItem.href} target="_blank" rel="noreferrer">
                      Visit project
                      <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <button type="button">Private delivery</button>
                  )}
                </div>
              </aside>
            </div>
          </article>
        </div>
      ) : null}
    </section>
  );
}
