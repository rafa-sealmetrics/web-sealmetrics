"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/types";
import { hasTranslation } from "@/lib/i18n/navigation";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  // Compute the base path (strip /es prefix if present)
  const basePath = locale === "es"
    ? pathname.replace(/^\/es(\/|$)/, "/").replace(/\/$/, "") || "/"
    : pathname.replace(/\/$/, "") || "/";

  // Only show if the page has a translation
  if (!hasTranslation(basePath)) return null;

  const targetLocale = locale === "es" ? "en" : "es";
  const targetHref = targetLocale === "es"
    ? `/es${basePath === "/" ? "" : basePath}`
    : basePath;

  return (
    <Link
      href={targetHref}
      className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] px-2 text-[0.85rem] font-medium text-text-tertiary hover:text-text-primary transition-colors no-underline uppercase tracking-wide"
      hrefLang={targetLocale}
      aria-label={targetLocale === "es" ? "Cambiar a español" : "Switch to English"}
    >
      {targetLocale === "es" ? "ES" : "EN"}
    </Link>
  );
}
