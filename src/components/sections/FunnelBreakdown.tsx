import Image from "next/image";
import Link from "next/link";

const funnelSteps = [
  {
    label: "Web Visitors",
    seal: "124,800",
    ga4: "~43,700",
    ga4Loss: 65,
    detail: "GA4 only sees visitors who accept cookies. You are missing most of your real traffic from the very first step.",
    filters: ["UTM source", "UTM medium", "UTM campaign", "Country", "Device"],
  },
  {
    label: "Category Views",
    seal: "87,360",
    ga4: "~39,300",
    ga4Loss: 55,
    drop: "30% leave",
    detail: "Which categories attract browsers vs. buyers? GA4 cannot tell you — it lost most of those visitors at the door.",
    filters: ["Category name", "Landing page", "UTM source", "UTM medium", "UTM campaign", "Device"],
  },
  {
    label: "Product Views",
    seal: "54,600",
    ga4: "~30,000",
    ga4Loss: 45,
    drop: "37% leave",
    detail: "Which SKUs get views but never reach the cart? With sampled data, GA4 guesses. SealMetrics shows every product interaction.",
    filters: ["SKU", "Product name", "Size", "Colour", "Price range", "UTM source", "UTM campaign"],
  },
  {
    label: "Add to Cart",
    seal: "16,380",
    ga4: "~10,200",
    ga4Loss: 38,
    drop: "70% leave",
    detail: "Which products get added to cart the most but bought the least? GA4 sees barely half of these events.",
    filters: ["SKU", "Size", "Colour", "Cart value", "UTM source", "UTM medium", "UTM campaign"],
  },
  {
    label: "Begin Checkout",
    seal: "9,828",
    ga4: "~6,900",
    ga4Loss: 30,
    drop: "40% leave",
    detail: "Where in the checkout do high-value carts abandon? GA4 shows a sampled estimate. SealMetrics shows the exact step, for every visitor.",
    filters: ["Checkout step", "Payment method", "Cart value", "UTM source", "UTM campaign", "Device"],
  },
  {
    label: "Purchase",
    seal: "5,897",
    ga4: "~4,400",
    ga4Loss: 25,
    drop: "40% leave",
    detail: "GA4 recorded ~4,400 purchases. The real number is 5,897. Every budget decision you make is based on incomplete conversions.",
    filters: ["SKU", "Order value", "Coupon code", "UTM source", "UTM medium", "UTM campaign"],
  },
];

export function FunnelBreakdown() {
  return (
    <section className="py-28 bg-white border-t border-warm-100">
      <div className="max-w-[900px] mx-auto px-5 sm:px-8">
        <h2 className="headline-section mb-4">
          See exactly where you lose customers — and why.
        </h2>
        <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-6 max-w-[600px]">
          GA4 shows you a sampled funnel built on a fraction of your traffic.
          SealMetrics shows every step with 100% of your data — filterable by
          UTM, SKU, size, colour, and any dimension your team needs.
        </p>
        <p className="text-[0.85rem] text-text-tertiary mb-14">
          Example: eCommerce with 124,800 real monthly visitors.
        </p>

        <div className="space-y-0">
          {funnelSteps.map((step, i) => {
            const isFirst = i === 0;
            const isLast = i === funnelSteps.length - 1;
            const widthPct = 100 - (i * 12);

            return (
              <div key={step.label}>
                {!isFirst && step.drop && (
                  <div className="flex items-center justify-center py-2">
                    <div className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-red-alert">
                        <path d="M7 2v10M4 9l3 3 3-3" />
                      </svg>
                      <span className="font-mono text-[0.75rem] text-red-alert">
                        {step.drop}
                      </span>
                    </div>
                  </div>
                )}

                <div
                  className="mx-auto"
                  style={{ width: `${widthPct}%`, minWidth: "280px" }}
                >
                  <div
                    className={`p-5 border rounded-[4px] ${
                      isLast
                        ? "border-green-muted/30 bg-green-muted/5"
                        : "border-warm-100 bg-warm-white"
                    }`}
                  >
                    {/* Header: label + SealMetrics count */}
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className={`text-[0.95rem] font-medium ${isLast ? "text-green-muted" : "text-text-primary"}`}>
                        {step.label}
                      </h3>
                      <span className={`font-mono text-[1.1rem] font-medium ${isLast ? "text-green-muted" : "text-text-primary"}`}>
                        {step.seal}
                      </span>
                    </div>

                    {/* GA4 comparison line */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[0.75rem] text-text-tertiary">
                        What you see with GA4:
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[0.8rem] text-text-tertiary">
                          {step.ga4}
                        </span>
                        <span className="font-mono text-[0.7rem] text-red-alert">
                          &minus;{step.ga4Loss}%
                        </span>
                      </div>
                    </div>

                    <p className="text-[0.8rem] text-text-secondary mb-3 leading-relaxed">
                      {step.detail}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {step.filters.map((f) => (
                        <span
                          key={f}
                          className="inline-block px-2 py-0.5 text-[0.7rem] font-mono text-text-tertiary bg-white border border-warm-100 rounded-[3px]"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 border border-warm-100 rounded-[4px] overflow-hidden">
          <Image
            src="/screenshots/dashboard-funnel.png"
            alt="SealMetrics funnel report showing conversion progression from entrances to purchase, filterable by UTM parameters"
            width={1080}
            height={1060}
            className="w-full h-auto"
            unoptimized
          />
        </div>

        <p className="text-center mt-12 text-[0.95rem] text-text-secondary max-w-[520px] mx-auto">
          Every step. Every product. Every filter. On 100% of your traffic —
          not a{" "}
          <Link href="/glossary/data-sampling" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors">
            sampled estimate
          </Link>.
        </p>
      </div>
    </section>
  );
}
