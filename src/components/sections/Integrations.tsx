const integrations = [
  { icon: "G", name: "Google Ads" },
  { icon: "M", name: "Meta Ads" },
  { icon: "S", name: "Shopify" },
  { icon: "W", name: "WooCommerce" },
  { icon: "H", name: "HubSpot" },
  { icon: "S", name: "Salesforce" },
  { icon: "B", name: "BigQuery" },
  { icon: "T", name: "TikTok Ads" },
  { icon: "P", name: "PrestaShop" },
  { icon: "+", name: "20+ more" },
];

export function Integrations() {
  return (
    <section className="py-28 bg-warm-white border-t border-warm-100">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
            Integrations
          </span>
          <h2 className="headline-section mb-4">
            Works with your existing stack.
          </h2>
          <p className="text-[1.05rem] leading-[1.75] text-text-secondary">
            Connect SealMetrics to your marketing platforms, CRMs, and data
            infrastructure. One-click setup for most integrations.
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
          {integrations.map((int) => (
            <div
              key={int.name}
              className="p-5 text-center border border-warm-100 rounded-[4px] bg-white hover:border-text-tertiary transition-colors"
            >
              <div className="text-[1.5rem] opacity-40 text-text-secondary">
                {int.icon}
              </div>
              <div className="text-[0.8rem] text-text-secondary mt-3">
                {int.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
