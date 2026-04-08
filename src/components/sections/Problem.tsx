import Link from "next/link";

const consequences = [
  {
    number: "84%",
    title: "Attribution you are not capturing",
    desc: "84% of EU visitors have no traffic source attributed. 55% reject cookies entirely, and most who accept do so after the landing page. That is 84% of channel performance you cannot optimize.",
  },
  {
    number: "\u20AC23K",
    title: "Revenue you could be scaling per month",
    desc: "Average unattributed revenue for a mid-market eCommerce using GA4 in Europe. Real revenue from real customers — the channels that drove them are invisible. Once you can see it, you can scale it.",
  },
  {
    number: "30h",
    title: "Per month reclaimed for growth work",
    desc: "Marketing teams spend 30 hours per month reconciling conflicting data across platforms. Complete data gives that time back for testing, scaling, and strategic work.",
  },
];

export function Problem() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Intro */}
        <div className="max-w-[700px] mb-20">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
            The Growth Case for Complete Data
          </span>
          <h2 className="headline-section mb-5">
            The channels driving your revenue that you cannot see yet.
          </h2>
          <p className="text-[1.05rem] leading-[1.75] text-text-secondary">
            Every business using cookie-based analytics in Europe is
            optimizing on a fraction of reality. The growth you are missing is
            not theoretical&nbsp;&mdash; it compounds in every budget meeting, every
            campaign review, every board report. Complete data does not just fix
            reports. It reveals where to grow.
          </p>
        </div>

        {/* Consequence cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-20">
          {consequences.map((item) => (
            <div
              key={item.title}
              className="p-9 border border-warm-100 rounded-[4px] bg-warm-white"
            >
              <div className="font-serif text-[3.5rem] font-light leading-none text-red-alert mb-3">
                {item.number}
              </div>
              <div className="text-[1rem] font-medium text-text-primary mb-2">
                {item.title}
              </div>
              <div className="text-[0.9rem] leading-relaxed text-text-secondary">
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Data capture comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start pt-12 border-t border-warm-100">
          <div>
            <h3 className="headline-sub mb-6">
              87% of your traffic is telling you something. Are you listening?
            </h3>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-5">
              Traditional analytics were designed when every browser accepted
              third-party cookies. That world no longer exists.
            </p>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-5">
              Today,{" "}
              <em className="not-italic font-serif text-text-primary">
                55% of EU visitors reject cookies entirely
              </em>
              . Of the 45% who accept, 65% do so on the second page view&nbsp;&mdash;
              after the landing page where the traffic source is captured. Only
              ~16% of visitors have correct attribution to their traffic source.
              Then ad blockers and browser restrictions erode the rest.
            </p>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-5">
              Your analytics report 10,000 visitors. The real number is 70,000.
              Every campaign decision, every attribution model, every ROI
              calculation is built on a foundation that captures only 13% of what
              actually happened.
            </p>
            <p className="text-[1.05rem] leading-[1.75] text-text-primary font-medium">
              The question is not whether your data is inaccurate. It is how
              much growth you would unlock if you could see the full picture.
            </p>
          </div>

          {/* Diagram */}
          <div className="bg-warm-white border border-warm-100 rounded-[4px] p-9">
            <div className="text-[0.75rem] font-medium tracking-[0.06em] uppercase text-text-tertiary mb-8">
              EU data capture &mdash; cookie-based vs. cookieless
            </div>
            {/* GA4 bar */}
            <div className="mb-6">
              <div className="flex justify-between text-[0.85rem] text-text-secondary mb-2">
                <span>Google Analytics 4</span>
                <span className="font-mono text-[0.8rem]">~13%</span>
              </div>
              <div className="h-8 bg-warm-100 rounded-[2px] relative">
                <div
                  className="absolute top-0 left-0 h-full bg-red-alert/70 rounded-[2px]"
                  style={{ width: "13%" }}
                />
              </div>
            </div>
            {/* SM bar */}
            <div className="mb-8">
              <div className="flex justify-between text-[0.85rem] text-text-secondary mb-2">
                <span>SealMetrics</span>
                <span className="font-mono text-[0.8rem]">100%</span>
              </div>
              <div className="h-8 bg-warm-100 rounded-[2px] relative">
                <div className="absolute top-0 left-0 h-full bg-green-muted rounded-[2px] w-full" />
              </div>
            </div>
            {/* Legend */}
            <div className="flex gap-6 pt-5 border-t border-warm-100">
              <div className="flex items-center gap-2 text-[0.8rem] text-text-secondary">
                <div className="w-2 h-2 rounded-[2px] bg-red-alert/70" />
                Cookie-based (consent dependent)
              </div>
              <div className="flex items-center gap-2 text-[0.8rem] text-text-secondary">
                <div className="w-2 h-2 rounded-[2px] bg-green-muted" />
                Cookieless (consent independent)
              </div>
            </div>
          </div>
        </div>

        {/* Micro-CTA */}
        <div className="mt-12 pt-8 border-t border-warm-100 text-center">
          <Link
            href="/data-loss-calculator"
            className="text-[0.95rem] text-text-secondary no-underline hover:text-text-primary transition-colors"
          >
            Want to know your exact number?{" "}
            <span className="border-b border-warm-200 pb-0.5">
              Discover your real traffic in 2 minutes &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
