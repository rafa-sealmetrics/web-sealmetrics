import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";

export const metadata: Metadata = {
  title: "Plataformas — SealMetrics",
  description: "Instalación nativa para Shopify, Magento, WooCommerce, PrestaShop, BigCommerce, WordPress, Webflow, Wix, Drupal, Joomla y Salesforce Commerce Cloud.",
  alternates: { canonical: "https://sealmetrics.com/es/platforms", languages: getAlternatesEs("/platforms") },
};

const platforms = [
  { name: "Shopify", time: "5 min", desc: "Instalación en un click en Shopify Plus. Snippet theme.liquid para Shopify Standard. Datos de orden fluyen automáticamente." },
  { name: "Magento", time: "15 min", desc: "Módulo Magento 2 nativo vía Composer. Funciona en Adobe Commerce y Magento Open Source." },
  { name: "WooCommerce", time: "10 min", desc: "Plugin WordPress oficial. Cero config. Respeta tu consentimiento actual (pero no lo necesita)." },
  { name: "PrestaShop", time: "15 min", desc: "Módulo PrestaShop 1.7 & 8.x. Tracking de conversiones y funnel completo out-of-the-box." },
  { name: "BigCommerce", time: "10 min", desc: "App nativa en el marketplace de BigCommerce. SSO, eventos de producto, atribución de ingresos." },
  { name: "Salesforce Commerce Cloud", time: "30 min", desc: "Cartridge Commerce Cloud. Funciona con storefronts SFRA y SiteGenesis." },
  { name: "WordPress", time: "5 min", desc: "Plugin WordPress. Trackea pageviews, formularios, CTAs. Funciona con cualquier page builder." },
  { name: "Webflow", time: "10 min", desc: "Custom code embed en project settings. Funciona con CMS collections y e-commerce." },
  { name: "Wix", time: "10 min", desc: "Custom code en site settings. Compatible con Wix Stores y Wix Bookings." },
  { name: "Drupal", time: "15 min", desc: "Módulo Drupal compatible con Drupal 9 & 10. Funciona con Commerce Kickstart." },
  { name: "Joomla", time: "15 min", desc: "Extensión Joomla para Joomla 4 & 5. Tracking básico y eventos de conversión." },
  { name: "Custom / headless", time: "30 min", desc: "Cualquier framework (Next.js, Nuxt, Astro, Remix) vía un script + event API." },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Plataformas" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Plataformas", url: "/es/platforms" }])} />

      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <span className="eyebrow mb-5" style={{ display: "inline-flex", justifyContent: "center" }}>Plataformas</span>
          <h1 className="h-display mx-auto mt-5" style={{ maxWidth: "22ch" }}>
            Nativo en <em>cada plataforma eCommerce.</em>
          </h1>
          <p className="text-ink-soft mt-8 mx-auto max-w-[62ch] leading-[1.55]" style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}>
            Shopify, Magento, WooCommerce, PrestaShop, BigCommerce, Salesforce Commerce Cloud, WordPress, Webflow, Wix, Drupal, Joomla — más cualquier framework headless vía un script.
          </p>
        </div>
      </section>

      <section className="py-28 bg-warm-50 border-t border-warm-100">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-end mb-12">
            <div>
              <span className="eyebrow mb-5">Instalaciones nativas</span>
              <h2 className="h-section mt-5">Cada plataforma. <em>Setup bajo 30 minutos.</em></h2>
            </div>
            <p className="text-[18px] leading-[1.55] text-ink-soft max-w-[54ch]">
              Integraciones nativas para las plataformas que tu equipo ya usa. Sin workarounds, sin piruetas de server-side GTM, sin polyfills de consent mode.
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
        locale="es"
        titleEn={<>Install in 15 minutes.</>}
        titleEs={<>Instálalo en <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>15 minutos</em> en tu plataforma.</>}
        ledeEn="Book a walkthrough."
        ledeEs="Reserva 30 min. Te llevamos por la integración exacta para tu stack — en directo, sobre tu propia web."
      />
    </>
  );
}
