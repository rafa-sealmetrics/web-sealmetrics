import Link from "next/link";

/**
 * The byline of an article: publication date, reading time, author, and — when
 * the piece has actually been revised — the revision date.
 *
 * WHY THIS EXISTS
 * Every post declared `dateModified` in its `articleSchema()` call and no
 * reader could see it: 69 of 82 posts were asserting a revision to Google and
 * to answer engines while the page itself showed only the original publication
 * date. A freshness claim that appears in a script tag and nowhere on the page
 * is the weaker half of the signal, and it reads as a discrepancy to anyone
 * comparing the two.
 *
 * The dates are AUTHOR-SET, never derived. This component only displays what
 * the page already declares; it cannot invent or bump a date. See CLAUDE.md →
 * SEO Rules on why `dateModified` is never computed from git.
 *
 * Formatting is done by hand rather than through `Date`/`Intl` so that a build
 * running in any timezone renders the same day: `new Date("2026-08-12")` is
 * midnight UTC, which is 11 August in any negative offset.
 */

const MONTHS = {
  en: [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ],
  es: [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ],
} as const;

/** "2026-08-12" → "August 12, 2026" / "12 de agosto de 2026". */
export function formatPostDate(iso: string, locale: "en" | "es" = "en"): string {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  const month = MONTHS[locale][m - 1];
  return locale === "es" ? `${d} de ${month} de ${y}` : `${month} ${d}, ${y}`;
}

export function PostByline({
  datePublished,
  dateModified,
  readTime,
  authorName,
  authorUrl,
  locale = "en",
}: {
  /** ISO date, the same string passed to `articleSchema({ datePublished })`. */
  datePublished: string;
  /** ISO date. Shown only when it differs from `datePublished`. */
  dateModified?: string;
  /** e.g. "9 min read" / "9 min de lectura". */
  readTime: string;
  authorName: string;
  authorUrl?: string;
  locale?: "en" | "es";
}) {
  const revised = Boolean(dateModified && dateModified !== datePublished);
  const linkCls =
    "text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors";

  return (
    <div className="flex flex-wrap items-center gap-4 text-[0.8rem] text-text-tertiary">
      <time className="font-mono" dateTime={datePublished}>
        {formatPostDate(datePublished, locale)}
      </time>
      <span>{readTime}</span>
      <span>
        {locale === "es" ? "Por " : "By "}
        {authorUrl ? (
          <Link href={authorUrl} className={linkCls}>
            {authorName}
          </Link>
        ) : (
          <span className={linkCls}>{authorName}</span>
        )}
      </span>
      {revised ? (
        <time className="font-mono" dateTime={dateModified}>
          {locale === "es" ? "Actualizado " : "Updated "}
          {formatPostDate(dateModified as string, locale)}
        </time>
      ) : null}
    </div>
  );
}
