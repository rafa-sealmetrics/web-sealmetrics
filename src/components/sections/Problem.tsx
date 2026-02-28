const stats = [
  {
    number: "87%",
    title: "Traffic goes unrecorded",
    desc: "Average EU consent rate is 13%. Every visitor who declines cookies becomes invisible to your analytics.",
  },
  {
    number: "4%",
    title: "Conversion accuracy",
    desc: "Consent fragmentation, cookie expiration, and cross-device gaps reduce real conversion tracking to single digits.",
  },
  {
    number: "30h",
    title: "Wasted monthly per team",
    desc: "Marketing teams spend an average of 30 hours a month reconciling conflicting data across platforms.",
  },
];

export function Problem() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Intro */}
        <div className="max-w-[700px] mb-20">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
            The Problem
          </span>
          <h2 className="headline-section mb-5">
            The data you rely on is fundamentally incomplete.
          </h2>
          <p className="text-[1.05rem] leading-[1.75] text-text-secondary">
            Every business using cookie-based analytics in Europe is working with
            a fraction of reality. Here is what the numbers actually look like.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="p-9 border border-warm-100 rounded-[4px] bg-warm-white"
            >
              <div className="font-serif text-[3.5rem] font-light leading-none text-red-alert mb-3">
                {stat.number}
              </div>
              <div className="text-[1rem] font-medium text-text-primary mb-2">
                {stat.title}
              </div>
              <div className="text-[0.9rem] leading-relaxed text-text-secondary">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start pt-12 border-t border-warm-100">
          <div>
            <h3 className="headline-sub mb-6">Why this happens</h3>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-5">
              Traditional analytics tools were designed in a world where every
              browser accepted third-party cookies. That world no longer exists.
            </p>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-5">
              Today,{" "}
              <em className="not-italic font-serif text-text-primary">
                GDPR consent banners reject 60&ndash;87% of tracking
              </em>{" "}
              before it even starts. Safari and Firefox block third-party cookies
              by default. Ad blockers strip Google Analytics tags from more than
              40% of European sessions.
            </p>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-5">
              The result is not a slight inaccuracy&nbsp;&mdash; it is a
              structural failure. Your analytics tool reports 10,000 visitors.
              The real number might be 70,000.
            </p>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary">
              Every campaign decision, every attribution model, every ROI
              calculation built on this data is fundamentally compromised.
            </p>
          </div>

          {/* Diagram */}
          <div className="bg-warm-white border border-warm-100 rounded-[4px] p-9">
            <div className="text-[0.75rem] font-medium tracking-[0.06em] uppercase text-text-tertiary mb-8">
              Typical EU data capture &mdash; cookie-based vs. cookieless
            </div>
            {/* GA4 bar */}
            <div className="mb-6">
              <div className="flex justify-between text-[0.85rem] text-text-secondary mb-2">
                <span>Google Analytics 4</span>
                <span className="font-mono text-[0.8rem]">13%</span>
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
                Cookie-based capture
              </div>
              <div className="flex items-center gap-2 text-[0.8rem] text-text-secondary">
                <div className="w-2 h-2 rounded-[2px] bg-green-muted" />
                Cookieless capture
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
