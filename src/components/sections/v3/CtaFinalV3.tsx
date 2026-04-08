import Link from "next/link";

export function CtaFinalV3() {
  return (
    <section className="bg-white border-t border-warm-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-warm-white border border-warm-100 rounded-[4px] py-16 lg:py-20 px-8 text-center">
          <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.12] text-warm-900 mb-5">
            See what{" "}
            <span className="italic text-green-muted">100%</span>{" "}
            of your data looks like.
          </h2>
          <p className="text-lg text-warm-500 leading-relaxed mb-10 max-w-lg mx-auto">
            Run SealMetrics alongside GA4 for 30 days. Compare the numbers.
            Then decide.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-4 bg-warm-900 text-white text-sm font-medium rounded-[4px] hover:bg-warm-800 transition-colors"
            >
              Book a Demo
            </Link>
            <Link
              href="/data-loss-calculator"
              className="inline-flex items-center px-8 py-4 border border-warm-200 text-warm-900 text-sm font-medium rounded-[4px] hover:border-warm-400 transition-colors"
            >
              Calculate Your Data Loss
            </Link>
          </div>
          <p className="text-xs text-warm-400">
            30-minute walkthrough. No commitment required.
          </p>
        </div>
      </div>
    </section>
  );
}
