import type { Metadata } from "next";
import { Calculator } from "./Calculator";

export const metadata: Metadata = {
  title: "Data Loss Calculator — SealMetrics",
  description:
    "Estimate how much traffic your analytics are missing. Enter your monthly pageviews and see the gap between GA4 and reality.",
  openGraph: {
    title: "Data Loss Calculator — SealMetrics",
    description:
      "How much traffic are you really missing? Calculate the gap between GA4 and complete data.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/data-loss-calculator",
  },
};

export default function DataLossCalculatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
              Data Loss Calculator
            </span>
            <h1 className="headline-hero mb-8">
              How much traffic are you not seeing?
            </h1>
            <p className="text-[1.2rem] leading-[1.75] text-text-secondary">
              Enter your numbers. See the gap between what GA4 reports and what
              is actually happening on your site.
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
