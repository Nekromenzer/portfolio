import { getContactIcon } from "@/components/icons/BrandIcons";
import type { PortfolioData } from "./types";

type Props = {
  contact: PortfolioData["contact"];
};

export default function ContactSection({ contact }: Props) {
  return (
    <footer className="section contact-section" id="contact">
      <div>
        <p className="eyebrow">{contact.eyebrow}</p>
        <h2>{contact.title}</h2>
      </div>
      <div className="contact-links">
        {contact.items.map((item) => {
          const Icon = getContactIcon(item.icon);

          return (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
            >
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <Icon className="contact-link-icon" width={18} height={18} />
            </a>
          );
        })}
      </div>
    </footer>
  );
}
