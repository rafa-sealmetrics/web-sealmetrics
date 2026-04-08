import Link from "next/link";

export function CtaFinalV2() {
  return (
    <section className="bg-warm-white border-t border-warm-100 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-warm-900 leading-[1.15] mb-6">
          Ready to see what{" "}
          <span className="italic text-green-muted">100%</span> of your
          traffic looks like?
        </p>
        <p className="text-lg text-warm-500 leading-relaxed mb-10 max-w-xl mx-auto">
          Run SealMetrics alongside your current setup. Compare the data. Then
          decide.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Link
            href="/demo"
            className="inline-flex items-center px-8 py-4 bg-warm-900 text-white text-sm font-medium rounded-[4px] hover:bg-warm-800 transition-colors"
          >
            Book a Demo
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex items-center px-8 py-4 border border-warm-200 text-warm-900 text-sm font-medium rounded-[4px] hover:border-warm-400 transition-colors"
          >
            See How It Works
          </Link>
        </div>
        <p className="text-xs text-warm-400">
          30-minute walkthrough. No commitment required.
        </p>
      </div>
    </section>
  );
}
