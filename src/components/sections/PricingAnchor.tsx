import Link from "next/link";

export function PricingAnchor() {
  return (
    <section className="py-28 bg-white border-t border-warm-100">
      <div className="max-w-[640px] mx-auto px-5 sm:px-8 text-center">
        <h2 className="headline-section mb-6">
          Enterprise analytics. Not enterprise pricing.
        </h2>
        <div className="p-8 border border-warm-100 rounded-[4px] bg-warm-white mb-6">
          <p className="font-mono text-[2rem] font-medium text-text-primary mb-2">
            From &euro;499<span className="text-[1rem] text-text-tertiary font-normal">/mo</span>
          </p>
          <p className="text-[0.9rem] text-text-secondary">
            GA360 starts at $150,000/yr. Adobe Analytics starts at $100,000/yr.
            <br />
            SealMetrics gives you complete data at a fraction of the cost.
          </p>
        </div>
        <Link
          href="/pricing"
          className="text-[0.9rem] text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors"
        >
          See full pricing details
        </Link>
      </div>
    </section>
  );
}
