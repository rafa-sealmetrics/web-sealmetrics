import Link from "next/link";

type Locale = "en" | "es";

/**
 * Contextual conversion box for content pages (blog, glossary, /open, country
 * and platform pages). This is the one sanctioned exception to the
 * "spokes never link directly to /demo" interlinking law: it is a visually
 * distinct component, not an in-text link, so it lives outside the SEO equity
 * flow (spoke → pillar → demo), which stays intact. See CLAUDE.md → SEO Rules
 * and PRD-CONVERSION-REDESIGN.md §4.2/§7.
 *
 * The hook line must be specific to the page's content — never a generic
 * "Book a demo". Write it as the question the reader is already asking after
 * the section above the module.
 */
export function CommercialModule({
  locale = "en",
  hook,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  className = "",
}: {
  locale?: Locale;
  hook: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
}) {
  const t =
    locale === "es"
      ? { primary: "Reserva una demo", secondary: "Ver precios" }
      : { primary: "Book a demo", secondary: "See pricing" };

  const resolvedPrimaryHref =
    primaryHref ?? (locale === "es" ? "/es/demo" : "/demo");
  const resolvedSecondaryHref =
    secondaryHref ?? (locale === "es" ? "/es/pricing" : "/pricing");

  return (
    <aside
      data-md="skip"
      className={`my-10 rounded-xl border border-warm-100 bg-warm-50 p-6 sm:p-7 ${className}`}
    >
      <p className="text-[15.5px] leading-[1.55] font-semibold text-ink tracking-[-0.01em] max-w-[58ch]">
        {hook}
      </p>
      <div className="mt-4 flex flex-col sm:flex-row gap-3">
        <Link
          href={resolvedPrimaryHref}
          className="inline-flex items-center justify-center gap-2 bg-ink text-white px-5 py-2.5 rounded-md text-[14px] font-semibold no-underline hover:bg-brand transition-colors"
        >
          {primaryLabel ?? t.primary} <span aria-hidden>→</span>
        </Link>
        <Link
          href={resolvedSecondaryHref}
          className="inline-flex items-center justify-center gap-2 border border-warm-200 text-ink px-5 py-2.5 rounded-md text-[14px] font-semibold no-underline hover:bg-white transition-colors"
        >
          {secondaryLabel ?? t.secondary}
        </Link>
      </div>
    </aside>
  );
}
