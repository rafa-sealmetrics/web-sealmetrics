import Link from "next/link";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/product" },
      { label: "Pricing", href: "/pricing" },
      { label: "Integrations", href: "/integrations" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "How It Works", href: "/how-it-works" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Partners", href: "/partners" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Security", href: "/security" },
      { label: "GDPR", href: "/gdpr" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-warm-900 border-t border-warm-800 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-warm-white rounded-md flex items-center justify-center text-warm-900 text-[0.65rem] font-semibold">
                SM
              </div>
              <span className="font-semibold text-[1.1rem] text-warm-white">
                SealMetrics
              </span>
            </div>
            <p className="text-[0.85rem] leading-relaxed text-warm-400 max-w-[280px]">
              Cookieless web analytics that captures 100% of your traffic. GDPR
              compliant by design.
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
