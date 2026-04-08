export function ProblemV3() {
  return (
    <section className="bg-warm-white border-t border-warm-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Problem statement */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-red-alert mb-4">
              The Problem
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] text-warm-900 mb-5">
              Your analytics sees 13% of the picture. You decide on 100%.
            </h2>
            <p className="text-warm-500 leading-relaxed mb-8">
              Cookie consent rates in Europe average 13%. Every budget
              allocation, every campaign optimization, every product decision
              your team makes is based on a fraction of reality.
            </p>
            <div className="space-y-4">
              {[
                { num: "87%", text: "of EU visitors invisible to GA4" },
                { num: "€0", text: "revenue tracked from cookie-declining users" },
                { num: "30h/mo", text: "spent reconciling conflicting reports" },
              ].map((item) => (
                <div key={item.num} className="flex items-baseline gap-4">
                  <span className="font-mono text-lg text-red-alert w-16 shrink-0">
                    {item.num}
                  </span>
                  <span className="text-sm text-warm-500">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual comparison */}
          <div className="bg-white border border-warm-100 rounded-[4px] p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-warm-300 mb-8">
              EU Data Capture Rate
            </p>
            {/* GA4 */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-warm-500">GA4</span>
                <span className="text-sm font-mono text-red-alert">~13%</span>
              </div>
              <div className="h-10 bg-warm-50 rounded-[2px] overflow-hidden">
                <div
                  className="h-full bg-red-alert/50 rounded-[2px]"
                  style={{ width: "13%" }}
                />
              </div>
            </div>
            {/* SealMetrics */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-warm-900">SealMetrics</span>
                <span className="text-sm font-mono text-green-muted">100%</span>
              </div>
              <div className="h-10 bg-warm-50 rounded-[2px] overflow-hidden">
                <div
                  className="h-full bg-green-muted rounded-[2px]"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
