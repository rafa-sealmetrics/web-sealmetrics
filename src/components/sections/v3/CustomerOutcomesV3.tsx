const outcomes = [
  {
    metric: "3.8x",
    description: "more visitors tracked",
    detail: "12,400 → 47,200 monthly visitors",
    source: "European retailer, 45M€ revenue",
  },
  {
    metric: "612%",
    description: "more conversions recorded",
    detail: "340 → 1,290 monthly conversions",
    source: "European retailer, 45M€ revenue",
  },
  {
    metric: "+283%",
    description: "attributed revenue",
    detail: "€89K → €342K monthly revenue",
    source: "European retailer, 45M€ revenue",
  },
  {
    metric: "+40%",
    description: "ROAS improvement",
    detail: "Budget reallocated on complete data",
    source: "European retailer, 45M€ revenue",
  },
];

const testimonials = [
  {
    quote:
      "We discovered we were underreporting conversions by 600%. Our entire budget allocation was wrong.",
    author: "CMO",
    company: "European fashion retailer",
  },
  {
    quote:
      "We removed the consent banner entirely. Bounce rate dropped 8% overnight.",
    author: "Head of Growth",
    company: "Travel & hospitality group",
  },
];

export function CustomerOutcomesV3() {
  return (
    <section className="bg-warm-white border-t border-warm-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-warm-400 mb-4">
            Customer Results
          </p>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] text-warm-900 mb-4">
            Real results from real teams.
          </h2>
          <p className="text-lg text-warm-500 leading-relaxed">
            What happens when a 45M€ European retailer switches from GA4 to
            complete data.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-warm-100 border border-warm-100 rounded-[4px] overflow-hidden mb-12">
          {outcomes.map((o) => (
            <div key={o.description} className="bg-white p-6">
              <p className="font-serif text-3xl text-green-muted mb-1">
                {o.metric}
              </p>
              <p className="text-sm font-medium text-warm-900 mb-2">
                {o.description}
              </p>
              <p className="text-xs text-warm-400">{o.detail}</p>
            </div>
          ))}
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white border border-warm-100 rounded-[4px] p-8"
            >
              <p className="font-serif text-lg text-warm-900 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-medium text-warm-900">{t.author}</p>
                <p className="text-xs text-warm-400">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
