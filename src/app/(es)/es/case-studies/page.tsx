import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";

export const metadata: Metadata = {
  title: "Casos de estudio — SealMetrics",
  description: "Cómo equipos eCommerce europeos recuperaron sus ingresos invisibles con SealMetrics. Resultados reales, números reales (anonimizados hasta aprobación del cliente).",
  alternates: {
    canonical: "https://sealmetrics.com/es/case-studies",
    languages: getAlternatesEs("/case-studies"),
  },
};

const cases = [
  {
    client: "Grupo hotelero europeo",
    sector: "Hoteles · eCommerce",
    stat1: { n: "50%", l: "Tráfico invisible antes de SealMetrics" },
    stat2: { n: "25%", l: "Reservas CRM ahora atribuidas" },
    quote: "Los datos que entrega SealMetrics son agnósticos, neutrales y sin sesgo. No hay caja negra.",
    cite: "Equipo de marketing · Grupo hotelero",
  },
  {
    client: "Cadena hotelera · España",
    sector: "Hoteles · eCommerce",
    stat1: { n: "+30%", l: "Tráfico recuperado vs GA4" },
    stat2: { n: "15–20%", l: "Más cerca del CRM en atribución" },
    quote: "Ya no es una herramienta que está al lado del proceso. Es la herramienta que nos da el dato real — y con la que tomamos decisiones.",
    cite: "Head of eCommerce · Cadena hotelera",
  },
  {
    client: "Marca DTC de café",
    sector: "eCommerce · DTC",
    stat1: { n: "30–40%", l: "Infra-reportado por GA4" },
    stat2: { n: "30 días", l: "Hasta fuente única de verdad" },
    quote: "Hemos usado SealMetrics como 'vale, nos creemos este dato.' Es nuestra fuente única de verdad.",
    cite: "Founder & CEO · marca DTC",
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Casos de estudio" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Casos de estudio", url: "/es/case-studies" }])} />

      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <span className="eyebrow mb-5" style={{ display: "inline-flex", justifyContent: "center" }}>Casos de estudio</span>
          <h1 className="h-display mx-auto mt-5" style={{ maxWidth: "22ch" }}>
            Equipos reales. Números reales. <em>Escritos honestos.</em>
          </h1>
          <p className="text-ink-soft mt-8 mx-auto max-w-[60ch] leading-[1.55]" style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}>
            Los casos están anonimizados hasta que el cliente firma la autorización de publicación. Los números son reales y verificados contra el CRM y reportes internos de cada cliente.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cases.map((c) => (
              <article key={c.client} className="bg-white border border-warm-100 rounded-xl p-7 flex flex-col">
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
              </article>
            ))}
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
