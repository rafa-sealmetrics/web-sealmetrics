import type { Metadata } from "next";
import { Calculator } from "./Calculator";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Data Loss Calculator — SealMetrics",
  description:
    "How much revenue are you losing to invisible visitors? Enter your numbers and see the gap between GA4 and reality.",
  openGraph: {
    title: "Data Loss Calculator — SealMetrics",
    description:
      "Calculate how much traffic and revenue your analytics are missing due to consent banners, ad blockers, and browser restrictions.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/data-loss-calculator",
  },
};

export default function DataLossCalculatorPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Data Loss Calculator" }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Data Loss Calculator", url: "/data-loss-calculator" },
        ])}
      />

      {/* Hero */}
      <section className="pt-12 pb-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[660px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Data Loss Calculator
            </span>
            <h1 className="headline-hero mb-6">
              How much revenue is invisible to your analytics?
            </h1>
            <p className="text-[1.15rem] leading-[1.75] text-text-secondary">
              Cookie consent, ad blockers, and browser restrictions hide the
              majority of your traffic. Enter your numbers to see exactly how
              much data GA4 is missing — and what that costs you every month.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="pb-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <Calculator />
        </div>
      </section>
    </>
  );
}
