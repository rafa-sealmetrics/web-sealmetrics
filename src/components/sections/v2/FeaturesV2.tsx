import Image from "next/image";

export function FeaturesV2() {
  return (
    <section className="bg-warm-white border-t border-warm-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-warm-400 mb-4">
            Product
          </p>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] text-warm-900 mb-4">
            Complete data. Clear answers. Confident decisions.
          </h2>
          <p className="text-lg text-warm-500 leading-relaxed">
            Three capabilities that transform how eCommerce teams understand
            and grow their business.
          </p>
        </div>

        {/* Feature 1: Revenue Attribution */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-green-muted mb-3">
              Revenue Attribution
            </p>
            <h3 className="font-serif text-[clamp(1.5rem,2vw,2rem)] leading-[1.2] text-warm-900 mb-4">
              Know what actually drives revenue.
            </h3>
            <p className="text-warm-500 leading-relaxed mb-6">
              See which channels actually generate revenue — with 100% of
              sessions counted, not just the 13% that accepted cookies.
            </p>
            <ul className="space-y-3">
              {[
                "Last-click attribution on 100% of sessions, not a 13% sample",
                "Revenue breakdown by channel, campaign, and content",
                "Cost integration for true ROAS calculation",
                "Funnel analysis with drop-off identification",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-warm-500"
                >
                  <span className="text-warm-300 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[4px] shadow-sm overflow-hidden">
            <Image
              src="/screenshots/dashboard-sources.png"
              alt="SealMetrics traffic sources dashboard showing channel distribution and engagement"
              width={1440}
              height={900}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>

        {/* Feature 2: LENS AI (reversed layout) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div className="order-2 lg:order-1 rounded-[4px] shadow-sm overflow-hidden">
            <Image
              src="/screenshots/dashboard-conversions.png"
              alt="SealMetrics conversions dashboard showing total conversions, revenue, and conversion types"
              width={1440}
              height={900}
              className="w-full h-auto"
              unoptimized
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-green-muted mb-3">
              LENS AI Engine
            </p>
            <h3 className="font-serif text-[clamp(1.5rem,2vw,2rem)] leading-[1.2] text-warm-900 mb-4">
              Ask business questions. Get answers from complete data.
            </h3>
            <p className="text-warm-500 leading-relaxed mb-6">
              LENS continuously monitors your analytics with 60+ rules,
              detecting anomalies and opportunities before they impact revenue.
            </p>
            <ul className="space-y-3">
              {[
                "60+ automated monitoring rules",
                "Natural language queries on your data",
                "Root cause analysis for metric changes",
                "Continuous supervision, not just reporting",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-warm-500"
                >
                  <span className="text-warm-300 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature 3: Agent Analytics */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-green-muted">
                Agent Analytics
              </p>
              <span className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-[2px] bg-warm-100 text-warm-400">
                Coming Soon
              </span>
            </div>
            <h3 className="font-serif text-[clamp(1.5rem,2vw,2rem)] leading-[1.2] text-warm-900 mb-4">
              See what AI agents do on your site.
            </h3>
            <p className="text-warm-500 leading-relaxed mb-6">
              ChatGPT, Claude, and Perplexity are browsing your site right now.
              Track their behavior separately from human traffic.
            </p>
            <ul className="space-y-3">
              {[
                "Separate AI agent traffic from human visitors",
                "Identify which models visit and what they read",
                "Understand how AI represents your brand",
                "Free on all plans",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-warm-500"
                >
                  <span className="text-warm-300 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[4px] shadow-sm overflow-hidden">
            <Image
              src="/screenshots/dashboard-funnel.png"
              alt="SealMetrics funnel report showing conversion progression from entrances to purchase"
              width={1440}
              height={900}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
