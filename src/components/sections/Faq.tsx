const faqs = [
  {
    q: "Is this GDPR compliant without a consent banner?",
    a: "Yes. SealMetrics operates under Article 6(1)(f) of the GDPR \u2014 legitimate interest \u2014 because we collect no personal data and no cookies. You don\u2019t need a consent banner to use SealMetrics. We\u2019ve been running this way with European clients since 2020 with zero compliance incidents.",
  },
  {
    q: "Do I need to remove GA4?",
    a: "No. Most clients run both in parallel for the first 30\u201360 days to compare the data side by side. Once you see the gap, the decision usually makes itself. You keep full control.",
  },
  {
    q: "How long does implementation take?",
    a: "Under 5 minutes. One script tag on your site. No custom events, no complex setup. We handle onboarding personally and you\u2019ll see real data the same day.",
  },
  {
    q: "How do I know your data is accurate?",
    a: "Run SealMetrics alongside GA4 for two weeks. You\u2019ll see SealMetrics capture more sessions, more conversions, and more revenue than GA4 reports \u2014 because it\u2019s capturing 100% of your traffic, not the fraction that accepted cookies.",
  },
  {
    q: "Is there a minimum contract or lock-in?",
    a: "No lock-in. Monthly plans cancel anytime. Annual plans offer a 20% discount. We prefer to earn retention through results, not contracts.",
  },
  {
    q: "What happens if my traffic exceeds my plan limit?",
    a: "We never block your tracking. If you consistently exceed your plan, we proactively suggest an upgrade. You get one free overage month per year. No surprise charges.",
  },
];

export function Faq() {
  return (
    <section className="py-20 bg-white border-t border-warm-100">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="max-w-[640px] mx-auto text-center mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
            Common questions
          </span>
          <h2 className="text-[2rem] font-medium text-text-primary">
            Everything you need to know before deciding.
          </h2>
        </div>
        <div className="max-w-[760px] mx-auto divide-y divide-warm-100">
          {faqs.map((item, i) => (
            <details
              key={i}
              className="group py-5 cursor-pointer list-none"
            >
              <summary className="flex items-center justify-between gap-4 text-[1rem] font-medium text-text-primary select-none list-none marker:hidden [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-text-tertiary group-open:rotate-45 transition-transform duration-200 text-xl leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[0.95rem] text-text-secondary leading-relaxed pr-8">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
