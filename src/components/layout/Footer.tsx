import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Platform Overview", href: "/product" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Integrations", href: "/integrations" },
      { label: "Pricing", href: "/pricing" },
      { label: "Security", href: "/security" },
      { label: "For CMOs", href: "/for/cmo" },
      { label: "For CTOs", href: "/for/cto" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "vs Google Analytics 4", href: "/vs-ga4" },
      { label: "vs GA360", href: "/vs/ga360" },
      { label: "vs Adobe Analytics", href: "/vs/adobe-analytics" },
      { label: "vs Piwik PRO", href: "/vs/piwik-pro" },
      { label: "Data Loss Calculator", href: "/data-loss-calculator" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Videos", href: "/videos" },
      { label: "Glossary", href: "/glossary" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "DPA", href: "/dpa" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-warm-900 border-t border-warm-800 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-12 mb-12">
          <div>
            <Link href="/" className="inline-block mb-3 no-underline">
              <Image
                src="/logos/logo-sealmetrics-blancov.png"
                alt="SealMetrics"
                width={160}
                height={32}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-[0.85rem] leading-relaxed text-warm-400 max-w-[280px]">
              Decision intelligence for ecommerce teams. Complete data, no
              cookies, full GDPR compliance by design.
            </p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[0.7rem] font-medium uppercase tracking-[0.06em] text-warm-400 mb-4">
                {col.title}
              </h4>
              <nav className="flex flex-col">
                {col.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[0.85rem] text-warm-300 no-underline py-1 hover:text-warm-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-warm-800 flex flex-col md:flex-row justify-between text-[0.8rem] text-warm-400 gap-2">
          <span>&copy; {new Date().getFullYear()} SealMetrics. All rights reserved.</span>
          <span>EU-hosted. Cookieless by design.</span>
        </div>
      </div>
    </footer>
  );
}
