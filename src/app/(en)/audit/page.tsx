import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { AuditForm } from "@/components/audit/AuditForm";

export const metadata: Metadata = {
  title: "Consentless Analytics Audit — Find Your Hidden Revenue | SealMetrics",
  description:
    "Measure what GA4 misses. Our free consentless analytics audit reveals the revenue gap in 3 minutes — personalised, human-written report in 24h.",
  alternates: {
    canonical: "https://sealmetrics.com/audit",
    languages: getAlternates("/audit"),
  },
  openGraph: {
    title: "Consentless Analytics Audit — Find Your Hidden Revenue | SealMetrics",
    description:
      "Discover how much revenue your analytics is hiding. Personalised audit in 24h, human-written, no automated sequences.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Free audit" }]} />
      <JsonLd
        data={breadcrumbSchema([{ name: "Free audit", url: "/audit" }])}
      />
      <JsonLd
        data={servicePageSchema({
          name: "SealMetrics Free Measurement Audit",
          description:
            "Personalised audit of the gap between GA4 and your real backend revenue. 7 questions, 3 minutes, human-written report within 24h.",
          url: "/audit",
          audience: "CMO, Head of Marketing, eCommerce Director",
        })}
      />

      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-12">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <span className="eyebrow mb-5">Free measurement audit</span>
          <h1 className="h-display mt-5">
            See how much revenue your analytics is{" "}
            <em>hiding from you.</em>
          </h1>
          <p
            className="text-ink-soft mt-7 leading-[1.55] max-w-[60ch]"
            style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}
          >
            Answer 7 questions. We send you a personalised analysis of the gap
            between what GA4 measures and what your eCommerce actually sells.
            Human-written, delivered in 24h — no automated sequences.
          </p>
          <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-ink-soft font-semibold mt-6">
            3 minutes · no install
          </p>
        </div>
      </section>

      <section className="bg-white border-t border-warm-100 py-16 md:py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <AuditForm locale="en" />
          <p className="text-center text-[13px] text-ink-soft mt-6">
            Your data stays in the EU. We don&apos;t share submissions with
            third parties.
          </p>
        </div>
      </section>

      <section className="bg-warm-white border-t border-warm-100 py-16 md:py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <h2 className="text-2xl font-semibold text-ink mb-8">Why most eCommerce analytics under-report revenue</h2>
          <p className="text-ink-soft leading-[1.6] mb-5">
            GA4 and other client-side tools rely on JavaScript executing successfully in the browser. Ad blockers, cookie consent rejections, slow connections, and iOS privacy features all silently drop tracking events before they ever reach your analytics platform. Industry studies consistently show that between 20 % and 40 % of conversion events go unrecorded — meaning your reported ROAS, attributed revenue, and channel performance figures are systematically lower than reality.
          </p>
          <p className="text-ink-soft leading-[1.6] mb-5">
            The gap is not uniform across channels. Paid social typically suffers the highest loss because its audience skews toward privacy-conscious users. Direct and organic traffic losses are smaller but still significant. Without a server-side source of truth — such as your order management system or payment processor — there is no reliable way to know how large your gap actually is.
          </p>
          <p className="text-ink-soft leading-[1.6]">
            Our free audit cross-references the signals you share about your current stack against common loss patterns we have identified across hundreds of eCommerce sites. The result is a prioritised, human-written report that tells you where your biggest blind spots are and what to do about them first.
          </p>
        </div>
      </section>

      <section className="bg-white border-t border-warm-100 py-16 md:py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <h2 className="text-2xl font-semibold text-ink mb-8">What you get</h2>
          <ul className="space-y-4 text-ink-soft leading-[1.6]">
            <li className="flex gap-3">
              <span className="mt-1 shrink-0 text-accent">✓</span>
              <span><strong className="text-ink">Measurement gap estimate.</strong> A data-backed range showing the percentage of conversions your current setup is likely missing.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 shrink-0 text-accent">✓</span>
              <span><strong className="text-ink">Channel-level breakdown.</strong> Which acquisition channels are most affected and why.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 shrink-0 text-accent">✓</span>
              <span><strong className="text-ink">Prioritised recommendations.</strong> Three to five concrete actions ranked by expected impact versus implementation effort.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 shrink-0 text-accent">✓</span>
              <span><strong className="text-ink">Human-written report.</strong> No automated sequences, no generic PDFs — a real analyst reviews your answers before writing your report.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-warm-white border-t border-warm-100 py-16 md:py-20">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <h2 className="text-2xl font-semibold text-ink mb-8">Frequently asked questions</h2>
          <dl className="space-y-8">
            <div>
              <dt className="font-semibold text-ink mb-2">How long does it take to complete the audit questionnaire?</dt>
              <dd className="text-ink-soft leading-[1.6]">The questionnaire has 7 questions and takes around 3 minutes. No technical knowledge is required — we ask about your current tools and business context, not your code.</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink mb-2">When will I receive my report?</dt>
              <dd className="text-ink-soft leading-[1.6]">We aim to deliver every report within 24 hours on business days. You will receive it directly in your inbox — no dashboard login needed.</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink mb-2">Is this audit really free?</dt>
              <dd className="text-ink-soft leading-[1.6]">Yes, completely. There is no trial, no credit card, and no obligation. We offer the audit because helping you understand your measurement gap is the best way to demonstrate the value of accurate analytics.</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink mb-2">What if I am not using GA4?</dt>
              <dd className="text-ink-soft leading-[1.6]">The audit covers any client-side analytics setup, including Adobe Analytics, Matomo, and custom implementations. The underlying causes of measurement loss are platform-agnostic.</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink mb-2">How is my data handled?</dt>
              <dd className="text-ink-soft leading-[1.6]">All data is processed and stored within the EU. We do not share your submission with third parties or use it for advertising purposes.</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
