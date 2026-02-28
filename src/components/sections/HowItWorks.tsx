const steps = [
  {
    number: "01",
    title: "First-party data collection",
    desc: "A lightweight script runs on your domain, collecting behavioral data through first-party server-side methods. No third-party cookies, no external requests, no consent barriers.",
    detail: "<script> 1.2KB gzipped\nLoad time: <50ms\nZero external dependencies",
  },
  {
    number: "02",
    title: "Full-resolution processing",
    desc: "Every session is recorded individually — not modeled, not sampled, not estimated. Your data reflects actual behavior, not statistical inference.",
    detail: "100% session capture\nNo data sampling\nReal-time processing",
  },
  {
    number: "03",
    title: "Actionable intelligence",
    desc: "Nine specialized reports, AI-powered anomaly detection, and revenue attribution — all built on complete data. Decisions grounded in reality, not approximation.",
    detail: "9 report types\n60+ anomaly rules\nRevenue attribution",
  },
];

export function HowItWorks() {
  return (
    <section className="py-28 bg-warm-white border-t border-b border-warm-100">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="max-w-[600px] mb-20">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
            How It Works
          </span>
          <h2 className="headline-section mb-4">
            A different approach to measurement.
          </h2>
          <p className="text-[1.05rem] leading-[1.75] text-text-secondary">
            No cookies. No consent dependency. No modeled or sampled data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="font-serif text-[3rem] font-light text-warm-200 leading-none mb-6">
                {step.number}
              </div>
              <h3 className="font-serif text-[1.35rem] font-medium text-text-primary mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-[0.95rem] leading-[1.7] text-text-secondary">
                {step.desc}
              </p>
              <div className="mt-5 pt-5 border-t border-warm-200 font-mono text-[0.8rem] text-text-tertiary leading-relaxed whitespace-pre-line">
                {step.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
