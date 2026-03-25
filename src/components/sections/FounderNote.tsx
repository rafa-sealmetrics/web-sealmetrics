export function FounderNote() {
  return (
    <section className="py-16 bg-warm-50 border-t border-warm-100">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="max-w-[640px] mx-auto flex flex-col sm:flex-row items-start gap-8">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-warm-200 flex items-center justify-center text-[1.1rem] font-medium text-text-secondary">
              RJ
            </div>
          </div>
          <div>
            <p className="text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-3">
              Built by a founder, supported by a founder
            </p>
            <p className="text-[1rem] text-text-primary leading-relaxed mb-4">
              I built SealMetrics after watching eCommerce teams make critical
              budget decisions on data they knew was wrong &mdash; but had no
              alternative. Every client gets direct access to me. Not a support
              ticket. Me.
            </p>
            <p className="text-[0.9rem] font-medium text-text-primary">
              Rafa Jim&eacute;nez
            </p>
            <a
              href="https://www.linkedin.com/company/sealmetrics"
              className="text-[0.85rem] text-text-tertiary no-underline hover:text-text-primary transition-colors"
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
