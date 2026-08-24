import type { Metadata } from "next";
import Link from "next/link";
import { glossaryTerms } from "@/lib/content/glossary";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { collectionPageSchema, breadcrumbSchema, itemListSchema, definedTermSetSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";
import { ogImage } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "Analytics Glossary — Web, GDPR & Attribution Terms",
  description: "A–Z definitions of web analytics, GDPR, attribution and eCommerce measurement terms, written for European marketing and data leaders.",
  openGraph: {
    title: "Analytics Glossary — Web, GDPR & Attribution Terms",
    description: "A–Z definitions of web analytics, GDPR, attribution and eCommerce measurement terms, written for European marketing and data leaders.",
    type: "website",
    images: [ogImage("/glossary/")],
    url: "https://sealmetrics.com/glossary/",
    siteName: "Sealmetrics",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Analytics Glossary — Web, GDPR & Attribution Terms",
    description: "A–Z definitions of web analytics, GDPR, attribution and eCommerce measurement terms, written for European marketing and data leaders.",
    images: [ogImage("/glossary/")],
  },
  alternates: {
    canonical: "https://sealmetrics.com/glossary/",
    languages: getAlternates("/glossary"),
  },
};

const sorted = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term));

const byLetter = sorted.reduce<Record<string, typeof sorted>>((acc, t) => {
  const letter = t.term[0].toUpperCase();
  (acc[letter] ||= []).push(t);
  return acc;
}, {});

const letters = Object.keys(byLetter).sort();

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
          items: sorted.map((t) => ({
            name: t.term,
            ...(t.hasPage ? { url: `https://sealmetrics.com/glossary/${t.slug}` } : {}),
          })),
        })}
      />
      <JsonLd
        data={definedTermSetSchema({
          name: "Analytics Glossary",
          description:
            "Definitions of web analytics, GDPR, attribution and eCommerce measurement terms, written for European marketing and data leaders.",
          url: "/glossary",
          terms: sorted,
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

      <section className="py-10 bg-white border-t border-warm-100 sticky top-0 z-10">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <nav aria-label="Jump to letter" className="flex flex-wrap gap-1.5">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#${letter}`}
                className="inline-flex items-center justify-center min-w-[32px] h-8 px-2 font-mono text-[12px] font-bold text-ink-soft no-underline border border-warm-100 rounded-[4px] hover:border-warm-200 hover:text-ink transition-colors"
              >
                {letter}
              </a>
            ))}
            <span className="inline-flex items-center h-8 px-3 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft">
              {sorted.length} terms
            </span>
          </nav>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          {letters.map((letter) => (
            <div key={letter} id={letter} className="mb-14 last:mb-0 scroll-mt-24">
              <h2 className="font-serif text-[2rem] font-medium text-ink mb-6 pb-3 border-b border-warm-100">
                {letter}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {byLetter[letter].map((term) => {
                  const body = (
                    <>
                      <div className="flex items-baseline justify-between gap-3 mb-2">
                        <h3 className="text-[16px] font-semibold tracking-[-0.015em] text-ink group-hover:text-brand transition-colors">
                          {term.term}
                        </h3>
                        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-soft shrink-0">
                          {term.category}
                        </span>
                      </div>
                      <p className="text-[13.5px] leading-[1.5] text-ink-soft">{term.shortDefinition}</p>
                    </>
                  );

                  return term.hasPage ? (
                    <Link
                      key={term.slug}
                      href={`/glossary/${term.slug}`}
                      className="block p-5 bg-white border border-warm-100 rounded-xl no-underline group transition-all hover:border-warm-200 hover:-translate-y-0.5"
                    >
                      {body}
                    </Link>
                  ) : (
                    <div
                      key={term.slug}
                      className="block p-5 bg-warm-white border border-warm-100 rounded-xl group"
                    >
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
        locale="en"
        titleEn={<>Past <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>definitions.</em> See the real thing.</>}
        titleEs={<>Más allá de las <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>definiciones.</em> Ve lo real.</>}
        ledeEn="30 minutes on your own site. We run Sealmetrics alongside GA4 and show the gap — live."
        ledeEs="30 min sobre tu web. Corremos Sealmetrics junto a GA4 y te mostramos el gap — en directo."
      />
    </>
  );
}
