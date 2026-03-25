import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Full-width headline */}
        <div className="max-w-[820px] mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-6">
            Complete analytics for eCommerce teams
          </span>
          <h1 className="headline-hero">
            See where every sale really comes from.
          </h1>
        </div>

        {/* Two columns: supporting copy + screenshot */}
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start">
          {/* Supporting copy + CTAs */}
          <div className="lg:pt-4 order-2 lg:order-1">
            <p className="text-[1.1rem] leading-[1.75] text-text-secondary mb-8">
              Your GA4 is making decisions on 16% of your real data. Every
              budget meeting, every campaign review&nbsp;&mdash; built on
              incomplete information.
            </p>
            <div className="flex items-center gap-5 flex-wrap">
              <a
                className="inline-flex items-center gap-2 px-7 py-3.5 text-[0.95rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
                href="/data-loss-calculator/"
              >
                Calculate your exact data loss — free, 2 minutes
              </a>
              <a
                className="text-[0.9rem] text-text-tertiary no-underline hover:text-text-primary transition-colors underline underline-offset-4"
                href="/demo/"
              >
                or book a demo
              </a>
            </div>
          </div>

          {/* Dashboard screenshot */}
          <div className="relative lg:-mr-8 order-1 lg:order-2">
            <div className="rounded-[4px] shadow-[0_8px_40px_rgba(0,0,0,0.08)] overflow-hidden">
              <Image
                src="/screenshots/dashboard-overview.png"
                alt="SealMetrics analytics dashboard showing entrances, conversions, and revenue data for an eCommerce site"
                width={1440}
                height={900}
                className="w-full h-auto"
                unoptimized
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
