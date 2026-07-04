type Props = {
  sideMarkInitial: string;
  sideMarkLabel: string;
};

export default function SiteBackground({
  sideMarkInitial,
  sideMarkLabel,
}: Props) {
  return (
    <>
      <div className="section-bg-scene" aria-hidden>
        <span className="star-field" />
        <span className="section-planet" />
        <span className="section-aurora" />
      </div>
      <div className="noise-layer" />
      <aside className="side-mark" aria-hidden>
        <span>{sideMarkInitial}</span>
        <strong>{sideMarkLabel}</strong>
      </aside>
    </>
  );
}
