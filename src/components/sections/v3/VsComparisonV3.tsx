import Link from "next/link";
import { Fragment } from "react";
import { FaqAccordionV3 } from "./FaqAccordionV3";
import { FinalCtaSharedV3 } from "./FinalCtaSharedV3";

type Locale = "en" | "es";

export interface VsData {
  /** Competitor name as shown in heading */
  competitor: string;
  /** Short label for H1 italic emphasis */
  hook: string;
  /** H1 wrapper (template: "SealMetrics vs {competitor}. [italic hook]") */
  eyebrow: string;
  h1: React.ReactNode;
  lede: string;
  /** 4 stat cards — competitor pain points */
  gapStats: { n: string; label: string; detail: string }[];
  /** Feature-by-feature comparison table */
  comparison: { category: string; rows: { feature: string; them: string; us: string }[] }[];
  /** FAQ */
  faqs: { q: string; a: string }[];
  ctaTitle: React.ReactNode;
  ctaLede: string;
  locale: Locale;
}

export function VsComparisonV3({ data }: { data: VsData }) {
  const { locale, competitor } = data;
  const demoHref = locale === "es" ? "/es/demo" : "/demo";
  const calcHref = locale === "es" ? "/es/data-loss-calculator" : "/data-loss-calculator";

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <span
            className="eyebrow mb-5"
            style={{ display: "inline-flex", justifyContent: "center" }}
          >
            {data.eyebrow}
          </span>
          <h1 className="h-display mx-auto mt-5" style={{ maxWidth: "22ch" }}>
            {data.h1}
          </h1>
          <p
            className="text-ink-soft mt-8 mx-auto max-w-[62ch] leading-[1.55]"
            style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}
          >
            {data.lede}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-9">
            <Link
              href={demoHref}
              className="inline-flex items-center gap-2 px-7 py-4 bg-ink text-white rounded-md text-[15px] font-semibold no-underline hover:bg-brand transition-colors"
            >
              {locale === "es" ? "Pide una demo" : "Book a demo"} →
            </Link>
            <Link
              href={calcHref}
              className="inline-flex items-center gap-2 px-7 py-4 border border-warm-200 text-ink rounded-md text-[15px] font-semibold no-underline hover:bg-warm-50 transition-colors"
            >
              {locale === "es" ? "Calcula tu pérdida de datos" : "Calculate your data loss"}
            </Link>
          </div>
          <p className="mt-4 font-mono text-[12px] text-ink-soft uppercase tracking-[0.06em]">
            {locale === "es"
              ? "Sin migración · Corre en paralelo · Decides tú"
              : "No migration · Run in parallel · You decide"}
          </p>
        </div>
      </section>

      {/* GAP STATS */}
      <section className="py-28 bg-warm-50 border-t border-warm-100">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-end mb-12">
            <div>
              <span className="eyebrow mb-5">
                {locale === "es" ? "El hueco" : "The gap"}
              </span>
              <h2 className="h-section mt-5">
                {locale === "es" ? (
                  <>Lo que <em>{competitor}</em> no cubre.</>
                ) : (
                  <>Where <em>{competitor}</em> falls short.</>
                )}
              </h2>
            </div>
            <p className="text-[18px] leading-[1.55] text-ink-soft max-w-[54ch]">
              {data.hook}
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {data.gapStats.map((s) => (
              <article
                key={s.label}
                className="bg-white border border-warm-100 rounded-xl p-6"
              >
                <div
                  className="font-semibold tracking-[-0.025em] leading-none tabular-nums mb-2"
                  style={{ fontSize: "clamp(26px, 3vw, 36px)", color: "#B5423B" }}
                >
                  {s.n}
                </div>
                <div className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.1em] text-ink-soft mb-2">
                  {s.label}
                </div>
                <p className="text-[13.5px] leading-[1.55] text-ink-2">{s.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-end mb-12">
            <div>
              <span className="eyebrow mb-5">
                {locale === "es" ? "Comparativa" : "Comparison"}
              </span>
              <h2 className="h-section mt-5">
                {locale === "es"
                  ? <>Feature a feature. <em>Sin rodeos.</em></>
                  : <>Feature by feature. <em>No spin.</em></>}
              </h2>
            </div>
            <p className="text-[18px] leading-[1.55] text-ink-soft max-w-[54ch]">
              {locale === "es"
                ? `La comparación honesta contra ${competitor}. Acepta sus fortalezas; destaca dónde queda corto para el eCommerce europeo moderno.`
                : `The honest comparison against ${competitor}. Acknowledges its strengths; clear about where it falls short for modern European eCommerce.`}
            </p>
          </div>

          <div className="bg-white border border-warm-100 rounded-xl overflow-hidden">
            <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-warm-100 bg-warm-50 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-soft font-bold">
              <div className="p-5">{locale === "es" ? "Capacidad" : "Capability"}</div>
              <div className="p-5">{competitor}</div>
              <div
                className="p-5 text-ink"
                style={{ background: "rgba(45,139,109,0.05)", borderLeft: "2px solid #2D8B6D" }}
              >
                SealMetrics
              </div>
            </div>
            {data.comparison.map((section) => (
              <Fragment key={section.category}>
                <div className="px-5 py-3 bg-warm-white border-b border-warm-100 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink font-bold">
                  {section.category}
                </div>
                {section.rows.map((row, i) => {
                  const isLastOverall =
                    i === section.rows.length - 1 &&
                    section === data.comparison[data.comparison.length - 1];
                  return (
                    <div
                      key={row.feature}
                      className={`grid grid-cols-[1.4fr_1fr_1fr] items-center ${
                        isLastOverall ? "" : "border-b border-warm-100"
                      }`}
                    >
                      <div className="p-4 md:p-5 text-[14px] text-ink font-semibold leading-[1.4]">
                        {row.feature}
                      </div>
                      <div className="p-4 md:p-5 text-[13.5px] text-ink-soft leading-[1.5]">
                        {row.them}
                      </div>
                      <div
                        className="p-4 md:p-5 text-[13.5px] text-ink leading-[1.5] font-medium"
                        style={{
                          background: "rgba(45,139,109,0.04)",
                          borderLeft: "2px solid #2D8B6D",
                        }}
                      >
                        {row.us}
                      </div>
                    </div>
                  );
                })}
              </Fragment>
            ))}
          </div>

          <div className="mt-6 p-6 bg-warm-50 border border-warm-100 rounded-xl text-center text-[15px] text-ink-2 leading-[1.55]">
            <b className="text-ink font-semibold">
              {locale === "es"
                ? `No es "${competitor} está roto".`
                : `Not "${competitor} is broken".`}
            </b>{" "}
            {locale === "es"
              ? "Funciona para su caso de uso original. Para decidir con datos completos en el contexto europeo actual, se queda corto. "
              : "It works for its original use case. For deciding with complete data in today's European context, it falls short. "}
            <em className="italic-accent">
              {locale === "es" ? "Corre ambos 30 días y decide." : "Run both 30 days and decide."}
            </em>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordionV3
        locale={locale}
        items={data.faqs}
        eyebrow="FAQ"
        titleEn={<>The <em>objections</em>, answered.</>}
        titleEs={<>Las <em>objeciones</em>, respondidas.</>}
        ledeEn={`What CMOs and CTOs ask before switching from ${competitor}.`}
        ledeEs={`Lo que CMOs y CTOs preguntan antes de cambiar desde ${competitor}.`}
      />

      {/* FINAL CTA */}
      <FinalCtaSharedV3
        locale={locale}
        titleEn={data.ctaTitle}
        titleEs={data.ctaTitle}
        ledeEn={data.ctaLede}
        ledeEs={data.ctaLede}
      />
    </>
  );
}
