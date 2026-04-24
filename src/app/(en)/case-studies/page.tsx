import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, itemListSchema, collectionPageSchema, reviewSchema } from "@/lib/schema";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";

export const metadata: Metadata = {
  title: "Case Studies — SealMetrics",
  description: "How European eCommerce teams recovered their invisible revenue with SealMetrics. Real results, real numbers (anonymised until client approval).",
  alternates: { canonical: "https://sealmetrics.com/case-studies" },
};

const cases = [
  {
    client: "European hotel group",
    sector: "Hotels · eCommerce",
    stat1: { n: "50%", l: "Traffic invisible before SealMetrics" },
    stat2: { n: "25%", l: "CRM bookings now attributed" },
    quote: "The data SealMetrics delivers is agnostic, unbiased and neutral. There's no black box.",
    cite: "Marketing team · Hotel group",
  },
  {
    client: "Hotel chain · Spain",
    sector: "Hotels · eCommerce",
    stat1: { n: "+30%", l: "Traffic recovered vs GA4" },
    stat2: { n: "15–20%", l: "Closer to CRM in attribution" },
    quote: "It's no longer a tool that sits next to the process. It's the tool we make decisions with.",
    cite: "Head of eCommerce · Hotel chain",
  },
  {
    client: "DTC coffee brand",
    sector: "eCommerce · DTC",
    stat1: { n: "30–40%", l: "Under-reported by GA4" },
    stat2: { n: "30 days", l: "To single source of truth" },
    quote: "We've used SealMetrics as 'OK, we believe this data.' It's now our single source of truth.",
    cite: "Founder & CEO · DTC brand",
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Case studies" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Case studies", url: "/case-studies" }])} />
      <JsonLd data={collectionPageSchema({ name: "Case Studies", description: "How European eCommerce teams recovered invisible revenue with SealMetrics.", url: "/case-studies" })} />
      <JsonLd
        data={itemListSchema({
          name: "SealMetrics Case Studies",
          description: "Anonymised customer case studies from European hotels, DTC and retail teams.",
          url: "/case-studies",
          items: cases.map((c) => ({
            name: `${c.client} — ${c.sector}`,
            url: `https://sealmetrics.com/case-studies`,
          })),
        })}
      />
      {cases.map((c) => (
        <JsonLd
          key={c.client}
          data={reviewSchema({
            reviewBody: c.quote,
            authorName: c.client,
            authorRole: c.cite,
          })}
        />
      ))}

      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <span className="eyebrow mb-5" style={{ display: "inline-flex", justifyContent: "center" }}>Case studies</span>
          <h1 className="h-display mx-auto mt-5" style={{ maxWidth: "22ch" }}>
            Real teams. Real numbers. <em>Honest write-ups.</em>
          </h1>
          <p className="text-ink-soft mt-8 mx-auto max-w-[60ch] leading-[1.55]" style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}>
            Case studies are anonymised until the client signs off on disclosure. Numbers are real and verified against each customer's own CRM and internal reports.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cases.map((c) => (
              <article key={c.client} className="bg-white border border-warm-100 rounded-xl p-7 flex flex-col">
                <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-warm-100">
                  <span className="text-[16px] font-semibold text-ink tracking-[-0.015em]">{c.client}</span>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-soft font-semibold">{c.sector}</span>
                </div>
                <blockquote className="text-[16px] leading-[1.45] tracking-[-0.01em] text-ink font-medium mt-4">
                  &ldquo;{c.quote}&rdquo;
                  <cite className="block mt-2.5 not-italic font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft font-semibold">{c.cite}</cite>
                </blockquote>
                <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-warm-100">
                  {[c.stat1, c.stat2].map((s) => (
                    <div key={s.n}>
                      <div className="text-[26px] font-semibold tracking-[-0.03em] text-brand leading-none tabular-nums">{s.n}</div>
                      <div className="text-[12px] leading-[1.45] text-ink-soft mt-1.5">{s.l}</div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSharedV3
        locale="en"
        titleEn={<>See your own <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>case study</em> in 30 minutes.</>}
        titleEs={<>Ve tu propio <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>caso</em> en 30 minutos.</>}
        ledeEn="Book a walkthrough. We run your own site through SealMetrics, produce the numbers live, and walk you through what they mean."
        ledeEs="Reserva walkthrough. Pasamos tu web por SealMetrics, sacamos los números en directo y te explicamos qué significan."
      />
    </>
  );
}
