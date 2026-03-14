import Link from "next/link";
import Image from "next/image";

export function HeroV2() {
  return (
    <section className="bg-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Copy */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-warm-400 mb-6">
              Decision Intelligence for eCommerce
            </p>
            <h1 className="font-serif text-[clamp(2.5rem,4.5vw,4rem)] leading-[1.1] tracking-[-0.02em] text-warm-900">
              Cookieless analytics that{" "}
              <span className="block h-[1.15em] overflow-hidden">
                <span className="block animate-text-rotate">
                  <span className="block h-[1.15em] italic text-green-muted">
                    captures 100% of your traffic
                  </span>
                  <span className="block h-[1.15em] italic text-green-muted">
                    eliminates data blind spots
                  </span>
                  <span className="block h-[1.15em] italic text-green-muted">
                    replaces consent banners
                  </span>
                  <span className="block h-[1.15em] italic text-green-muted">
                    drives revenue growth
                  </span>
                  <span className="block h-[1.15em] italic text-green-muted">
                    captures 100% of your traffic
                  </span>
                </span>
              </span>
            </h1>
            <p className="text-lg text-warm-500 leading-relaxed mt-6 mb-8 max-w-lg">
              GA4 captures ~13% of your EU traffic. SealMetrics captures
              100% — no cookies, no consent walls, no sampling.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Link
                href="/demo"
                className="inline-flex items-center px-7 py-3.5 bg-warm-900 text-white text-sm font-medium rounded-[4px] hover:bg-warm-800 transition-colors"
              >
                Book a Demo
              </Link>
              <Link
                href="/data-loss-calculator"
                className="inline-flex items-center px-7 py-3.5 border border-warm-200 text-warm-900 text-sm font-medium rounded-[4px] hover:border-warm-400 transition-colors"
              >
                Calculate Your Data Loss
              </Link>
            </div>
            <p className="text-xs text-warm-400">
              No cookies. No consent banners. Full GDPR compliance by design.
            </p>
          </div>

          {/* Right: Real Dashboard Screenshot */}
          <div className="relative lg:-mr-12">
            <div className="rounded-[4px] shadow-sm overflow-hidden">
              <Image
                src="/screenshots/dashboard-overview.png"
                alt="SealMetrics analytics dashboard showing real-time traffic, conversions, and revenue data"
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
