import Link from "next/link";

const COPY = {
  en: {
    updated: "Updated",
    by: "By",
    role: "Founder, SealMetrics",
  },
  es: {
    updated: "Actualizado",
    by: "Por",
    role: "Fundador, SealMetrics",
  },
} as const;

/**
 * Visible "Updated [date] · By [author]" byline rendered below the H1 of every
 * comparison page. Pairs with the author/dateModified fields in
 * comparisonPageSchema so reader and AI engine see the same trust signal.
 *
 * The author URL must match the Person profile used in `casePersonSchema` /
 * `personSchema` (today: /authors/rafa-jimenez).
 */
export function ComparisonByline({
  dateModified,
  locale = "en",
}: {
  dateModified: string;
  locale?: "en" | "es";
}) {
  const t = COPY[locale];
  const authorHref = locale === "es" ? "/es/authors/rafa-jimenez" : "/authors/rafa-jimenez";
  const formatted = new Date(dateModified).toLocaleDateString(
    locale === "es" ? "es-ES" : "en-GB",
    { year: "numeric", month: "long", day: "numeric" }
  );
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft mt-4 mb-0 text-center">
      {t.updated} <time dateTime={dateModified}>{formatted}</time>
      {" · "}
      {t.by}{" "}
      <Link
        href={authorHref}
        className="text-ink no-underline border-b border-warm-200 pb-px hover:border-ink transition-colors"
        rel="author"
      >
        Rafa Jiménez
      </Link>
      {", "}{t.role}
    </p>
  );
}
