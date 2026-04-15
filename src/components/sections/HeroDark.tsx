import Image from "next/image";
import Link from "next/link";

export function HeroDark() {
  return (
    <>
      <section className="section-dark bg-dark-bg pt-32 pb-20 md:pb-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="headline-hero mb-6">
                Know exactly which channels drive your revenue.
              </h1>
              <p className="text-[1.15rem] leading-[1.7] text-dark-text-secondary mb-10 max-w-[520px]">
                SealMetrics is a{" "}
                <Link href="/glossary/cookieless-analytics" className="text-dark-text no-underline border-b border-dark-border hover:border-dark-text-secondary transition-colors">
                  cookieless analytics
                </Link>{" "}
                platform for eCommerce teams. It captures 100% of your traffic
                and conversions — every visitor, every euro attributed — without
                cookies or consent banners. The{" "}
                <Link href="/vs-ga4" className="text-dark-text no-underline border-b border-dark-border hover:border-dark-text-secondary transition-colors">
                  GA4 alternative
                </Link>{" "}
                built for complete data.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-3.5 text-[0.95rem] font-medium text-dark-bg bg-white rounded-[4px] no-underline hover:bg-warm-50 transition-colors"
                >
                  Book a Demo
                </Link>
                <Link
                  href="/growth-calculator"
                  className="inline-flex items-center px-8 py-3.5 text-[0.95rem] font-medium text-dark-text border border-dark-border rounded-[4px] no-underline hover:border-dark-text-secondary transition-colors"
                >
                  See what you're missing
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="border border-dark-border rounded-[4px] overflow-hidden">
                <Image
                  src="/screenshots/dashboard-overview.png"
                  alt="SealMetrics dashboard showing complete traffic attribution across all channels"
                  width={1200}
                  height={750}
                  className="w-full h-auto"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="transition-to-light" />
    </>
  );
}
