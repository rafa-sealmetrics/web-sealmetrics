const testimonials = [
  {
    text: "The difference between our GA4 data and SealMetrics data was alarming. We had been underreporting conversions by over 600%. Our board was making investment decisions on fundamentally wrong numbers.",
    author: "CMO",
    role: "International E-commerce, 25M€ revenue",
  },
  {
    text: "We removed our consent banner entirely and still maintain full GDPR compliance. Our bounce rate dropped 8% just from eliminating that friction point. SealMetrics captures everything regardless.",
    author: "Head of Growth",
    role: "SaaS Platform, Series B",
  },
  {
    text: "LENS AI caught a conversion drop from a payment page error at 3 AM. By the time our team was online, the alert had already identified the root cause and estimated revenue impact. We fixed it in 20 minutes.",
    author: "VP of Marketing",
    role: "Travel & Hospitality, 60M€ revenue",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 bg-warm-white">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary">
            What our clients say
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="p-8 border border-warm-100 rounded-[4px] bg-white"
            >
              <p className="text-[0.95rem] leading-[1.7] text-text-body mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="font-medium text-[0.85rem] text-text-primary">
                {t.author}
              </div>
              <div className="text-[0.8rem] text-text-secondary mt-0.5">
                {t.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
