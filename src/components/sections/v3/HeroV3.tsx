import Link from "next/link";
import Image from "next/image";

export function HeroV3() {
  return (
    <section className="bg-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <h1 className="font-serif text-[clamp(2.75rem,5vw,4.25rem)] leading-[1.08] tracking-[-0.02em] text-warm-900 mb-6">
              The cookieless analytics platform for{" "}
              <span className="block h-[1.15em] overflow-hidden">
                <span className="block animate-text-rotate">
                  <span className="block h-[1.15em] italic text-green-muted">
                    complete attribution
                  </span>
                  <span className="block h-[1.15em] italic text-green-muted">
                    real revenue data
                  </span>
                  <span className="block h-[1.15em] italic text-green-muted">
                    zero consent walls
                  </span>
                  <span className="block h-[1.15em] italic text-green-muted">
                    confident decisions
                  </span>
                  <span className="block h-[1.15em] italic text-green-muted">
                    complete attribution
                  </span>
                </span>
              </span>
            </h1>
            <p className="text-lg text-warm-500 leading-relaxed mb-8 max-w-md">
              GA4 captures ~13% of EU traffic. SealMetrics captures 100%.
              When you can see everything, the decisions you make are
              fundamentally different.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link
                href="/demo"
                className="inline-flex items-center px-7 py-3.5 bg-warm-900 text-white text-sm font-medium rounded-[4px] hover:bg-warm-800 transition-colors"
              >
                Book a Demo
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center px-7 py-3.5 border border-warm-200 text-warm-900 text-sm font-medium rounded-[4px] hover:border-warm-400 transition-colors"
              >
                Explore Product
              </Link>
            </div>
            <p className="text-xs text-warm-400">
              GDPR compliant by design. EU-hosted. No cookies.
            </p>
          </div>

          {/* Right: Real Dashboard Screenshot */}
          <div className="relative lg:-mr-16">
            <div className="rounded-[4px] shadow-[0_8px_40px_rgba(0,0,0,0.08)] overflow-hidden">
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
