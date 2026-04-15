import Link from "next/link";

const steps = [
  {
    step: "1",
    title: "Install",
    time: "5 minutes",
    desc: "One script. Works alongside GA4. No code changes, no cookie banners, no disruption to your existing setup.",
  },
  {
    step: "2",
    title: "See everything",
    time: "Day 1",
    desc: "Complete traffic data from the first hour. Every visitor, every source, every conversion — 100% observed, zero sampling.",
  },
  {
    step: "3",
    title: "Scale what works",
    time: "Week 1",
    desc: "Reallocate budget to the channels actually driving revenue. Stop spending on what GA4 told you was working.",
  },
];

export function HowItWorksCompact() {
  return (
    <section className="py-28 bg-warm-white border-t border-warm-100">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <h2 className="headline-section mb-4">
          From install to insight in one week.
        </h2>
        <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-16 max-w-[520px]">
          SealMetrics runs alongside your existing analytics. No migration, no
          disruption. See the{" "}
          <Link
            href="/product"
            className="text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors"
          >
            full product overview
          </Link>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.step}>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-warm-200 font-mono text-[0.8rem] text-text-tertiary">
                  {s.step}
                </span>
                <span className="text-[0.75rem] font-medium uppercase tracking-[0.06em] text-text-tertiary">
                  {s.time}
                </span>
              </div>
              <h3 className="text-[1.1rem] font-medium text-text-primary mb-3">
                {s.title}
              </h3>
              <p className="text-[0.9rem] leading-[1.7] text-text-secondary">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-[0.9rem] text-text-secondary">
          <Link
            href="/how-it-works"
            className="text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors"
          >
            Read the full technical explanation
          </Link>
        </p>
      </div>
    </section>
  );
}
