import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "You install. We capture everything.",
    desc: "A single script — 846 bytes — runs on your domain. From that moment, every visitor, every session, every conversion is recorded. No consent required. No data lost waiting for a banner.",
    detail: "<script> 846 bytes gzipped\nLoad time: <50ms\nZero external dependencies",
  },
  {
    number: "02",
    title: "100% of sessions. Zero estimates.",
    desc: "Every visit is recorded individually, not modeled or sampled. When GA4 shows you 10,000 visitors, we show you what those 10,000 actually did — not a statistical inference from the 13% who accepted cookies.",
    detail: "100% session capture\nNo data sampling\nReal-time processing",
  },
  {
    number: "03",
    title: "Decisions grounded in reality.",
    desc: "Nine specialized reports, AI anomaly detection, and last-click revenue attribution — all built on complete data. Know exactly which channels drive revenue. Enter every budget meeting with numbers nobody can question.",
    detail: "9 report types\n60+ anomaly rules\nLENS AI supervision",
  },
];

export function HowItWorks() {
  return (
    <section className="py-28 bg-white border-t border-b border-warm-100">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="max-w-[600px] mb-20">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
            How It Works
          </span>
          <h2 className="headline-section mb-4">
            From invisible traffic to complete picture in three steps.
          </h2>
          <p className="text-[1.05rem] leading-[1.75] text-text-secondary">
            No cookies. No consent dependency. No modeled or sampled data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
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

        <div className="text-center">
          <Link
            href="/how-it-works"
            className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors border-b border-warm-200 pb-0.5"
          >
            Read the full technical explanation
          </Link>
        </div>
      </div>
    </section>
  );
}
