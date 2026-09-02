"use client";

import { useState } from "react";

/**
 * Scaleway-style super-header: a thin, full-width strip pinned above the nav.
 * Announces one thing, links out, and is dismissible.
 *
 * Rendered at the very top of the page as `fixed top-0`. The host page also
 * renders <AnnouncementBarOffset/>, a scoped `<style>` (via body:has(#sm-annbar))
 * that nudges the global fixed header down by this bar's height so the two
 * stack instead of overlap. Used by the homepage and the /preview/* pages.
 */
/* Copy por idioma. La barra vive en SharedLayout, así que sin esto el texto
   inglés salía en las ~80 páginas españolas, no solo en la home. */
/* `brand` vive aquí y no en el JSX: estaba escrito a mano dentro del marcado,
   así que cambiar de caso obligaba a tocar el render y no solo el copy. */
const COPY = {
  en: {
    kicker: "Case study",
    brand: "Incapto",
    lead: " ran GA4 and Sealmetrics side by side → GA4 missed 29% of visits.",
    leadShort: " — GA4 missed 29% of visits.",
    cta: "Read the case",
    href: "/case-studies/incapto/",
    dismiss: "Dismiss announcement",
  },
  es: {
    kicker: "Caso de estudio",
    brand: "Incapto",
    lead: " midió GA4 y Sealmetrics en paralelo → GA4 no veía el 29% de las visitas.",
    leadShort: " — GA4 no veía el 29% de las visitas.",
    cta: "Ver el caso",
    href: "/es/case-studies/incapto/",
    dismiss: "Cerrar el anuncio",
  },
} as const;

export function AnnouncementBar({ locale = "en" }: { locale?: "en" | "es" }) {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  const t = COPY[locale];
  const isEs = locale === "es";

  return (
    <div
      id="sm-annbar"
      className="hidden sm:block fixed top-0 left-0 right-0 z-[60] bg-signal-ink text-paper-white border-b border-signal-ink"
    >
      <div className="max-w-[1280px] mx-auto flex items-center gap-4 h-9 pl-4 pr-2 sm:pl-6">
        {/* Announcement — left, truncates */}
        <a
          href={t.href}
          className="group flex items-center gap-2 min-w-0 flex-1 text-white no-underline text-[12.5px] sm:text-[13px] font-medium tracking-[-0.005em] whitespace-nowrap"
        >
          <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-white/85 shrink-0">
            <span className="w-1.5 h-1.5 bg-acid" />
            {t.kicker}
          </span>
          <span className="truncate">
            <b className="font-semibold">{t.brand}</b>
            <span className="hidden sm:inline">{t.lead}</span>
            <span className="sm:hidden">{t.leadShort}</span>
          </span>
          <span className="hidden sm:inline shrink-0 font-semibold border-b border-white/40 group-hover:border-white transition-colors">
            {t.cta}&nbsp;→
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
          {/* Selector EN / ES. Marca como activo el idioma real: estaba fijo en
              EN, así que en las páginas españolas señalaba el idioma equivocado
              y ofrecía saltar al que ya estabas viendo. */}
          <span className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.04em]">
            {isEs ? (
              <a
                href="/"
                className="text-white/60 hover:text-white no-underline transition-colors"
                hrefLang="en"
                aria-label="Switch to English"
              >
                EN
              </a>
            ) : (
              <span className="text-white font-semibold" aria-current="true">EN</span>
            )}
            <span className="text-white/30">/</span>
            {isEs ? (
              <span className="text-white font-semibold" aria-current="true">ES</span>
            ) : (
              <a
                href="/es/"
                className="text-white/60 hover:text-white no-underline transition-colors"
                hrefLang="es"
                aria-label="Cambiar a español"
              >
                ES
              </a>
            )}
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t.dismiss}
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
 * Scoped style: while the announcement bar is in the DOM, push both the fixed
 * header AND the page content down by the bar height (2.25rem / 36px) so the
 * bar → header → content stack cleanly. Because #main-content shifts by exactly
 * the bar height, every page keeps the same header-to-content gap it already
 * had. Removed automatically when the bar is dismissed (element leaves the DOM).
 *
 * Gated to sm+ (min-width 640px): the bar is hidden on mobile (`hidden sm:block`),
 * so the offset must not apply there or it would leave a 36px gap.
 */
export function AnnouncementBarOffset() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html:
          `@media(min-width:640px){` +
          `body:has(#sm-annbar) header.fixed{top:2.25rem}` +
          `body:has(#sm-annbar) #main-content{padding-top:2.25rem}` +
          `}`,
      }}
    />
  );
}
