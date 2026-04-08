import Link from "next/link";

const pillars = [
  {
    tag: "Complete Data",
    tagColor: "text-green-muted",
    items: [
      {
        title: "Cookieless Tracking",
        desc: "First-party, server-side collection without cookies or consent banners. Every visitor, every session.",
      },
      {
        title: "100% Data Capture",
        desc: "No sampling, no estimation, no extrapolation. The real numbers, all the time.",
      },
      {
        title: "EU Data Residency",
        desc: "All data processed and stored in the EU. Full GDPR compliance by architecture, not by policy.",
      },
    ],
  },
  {
    tag: "Clear Answers",
    tagColor: "text-green-muted",
    items: [
      {
        title: "Revenue Attribution",
        desc: "Last-click attribution on 100% of sessions. See which channels actually generate revenue.",
      },
      {
        title: "LENS AI Engine",
        desc: "60+ automated rules. Anomaly detection. Natural language queries on your complete data.",
      },
      {
        title: "Custom Reports",
        desc: "Build dashboards and reports on data you can trust — no asterisks, no sampling warnings.",
      },
    ],
  },
  {
    tag: "Confident Decisions",
    tagColor: "text-green-muted",
    items: [
      {
        title: "Anomaly Detection",
        desc: "LENS monitors 24/7 and alerts you to metric changes before they impact revenue.",
      },
      {
        title: "Funnel Analysis",
        desc: "See where users drop off — all of them, not just the 13% who accepted cookies.",
      },
      {
        title: "Cost Integration",
        desc: "Connect ad spend data for true ROAS calculation on complete attribution.",
      },
    ],
  },
  {
    tag: "Future-Ready",
    tagColor: "text-green-muted",
    items: [
      {
        title: "Agent Analytics",
        desc: "Track GPT-4, Claude, Perplexity and other AI agents browsing your site. Free on all plans.",
        badge: "Coming Soon",
      },
      {
        title: "20+ Integrations",
        desc: "Google Ads, Meta, Shopify, WooCommerce, HubSpot, Salesforce, BigQuery, and more.",
      },
      {
        title: "All Platforms",
        desc: "WordPress, Magento, PrestaShop, Drupal, Wix, Webflow — one script tag, any site.",
      },
    ],
  },
];

export function CapabilitiesV3() {
  return (
    <section className="bg-white border-t border-warm-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-warm-400 mb-4">
            Platform
          </p>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] text-warm-900 mb-4">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="text-lg text-warm-500 leading-relaxed">
            Four pillars that replace your broken analytics stack with one
            platform built on complete data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {pillars.map((pillar) => (
            <div key={pillar.tag}>
              <p
                className={`text-xs font-semibold uppercase tracking-[0.15em] ${pillar.tagColor} mb-5`}
              >
                {pillar.tag}
              </p>
              <div className="space-y-5">
                {pillar.items.map((item) => (
                  <div
                    key={item.title}
                    className="bg-warm-white border border-warm-100 rounded-[4px] p-5 hover:border-warm-200 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="text-sm font-medium text-warm-900">
                        {item.title}
                      </h3>
                      {item.badge && (
                        <span className="text-[9px] font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-[2px] bg-warm-100 text-warm-400">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-warm-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/product"
            className="text-sm font-medium text-warm-900 hover:text-green-muted transition-colors"
          >
            Explore the full platform &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
