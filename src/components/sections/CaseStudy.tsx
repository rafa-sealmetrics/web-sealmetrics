const caseMetrics = [
  { label: "Tracked visitors", before: "12,400 / month", after: "47,200" },
  { label: "Recorded conversions", before: "340 / month", after: "1,290" },
  { label: "Attributed revenue", before: "€89K / month", after: "€342K" },
  { label: "ROAS improvement", before: "Baseline", after: "+40%" },
];

export function CaseStudy() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="mb-16">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
            Case Study
          </span>
          <h2 className="headline-section mb-4">
            How a European retailer recovered its invisible revenue.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <blockquote className="font-serif text-[1.35rem] italic leading-relaxed text-text-primary mb-8 pl-6 border-l-2 border-warm-200">
              &ldquo;We thought our analytics were accurate. SealMetrics showed
              us we were missing 74% of our conversions. Our entire attribution
              model was built on incomplete data&nbsp;&mdash; every budget
              decision we made was wrong.&rdquo;
            </blockquote>
            <div className="mb-10">
              <div className="font-medium text-[0.95rem] text-text-primary">
                Head of Digital Marketing
              </div>
              <div className="text-[0.85rem] text-text-secondary mt-1">
                European Fashion Retailer &mdash; 45M&euro; annual revenue
              </div>
            </div>
            <p className="text-[1rem] leading-[1.7] text-text-secondary">
              After implementing SealMetrics alongside their existing GA4 setup,
              the team discovered that their paid search channel was generating
              3x more attributed revenue than previously visible. This led to a
              reallocation of budget that improved overall ROAS by 40%.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {caseMetrics.map((m) => (
              <div
                key={m.label}
                className="p-7 bg-warm-white border border-warm-100 rounded-[4px]"
              >
                <div className="text-[0.7rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-3">
                  {m.label}
                </div>
                <div className="font-mono text-[0.85rem] text-text-tertiary line-through mb-1">
                  {m.before}
                </div>
                <div className="font-mono text-[1.75rem] font-medium text-text-primary">
                  {m.after}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
