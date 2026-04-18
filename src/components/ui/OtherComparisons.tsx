import Link from "next/link";

const comparisons = [
  { href: "/vs-ga4/", label: "SealMetrics vs GA4", blurb: "Data capture, GDPR, pricing" },
  { href: "/vs/ga360/", label: "SealMetrics vs GA360", blurb: "Enterprise analytics compared" },
  { href: "/vs/adobe-analytics/", label: "SealMetrics vs Adobe Analytics", blurb: "Legacy enterprise vs cookieless" },
  { href: "/vs/piwik-pro/", label: "SealMetrics vs Piwik PRO", blurb: "EU privacy analytics compared" },
  { href: "/alternatives/google-analytics/", label: "Google Analytics alternatives", blurb: "Full category overview" },
];

export function OtherComparisons({ currentHref }: { currentHref: string }) {
  const others = comparisons.filter((c) => c.href !== currentHref);

  return (
    <section className="border-t border-warm-100 bg-warm-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[0.75rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-8">
          Other comparisons
        </h2>
        <ul className="grid gap-6 md:grid-cols-2">
          {others.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className="block text-text-primary no-underline hover:text-accent transition-colors"
              >
                <span className="block text-[1.05rem] font-medium">{c.label}</span>
                <span className="block text-[0.85rem] text-text-tertiary mt-1">{c.blurb}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
