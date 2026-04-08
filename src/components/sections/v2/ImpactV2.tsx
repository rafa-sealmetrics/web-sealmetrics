export function ImpactV2() {
  const stats = [
    {
      number: "100%",
      label: "EU data capture",
      description: "Every visitor, every session, no cookies needed",
    },
    {
      number: "612%",
      label: "More conversions tracked",
      description: "Average increase vs cookie-based analytics",
    },
    {
      number: "+40%",
      label: "ROAS improvement",
      description: "When budgets are allocated on complete data",
    },
    {
      number: "<2 min",
      label: "Setup time",
      description: "One script tag. Any website. No configuration.",
    },
  ];

  return (
    <section className="bg-white border-t border-warm-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-warm-400 mb-4">
            Proven Impact
          </p>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] text-warm-900">
            The numbers speak for themselves.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 bg-warm-white border border-warm-100 rounded-[4px]"
            >
              <p className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] text-green-muted mb-2">
                {stat.number}
              </p>
              <p className="text-sm font-medium text-warm-900 mb-2">
                {stat.label}
              </p>
              <p className="text-xs text-warm-400 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
