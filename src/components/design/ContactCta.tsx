import { portfolioData } from "@/data/portfolio";

/**
 * Figma "Frame 26" — 1920x634, padding 66/133. Mono eyebrow, Inter 400/77px
 * headline, full-width rule with the 278px #455ce9 disc centred on it, and the
 * email / phone pair beneath.
 */
export default function ContactCta() {
  const { items } = portfolioData.contact;
  const email = items.find((item) => item.icon === "email");
  const phone = items.find((item) => item.icon === "phone");

  return (
    <section className="dz-cta" id="contact">
      <p className="dz-cta-eyebrow">That&apos;s all for now.</p>
      <h2>
        Got a project in mind?
        <br />
        Let&apos;s talk
      </h2>

      <div className="dz-cta-rule">
        <a className="dz-cta-circle" href={email?.href ?? "#"}>
          Get in touch
        </a>
      </div>

      <dl className="dz-cta-details">
        <div>
          <dt>Email:</dt>
          <dd>
            <a href={email?.href}>{email?.value}</a>
          </dd>
        </div>
        <div>
          <dt>Phone</dt>
          <dd>
            <a href={phone?.href}>{phone?.value}</a>
          </dd>
        </div>
      </dl>
    </section>
  );
}
