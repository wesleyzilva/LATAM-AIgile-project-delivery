"use client";

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, string>
    ) => void;
    // Clarity supports: 'event', 'set', 'identify', 'consent', 'upgrade'
    clarity?: (command: string, ...args: string[]) => void;
  }
}

/**
 * Fires an event in both GA4 and Microsoft Clarity simultaneously.
 * Safe to call from any client component or the TrackingInit delegated listener.
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string>
): void {
  if (typeof window === "undefined") return;
  window.gtag?.("event", eventName, params);
  window.clarity?.("event", eventName);
}

/**
 * Sets a Clarity session property (custom tag).
 * Use to enrich recordings with business-level metadata.
 * Example: setClarity("user_type", "recruiter")
 */
export function setClarity(key: string, value: string): void {
  if (typeof window === "undefined") return;
  window.clarity?.("set", key, value);
}
