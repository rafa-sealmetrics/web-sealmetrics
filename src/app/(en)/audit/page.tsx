import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, servicePageSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { AuditForm } from "@/components/audit/AuditForm";

export const metadata: Metadata = {
  title: "Free measurement audit — SealMetrics",
  description:
    "Answer 7 questions in 3 minutes. We send you a personalised analysis of the gap between what GA4 measures and what your eCommerce actually sells.",
  alternates: {
    canonical: "https://sealmetrics.com/audit",
    languages: getAlternates("/audit"),
  },
  openGraph: {
    title: "Free measurement audit — SealMetrics",
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
    </>
  );
}
