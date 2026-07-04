"use client";

import { useState } from "react";

/**
 * Scaleway-style super-header: a thin, full-width strip pinned above the nav.
 * Announces one thing, links out, and is dismissible.
 *
 * Rendered at the very top of the page as `fixed top-0`. The preview pages
 * ship a scoped `<style>` (via body:has(#sm-annbar)) that nudges the global
 * fixed header down by this bar's height so the two stack instead of overlap.
 */
export function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <div
      id="sm-annbar"
      className="fixed top-0 left-0 right-0 z-[60] bg-brand text-white"
    >
      <div className="max-w-[1280px] mx-auto flex items-center gap-4 h-9 pl-4 pr-2 sm:pl-6">
        {/* Announcement — left, truncates */}
        <a
          href="/case-studies/palladium-hotel-group/"
          className="group flex items-center gap-2 min-w-0 flex-1 text-white no-underline text-[12.5px] sm:text-[13px] font-medium tracking-[-0.005em] whitespace-nowrap"
        >
          <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-white/85 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
            Case study
          </span>
          <span className="truncate">
            <b className="font-semibold">Palladium Hotel Group</b>
            <span className="hidden sm:inline"> recovered 40% of unattributed traffic → +165% Display CPS.</span>
            <span className="sm:hidden"> — 40% of traffic recovered.</span>
          </span>
          <span className="hidden sm:inline shrink-0 font-semibold border-b border-white/40 group-hover:border-white transition-colors">
            Read the case&nbsp;→
          </span>
        </a>

        {/* Utility links — right */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 text-[12.5px] font-medium">
          <a
            href="https://docs.sealmetrics.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline text-white/85 hover:text-white no-underline transition-colors"
          >
            Docs
          </a>
          <span className="hidden sm:inline w-px h-3.5 bg-white/25" />
          <a
            href="https://my.sealmetrics.com/login"
            className="text-white/85 hover:text-white no-underline transition-colors"
          >
            Login
          </a>
          <span className="w-px h-3.5 bg-white/25" />
          {/* Language switch EN / ES */}
          <span className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.04em]">
            <span className="text-white font-semibold" aria-current="true">EN</span>
            <span className="text-white/30">/</span>
            <a
              href="/es"
              className="text-white/60 hover:text-white no-underline transition-colors"
              hrefLang="es"
              aria-label="Cambiar a español"
            >
              ES
            </a>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Dismiss announcement"
            className="text-white/60 hover:text-white text-[16px] leading-none w-6 h-6 flex items-center justify-center"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Scoped style: while the announcement bar is in the DOM, push the site's
 * fixed header down by the bar height (2.25rem / 36px) so it sits under the bar.
 * Removed automatically when the bar is dismissed (element leaves the DOM).
 */
export function AnnouncementBarOffset() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `body:has(#sm-annbar) header.fixed { top: 2.25rem; }`,
      }}
    />
  );
}
