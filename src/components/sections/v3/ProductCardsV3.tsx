import Link from "next/link";

const products = [
  {
    tag: "Revenue Attribution",
    title: "Know what actually drives revenue.",
    description:
      "Last-click attribution on 100% of sessions. See which channels, campaigns, and content generate real revenue — not estimates from a 13% sample.",
    features: [
      "Last-click attribution on 100% of sessions",
      "Revenue breakdown by channel, campaign, and content",
      "Cost integration for true ROAS calculation",
      "Funnel analysis with drop-off identification",
    ],
    link: "/product",
    linkText: "Explore product",
  },
  {
    tag: "LENS AI Engine",
    title: "Your data talks. LENS listens.",
    description:
      "60+ automated rules continuously monitoring your analytics. LENS detects anomalies, identifies opportunities, and explains metric changes before they impact revenue.",
    features: [
      "60+ automated monitoring rules",
      "Natural language queries on your data",
      "Root cause analysis for metric changes",
      "Continuous supervision, not just reporting",
    ],
    link: "/product",
    linkText: "Explore LENS AI",
  },
  {
    tag: "Agent Analytics",
    badge: "Coming Soon",
    title: "See what AI agents do on your site.",
    description:
      "ChatGPT, Claude, and Perplexity browse your site every day. Track their behavior separately from human traffic — free on all plans.",
    features: [
      "Separate AI agent traffic from humans",
      "Identify which models visit your site",
      "Understand how AI represents your brand",
      "Free on all plans",
    ],
    link: "/product",
    linkText: "Learn more",
  },
];

export function ProductCardsV3() {
  return (
    <section className="bg-warm-white border-t border-warm-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-warm-400 mb-4">
            Product
          </p>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] text-warm-900">
            Complete data. Clear answers. Confident decisions.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.tag}
              className="bg-white border border-warm-100 rounded-[4px] p-8 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-green-muted">
                  {product.tag}
                </p>
                {product.badge && (
                  <span className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-[2px] bg-warm-50 text-warm-400">
                    {product.badge}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-xl text-warm-900 mb-3">
                {product.title}
              </h3>
              <p className="text-sm text-warm-400 leading-relaxed mb-6">
                {product.description}
              </p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {product.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-warm-500"
                  >
                    <span className="text-warm-200 mt-0.5">—</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={product.link}
                className="text-sm font-medium text-warm-900 hover:text-green-muted transition-colors"
              >
                {product.linkText} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
