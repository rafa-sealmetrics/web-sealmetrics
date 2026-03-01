const badges = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    name: "GDPR Compliant",
    desc: "No PII collection. No consent required for analytics.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    name: "EU Data Residency",
    desc: "All data processed and stored in European infrastructure.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    name: "No Cookie Policy Needed",
    desc: "Cookieless by design. No consent management overhead.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    name: "ePrivacy Ready",
    desc: "Prepared for upcoming ePrivacy regulation requirements.",
  },
];

export function Compliance() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="max-w-[600px] mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
            Compliance & Security
          </span>
          <h2 className="headline-section mb-4">
            Privacy by architecture, not by policy.
          </h2>
          <p className="text-[1.05rem] leading-[1.75] text-text-secondary">
            SealMetrics does not collect personal data. Compliance is not a
            configuration option&nbsp;&mdash; it is the foundation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {badges.map((b) => (
            <div
              key={b.name}
              className="p-8 text-center border border-warm-100 rounded-[4px] bg-warm-white"
            >
              <div className="text-green-muted mb-4 flex justify-center">
                {b.icon}
              </div>
              <div className="font-medium text-[0.9rem] text-text-primary mb-1">
                {b.name}
              </div>
              <div className="text-[0.8rem] text-text-secondary leading-snug">
                {b.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
