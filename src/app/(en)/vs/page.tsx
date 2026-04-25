import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";

export const metadata: Metadata = {
  title: "SealMetrics vs the alternatives — Complete comparisons",
  description: "Side-by-side comparisons against GA4, GA360, Adobe Analytics and Piwik PRO. Honest about trade-offs. Data-driven, no marketing spin.",
  openGraph: {
    title: "SealMetrics vs the alternatives",
    description: "Feature-by-feature comparisons against every major analytics platform.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: { canonical: "https://sealmetrics.com/vs", languages: getAlternates("/vs") },
};

const comparisons = [
  { slug: "vs-ga4", name: "Google Analytics 4", stat: "40–60% traffic lost", tagline: "The free default everyone uses — and its structural blind spot in Europe." },
  { slug: "vs/ga360", name: "Google Analytics 360", stat: "$150K/year", tagline: "Enterprise price, enterprise contract, same cookie architecture as free GA4." },
  { slug: "vs/adobe-analytics", name: "Adobe Analytics", stat: "$100K + specialists", tagline: "Enterprise depth, but 6-month implementation and Adobe-certified staff required." },
  { slug: "vs/piwik-pro", name: "Piwik PRO", stat: "€30K enterprise", tagline: "EU-hosted — but still cookie-based and consent-dependent." },
  { slug: "alternatives/google-analytics", name: "Google Analytics alternatives", stat: "The broader picture", tagline: "What to pick if you're post-GA4 — and why most \"alternatives\" are just cheaper clones." },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Comparisons" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Comparisons", url: "/vs" }])} />
      <JsonLd data={itemListSchema({
        name: "SealMetrics analytics platform comparisons",
        description: "Side-by-side analysis of SealMetrics vs Google Analytics 4, GA360, Adobe Analytics and Piwik PRO.",
        url: "/vs",
        items: comparisons.map((c) => ({ name: c.name, url: `/${c.slug}` })),
      })} />

      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <span className="eyebrow mb-5" style={{ display: "inline-flex", justifyContent: "center" }}>Comparisons</span>
          <h1 className="h-display mx-auto mt-5" style={{ maxWidth: "22ch" }}>
            SealMetrics vs <em>the alternatives.</em>
          </h1>
          <p className="text-ink-soft mt-8 mx-auto max-w-[62ch] leading-[1.55]" style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}>
            Honest side-by-side comparisons. Acknowledges strengths. Direct about trade-offs. Uses real numbers on your own traffic — run both in parallel for 30 days and decide.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comparisons.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="group block bg-white border border-warm-100 rounded-xl p-8 no-underline transition-all hover:border-warm-200 hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <h2 className="text-[22px] font-semibold tracking-[-0.015em] text-ink leading-[1.2] group-hover:text-brand transition-colors">
                    SealMetrics vs {c.name}
                  </h2>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#B5423B" }}>{c.stat}</span>
                </div>
                <p className="text-[15px] leading-[1.55] text-ink-soft">{c.tagline}</p>
                <span className="inline-flex items-center gap-1.5 mt-4 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-brand">
                  Read the comparison →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSharedV3
        locale="en"
        titleEn={<>Run both for 30 days. <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>Then decide.</em></>}
        titleEs={<>Corre los dos 30 días. <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>Y entonces decide.</em></>}
        ledeEn="Install SealMetrics alongside your current stack. Compare with your CRM. If the gap isn't real, you owe us nothing."
        ledeEs="Instala SealMetrics junto a tu stack actual. Compara con tu CRM. Si el gap no es real, no nos debes nada."
      />
    </>
  );
}
