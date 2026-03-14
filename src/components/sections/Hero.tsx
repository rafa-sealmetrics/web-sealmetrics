import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-40 pb-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="max-w-[820px]">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
            Complete analytics for eCommerce teams
          </span>
          <h1 className="headline-hero mb-8">
            See where every sale really comes from.
          </h1>
          <p className="text-[1.2rem] leading-[1.75] text-text-secondary max-w-[640px] mb-10">
            GA4 loses 40&ndash;90% of your EU traffic to consent banners.
            SealMetrics captures 100%&nbsp;&mdash; no cookies, no consent walls,
            full GDPR compliance. Finally know which channels actually drive your
            revenue.
          </p>
          <div className="flex items-center gap-5 flex-wrap">
            <Link
              href="/data-loss-calculator"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[0.95rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
            >
              See how much data you're losing — free, 2 minutes
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[0.95rem] text-text-secondary bg-transparent border border-warm-200 rounded-[4px] no-underline hover:border-text-body hover:text-text-primary transition-colors"
            >
              Book a Demo
            </Link>
          </div>
          <p className="mt-5 text-[0.8rem] text-text-tertiary">
            No cookies. No consent banners. Full GDPR compliance by design.
          </p>
        </div>
      </div>
    </section>
  );
}
