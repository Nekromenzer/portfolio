"use client";

import { useEffect } from "react";

const visitorStorageKey = "portfolio.visitorId";
const sessionStorageKey = "portfolio.visitLogged";

function getVisitorId() {
  const existingVisitorId = window.localStorage.getItem(visitorStorageKey);
  if (existingVisitorId) return existingVisitorId;

  const visitorId =
    typeof window.crypto.randomUUID === "function"
      ? window.crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

  window.localStorage.setItem(visitorStorageKey, visitorId);
  return visitorId;
}

export default function VisitLogger() {
  useEffect(() => {
    function logVisit() {
      // Tracking must never interrupt the page when browser storage is blocked.
      try {
        if (window.sessionStorage.getItem(sessionStorageKey) === "true") return;

        window.sessionStorage.setItem(sessionStorageKey, "true");

        const payload = JSON.stringify({
          visitorId: getVisitorId(),
          pathname: window.location.pathname,
          referrer: document.referrer,
        });

        if (navigator.sendBeacon) {
          const body = new Blob([payload], { type: "application/json" });
          if (navigator.sendBeacon("/api/visit", body)) return;
        }

        fetch("/api/visit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payload,
          keepalive: true,
        }).catch(() => undefined);
      } catch {
        // Storage can be unavailable in private or restricted browser contexts.
      }
    }

    let idleId: number | undefined;
    let timerId: number | undefined;
    function schedule() {
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(logVisit, { timeout: 3000 });
      } else {
        timerId = window.setTimeout(logVisit, 1000);
      }
    }

    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      window.removeEventListener("load", schedule);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timerId !== undefined) window.clearTimeout(timerId);
    };
  }, []);

  return null;
}
