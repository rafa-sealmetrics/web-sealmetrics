import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { localizedHref } from "@/lib/i18n/navigation";

function getFooterColumns(t: ReturnType<typeof getDictionary>["footer"], locale: Locale) {
  return [
    {
      title: t.product,
      links: [
        { label: t.platformOverview, href: localizedHref("/product", locale) },
        { label: t.howItWorks, href: localizedHref("/how-it-works", locale) },
        { label: t.integrations, href: localizedHref("/integrations", locale) },
        { label: t.platforms, href: localizedHref("/platforms", locale) },
        { label: t.pricing, href: localizedHref("/pricing", locale) },
        { label: t.security, href: localizedHref("/security", locale) },
        { label: t.forCmos, href: localizedHref("/for/cmo", locale) },
        { label: t.forCtos, href: localizedHref("/for/cto", locale) },
      ],
    },
    {
      title: t.industries,
      links: [
        { label: t.ecommerce, href: localizedHref("/for/ecommerce", locale) },
        { label: t.hotels, href: localizedHref("/for/hotels", locale) },
        { label: t.saas, href: localizedHref("/for/saas", locale) },
        { label: t.agencies, href: localizedHref("/for/agencies", locale) },
        { label: t.media, href: localizedHref("/for/media", locale) },
        { label: t.finance, href: localizedHref("/for/finance", locale) },
        { label: t.healthcare, href: localizedHref("/for/healthcare", locale) },
        { label: t.education, href: localizedHref("/for/education", locale) },
      ],
    },
    {
      title: t.compare,
      links: [
        { label: t.vsGa4, href: localizedHref("/vs-ga4", locale) },
        { label: t.vsGa360, href: localizedHref("/vs/ga360", locale) },
        { label: t.vsAdobe, href: localizedHref("/vs/adobe-analytics", locale) },
        { label: t.vsPiwik, href: localizedHref("/vs/piwik-pro", locale) },
        { label: t.dataLossCalc, href: localizedHref("/data-loss-calculator", locale) },
      ],
    },
    {
      title: t.resources,
      links: [
        { label: t.blog, href: localizedHref("/blog", locale) },
        { label: t.caseStudies, href: localizedHref("/case-studies", locale) },
        { label: t.videos, href: localizedHref("/videos", locale) },
        { label: t.glossary, href: localizedHref("/glossary", locale) },
        { label: t.changelog, href: localizedHref("/changelog", locale) },
      ],
    },
    {
      title: t.company,
      links: [
        { label: t.about, href: localizedHref("/about", locale) },
        { label: t.privacy, href: localizedHref("/privacy", locale) },
        { label: t.terms, href: localizedHref("/terms", locale) },
        { label: t.dpa, href: localizedHref("/dpa", locale) },
      ],
    },
  ];
}

export function Footer({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).footer;
  const footerColumns = getFooterColumns(t, locale);

  return (
    <footer className="bg-warm-900 border-t border-warm-800 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-12 mb-12">
          <div>
            <Link href={localizedHref("/", locale)} className="inline-block mb-3 no-underline">
              <Image
                src="/logos/logo-sealmetrics-blancov.png"
                alt="SealMetrics"
                width={160}
                height={32}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-[0.85rem] leading-relaxed text-warm-400 max-w-[280px]">
              {t.tagline}
            </p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.06em] text-warm-400 mb-4">
                {col.title}
              </h3>
              <nav aria-label={col.title} className="flex flex-col">
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
          <span>&copy; {new Date().getFullYear()} {t.copyright}</span>
          <span>{t.hosted}</span>
        </div>
      </div>
    </footer>
  );
}
