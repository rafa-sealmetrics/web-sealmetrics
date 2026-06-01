import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, itemListSchema, collectionPageSchema, reviewSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";

export const metadata: Metadata = {
  title: "Casos de estudio — SealMetrics",
  description: "Cómo equipos eCommerce europeos convirtieron SealMetrics en fuente única de verdad para marca, agencias y departamentos. Caso: Palladium Hotel Group.",
  openGraph: {
    title: "Casos de estudio — SealMetrics",
    description: "Cómo equipos eCommerce europeos convirtieron SealMetrics en fuente única de verdad para marca, agencias y departamentos. Caso: Palladium Hotel Group.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/case-studies",
    languages: getAlternatesEs("/case-studies"),
  },
};

const cases = [
  {
    client: "Palladium Hotel Group",
    sector: "Hoteles · eCommerce",
    stat1: { n: "40%", l: "Tráfico sin atribución antes de SealMetrics" },
    stat2: { n: "+165%", l: "Mejora en Coste por Búsqueda en Display" },
    quote: "Los datos que da SealMetrics son agnósticos, no están sesgados y son neutrales. No hay caja negra.",
    cite: "Director Digital y Venta Directa · Palladium Hotel Group",
    href: "/es/case-studies/palladium-hotel-group",
  },
  {
    client: "Dreamplace Hotels",
    sector: "Hotelería · eCommerce",
    stat1: { n: "+30%", l: "Más tráfico vs Google Analytics" },
    stat2: { n: "15–20%", l: "Más cerca del CRM en atribución" },
    quote: "Ya no es una herramienta que está al lado del proceso. Es la herramienta que nos da el dato real — y con la que tomamos decisiones.",
    cite: "Eduardo Martin · Analítica y Campañas · Dreamplace Hotels",
    href: "/es/case-studies/dreamplace-hotels",
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Casos de estudio" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Casos de estudio", url: "/es/case-studies" }], "es")} />
      <JsonLd data={collectionPageSchema({ name: "Casos de estudio", description: "Casos de marcas europeas que usan SealMetrics como fuente única de verdad. Caso destacado: Palladium Hotel Group.", url: "/es/case-studies" })} />
      <JsonLd
        data={itemListSchema({
          name: "Casos de estudio SealMetrics",
          description: "Casos de marcas europeas: hoteles, DTC y retail. Destacado: Palladium Hotel Group.",
          url: "/es/case-studies",
          items: cases.map((c) => ({
            name: `${c.client} — ${c.sector}`,
            url: c.href ? `https://sealmetrics.com${c.href}` : `https://sealmetrics.com/es/case-studies`,
          })),
        })}
      />
      {cases.map((c) => (
        <JsonLd
          key={c.client}
          data={reviewSchema({
            reviewBody: c.quote,
            authorName: c.client,
            authorRole: c.cite,
          })}
        />
      ))}

      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <span className="eyebrow mb-5" style={{ display: "inline-flex", justifyContent: "center" }}>Casos de estudio</span>
          <h1 className="h-display mx-auto mt-5" style={{ maxWidth: "22ch" }}>
            Equipos reales. Números reales. <em>Escritos honestos.</em>
          </h1>
          <p className="text-ink-soft mt-8 mx-auto max-w-[60ch] leading-[1.55]" style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}>
            Casos destacados: Palladium Hotel Group sobre por qué la neutralidad ganó al volumen reportado, y Dreamplace Hotels sobre cómo cerrar el gap con el CRM. Los números son verificados contra el CRM y reportes internos de cada cliente. Dos nuevos casos con nombre se publican en Q3 2026.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cases.map((c) => {
              const card = (
                <article key={c.client} className={`bg-white border border-warm-100 rounded-xl p-7 flex flex-col h-full ${c.href ? "hover:border-warm-200 transition-colors" : ""}`}>
                  <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-warm-100">
                    <span className="text-[16px] font-semibold text-ink tracking-[-0.015em]">{c.client}</span>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-soft font-semibold">{c.sector}</span>
                  </div>
                  <blockquote className="text-[16px] leading-[1.45] tracking-[-0.01em] text-ink font-medium mt-4">
                    &ldquo;{c.quote}&rdquo;
                    <cite className="block mt-2.5 not-italic font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft font-semibold">{c.cite}</cite>
                  </blockquote>
                  <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-warm-100">
                    {[c.stat1, c.stat2].map((s) => (
                      <div key={s.n}>
                        <div className="text-[26px] font-semibold tracking-[-0.03em] text-brand leading-none tabular-nums">{s.n}</div>
                        <div className="text-[12px] leading-[1.45] text-ink-soft mt-1.5">{s.l}</div>
                      </div>
                    ))}
                  </div>
                  {c.href && (
                    <div className="mt-5 pt-4 border-t border-warm-100 font-mono text-[11px] uppercase tracking-[0.1em] text-brand font-semibold">
                      Lee el caso completo →
                    </div>
                  )}
                </article>
              );
              return c.href ? (
                <Link key={c.client} href={c.href} className="no-underline text-current">
                  {card}
                </Link>
              ) : (
                card
              );
            })}
          </div>
        </div>
      </section>

      <FinalCtaSharedV3
        locale="es"
        titleEn={<>See your own case study.</>}
        titleEs={<>Ve tu propio <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>caso</em> en 30 minutos.</>}
        ledeEn="30 min walkthrough."
        ledeEs="Reserva walkthrough. Pasamos tu web por SealMetrics, sacamos los números en directo y te explicamos qué significan."
      />
    </>
  );
}
