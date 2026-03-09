import Image from "next/image";

const integrations = [
  { logo: "/logos/brands/googleads.svg", name: "Google Ads" },
  { logo: "/logos/brands/meta.svg", name: "Meta Ads" },
  { logo: "/logos/brands/shopify.svg", name: "Shopify" },
  { logo: "/logos/brands/woocommerce.svg", name: "WooCommerce" },
  { logo: "/logos/brands/hubspot.svg", name: "HubSpot" },
  { logo: "/logos/brands/salesforce.svg", name: "Salesforce" },
  { logo: "/logos/brands/bigquery.svg", name: "BigQuery" },
  { logo: "/logos/brands/tiktok.svg", name: "TikTok Ads" },
  { logo: "/logos/brands/prestashop.svg", name: "PrestaShop" },
  { logo: null, name: "20+ more", fallback: "+" },
];

export function Integrations() {
  return (
    <section className="py-28 bg-warm-white border-t border-warm-100">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {integrations.map((int) => (
            <div
              key={int.name}
              className="p-5 text-center border border-warm-100 rounded-[4px] bg-white hover:border-text-tertiary transition-colors"
            >
              <div className="flex items-center justify-center h-[36px]">
                {int.logo ? (
                  <Image
                    src={int.logo}
                    alt={int.name}
                    width={28}
                    height={28}
                    className="opacity-40 grayscale"
                  />
                ) : (
                  <span className="text-[1.5rem] opacity-40 text-text-secondary">
                    {int.fallback}
                  </span>
                )}
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
