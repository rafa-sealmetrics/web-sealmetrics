const metrics = [
  { label: "Real visitors", value: "72,847", change: "+34% vs. GA4" },
  { label: "Tracked conversions", value: "2,341", change: "+612% vs. GA4" },
  { label: "Revenue attributed", value: "€184K", change: "+89% identified" },
  { label: "Data accuracy", value: "100%", change: "No sampling" },
];

const chartHeights = [
  35, 42, 38, 55, 48, 62, 58, 72, 65, 78, 70, 85, 80, 75, 88, 82, 90, 85, 92,
  88, 80, 95, 90, 87, 93, 85, 88, 91,
];

export function ProductShowcase() {
  return (
    <section className="py-28 bg-warm-white border-t border-warm-100">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-[700px] mx-auto mb-20">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
            What Complete Data Makes Possible
          </span>
          <h2 className="headline-section mb-4">
            All reports built on 100% of reality.
          </h2>
          <p className="text-[1.05rem] leading-[1.75] text-text-secondary">
            When every visitor, every session, and every conversion is captured,
            your analytics stop being estimates and become operational
            infrastructure.
          </p>
        </div>

        {/* Dashboard */}
        <div className="bg-white border border-warm-100 rounded-[4px] p-8 mb-20">
          <div className="flex justify-between items-center pb-5 border-b border-warm-100 mb-5">
            <span className="text-[0.85rem] font-medium text-text-primary">
              SealMetrics Dashboard
            </span>
            <span className="font-mono text-[0.75rem] text-text-tertiary px-3 py-1.5 border border-warm-100 rounded-[4px]">
              Feb 1 &ndash; Feb 28, 2026
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="p-5 bg-warm-white border border-warm-100 rounded-[4px]"
              >
                <div className="text-[0.7rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-2">
                  {m.label}
                </div>
                <div className="font-mono text-[1.5rem] font-medium text-text-primary">
                  {m.value}
                </div>
                <div className="font-mono text-[0.75rem] text-green-muted mt-1">
                  {m.change}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-warm-white border border-warm-100 rounded-[4px] h-[200px] flex items-end p-5 gap-[3px]">
            {chartHeights.map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-text-primary/15 rounded-t-[1px] min-h-[8px] hover:bg-text-primary/30 transition-colors"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* Feature: LENS AI */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1 bg-white border border-warm-100 rounded-[4px] p-8">
            <div className="text-[0.7rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-6">
              LENS AI &mdash; Recent detections
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  severity: "High priority",
                  color: "text-red-alert",
                  text: "Organic traffic from Germany dropped 34% over 72 hours. Correlates with indexing changes.",
                },
                {
                  severity: "Medium",
                  color: "text-[#E0A458]",
                  text: "Cart abandonment rate increased 12% on mobile since Tuesday deployment.",
                },
                {
                  severity: "Insight",
                  color: "text-green-muted",
                  text: 'Email campaign "Winter Sale" outperforming paid search by 3.2x on ROAS.',
                },
                {
                  severity: "Insight",
                  color: "text-green-muted",
                  text: "New landing page converts 28% better than control. Statistical significance reached.",
                },
              ].map((a) => (
                <div
                  key={a.text}
                  className="p-4 bg-warm-white border border-warm-100 rounded-[4px]"
                >
                  <div
                    className={`text-[0.65rem] font-medium uppercase tracking-[0.06em] ${a.color} mb-2`}
                  >
                    {a.severity}
                  </div>
                  <div className="text-[0.8rem] text-text-secondary leading-snug">
                    {a.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-3">
              LENS AI
            </span>
            <h3 className="headline-sub mb-4">
              Ask business questions. Get answers from complete data.
            </h3>
            <p className="text-[1rem] leading-[1.7] text-text-secondary mb-5">
              LENS monitors 60+ metrics continuously and answers business
              questions in natural language. No manual dashboards. No waiting for
              the monthly report. When something changes&nbsp;&mdash; a traffic
              drop, a conversion spike, a channel underperforming&nbsp;&mdash;
              you know before it becomes a problem.
            </p>
            <ul className="space-y-1.5">
              {[
                "60+ automated anomaly detection rules",
                "Natural language alerts and business question answering",
                "Root cause analysis with suggested actions",
                "Continuous supervision, not periodic reporting",
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
            <div className="mt-8 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
              <div className="text-[0.65rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-3">
                Real impact
              </div>
              <p className="text-[0.9rem] leading-[1.6] text-text-secondary">
                LENS AI detected a payment page error at 3 AM. By the time the
                team was online, the alert had already identified the root cause
                and estimated{" "}
                <span className="font-mono text-red-alert font-medium">
                  &euro;47K
                </span>{" "}
                in protected revenue, and outlined the fix before morning
                traffic peaked. They fixed it in 20 minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 3: Agent Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-3">
              Agent Analytics
            </span>
            <h3 className="headline-sub mb-4">
              See what AI agents do on your site.{" "}
              <span className="inline-block px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-text-tertiary border border-warm-200 rounded-[2px] align-middle">
                Coming Soon
              </span>
            </h3>
            <p className="text-[1rem] leading-[1.7] text-text-secondary mb-5">
              ChatGPT, Claude, Perplexity, and other AI agents are already
              browsing your site&nbsp;&mdash; scraping content, answering
              questions about your products, sending traffic your way. Most
              analytics tools cannot tell you this is happening. SealMetrics
              tracks AI agent activity separately from human traffic, so you
              understand both audiences.
            </p>
            <ul className="space-y-1.5">
              {[
                "Separate tracking for AI agents vs. human visitors",
                "Identify which AI models browse your site",
                "Understand how AI agents interact with your content",
                "Free and unlimited on every plan",
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
              Agent activity &mdash; last 7 days
            </div>
            {[
              { agent: "GPT-4 (OpenAI)", sessions: "1,247", pages: "4,891" },
              { agent: "Claude (Anthropic)", sessions: "892", pages: "3,104" },
              { agent: "Perplexity", sessions: "634", pages: "2,340" },
              { agent: "Google AI Overview", sessions: "421", pages: "1,687" },
              { agent: "Other AI agents", sessions: "298", pages: "1,052" },
            ].map((row) => (
              <div
                key={row.agent}
                className="flex justify-between items-center py-3 border-b border-warm-100/60 last:border-0"
              >
                <span className="text-[0.85rem] text-text-secondary">
                  {row.agent}
                </span>
                <div className="flex gap-6">
                  <span className="font-mono text-[0.8rem] text-text-tertiary">
                    {row.sessions} sessions
                  </span>
                  <span className="font-mono text-[0.8rem] text-text-primary font-medium">
                    {row.pages} pages
                  </span>
                </div>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-warm-100">
              <div className="text-[0.75rem] text-green-muted font-medium">
                Included free on every plan
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
