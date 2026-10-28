"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { contactActions } from "@/data/contact";

export default function TopMeta() {
  const [contactOpen, setContactOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contactId = useId();

  useEffect(() => {
    if (!contactOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !contactRef.current?.contains(event.target)) {
        setContactOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setContactOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [contactOpen]);

  return (
    <header className="dz-topbar">
      <Link
        className="dz-topbar-brand"
        href="/"
        aria-label="m. Maneesha Barandeniya — Frontend engineer & product builder — home"
      >
        <span className="dz-brand-mark" aria-hidden>
          m.
        </span>
        <span>
          Maneesha Barandeniya
          <span className="dz-brand-caption">
            Frontend engineer & product builder
          </span>
        </span>
      </Link>
      <div
        className="dz-talk"
        ref={contactRef}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setContactOpen(false);
        }}
      >
        <button
          ref={triggerRef}
          className="dz-button dz-button-outline"
          type="button"
          aria-expanded={contactOpen}
          aria-controls={contactId}
          onClick={() => setContactOpen((open) => !open)}
        >
          Let’s talk <ArrowUpRight aria-hidden />
        </button>
        <div className="dz-talk-options" id={contactId} hidden={!contactOpen}>
          <p>Let’s connect</p>
          <a
            href={contactActions.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setContactOpen(false)}
          >
            <MessageCircle size={18} aria-hidden /> WhatsApp
            <ArrowUpRight size={16} aria-hidden />
          </a>
          <a href={contactActions.email} onClick={() => setContactOpen(false)}>
            <Mail size={18} aria-hidden /> Email
            <ArrowUpRight size={16} aria-hidden />
          </a>
        </div>
      </div>
    </header>
  );
}
