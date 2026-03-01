import Link from "next/link";

const rows = [
  {
    feature: "EU data capture rate",
    sm: "100% of visitors",
    ga360: "~30% (consent dependent)",
    adobe: "~25% (consent dependent)",
    piwik: "~40% (consent dependent)",
  },
  {
    feature: "Cookie dependency",
    sm: "None — fully cookieless",
    ga360: "Requires cookies",
    adobe: "Requires cookies",
    piwik: "Optional (limited without)",
  },
  {
    feature: "Consent banner required",
    sm: "No",
    ga360: "Yes (GDPR)",
    adobe: "Yes (GDPR)",
    piwik: "Yes (GDPR)",
  },
  {
    feature: "Data sampling",
    sm: "Never — full resolution",
    ga360: "Above thresholds",
    adobe: "Configurable",
    piwik: "Above thresholds",
  },
  {
    feature: "AI anomaly detection",
    sm: "60+ automated rules",
    ga360: "Basic insights",
    adobe: "Adobe Sensei (add-on)",
    piwik: "None",
  },
  {
    feature: "Agent Analytics (AI bots)",
    sm: "Built-in, free",
    ga360: "Not available",
    adobe: "Not available",
    piwik: "Not available",
  },
  {
    feature: "Data residency",
    sm: "EU-only servers",
    ga360: "US (EU option limited)",
    adobe: "Configurable",
    piwik: "EU available",
  },
  {
    feature: "GDPR compliance",
    sm: "By design — no PII",
    ga360: "Requires DPA + config",
    adobe: "Requires DPA + config",
    piwik: "Requires consent mode",
  },
  {
    feature: "Starting price",
    sm: "From €199/mo",
    ga360: "~$150,000/yr",
    adobe: "~$100,000/yr",
    piwik: "~€30,000/yr",
  },
];

export function Comparison() {
  return (
    <section className="py-28 bg-white border-t border-warm-100">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
            Enterprise Analytics Comparison
          </span>
          <h2 className="headline-section mb-4">
            Enterprise-grade analytics at a fraction of the cost.
          </h2>
          <p className="text-[1.05rem] leading-[1.75] text-text-secondary">
            SealMetrics competes with GA360, Adobe Analytics, and Piwik
            PRO&nbsp;&mdash; not with lightweight privacy tools. Same league,
            fundamentally better data, significantly lower cost.
          </p>
        </div>

        <div className="overflow-x-auto bg-warm-white border border-warm-100 rounded-[4px]">
          <table className="w-full border-collapse text-[0.85rem]">
            <thead>
              <tr className="bg-warm-50">
                <th className="text-left py-4 px-4 font-medium text-[0.75rem] text-text-tertiary border-b border-warm-100 uppercase tracking-[0.04em] min-w-[160px]">
                  Capability
                </th>
                <th className="text-left py-4 px-4 font-medium text-[0.75rem] text-text-primary border-b border-warm-100 uppercase tracking-[0.04em] min-w-[140px]">
                  SealMetrics
                </th>
                <th className="text-left py-4 px-4 font-medium text-[0.75rem] text-text-tertiary border-b border-warm-100 uppercase tracking-[0.04em] min-w-[140px]">
                  GA360
                </th>
                <th className="text-left py-4 px-4 font-medium text-[0.75rem] text-text-tertiary border-b border-warm-100 uppercase tracking-[0.04em] min-w-[140px]">
                  Adobe Analytics
                </th>
                <th className="text-left py-4 px-4 font-medium text-[0.75rem] text-text-tertiary border-b border-warm-100 uppercase tracking-[0.04em] min-w-[140px]">
                  Piwik PRO
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature}>
                  <td className="py-3.5 px-4 border-b border-warm-100/60 text-text-body">
                    {row.feature}
                  </td>
                  <td className="py-3.5 px-4 border-b border-warm-100/60 text-text-primary font-medium">
                    {row.sm}
                  </td>
                  <td className="py-3.5 px-4 border-b border-warm-100/60 text-text-tertiary">
                    {row.ga360}
                  </td>
                  <td className="py-3.5 px-4 border-b border-warm-100/60 text-text-tertiary">
                    {row.adobe}
                  </td>
                  <td className="py-3.5 px-4 border-b border-warm-100/60 text-text-tertiary">
                    {row.piwik}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/vs-ga4"
            className="text-[0.9rem] text-text-secondary no-underline hover:text-text-primary transition-colors border-b border-warm-200 pb-0.5"
          >
            See the detailed SealMetrics vs GA4 comparison
          </Link>
        </div>
      </div>
    </section>
  );
}
