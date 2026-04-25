import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";

export const metadata: Metadata = {
  title: "Integraciones — SealMetrics",
  description: "25+ integraciones nativas: plataformas publicitarias, CMSs eCommerce, data warehouses, BI tools, CRMs. Más MCP server para agentes IA y API REST completa.",
  alternates: { canonical: "https://sealmetrics.com/es/integrations", languages: getAlternatesEs("/integrations") },
};

const groups = [
  { title: "Plataformas publicitarias", items: ["Google Ads", "Meta Ads", "TikTok Ads", "LinkedIn Ads", "Microsoft Ads"] },
  { title: "eCommerce", items: ["Shopify", "WooCommerce", "Magento", "PrestaShop", "BigCommerce", "Salesforce Commerce Cloud"] },
  { title: "Data warehouses", items: ["BigQuery", "Snowflake", "Databricks", "Redshift"] },
  { title: "BI tools", items: ["Looker Studio", "Power BI", "Tableau", "Metabase"] },
  { title: "CRM & email", items: ["HubSpot", "Salesforce", "Klaviyo", "Mailchimp"] },
  { title: "Developer", items: ["REST API", "Streaming API", "Webhooks", "MCP server", "Segment", "Zapier"] },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Integraciones" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Integraciones", url: "/es/integrations" }])} />

      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <span className="eyebrow mb-5" style={{ display: "inline-flex", justifyContent: "center" }}>25+ integraciones nativas</span>
          <h1 className="h-display mx-auto mt-5" style={{ maxWidth: "22ch" }}>
            Encaja en el <em>stack que ya usas.</em>
          </h1>
          <p className="text-ink-soft mt-8 mx-auto max-w-[62ch] leading-[1.55]" style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}>
            Plataformas publicitarias, CMSs eCommerce, warehouses, BI, CRMs. Más API REST + streaming, webhooks y un MCP server para agentes IA.
          </p>
        </div>
      </section>

      <section className="py-28 bg-warm-50 border-t border-warm-100">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((g) => (
              <article key={g.title} className="bg-white border border-warm-100 rounded-xl p-7">
                <h3 className="text-[17px] font-semibold text-ink tracking-[-0.015em] mb-4">{g.title}</h3>
                <ul className="flex flex-col gap-2">
                  {g.items.map((i) => (
                    <li key={i} className="flex items-center gap-2.5 text-[14px] text-ink-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-10">
          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
            <div>
              <span className="inline-block font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-brand bg-brand-soft px-3 py-1 rounded-md mb-5">
                Developer-first
              </span>
              <h3 className="font-semibold text-ink tracking-[-0.03em] leading-[1.05]" style={{ fontSize: "clamp(30px, 3.6vw, 44px)" }}>
                API completa, <em>MCP nativo,</em> sin cuotas.
              </h3>
              <p className="text-[17px] leading-[1.6] text-ink-soft mt-5">
                Cobertura REST + streaming de cada evento, cada propiedad. Webhooks para operaciones en tiempo real. MCP server para que Claude, ChatGPT o tu propio copilot consulten directamente.
              </p>
              <div className="mt-6 flex gap-3 flex-wrap">
                <Link href="/es/product" className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-white rounded-md text-[14px] font-semibold no-underline hover:bg-brand transition-colors">
                  Ver producto →
                </Link>
                <Link href="/es/demo" className="inline-flex items-center gap-2 px-6 py-3 border border-warm-200 text-ink rounded-md text-[14px] font-semibold no-underline hover:bg-warm-50 transition-colors">
                  Pide demo
                </Link>
              </div>
            </div>
            <div className="bg-ink text-white rounded-[20px] p-8 md:p-10 font-mono text-[12.5px] leading-[1.8]">
              <div className="flex gap-1.5 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#FF6058]" />
                <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                <span className="w-2 h-2 rounded-full bg-[#28CA42]" />
              </div>
              <div>
                <div><span style={{ color: "#E8B84B" }}>GET</span> /api/v1/events</div>
                <div><span style={{ color: "#E8B84B" }}>GET</span> /api/v1/conversions</div>
                <div><span style={{ color: "#E8B84B" }}>GET</span> /api/v1/channels</div>
                <div><span style={{ color: "#E8B84B" }}>POST</span> /api/v1/webhooks</div>
                <div><span style={{ color: "#E8B84B" }}>MCP</span> claude://sealmetrics</div>
                <div className="mt-3 text-white/45">// sin cuotas · sin muestreo · resolución completa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSharedV3
        locale="es"
        titleEn={<>Install in 15 minutes.</>}
        titleEs={<>Instálalo en <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>15 minutos.</em></>}
        ledeEn="30 min walkthrough."
        ledeEs="Reserva walkthrough técnico. Script, API, schema BigQuery, MCP server. Sin marketing — te enseñamos la integración."
      />
    </>
  );
}
