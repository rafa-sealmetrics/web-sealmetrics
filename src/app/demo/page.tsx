import type { Metadata } from "next";
import Link from "next/link";

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
  },
};

export default function DemoPage() {
  return (
    <>
      <section className="pt-40 pb-28 bg-white min-h-screen">
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
            <div className="bg-warm-white border border-warm-100 rounded-[4px] p-10">
              <h2 className="font-serif text-[1.35rem] font-medium text-text-primary mb-2">
                Request a demo
              </h2>
              <p className="text-[0.85rem] text-text-secondary mb-8">
                Fill in your details and we will get back to you within 24
                hours.
              </p>

              <form className="space-y-5">
                <div>
                  <label className="block text-[0.8rem] font-medium text-text-body mb-1.5">
                    Full name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 text-[0.9rem] border border-warm-200 rounded-[4px] bg-white text-text-primary outline-none focus:border-text-body transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[0.8rem] font-medium text-text-body mb-1.5">
                    Work email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 text-[0.9rem] border border-warm-200 rounded-[4px] bg-white text-text-primary outline-none focus:border-text-body transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[0.8rem] font-medium text-text-body mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 text-[0.9rem] border border-warm-200 rounded-[4px] bg-white text-text-primary outline-none focus:border-text-body transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[0.8rem] font-medium text-text-body mb-1.5">
                    Website URL
                  </label>
                  <input
                    type="url"
                    className="w-full px-4 py-3 text-[0.9rem] border border-warm-200 rounded-[4px] bg-white text-text-primary outline-none focus:border-text-body transition-colors"
                    placeholder="https://"
                  />
                </div>
                <div>
                  <label className="block text-[0.8rem] font-medium text-text-body mb-1.5">
                    Monthly pageviews (estimate)
                  </label>
                  <select
                    className="w-full px-4 py-3 text-[0.9rem] border border-warm-200 rounded-[4px] bg-white text-text-primary outline-none focus:border-text-body transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select range
                    </option>
                    <option>Under 100K</option>
                    <option>100K – 500K</option>
                    <option>500K – 2M</option>
                    <option>2M – 10M</option>
                    <option>10M+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[0.8rem] font-medium text-text-body mb-1.5">
                    Anything else we should know?
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 text-[0.9rem] border border-warm-200 rounded-[4px] bg-white text-text-primary outline-none focus:border-text-body transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 text-[0.95rem] font-medium text-white bg-text-primary rounded-[4px] hover:bg-[#333] transition-colors cursor-pointer"
                >
                  Request Demo
                </button>
                <p className="text-[0.75rem] text-text-tertiary text-center">
                  No commitment. We will respond within one business day.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
