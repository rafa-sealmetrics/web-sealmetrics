import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

const faqs = [
  {
    question: "Which eCommerce platforms does SealMetrics support?",
    answer: "SealMetrics has native integrations for Shopify, Magento 2 (Adobe Commerce), WooCommerce, PrestaShop 1.7/8.x, BigCommerce and Salesforce Commerce Cloud (SFRA + SiteGenesis). Any custom or headless framework (Next.js, Nuxt, Astro, Remix) works via a standard JavaScript tag.",
  },
  {
    question: "How long does it take to install SealMetrics on Shopify?",
    answer: "Five minutes on Shopify Plus (one-click install) or via theme.liquid snippet on Shopify Standard. Order data flows automatically — no manual event configuration.",
  },
  {
    question: "Does SealMetrics work with headless or custom-built sites?",
    answer: "Yes. The standard JavaScript tag plus event API works on any framework — Next.js, Nuxt, Astro, Remix, SvelteKit or custom SSR stacks. Typical install time is 30 minutes.",
  },
  {
    question: "Does SealMetrics require changes to my existing cookie banner?",
    answer: "No. SealMetrics does not use cookies, localStorage or fingerprinting, so no consent banner is required for its operation. It runs alongside any existing CMP configuration without interfering with it.",
  },
];
import { getAlternates } from "@/lib/i18n/navigation";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";

export const metadata: Metadata = {
  title: "Platforms — SealMetrics",
  description: "Native install for Shopify, Magento, WooCommerce, PrestaShop, BigCommerce, WordPress, Webflow, Wix, Drupal, Joomla and Salesforce Commerce Cloud.",
  alternates: { canonical: "https://sealmetrics.com/platforms", languages: getAlternates("/platforms") },
};

const platforms = [
  { name: "Shopify", time: "5 min", desc: "One-click install on Shopify Plus. Theme.liquid snippet for Shopify Standard. Order data flows automatically." },
  { name: "Magento", time: "15 min", desc: "Native Magento 2 module via Composer. Works on Adobe Commerce and Magento Open Source." },
  { name: "WooCommerce", time: "10 min", desc: "Official WordPress plugin. Zero config. Respects your existing consent setup (but doesn't need it)." },
  { name: "PrestaShop", time: "15 min", desc: "PrestaShop 1.7 & 8.x module. Conversion tracking and full funnel out of the box." },
  { name: "BigCommerce", time: "10 min", desc: "Native app in the BigCommerce marketplace. SSO, product events, revenue attribution." },
  { name: "Salesforce Commerce Cloud", time: "30 min", desc: "Commerce Cloud cartridge. Works with SFRA and SiteGenesis storefronts." },
  { name: "WordPress", time: "5 min", desc: "WordPress plugin. Tracks page views, forms, CTAs. Works alongside any page builder." },
  { name: "Webflow", time: "10 min", desc: "Custom code embed in project settings. Works with CMS collections and e-commerce." },
  { name: "Wix", time: "10 min", desc: "Custom code in site settings. Compatible with Wix Stores and Wix Bookings." },
  { name: "Drupal", time: "15 min", desc: "Drupal module compatible with Drupal 9 & 10. Works with Commerce Kickstart." },
  { name: "Joomla", time: "15 min", desc: "Joomla extension for Joomla 4 & 5. Basic tracking and conversion events." },
  { name: "Custom / headless", time: "30 min", desc: "Any framework (Next.js, Nuxt, Astro, Remix) via one script tag + event API." },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Platforms" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Platforms", url: "/platforms" }])} />
      <JsonLd data={faqSchema(faqs)} />

      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <span className="eyebrow mb-5" style={{ display: "inline-flex", justifyContent: "center" }}>Platforms</span>
          <h1 className="h-display mx-auto mt-5" style={{ maxWidth: "22ch" }}>
            Native on <em>every eCommerce platform.</em>
          </h1>
          <p className="text-ink-soft mt-8 mx-auto max-w-[62ch] leading-[1.55]" style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}>
            Shopify, Magento, WooCommerce, PrestaShop, BigCommerce, Salesforce Commerce Cloud, WordPress, Webflow, Wix, Drupal, Joomla — plus any headless framework via one script tag.
          </p>
        </div>
      </section>

      <section className="py-28 bg-warm-50 border-t border-warm-100">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-end mb-12">
            <div>
              <span className="eyebrow mb-5">Native installs</span>
              <h2 className="h-section mt-5">Every platform. <em>Every setup time under 30 minutes.</em></h2>
            </div>
            <p className="text-[18px] leading-[1.55] text-ink-soft max-w-[54ch]">
              Native integrations for the platforms your team already runs. No hacky workarounds, no server-side GTM gymnastics, no consent mode polyfills.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {platforms.map((p) => (
              <article key={p.name} className="bg-white border border-warm-100 rounded-xl p-6 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[17px] font-semibold text-ink tracking-[-0.015em]">{p.name}</h3>
                  <span className="inline-flex px-2.5 py-1 bg-brand-soft text-brand-hover font-mono text-[10px] font-bold uppercase tracking-[0.08em] rounded">{p.time}</span>
                </div>
                <p className="text-[13.5px] leading-[1.55] text-ink-soft">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSharedV3
        locale="en"
        titleEn={<>Install in <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>15 minutes</em> on your platform.</>}
        titleEs={<>Instálalo en <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>15 minutos</em> en tu plataforma.</>}
        ledeEn="Book 30 minutes. We walk you through the exact integration for your stack — live, on your own site."
        ledeEs="Reserva 30 min. Te llevamos por la integración exacta para tu stack — en directo, sobre tu propia web."
      />
    </>
  );
}
