import type { Metadata } from "next";
import Link from "next/link";
import { glossaryTerms } from "@/lib/content/glossary";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { collectionPageSchema, breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";

export const metadata: Metadata = {
  title: "Analytics Glossary — SealMetrics",
  description: "Clear definitions of web analytics terms: cookieless analytics, data sampling, attribution, GDPR compliance, and more.",
  alternates: { canonical: "https://sealmetrics.com/glossary" },
};

const categories = [...new Set(glossaryTerms.map((t) => t.category))];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Glossary" }]} />
      <JsonLd data={collectionPageSchema({ name: "Analytics Glossary", description: "Clear definitions of web analytics terms.", url: "/glossary" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Glossary", url: "/glossary" }])} />
      <JsonLd
        data={itemListSchema({
          name: "Analytics Glossary",
          description: "Definitions of web analytics, GDPR and attribution terms curated for European eCommerce teams.",
          url: "/glossary",
          items: glossaryTerms.map((t) => ({
            name: t.term,
            url: `https://sealmetrics.com/glossary/${t.slug}`,
          })),
        })}
      />

      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <span className="eyebrow mb-5" style={{ display: "inline-flex", justifyContent: "center" }}>Glossary</span>
          <h1 className="h-display mx-auto mt-5" style={{ maxWidth: "22ch" }}>
            Analytics terms, <em>in plain language.</em>
          </h1>
          <p className="text-ink-soft mt-8 mx-auto max-w-[60ch] leading-[1.55]" style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}>
            Definitions written for marketing and data leaders. Short. Opinionated. Honest about what matters and what doesn't.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          {categories.map((category) => (
            <div key={category} className="mb-16 last:mb-0">
              <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft mb-6">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {glossaryTerms.filter((t) => t.category === category).map((term) => (
                  <Link
                    key={term.slug}
                    href={`/glossary/${term.slug}`}
                    className="block p-5 bg-white border border-warm-100 rounded-xl no-underline group transition-all hover:border-warm-200 hover:-translate-y-0.5"
                  >
                    <h3 className="text-[16px] font-semibold tracking-[-0.015em] text-ink mb-2 group-hover:text-brand transition-colors">{term.term}</h3>
                    <p className="text-[13.5px] leading-[1.5] text-ink-soft">{term.shortDefinition}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCtaSharedV3
        locale="en"
        titleEn={<>Past <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>definitions.</em> See the real thing.</>}
        titleEs={<>Más allá de las <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>definiciones.</em> Ve lo real.</>}
        ledeEn="30 minutes on your own site. We run SealMetrics alongside GA4 and show the gap — live."
        ledeEs="30 min sobre tu web. Corremos SealMetrics junto a GA4 y te mostramos el gap — en directo."
      />
    </>
  );
}
