"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  getComparisonCompetitor,
  getContentGroup,
  getMicroConversion,
  isBookingHref,
  isCtaHref,
  micro,
  pageview,
  stripLocale,
} from "@/lib/analytics";
import { ensureFirstTouchCaptured } from "@/lib/signup/payload";

// Where on the page the clicked element lives — header / footer / page body.
function locationOf(el: Element): string {
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  return "page";
}

// Fires a SealMetrics pageview on every route change (including the first
// load), tagged with the page's content group. The pixel itself only fires
// on script load, so we (re)inject it per navigation — see lib/analytics.
export function SealMetricsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Capture UTMs + referrer from the landing URL once per session so they
    // survive internal navigation before the user submits any form.
    ensureFirstTouchCaptured();
  }, []);

  // Pageview + view-micros + comparison views, per route.
  useEffect(() => {
    pageview(getContentGroup(pathname));

    const view = getMicroConversion(pathname);
    if (view) micro(view);

    const competitor = getComparisonCompetitor(pathname);
    if (competitor) micro("comparison_view", { competitor });
  }, [pathname]);

  // Delegated click tracking for primary CTAs and booking links. Mounted once.
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const el = target?.closest("a, button");
      if (!el) return;

      const href = el.getAttribute("href") ?? "";
      const text = (el.textContent ?? "").trim().slice(0, 80);
      const location = locationOf(el);

      if (isBookingHref(href)) {
        micro("book_demo_cta", { location, text });
      } else if (isCtaHref(href)) {
        micro("cta_click", {
          destination: stripLocale(href),
          text,
          location,
        });
      }
    }

    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);

  // Scroll-depth engagement (50% / 100%), once per page, skipping short pages.
  useEffect(() => {
    const fired = new Set<string>();

    function onScroll() {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      // Skip pages that aren't meaningfully longer than the viewport.
      if (scrollable < window.innerHeight * 0.5) return;

      const pct = (window.scrollY / scrollable) * 100;
      if (pct >= 50 && !fired.has("50")) {
        fired.add("50");
        micro("scroll_50");
      }
      // Footers rarely allow a true 100%, so treat ≥90% as full read.
      if (pct >= 90 && !fired.has("100")) {
        fired.add("100");
        micro("scroll_100");
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
}
