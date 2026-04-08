import Link from "next/link";

export function CtaFinal() {
  return (
    <section className="py-32 bg-white text-center border-t border-warm-100">
      <div className="max-w-[600px] mx-auto px-5 sm:px-8">
        <h2 className="headline-section mb-4">
          See where your next growth lever is hiding.
        </h2>
        <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-10">
          Run SealMetrics alongside GA4 for 30 days. See the complete picture
          with your own data. Then decide where to scale. No commitment, no
          credit card.
        </p>
        <div className="flex items-center justify-center gap-5 flex-wrap">
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
          >
            Book a Demo
          </Link>
        </div>
        <p className="mt-5 text-[0.8rem] text-text-tertiary">
          30-minute walkthrough. No commitment required.
        </p>
      </div>
    </section>
  );
}
