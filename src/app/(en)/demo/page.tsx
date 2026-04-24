import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { DemoForm } from "./DemoForm";

export const metadata: Metadata = {
  title: "Book a Demo — SealMetrics",
  description:
    "See how SealMetrics captures 100% of your traffic without cookies. 30-minute personalized walkthrough.",
  openGraph: {
    title: "Book a Demo — SealMetrics",
    description:
      "30-minute personalized walkthrough. See what 100% of your traffic looks like.",
    type: "website",
  },
  alternates: {
    canonical: "https://sealmetrics.com/demo",
    languages: getAlternates("/demo"),
  },
};

export default function DemoPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Book a Demo" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Book a Demo", url: "/demo" }])} />
      <section className="pt-12 pb-28 bg-white min-h-screen">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left: info */}
            <div>
              <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
                Book a Demo
              </span>
              <h1 className="headline-hero mb-8">
                See what your analytics have been missing.
              </h1>
              <p className="text-[1.1rem] leading-[1.75] text-text-secondary mb-10">
                In 30 minutes, we will show you exactly how much data your
                current setup is missing&nbsp;&mdash; and how SealMetrics
                recovers it.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Side-by-side comparison",
                    desc: "We run SealMetrics alongside your GA4 data so you can see the difference in real numbers.",
                  },
                  {
                    title: "Your data, your domains",
                    desc: "The demo uses your actual traffic, not generic dashboards. You see your own invisible visitors.",
                  },
                  {
                    title: "No commitment",
                    desc: "30 minutes. No contract, no pressure, no follow-up calls you did not ask for.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="pb-6 border-b border-warm-100 last:border-0"
                  >
                    <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[0.9rem] text-text-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="p-5 bg-warm-white border border-warm-100 rounded-[4px] text-center">
                  <div className="font-serif text-[2rem] font-medium text-text-primary mb-1">58%</div>
                  <div className="text-[0.75rem] text-text-secondary leading-snug">Average untracked conversions recovered</div>
                </div>
                <div className="p-5 bg-warm-white border border-warm-100 rounded-[4px] text-center">
                  <div className="font-serif text-[2rem] font-medium text-text-primary mb-1">30 min</div>
                  <div className="text-[0.75rem] text-text-secondary leading-snug">To see your own data gap live</div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
                <p className="text-[0.85rem] text-text-secondary leading-relaxed">
                  &ldquo;We thought our analytics were accurate. SealMetrics
                  showed us we were missing 74% of our conversions.&rdquo;
                </p>
                <p className="text-[0.8rem] text-text-tertiary mt-2">
                  Head of Digital Marketing &mdash; European Fashion Retailer
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-5 text-[0.85rem]">
                <Link href="/how-it-works" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">How it works</Link>
                <Link href="/product" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">Full product</Link>
                <Link href="/data-loss-calculator" className="text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:text-text-primary transition-colors">Calculate your data loss</Link>
              </div>
            </div>

            {/* Right: form */}
            <DemoForm />
          </div>
        </div>
      </section>
    </>
  );
}
