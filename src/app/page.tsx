"use client";

import SiteBackground from "@/components/common/SiteBackground";
import TopBar from "@/components/common/TopBar";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import ImpactSection from "@/components/sections/ImpactSection";
import ProofSection from "@/components/sections/ProofSection";
import StackSection from "@/components/sections/StackSection";
import Work from "@/components/Work";
import { portfolioData } from "@/data/portfolio";
import { useEffect, useMemo, useState } from "react";

function formatTime(zone: string) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: zone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

export default function Home() {
  const {
    about,
    contact,
    education,
    educationSection,
    experience,
    experienceSection,
    hero,
    impact,
    impactSection,
    navItems,
    proof,
    stack,
    stackGroups,
    stackSection,
    work,
    workSection,
  } = portfolioData;
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [clock, setClock] = useState({ dxb: "--:--:--", cmb: "--:--:--" });
  const [pointer, setPointer] = useState({ x: "0.0000", y: "0.0000" });
  const [activeExperience, setActiveExperience] = useState(0);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const savedTheme =
      window.localStorage.getItem("theme") === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = savedTheme;

    const timeout = window.setTimeout(() => setTheme(savedTheme), 0);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const tick = () =>
      setClock({
        dxb: formatTime("Asia/Dubai"),
        cmb: formatTime("Asia/Colombo"),
      });

    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const updatePointer = (event: PointerEvent) => {
      setPointer({
        x: (event.clientX / window.innerWidth).toFixed(4),
        y: (event.clientY / window.innerHeight).toFixed(4),
      });
    };

    window.addEventListener("pointermove", updatePointer);
    return () => window.removeEventListener("pointermove", updatePointer);
  }, []);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id], footer[id]"),
    );

    if (sections.length === 0) return undefined;

    const sectionScores = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.getAttribute("id");
          if (!id) continue;

          sectionScores.set(
            id,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        }

        let nextSection = activeSection;
        let highestScore = 0;

        for (const section of sections) {
          const id = section.getAttribute("id");
          if (!id) continue;

          const score = sectionScores.get(id) ?? 0;
          if (score > highestScore) {
            highestScore = score;
            nextSection = id;
          }
        }

        if (highestScore > 0 && nextSection !== activeSection) {
          setActiveSection(nextSection);
        }
      },
      {
        rootMargin: "-26% 0px -44% 0px",
        threshold: [0, 0.12, 0.24, 0.36, 0.48, 0.6, 0.72],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [activeSection]);

  const topStack = useMemo(() => stack.slice(0, 8).join(" • "), [stack]);

  return (
    <main className="site-shell" data-active-section={activeSection}>
      <SiteBackground
        sideMarkInitial={hero.sideMarkInitial}
        sideMarkLabel={hero.sideMarkLabel}
      />
      <TopBar
        activeSection={activeSection}
        clock={clock}
        navItems={navItems}
        theme={theme}
        onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
      />

      <HeroSection hero={hero} pointer={pointer} topStack={topStack} />
      <AboutSection about={about} />
      <ExperienceSection
        activeExperience={activeExperience}
        experience={experience}
        experienceSection={experienceSection}
        isExperienceOpen={isExperienceOpen}
        onClose={() => setIsExperienceOpen(false)}
        onSelect={(index) => {
          setActiveExperience(index);
          setIsExperienceOpen(true);
        }}
      />
      <ImpactSection impact={impact} impactSection={impactSection} />
      <Work items={work} heading={workSection} />
      <ProofSection proof={proof} />
      <StackSection stackGroups={stackGroups} stackSection={stackSection} />
      <EducationSection
        education={education}
        educationSection={educationSection}
      />
      <ContactSection contact={contact} />
    </main>
  );
}
