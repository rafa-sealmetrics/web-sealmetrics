import Link from "next/link";

const caseMetrics = [
  { label: "Tracked visitors", before: "12,400/mo", after: "47,200" },
  { label: "Recorded conversions", before: "340/mo", after: "1,290" },
  { label: "Revenue attributed", before: "\u20AC89K/mo", after: "\u20AC342K" },
  { label: "ROAS improvement", before: "Baseline", after: "+40%" },
];

const testimonials = [
  {
    text: "We had been underreporting conversions by over 600%. Our board was making investment decisions on fundamentally wrong numbers.",
    title: "CMO",
    role: "International eCommerce, 25M\u20AC revenue",
  },
  {
    text: "LENS AI caught a conversion drop from a payment page error at 3 AM. By the time our team was online, the alert had already identified the root cause.",
    title: "VP of Marketing",
    role: "Travel & Hospitality, 60M\u20AC revenue",
  },
];

export function SocialProof() {
  return (
    <section className="py-28 bg-white border-t border-warm-100">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <h2 className="headline-section mb-12">
          Real results from eCommerce teams.
        </h2>
        {/* Case study */}
        <div className="mb-20">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
            Case Study
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <blockquote className="text-[1.25rem] leading-relaxed text-text-primary mb-6 pl-6 border-l-2 border-warm-200">
                &ldquo;We thought our analytics were accurate. SealMetrics showed
                us we were missing 74% of our conversions. Every budget decision
                we made was wrong.&rdquo;
              </blockquote>
              <div>
                <div className="font-medium text-[0.9rem] text-text-primary">
                  Head of Digital Marketing
                </div>
                <div className="text-[0.8rem] text-text-secondary mt-0.5">
                  European Fashion Retailer &mdash; 45M&euro; annual revenue
                </div>
              </div>
              <Link
                href="/case-studies"
                className="inline-block mt-4 text-[0.85rem] text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors"
              >
                Read more case studies
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {caseMetrics.map((m) => (
                <div
                  key={m.label}
                  className="p-5 bg-warm-white border border-warm-100 rounded-[4px]"
                >
                  <div className="text-[0.7rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-2">
                    {m.label}
                  </div>
                  <div className="font-mono text-[0.8rem] text-text-tertiary line-through mb-0.5">
                    {m.before}
                  </div>
                  <div className="font-mono text-[1.5rem] font-medium text-text-primary">
                    {m.after}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.title}
              className="p-7 border border-warm-100 rounded-[4px] bg-warm-white"
            >
              <p className="text-[0.95rem] leading-[1.7] text-text-body mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-warm-100 flex items-center justify-center text-[0.8rem] font-medium text-text-tertiary shrink-0">
                  {t.title.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-[0.85rem] text-text-primary">
                    {t.title}
                  </div>
                  <div className="text-[0.8rem] text-text-secondary">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Founder note */}
        <div className="max-w-[640px] mx-auto flex flex-col sm:flex-row items-start gap-6 pt-12 border-t border-warm-100">
          <div className="w-14 h-14 rounded-full bg-warm-200 flex items-center justify-center text-[1rem] font-medium text-text-secondary shrink-0">
            RJ
          </div>
          <div>
            <p className="text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-2">
              Built by a founder, supported by a founder
            </p>
            <p className="text-[0.95rem] text-text-primary leading-relaxed mb-3">
              Every client gets direct access to me. Not a support ticket. Me.
              I built SealMetrics because eCommerce teams deserve to make
              decisions on complete data.
            </p>
            <p className="text-[0.9rem] font-medium text-text-primary">
              Rafa Jim&eacute;nez
            </p>
            <a
              href="https://www.linkedin.com/in/rafajimenez/"
              className="text-[0.8rem] text-text-tertiary no-underline hover:text-text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Founder, SealMetrics &rarr; LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
