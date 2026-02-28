const rows = [
  {
    feature: "EU data capture rate",
    sm: "100% of visitors",
    ga: "13% average",
  },
  {
    feature: "Cookie dependency",
    sm: "None — fully cookieless",
    ga: "Requires cookies",
  },
  {
    feature: "Consent banner required",
    sm: "No",
    ga: "Yes (GDPR)",
  },
  {
    feature: "Ad blocker resistance",
    sm: "First-party infrastructure",
    ga: "Blocked 40%+ sessions",
  },
  {
    feature: "Data sampling",
    sm: "Never — full resolution",
    ga: "Sampled above thresholds",
  },
  {
    feature: "Revenue attribution",
    sm: "Complete multi-touch",
    ga: "Partial, consent-dependent",
  },
  {
    feature: "AI anomaly detection",
    sm: "60+ automated rules",
    ga: "Basic insights",
  },
  {
    feature: "Data residency",
    sm: "EU-only servers",
    ga: "US data transfers",
  },
  {
    feature: "GDPR compliance",
    sm: "By design — no PII",
    ga: "Requires configuration + DPA",
  },
];

export function Comparison() {
  return (
    <section className="py-28 bg-white border-t border-warm-100">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
            Comparison
          </span>
          <h2 className="headline-section">
            A different category of analytics.
          </h2>
        </div>

        <div className="overflow-x-auto bg-warm-white border border-warm-100 rounded-[4px]">
          <table className="w-full border-collapse text-[0.9rem]">
            <thead>
              <tr className="bg-warm-50">
                <th className="text-left py-4 px-5 font-medium text-[0.8rem] text-text-tertiary border-b border-warm-100 uppercase tracking-[0.04em]">
                  Capability
                </th>
                <th className="text-left py-4 px-5 font-medium text-[0.8rem] text-text-primary border-b border-warm-100 uppercase tracking-[0.04em]">
                  SealMetrics
                </th>
                <th className="text-left py-4 px-5 font-medium text-[0.8rem] text-text-tertiary border-b border-warm-100 uppercase tracking-[0.04em]">
                  Google Analytics 4
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature}>
                  <td className="py-4 px-5 border-b border-warm-100/60 text-text-body">
                    {row.feature}
                  </td>
                  <td className="py-4 px-5 border-b border-warm-100/60 text-text-primary font-medium">
                    {row.sm}
                  </td>
                  <td className="py-4 px-5 border-b border-warm-100/60 text-text-tertiary">
                    {row.ga}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
