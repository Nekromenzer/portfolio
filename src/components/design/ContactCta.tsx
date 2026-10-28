import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function ContactCta() {
  const { items } = portfolioData.contact;
  const email = items.find((item) => item.icon === "email")!;
  const phone = items.find((item) => item.icon === "phone")!;
  return (
    <section className="dz-cta" id="contact" aria-labelledby="contact-title">
      <div>
        <p className="dz-eyebrow">HAVE SOMETHING IN MIND?</p>
        <h2 id="contact-title">Let’s build something useful.</h2>
        <p>
          A product idea, an engineering challenge, or a hello. I’d love to hear
          it.
        </p>
      </div>
      <div className="dz-contact-actions">
        <a className="dz-button dz-button-primary" href={email.href}>
          <Mail aria-hidden /> Get in touch <ArrowUpRight aria-hidden />
        </a>
        <a className="dz-contact-detail" href={email.href}>
          {email.value}
        </a>
        <a className="dz-contact-detail" href={phone.href}>
          <Phone size={14} aria-hidden />
          {phone.value}
        </a>
      </div>
    </section>
  );
}
