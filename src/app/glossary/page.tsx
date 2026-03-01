import type { Metadata } from "next";
import Link from "next/link";
import { glossaryTerms } from "@/lib/content/glossary";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { collectionPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Analytics Glossary — SealMetrics",
  description:
    "Clear definitions of web analytics terms: cookieless analytics, data sampling, attribution, GDPR compliance, and more.",
  openGraph: {
    title: "Analytics Glossary — SealMetrics",
    description:
      "Clear definitions of web analytics terms for marketing and data professionals.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/glossary",
  },
};

const categories = [...new Set(glossaryTerms.map((t) => t.category))];

export default function GlossaryPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Glossary" }]} />
      <JsonLd data={collectionPageSchema({ name: "Analytics Glossary", description: "Clear definitions of web analytics terms.", url: "/glossary" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Glossary", url: "/glossary" }])} />
      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Glossary
            </span>
            <h1 className="headline-hero mb-8">Analytics terms, defined.</h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              Clear, precise definitions of the concepts that matter for modern
              web analytics. No jargon, no fluff.
            </p>
          </div>
        </div>
      </section>

      {/* Terms by category */}
      <section className="pb-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          {categories.map((category) => (
            <div key={category} className="mb-16 last:mb-0">
              <h2 className="font-serif text-[1.3rem] font-medium text-text-primary mb-6">
                {category}
              </h2>
              <div className="space-y-0">
                {glossaryTerms
                  .filter((t) => t.category === category)
                  .map((term) => (
                    <Link
                      key={term.slug}
                      href={`/glossary/${term.slug}`}
                      className="block py-6 border-b border-warm-100 first:border-t no-underline group"
                    >
                      <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-2 group-hover:text-text-body transition-colors">
                        {term.term}
                      </h3>
                      <p className="text-[0.9rem] leading-[1.7] text-text-secondary max-w-[700px]">
                        {term.shortDefinition}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
