import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { breadcrumbSchema, collectionPageSchema, itemListSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";
import { ogImage } from "@/lib/seo/og";

const TITLE = "Analítica y RGPD por país — guía de reguladores";
const DESCRIPTION =
  "Cómo se mide sin banner de cookies en Francia, Alemania y España. Criterios de la CNIL, la DSK/TDDDG y la AEPD, uno a uno.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description:
      "CNIL, DSK/§25 TDDDG y AEPD: qué exige cada regulador para la medición de audiencia exenta de consentimiento, y qué arquitecturas lo cumplen.",
    url: "https://sealmetrics.com/es/gdpr-analytics/",
    siteName: "Sealmetrics",
    locale: "es_ES",
    type: "website",
    images: [ogImage("/es/gdpr-analytics/")],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: TITLE,
    description:
      "CNIL, DSK/§25 TDDDG y AEPD: los criterios de cada regulador para medir sin consentimiento, uno a uno.",
    images: [ogImage("/es/gdpr-analytics/")],
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/gdpr-analytics/",
    languages: getAlternatesEs("/gdpr-analytics"),
  },
};

const countries = [
  {
    href: "/es/gdpr-analytics/spain",
    country: "España",
    authority: "AEPD",
    lang: null,
    tagline:
      "La guía de cookies de la AEPD de 2024 y el art. 22.2 de la LSSI-CE: las condiciones para medir audiencia de forma anónima sin consentimiento.",
  },
  {
    href: "/gdpr-analytics/france",
    country: "Francia",
    authority: "CNIL",
    lang: "en inglés",
    tagline:
      "La exención de la CNIL para analítica: cinco criterios, una autoevaluación de 14 puntos y el efecto del Digital Omnibus.",
  },
  {
    href: "/gdpr-analytics/germany",
    country: "Alemania",
    authority: "DSK / BfDI",
    lang: "en inglés",
    tagline:
      "El §25 de la TDDDG, el documento de orientación de la DSK y la guía de la BfDI — y por qué una arquitectura sin cookies cumple la exención por diseño.",
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Analítica y RGPD" }]} locale="es" />
      <JsonLd data={breadcrumbSchema([{ name: "Analítica y RGPD", url: "/es/gdpr-analytics" }])} />
      <JsonLd
        data={collectionPageSchema({
          name: TITLE,
          description: DESCRIPTION,
          url: "/es/gdpr-analytics",
        })}
      />
      <JsonLd
        data={itemListSchema({
          name: "Guía de analítica y RGPD por país",
          description:
            "Análisis país por país de la analítica web exenta de consentimiento bajo el RGPD y ePrivacy, según cada autoridad de control nacional.",
          url: "/es/gdpr-analytics",
          items: countries.map((c) => ({
            name: `Analítica y RGPD en ${c.country} — ${c.authority}`,
            url: `https://sealmetrics.com${c.href}/`,
          })),
        })}
      />

      <section className="relative overflow-hidden bg-warm-white pt-10 md:pt-12 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <span className="eyebrow mb-5">Cumplimiento por país</span>
          <h1 className="h-display mt-5" style={{ maxWidth: "24ch" }}>
            Analítica y RGPD, <em>regulador a regulador.</em>
          </h1>

          <QuickAnswer label="Respuesta rápida">
            <p>
              El RGPD es un reglamento único, pero la norma que decide si una
              etiqueta de analítica necesita banner es ePrivacy, y ePrivacy se
              transpone país por país. Por eso la misma configuración puede
              estar exenta en Francia y ser discutible en Alemania. Cada página
              de abajo recorre una autoridad de control — la CNIL, la DSK bajo
              el §25 de la TDDDG y la AEPD — y expone los criterios que esa
              autoridad publicó realmente, y después qué arquitecturas los
              cumplen. Son páginas que describen la guía del regulador y cómo
              está construido Sealmetrics frente a ella. No son asesoramiento
              jurídico, y ninguna afirma una certificación que Sealmetrics no
              tenga.
            </p>
          </QuickAnswer>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {countries.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group block bg-white border border-warm-100 rounded-xl p-8 no-underline transition-all hover:border-warm-200 hover:-translate-y-0.5"
              >
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-brand">
                  {c.authority}
                </span>
                <h2 className="text-[21px] font-semibold tracking-[-0.015em] text-ink leading-[1.25] mt-3 mb-3 group-hover:text-brand transition-colors">
                  Analítica y RGPD en {c.country}
                </h2>
                <p className="text-[15px] leading-[1.55] text-ink-soft">{c.tagline}</p>
                <span className="inline-flex items-center gap-1.5 mt-4 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-brand">
                  {c.lang ? `Leer el análisis (${c.lang}) →` : "Leer el análisis →"}
                </span>
              </Link>
            ))}
          </div>

          <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-ink leading-[1.2] mt-16 mb-4">
            ¿Qué países no están cubiertos aquí?
          </h2>
          <p className="text-[15px] leading-[1.65] text-ink-soft max-w-[70ch]">
            Solo Francia, Alemania y España tienen página propia hoy, porque son
            las tres autoridades que han publicado criterios específicos de
            analítica lo bastante detallados como para auditar contra ellos. De
            momento solo la de España está en castellano; las de Francia y
            Alemania siguen en inglés. Para el razonamiento jurídico que aplica
            en toda la UE al margen del Estado miembro, empieza por{" "}
            <Link href="/es/consentless-analytics" className="text-brand">
              analítica sin consentimiento
            </Link>{" "}
            o pasa tu stack actual por el{" "}
            <Link href="/es/reg-gap-analysis" className="text-brand">
              análisis de brecha regulatoria
            </Link>
            .
          </p>
        </div>
      </section>

      <FinalCtaSharedV3
        locale="es"
        titleEn={
          <>
            Compliance your DPO{" "}
            <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>
              can actually sign.
            </em>
          </>
        }
        titleEs={
          <>
            Cumplimiento que tu DPO{" "}
            <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>
              puede firmar.
            </em>
          </>
        }
        ledeEn="Book a demo and we'll walk your DPO through the architecture, the DPA and the regulator criteria for your market."
        ledeEs="Pide una demo y repasamos con tu DPO la arquitectura, el DPA y los criterios del regulador de tu mercado."
      />
    </>
  );
}
