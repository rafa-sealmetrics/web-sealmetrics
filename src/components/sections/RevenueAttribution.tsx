export function RevenueAttribution() {
  return (
    <section className="py-28 bg-warm-white border-t border-warm-100">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-3">
              Revenue Attribution
            </span>
            <h2 className="headline-section mb-4">
              Know exactly which channels drive your revenue.
            </h2>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-5">
              Not estimates. Not models. Real data from 100% of your customers.
            </p>
            <p className="text-[1rem] leading-[1.7] text-text-secondary mb-5">
              Attribution models built on 13% of data produce misleading results.
              But the problem goes deeper: of the 45% of EU visitors who accept
              cookies, 65% accept on the second page view&nbsp;&mdash; after the
              landing page where referrer and UTM data is captured. Only ~16% of
              visitors have correct traffic source attribution. With complete
              session capture, SealMetrics connects every touchpoint to revenue
              outcomes&nbsp;&mdash; revealing the true ROI of every channel.
            </p>
            <div className="p-5 bg-warm-white border border-warm-100 rounded-[4px] mb-5">
              <p className="text-[0.75rem] font-medium tracking-[0.06em] uppercase text-text-tertiary mb-3">
                Attribution cascade &mdash; 100 EU visitors
              </p>
              <div className="space-y-2 font-mono text-[0.85rem]">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Total visitors</span>
                  <span className="text-text-primary font-medium">100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Reject cookies entirely</span>
                  <span className="text-red-alert font-medium">&minus;55</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Accept on page 2 (too late for source)</span>
                  <span className="text-red-alert font-medium">&minus;29</span>
                </div>
                <div className="flex justify-between border-t border-warm-100 pt-2">
                  <span className="text-text-primary font-medium">Correct traffic source attribution</span>
                  <span className="text-red-alert font-medium">~16</span>
                </div>
              </div>
            </div>
            <ul className="space-y-1.5">
              {[
                "Channel-level revenue breakdown on complete data",
                "Campaign cost integration and true ROAS",
                "Funnel analysis with drop-off diagnostics",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[0.9rem] text-text-secondary"
                >
                  <span className="text-text-tertiary shrink-0">&mdash;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-warm-100 rounded-[4px] p-8">
            <div className="text-[0.7rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-6">
              Revenue by channel &mdash; built on 100% of sessions, not the 13%
              that accepted cookies
            </div>
            {[
              { channel: "Organic Search", revenue: "\u20AC67,240" },
              { channel: "Paid Search", revenue: "\u20AC52,180" },
              { channel: "Social (Meta)", revenue: "\u20AC31,450" },
              { channel: "Email", revenue: "\u20AC22,890" },
              { channel: "Direct", revenue: "\u20AC11,070" },
            ].map((row) => (
              <div
                key={row.channel}
                className="flex justify-between items-center py-3 border-b border-warm-100/60 last:border-0"
              >
                <span className="text-[0.85rem] text-text-secondary">
                  {row.channel}
                </span>
                <span className="font-mono text-[0.85rem] text-text-primary font-medium">
                  {row.revenue}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
