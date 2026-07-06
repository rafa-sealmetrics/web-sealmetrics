import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/content/blog";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { collectionPageSchema, breadcrumbSchema } from "@/lib/schema";
import { getAlternatesEs } from "@/lib/i18n/navigation";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";

export const metadata: Metadata = {
  title: "Blog — SealMetrics",
  description: "Insights sobre analítica web, calidad de datos, atribución y medición privacy-first.",
  openGraph: {
    title: "Blog — SealMetrics",
    description: "Insights sobre analítica web, calidad de datos, atribución y medición privacy-first.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/es/blog",
    languages: getAlternatesEs("/blog"),
  },
};

const ES_TRANSLATED_SLUGS = new Set([
  "gdpr-eprivacy-analytics-legal-assessment",
  "self-service-analytics-lens-ai",
  "cookieless-analytics-explained",
  "consent-banner-impact-on-analytics",
  "ga4-data-sampling-problem",
  "why-ga4-shows-13pct-eu-traffic",
  "gdpr-analytics-without-consent",
]);

const ES_TRANSLATIONS: Record<string, { title: string; description: string; category: string; readTime: string }> = {
  "gdpr-eprivacy-analytics-legal-assessment": {
    title: "¿Tu analítica cumple de verdad el RGPD? Un análisis legal",
    description: "RGPD y ePrivacy son dos leyes distintas, y la analítica tiene que superar las dos para funcionar sin banner. El test legal y el veredicto por herramienta: GA4, Matomo, Plausible, Piwik PRO y SealMetrics.",
    category: "Regulación",
    readTime: "9 min",
  },
  "self-service-analytics-lens-ai": {
    title: "Cómo SealMetrics habilita la analítica self-service con LENS AI",
    description: "Apunta un LLM a datos incompletos de GA4 y se inventa las respuestas. Cómo el dato cookieless completo más el MCP de SealMetrics permiten consultar tu propia analítica.",
    category: "IA y Analítica",
    readTime: "10 min",
  },
  "cookieless-analytics-explained": {
    title: "Analítica cookieless explicada: cómo medir sin cookies",
    description: "Las cookies están desapareciendo. Cómo funciona la analítica cookieless, por qué captura más data y qué implica para RGPD.",
    category: "Tecnología",
    readTime: "8 min",
  },
  "consent-banner-impact-on-analytics": {
    title: "Cómo los banners de consentimiento destruyen tus datos",
    description: "55% de los visitantes UE rechaza cookies. 65% acepta solo en la segunda página. El impacto real sobre atribución y revenue.",
    category: "Calidad del dato",
    readTime: "6 min",
  },
  "ga4-data-sampling-problem": {
    title: "Muestreo de datos en GA4: por qué tus números están mal",
    description: "GA4 aplica muestreo cuando el tráfico supera ciertos umbrales. Cómo funciona, por qué importa y qué puedes hacer.",
    category: "Calidad del dato",
    readTime: "7 min",
  },
  "why-ga4-shows-13pct-eu-traffic": {
    title: "Por qué GA4 muestra el 13% de tu tráfico UE",
    description: "GA4 pierde dato en tres niveles: rechazo de consentimiento, ad blockers y restricciones de navegador. Aquí están las cuentas.",
    category: "Calidad del dato",
    readTime: "8 min",
  },
  "gdpr-analytics-without-consent": {
    title: "Analítica conforme con RGPD sin banners de consentimiento",
    description: "Hacer analítica sin banners es legalmente posible. Base jurídica RGPD, criterios CNIL y requisitos técnicos.",
    category: "Regulación",
    readTime: "7 min",
  },
};

export default function Page() {
  const posts = blogPosts
    .filter((p) => !p.draft)
    .map((p) => {
      const t = ES_TRANSLATIONS[p.slug];
      if (!t) return p;
      return { ...p, title: t.title, description: t.description, category: t.category, readTime: t.readTime };
    });
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} locale="es" />
      <JsonLd data={collectionPageSchema({ name: "Blog", description: "Insights sobre analítica web, calidad de datos y medición privacy-first.", url: "/es/blog" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Blog", url: "/es/blog" }])} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: posts.map((post, i) => ({
          "@type": "ListItem", position: i + 1,
          url: ES_TRANSLATED_SLUGS.has(post.slug)
            ? `https://sealmetrics.com/es/blog/${post.slug}`
            : `https://sealmetrics.com/blog/${post.slug}`,
          name: post.title,
        })),
      }} />

      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <span className="eyebrow mb-5" style={{ display: "inline-flex", justifyContent: "center" }}>
            Blog
          </span>
          <h1 className="h-display mx-auto mt-5" style={{ maxWidth: "22ch" }}>
            Pensar la analítica, <em>hecha bien.</em>
          </h1>
          <p className="text-ink-soft mt-8 mx-auto max-w-[60ch] leading-[1.55]" style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}>
            Calidad de datos, atribución, regulación de privacidad y el futuro de la medición. Escrito para líderes de marketing y analítica.
          </p>
          <p className="mt-6 font-mono text-[12px] text-ink-soft uppercase tracking-[0.06em]">
            7 artículos disponibles en español · resto solo en inglés por ahora
          </p>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="space-y-0">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={ES_TRANSLATED_SLUGS.has(post.slug) ? `/es/blog/${post.slug}` : `/blog/${post.slug}`}
                className="block py-8 border-b border-warm-100 first:border-t no-underline group transition-colors hover:bg-warm-50"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_180px] gap-4 items-start px-0 lg:px-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="font-mono text-[11px] font-semibold text-brand uppercase tracking-[0.1em]">
                        {post.category}
                      </span>
                      <span className="font-mono text-[11px] text-ink-soft">{post.readTime}</span>
                    </div>
                    <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-ink mb-2 leading-[1.25] group-hover:text-brand transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-[15px] leading-[1.6] text-ink-soft max-w-[60ch]">
                      {post.description}
                    </p>
                  </div>
                  <div className="lg:text-right">
                    <time className="font-mono text-[12px] text-ink-soft tracking-[0.04em]">
                      {new Date(post.date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
                    </time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSharedV3
        locale="es"
        titleEn={<>Read more. Or skip ahead.</>}
        titleEs={<>Lee más. <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>O salta al final.</em></>}
        ledeEn="Book a demo."
        ledeEs="Los posts hacen el caso. La demo lo prueba. 30 min con el founder sobre tu propio tráfico."
      />
    </>
  );
}
