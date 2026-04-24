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
    "30-minute personalized walkthrough. See what 100% of your traffic looks like on your own site.",
  openGraph: {
    title: "Book a Demo — SealMetrics",
    description: "30-minute walkthrough with the founder. See your own data gap live.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/demo",
    languages: getAlternates("/demo"),
  },
};

export default function DemoPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Book a demo" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Book a demo", url: "/demo" }])} />

      <section className="pt-24 md:pt-28 pb-24 bg-warm-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20 items-start">
            {/* Left: info */}
            <div>
              <span className="eyebrow mb-5" style={{ display: "inline-flex" }}>
                Book a demo
              </span>
              <h1 className="h-display mt-5" style={{ maxWidth: "18ch", fontSize: "clamp(40px, 5.4vw, 72px)" }}>
                See what your analytics <em>have been missing.</em>
              </h1>
              <p
                className="text-ink-soft mt-7 leading-[1.55] max-w-[50ch]"
                style={{ fontSize: "clamp(16px, 1.3vw, 19px)" }}
              >
                In 30 minutes, we run your own site through the gap calculator — live. You see how much data your current setup is missing and where. No slides. No sales pitch.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {[
                  {
                    t: "Side-by-side with GA4",
                    d: "Your current GA4 numbers next to SealMetrics running on the same traffic. The gap is in your own data.",
                  },
                  {
                    t: "Your sites, your UTMs",
                    d: "Not a generic sandbox. We pull your real channels, campaigns and funnels.",
                  },
                  {
                    t: "No commitment, no follow-up sequence",
                    d: "30 minutes. If it's not for you, we tell you. No sales email drip.",
                  },
                ].map((item) => (
                  <div
                    key={item.t}
                    className="flex gap-4 pb-4 border-b border-warm-100 last:border-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 shrink-0" />
                    <div>
                      <h3 className="text-[16px] font-semibold text-ink tracking-[-0.01em] mb-1">
                        {item.t}
                      </h3>
                      <p className="text-[14px] text-ink-soft leading-[1.55]">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="p-5 bg-white border border-warm-100 rounded-xl text-center">
                  <div className="font-semibold text-ink tabular-nums leading-none" style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>
                    <em className="italic-accent">58</em>%
                  </div>
                  <div className="text-[12px] text-ink-soft mt-2 leading-[1.4]">
                    Avg. untracked conversions recovered
                  </div>
                </div>
                <div className="p-5 bg-white border border-warm-100 rounded-xl text-center">
                  <div className="font-semibold text-ink tabular-nums leading-none" style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>
                    <em className="italic-accent">30</em> min
                  </div>
                  <div className="text-[12px] text-ink-soft mt-2 leading-[1.4]">
                    To see your own data gap live
                  </div>
                </div>
              </div>

              <div
                className="mt-8 p-6 bg-white rounded-xl"
                style={{ borderLeft: "3px solid #2E5C8A" }}
              >
                <p className="text-[15px] text-ink-2 leading-[1.6] italic">
                  &ldquo;We thought our analytics were accurate. SealMetrics showed us we were missing 74% of our conversions.&rdquo;
                </p>
                <p className="font-mono text-[11px] text-ink-soft uppercase tracking-[0.08em] font-semibold mt-3">
                  Head of Digital Marketing · European fashion retailer
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[13.5px]">
                <Link
                  href="/how-it-works"
                  className="text-ink-soft no-underline border-b border-warm-200 pb-0.5 hover:text-ink transition-colors"
                >
                  How it works
                </Link>
                <Link
                  href="/product"
                  className="text-ink-soft no-underline border-b border-warm-200 pb-0.5 hover:text-ink transition-colors"
                >
                  Full product
                </Link>
                <Link
                  href="/data-loss-calculator"
                  className="text-ink-soft no-underline border-b border-warm-200 pb-0.5 hover:text-ink transition-colors"
                >
                  Calculate your data loss
                </Link>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:sticky lg:top-24">
              <DemoForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
