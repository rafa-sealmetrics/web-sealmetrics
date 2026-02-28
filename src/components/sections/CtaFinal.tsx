import Link from "next/link";

export function CtaFinal() {
  return (
    <section className="py-32 bg-white text-center border-t border-warm-100">
      <div className="max-w-[600px] mx-auto px-8">
        <h2 className="headline-section mb-4">
          See what your analytics have been missing.
        </h2>
        <p className="text-[1.05rem] leading-[1.75] text-text-secondary mb-10">
          Run SealMetrics alongside your current setup. Compare the data. Then
          decide.
        </p>
        <Link
          href="/demo"
          className="inline-flex items-center gap-2 px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
        >
          Book a Demo
        </Link>
        <p className="mt-4 text-[0.8rem] text-text-tertiary">
          30-minute walkthrough. No commitment required.
        </p>
      </div>
    </section>
  );
}
