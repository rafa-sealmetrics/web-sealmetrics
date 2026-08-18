import type { Metadata } from "next";
import Link from "next/link";
import { glossaryTerms } from "@/lib/content/glossary";
import { ES_TERM_SLUGS, glossaryHref } from "@/lib/content/glossary-es";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { collectionPageSchema, breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";
import { ogImage } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "Glosario de analítica — SealMetrics",
  description: "Definiciones claras de términos de analítica web: analítica sin cookies, muestreo, atribución, compliance RGPD y más.",
  openGraph: {
    title: "Glosario de analítica — SealMetrics",
    description: "Definiciones claras de términos de analítica web: analítica sin cookies, muestreo, atribución, compliance RGPD y más.",
    type: "website",
    images: [ogImage("/es/glossary/")],
    url: "https://sealmetrics.com/es/glossary/",
    siteName: "SealMetrics",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Glosario de analítica — SealMetrics",
    description: "Definiciones claras de términos de analítica web: analítica sin cookies, muestreo, atribución, compliance RGPD y más.",
    images: [ogImage("/es/glossary/")],
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/glossary/",
    languages: getAlternatesEs("/glossary"),
  },
};

const categories = [...new Set(glossaryTerms.map((t) => t.category))];

// Which terms have a Spanish page now lives in src/lib/content/glossary-es.ts,
// shared with RelatedGlossaryTerms and the ES term pages. Three local copies of
// this list is how 21 links to non-existent Spanish URLs shipped.

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Glosario" }]} locale="es" />
      <JsonLd data={collectionPageSchema({ name: "Glosario de analítica", description: "Definiciones claras de términos de analítica web.", url: "/es/glossary" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Glosario", url: "/es/glossary" }])} />
      <JsonLd
        data={itemListSchema({
          name: "Glosario de analítica",
          description: "Definiciones de términos de analítica web, RGPD y atribución para equipos eCommerce europeos.",
          url: "/es/glossary",
          items: glossaryTerms.map((t) => ({
            name: t.term,
            // Only terms with a page get a URL — a term that exists only as an
            // index entry would otherwise point the schema at a 404.
            ...(t.hasPage
              ? { url: `https://sealmetrics.com${glossaryHref(t.slug, "es")}` }
              : {}),
          })),
        })}
      />

      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <span className="eyebrow mb-5" style={{ display: "inline-flex", justifyContent: "center" }}>Glosario</span>
          <h1 className="h-display mx-auto mt-5" style={{ maxWidth: "22ch" }}>
            Términos de analítica, <em>en lenguaje claro.</em>
          </h1>
          <p className="text-ink-soft mt-8 mx-auto max-w-[60ch] leading-[1.55]" style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}>
            Definiciones escritas para líderes de marketing y data. Cortas. Con opinión. Honestas sobre qué importa y qué no.
          </p>
          <p className="mt-6 font-mono text-[12px] text-ink-soft uppercase tracking-[0.06em]">
            {ES_TERM_SLUGS.size} de {glossaryTerms.filter((t) => t.hasPage).length} definiciones en
            español · el resto abre la versión en inglés
          </p>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          {categories.map((category) => (
            <div key={category} className="mb-16 last:mb-0">
              <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft mb-6">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {glossaryTerms.filter((t) => t.category === category).map((term) => {
                  const body = (
                    <>
                      <h3 className="text-[16px] font-semibold tracking-[-0.015em] text-ink mb-2 group-hover:text-brand transition-colors">{term.term}</h3>
                      <p className="text-[13.5px] leading-[1.5] text-ink-soft">{term.shortDefinition}</p>
                    </>
                  );
                  // Index-only entries have no term page to link to.
                  return term.hasPage ? (
                    <Link
                      key={term.slug}
                      href={glossaryHref(term.slug, "es")}
                      className="block p-5 bg-white border border-warm-100 rounded-xl no-underline group transition-all hover:border-warm-200 hover:-translate-y-0.5"
                    >
                      {body}
                    </Link>
                  ) : (
                    <div key={term.slug} className="block p-5 bg-warm-white border border-warm-100 rounded-xl group">
                      {body}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCtaSharedV3
        locale="es"
        titleEn={<>Past definitions. See the real thing.</>}
        titleEs={<>Más allá de las <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>definiciones.</em> Ve lo real.</>}
        ledeEn="30 min walkthrough."
        ledeEs="30 min sobre tu web. Corremos SealMetrics junto a GA4 y te mostramos el gap — en directo."
      />
    </>
  );
}
