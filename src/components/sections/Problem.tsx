const consequences = [
  {
    number: "87%",
    title: "Wrong attribution",
    desc: "When 87% of visitors are invisible to your analytics, every channel looks underperforming. Budget gets reallocated based on a distorted picture.",
  },
  {
    number: "€0",
    title: "Untracked revenue",
    desc: "Conversions from users who declined cookies, use Safari ITP, or run ad blockers are never recorded. Revenue exists — your tools just cannot see it.",
  },
  {
    number: "30h",
    title: "Reconciling conflicting data",
    desc: "Marketing teams spend an average of 30 hours per month trying to match numbers across platforms that each see a different slice of reality.",
  },
];

export function Problem() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Intro */}
        <div className="max-w-[700px] mb-20">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
            The Real Cost
          </span>
          <h2 className="headline-section mb-5">
            What happens when 87% of your data is missing.
          </h2>
          <p className="text-[1.05rem] leading-[1.75] text-text-secondary">
            Every business using cookie-based analytics in Europe is making
            decisions on a fraction of reality. The consequences are not
            theoretical&nbsp;&mdash; they compound in every budget meeting, every
            campaign review, every board report.
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
              Decisions built on 13% of reality
            </h3>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-5">
              Traditional analytics were designed when every browser accepted
              third-party cookies. That world no longer exists.
            </p>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-5">
              Today,{" "}
              <em className="not-italic font-serif text-text-primary">
                GDPR consent banners reject 60&ndash;87% of tracking
              </em>{" "}
              before it starts. Safari and Firefox block third-party cookies by
              default. Ad blockers strip Google Analytics tags from 40%+ of
              European sessions.
            </p>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-5">
              Your analytics report 10,000 visitors. The real number is 70,000.
              Every campaign decision, every attribution model, every ROI
              calculation is built on a foundation that captures only 13% of what
              actually happened.
            </p>
            <p className="text-[1.05rem] leading-[1.75] text-text-primary font-medium">
              The question is not whether your data is inaccurate. It is how many
              wrong decisions you have already made because of it.
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
      </div>
    </section>
  );
}
