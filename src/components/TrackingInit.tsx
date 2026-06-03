"use client";

/**
 * TrackingInit
 * ─────────────────────────────────────────────────────
 * Mounts once in layout.tsx (client-side only).
 * Provides two tracking mechanisms:
 *
 *  1. Delegated click listener  — reads [data-track-event] from any
 *     server-rendered element and fires GA4 + Clarity without needing
 *     "use client" on the containing component.
 *
 *  2. IntersectionObserver      — fires `section_view` when each
 *     <section id="..."> enters the viewport (>40% visible).
 *     Tracks scroll depth per section — not just total page %.
 *
 * Usage in JSX (server components):
 *   <a data-track-event="cv_download"
 *      data-track-category="lead"
 *      data-track-label="hero_primary_cta"
 *      href="...">Download CV</a>
 */

import { useEffect } from "react";
import { trackEvent } from "@/hooks/useTracking";

export default function TrackingInit() {
  useEffect(() => {
    // ── 1. Delegated click tracker ───────────────────────────────
    const handleClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>(
        "[data-track-event]"
      );
      if (!el) return;

      const eventName = el.getAttribute("data-track-event") ?? "";
      const category =
        el.getAttribute("data-track-category") ?? "engagement";
      const label = el.getAttribute("data-track-label") ?? "";

      if (eventName) {
        trackEvent(eventName, { event_category: category, event_label: label });
      }
    };

    document.addEventListener("click", handleClick, { capture: true });

    // ── 2. Section view tracker (IntersectionObserver) ───────────
    const sections =
      document.querySelectorAll<HTMLElement>("section[id]");
    const seen = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          const id = (target as HTMLElement).id;
          if (isIntersecting && id && !seen.has(id)) {
            seen.add(id);
            trackEvent("section_view", {
              event_category: "navigation",
              event_label: id,
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => observer.observe(s));

    // ── 3. Session tag for Clarity ───────────────────────────────
    // Tags the session as "portfolio_visitor" so Clarity recordings
    // can be filtered by intent in the dashboard.
    if (typeof window !== "undefined" && typeof window.clarity === "function") {
      window.clarity("set", "visitor_type", "portfolio");
      window.clarity("set", "page_lang", "en");
    }

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
      observer.disconnect();
    };
  }, []);

  return null;
}
