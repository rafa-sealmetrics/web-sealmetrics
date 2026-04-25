import Link from "next/link";
import { getRelatedTerms } from "@/lib/content/glossary";

/**
 * Renders the "Related concepts" block for a glossary term.
 * Reads from the central glossary data so links stay in sync.
 */
export function RelatedGlossaryTerms({
  slug,
  locale = "en",
}: {
  slug: string;
  locale?: "en" | "es";
}) {
  const related = getRelatedTerms(slug);
  if (!related.length) return null;

  const heading = locale === "es" ? "Conceptos relacionados" : "Related concepts";
  const prefix = locale === "es" ? "/es/glossary" : "/glossary";

  return (
    <div className="mt-16 pt-10 border-t border-warm-100">
      <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-4">
        {heading}
      </h3>
      <ul className="space-y-3">
        {related.map((t) => (
          <li key={t.slug}>
            <Link
              href={`${prefix}/${t.slug}`}
              className="block text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors"
            >
              <span className="font-medium text-text-primary">{t.term}</span>
              <span className="block text-[0.82rem] text-text-tertiary mt-0.5">
                {t.shortDefinition}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
