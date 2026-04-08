const results = [
  {
    metric: "3.8x",
    label: "more visitors tracked",
    description: "From 12,400 to 47,200 tracked visitors per month",
    source: "European retailer, 45M€ revenue",
  },
  {
    metric: "612%",
    label: "more conversions recorded",
    description: "From 340 to 1,290 recorded conversions per month",
    source: "European retailer, 45M€ revenue",
  },
  {
    metric: "+283%",
    label: "attributed revenue",
    description: "From €89K to €342K in attributed monthly revenue",
    source: "European retailer, 45M€ revenue",
  },
  {
    metric: "+40%",
    label: "ROAS improvement",
    description: "Budget reallocation based on complete attribution data",
    source: "European retailer, 45M€ revenue",
  },
];

export function CustomerMetricsV3() {
  return (
    <section className="bg-white border-t border-warm-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-warm-400 mb-4">
            Customer Results
          </p>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] text-warm-900 mb-4">
            What happens when you see the full picture.
          </h2>
          <p className="text-lg text-warm-500 leading-relaxed">
            A European retailer with 45M€ annual revenue switched from GA4 to
            SealMetrics. These are their results after 90 days.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {results.map((r) => (
            <div
              key={r.label}
              className="bg-warm-white border border-warm-100 rounded-[4px] p-6 text-center"
            >
              <p className="font-serif text-[clamp(2rem,3.5vw,2.75rem)] text-green-muted mb-1">
                {r.metric}
              </p>
              <p className="text-sm font-medium text-warm-900 mb-2">
                {r.label}
              </p>
              <p className="text-xs text-warm-400 leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
