import Link from "next/link";

/** Figma "Frame 16" — brand left, right-aligned note (600px) at y=37. */
export default function TopMeta() {
  return (
    <div className="dz-topbar">
      <Link className="dz-topbar-brand" href="/">
        @ Code by Maneesha
      </Link>
      <p className="dz-topbar-note">
        Senior Frontend Engineer building product frontends, cross-platform
        mobile apps, and AI-driven workflows that stay fast at scale.
      </p>
    </div>
  );
}
