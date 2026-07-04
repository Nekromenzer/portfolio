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
    if (window.sessionStorage.getItem(sessionStorageKey) === "true") return;

    window.sessionStorage.setItem(sessionStorageKey, "true");

    const payload = JSON.stringify({
      visitorId: getVisitorId(),
      pathname: window.location.pathname,
      referrer: document.referrer,
    });

    if (navigator.sendBeacon) {
      const body = new Blob([payload], { type: "application/json" });
      navigator.sendBeacon("/api/visit", body);
      return;
    }

    fetch("/api/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      keepalive: true,
    }).catch(() => undefined);
  }, []);

  return null;
}
