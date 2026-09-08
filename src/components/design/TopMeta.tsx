import Link from "next/link";

/** Figma "Frame 16" — brand left, right-aligned note (600px) at y=37. */
export default function TopMeta() {
  return (
    <div className="dz-topbar">
      <Link className="dz-topbar-brand" href="/">
        Maneesha Barandeniya
      </Link>
      <p className="dz-topbar-note">
        Senior Frontend Engineer · Dubai, UAE
      </p>
    </div>
  );
}
