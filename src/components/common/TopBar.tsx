import {
  Activity,
  BriefcaseBusiness,
  Layers3,
  MapPinned,
  Moon,
  Send,
  Sun,
  UserRound,
} from "lucide-react";

type Props = {
  activeSection: string;
  clock: {
    dxb: string;
    cmb: string;
  };
  navItems: string[];
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

const navIcons = {
  ABOUT: UserRound,
  EXPERIENCE: MapPinned,
  IMPACT: Activity,
  WORK: BriefcaseBusiness,
  STACK: Layers3,
  CONTACT: Send,
};

export default function TopBar({
  activeSection,
  clock,
  navItems,
  theme,
  onToggleTheme,
}: Props) {
  return (
    <header className="topbar">
      <div className="telemetry">
        <span>DXB</span>
        <strong>{clock.dxb}</strong>
        <span>CMB</span>
        <strong>{clock.cmb}</strong>
      </div>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => {
          const Icon = navIcons[item as keyof typeof navIcons];
          const sectionId = item.toLowerCase();

          return (
            <a
              key={item}
              href={`#${sectionId}`}
              className={activeSection === sectionId ? "is-active" : ""}
            >
              <Icon size={15} aria-hidden />
              <span>{item}</span>
            </a>
          );
        })}
      </nav>
      <button
        type="button"
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        <span>{theme === "dark" ? "LIGHT" : "DARK"}</span>
      </button>
    </header>
  );
}

