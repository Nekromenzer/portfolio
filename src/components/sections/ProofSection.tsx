import { BriefcaseBusiness, Code2, MapPin } from "lucide-react";
import type { PortfolioData } from "./types";

type Props = {
  proof: PortfolioData["proof"];
};

export default function ProofSection({ proof }: Props) {
  return (
    <section className="section proof-band">
      <div>
        <p className="eyebrow">{proof.eyebrow}</p>
        <h2>{proof.title}</h2>
      </div>
      <div className="proof-grid">
        {proof.items.map((item, index) => {
          const Icon = [Code2, BriefcaseBusiness, MapPin][index] ?? Code2;

          return (
            <article key={item.title}>
              <Icon size={18} />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

