export function CalculatorEmbed() {
  return (
    <section className="py-20 bg-warm-50 border-y border-warm-100">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="max-w-[640px] mx-auto text-center mb-10">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
            Your numbers
          </span>
          <h2 className="text-[2rem] font-medium text-text-primary mb-4">
            How much data are you losing right now?
          </h2>
          <p className="text-[1rem] text-text-secondary leading-relaxed">
            Enter your domain and see exactly what GA4 is missing. Takes 2
            minutes. No signup required.
          </p>
        </div>
        <div className="max-w-[860px] mx-auto">
          <div className="bg-white border border-warm-200 rounded-[4px] p-8 text-center">
            <p className="text-text-secondary text-[0.95rem] mb-6">
              See the gap between what GA4 reports and what actually happened on
              your site.
            </p>
            <a
              href="/data-loss-calculator/"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[0.95rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
            >
              Open the Calculator &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
