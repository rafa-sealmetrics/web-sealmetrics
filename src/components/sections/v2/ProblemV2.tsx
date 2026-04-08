export function ProblemV2() {
  const consequences = [
    {
      number: "87%",
      label: "Wrong attribution",
      description:
        "Budget allocated based on incomplete conversion paths",
    },
    {
      number: "€0",
      label: "Untracked revenue",
      description:
        "Conversions from users who declined cookies are invisible",
    },
    {
      number: "30h",
      label: "Wasted monthly",
      description:
        "Reconciling conflicting reports from incomplete data",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header — left aligned for editorial feel */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-red-alert mb-4">
            The Real Cost
          </p>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] text-warm-900 mb-4">
            What happens when 87% of your data is missing.
          </h2>
          <p className="text-lg text-warm-500 leading-relaxed">
            Cookie consent rates in the EU average 13%. That means your
            analytics platform is making decisions on a fraction of reality.
          </p>
        </div>

        {/* Consequence Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {consequences.map((stat) => (
            <div
              key={stat.label}
              className="bg-warm-white border border-warm-100 rounded-[4px] p-8"
            >
              <p className="font-serif text-5xl text-red-alert mb-3">
                {stat.number}
              </p>
              <p className="text-sm font-medium text-warm-900 mb-2">
                {stat.label}
              </p>
              <p className="text-sm text-warm-400 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h3 className="font-serif text-2xl text-warm-900 mb-4">
              The gap between what you see and what actually happens.
            </h3>
            <p className="text-warm-500 leading-relaxed mb-6">
              When 87% of your visitors decline cookies, your analytics tool
              captures a{" "}
              <span className="font-serif italic">sliver</span> of the full
              picture. Every decision — budget allocation, campaign
              optimization, product changes — is based on incomplete data.
            </p>
            <p className="text-warm-500 leading-relaxed">
              SealMetrics works without cookies entirely. No consent required.
              100% of traffic, 100% of conversions, 100% of the time.
            </p>
          </div>
          <div className="bg-warm-white border border-warm-100 rounded-[4px] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-warm-400 mb-8">
              EU Data Capture Rate
            </p>
            {/* GA4 Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-warm-500">GA4</span>
                <span className="text-sm font-mono text-red-alert">~13%</span>
              </div>
              <div className="h-10 bg-warm-100 rounded-[2px] overflow-hidden">
                <div
                  className="h-full bg-red-alert/60 rounded-[2px]"
                  style={{ width: "13%" }}
                />
              </div>
            </div>
            {/* SealMetrics Bar */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-warm-900">
                  SealMetrics
                </span>
                <span className="text-sm font-mono text-green-muted">
                  100%
                </span>
              </div>
              <div className="h-10 bg-warm-100 rounded-[2px] overflow-hidden">
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
