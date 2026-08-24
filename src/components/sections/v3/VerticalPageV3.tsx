import Link from "next/link";
import { FaqAccordionV3 } from "./FaqAccordionV3";
import { FinalCtaSharedV3 } from "./FinalCtaSharedV3";
import { PRICING, fmtPrice } from "@/lib/content/pricing";

type Locale = "en" | "es";

export interface VerticalPageData {
  /** Eyebrow shown above H1 (e.g. "For CMOs", "For Hotels") */
  eyebrow: string;
  /** Full H1 — use <em>…</em> around italic emphasis */
  h1: React.ReactNode;
  /** 1-2 sentences, max ~30 words */
  lede: string;
  /** 3-4 pains this audience has (the "problem cards") */
  pains: { title: string; desc: string }[];
  /** 3-4 outcomes Sealmetrics delivers for them */
  outcomes: { n: string; label: string; detail: string }[];
  /** One killer quote, optional */
  quote?: { text: string; cite: string };
  /** 4-6 FAQ items */
  faqs: { q: string; a: string }[];
  /** Final CTA copy */
  ctaTitle: React.ReactNode;
  ctaLede: string;
  /** Locale-specific demo/pricing/calc paths */
  locale: Locale;
}

export function VerticalPageV3({
  data,
  featured,
}: {
  data: VerticalPageData;
  /** Optional section rendered between Outcomes and Quote (e.g. featured case studies) */
  featured?: React.ReactNode;
}) {
  const { locale } = data;
  const demoHref = locale === "es" ? "/es/demo" : "/demo";
  const pricingHref = locale === "es" ? "/es/pricing" : "/pricing";
  const anchorPrice = fmtPrice(PRICING.growth.annual, locale);
  // Price anchor in the hero: against GA360/Adobe's opaque "contact sales",
  // showing the number early is the competitive advantage — see
  // PRD-CONVERSION-REDESIGN.md §3 finding 7.
  const micro =
    locale === "es"
      ? `Desde ${anchorPrice}/mes facturación anual · Prueba de 14 días · Alojado en UE`
      : `From ${anchorPrice}/mo billed annually · 14-day trial · EU-hosted`;

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
          {/* No CTA pair here on purpose: persona pages build the case first
              (pains → outcomes) and ask after — CLAUDE.md rule 16. The header
              carries the persistent "Book a Demo"; the hero keeps only the
              price anchor. First on-page CTA lives right after Outcomes. */}
          <p className="mt-8 font-mono text-[12px] text-ink-soft uppercase tracking-[0.06em]">
            <Link href={pricingHref} className="text-ink-soft no-underline border-b border-warm-200 pb-0.5 hover:text-ink transition-colors">
              {micro}
            </Link>
          </p>
        </div>
      </section>

      {/* PAINS */}
      <section className="py-28 bg-warm-50 border-t border-warm-100">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-end mb-12">
            <div>
              <span className="eyebrow mb-5">
                {locale === "es" ? "El dolor" : "The pain"}
              </span>
              <h2 className="h-section mt-5">
                {locale === "es"
                  ? <>Lo que <em>te quita el sueño.</em></>
                  : <>What <em>keeps you up at night.</em></>}
              </h2>
            </div>
            <p className="text-[18px] leading-[1.55] text-ink-soft max-w-[54ch]">
              {locale === "es"
                ? "Los problemas reales que nos mencionan una y otra vez. Si te identificas con dos o más, Sealmetrics encaja."
                : "The real problems we hear again and again. If two or more ring true, Sealmetrics fits."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.pains.map((p) => (
              <article
                key={p.title}
                className="bg-white border border-warm-100 rounded-xl p-7"
              >
                <h3 className="text-[17px] font-semibold tracking-[-0.015em] text-ink leading-[1.25] mb-3">
                  {p.title}
                </h3>
                <p className="text-[14.5px] leading-[1.6] text-ink-soft">
                  {p.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-end mb-12">
            <div>
              <span className="eyebrow mb-5">
                {locale === "es" ? "El resultado" : "The outcome"}
              </span>
              <h2 className="h-section mt-5">
                {locale === "es"
                  ? <>Lo que <em>cambia</em> con Sealmetrics.</>
                  : <>What <em>changes</em> with Sealmetrics.</>}
              </h2>
            </div>
            <p className="text-[18px] leading-[1.55] text-ink-soft max-w-[54ch]">
              {locale === "es"
                ? "Resultados medibles, no promesas vagas. Lo que equipos como el tuyo consiguen en el primer trimestre."
                : "Measurable outcomes, not vague promises. What teams like yours achieve in the first quarter."}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {data.outcomes.map((o) => (
              <article
                key={o.label}
                className="bg-white border border-warm-100 rounded-xl p-6"
              >
                <div
                  className="font-semibold tracking-[-0.025em] leading-none tabular-nums text-ink mb-2"
                  style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
                >
                  {o.n}
                </div>
                <div className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.1em] text-brand mb-2">
                  {o.label}
                </div>
                <p className="text-[13.5px] leading-[1.55] text-ink-soft">
                  {o.detail}
                </p>
              </article>
            ))}
          </div>

          {/* First on-page CTA — placed after the outcomes, where the case
              has been made, per CLAUDE.md rule 16. */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href={demoHref}
                className="inline-flex items-center gap-2 px-7 py-4 bg-ink text-white rounded-md text-[15px] font-semibold no-underline hover:bg-brand transition-colors"
              >
                {locale === "es" ? "Reserva una demo" : "Book a demo"} →
              </Link>
              <a
                href="https://my.sealmetrics.com/register"
                className="inline-flex items-center gap-2 px-7 py-4 border border-warm-200 text-ink rounded-md text-[15px] font-semibold no-underline hover:bg-warm-50 transition-colors"
              >
                {locale === "es" ? "Prueba de 14 días" : "Start 14-day trial"}
              </a>
            </div>
            <p className="font-mono text-[12px] text-ink-soft uppercase tracking-[0.06em]">
              {micro}
            </p>
          </div>
        </div>
      </section>

      {/* OPTIONAL FEATURED SLOT (e.g. case studies) — rendered between Outcomes and Quote */}
      {featured}

      {/* QUOTE (optional) */}
      {data.quote && (
        <section className="py-28 bg-warm-50 border-t border-warm-100">
          <div className="max-w-[1000px] mx-auto px-5 sm:px-10">
            <div
              className="bg-white rounded-xl p-10 md:p-12"
              style={{ borderLeft: "3px solid #2E5C8A" }}
            >
              <div
                className="text-[72px] leading-[0.5] h-6 font-semibold"
                style={{ color: "#2D8B6D" }}
              >
                &ldquo;
              </div>
              <blockquote
                className="font-medium leading-[1.35] tracking-[-0.015em] text-ink mt-5"
                style={{ fontSize: "clamp(22px, 2.4vw, 30px)" }}
              >
                {data.quote.text}
              </blockquote>
              <cite className="block mt-6 not-italic font-mono text-[12px] uppercase tracking-[0.08em] text-ink-soft font-semibold">
                {data.quote.cite}
              </cite>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <FaqAccordionV3
        locale={locale}
        items={data.faqs}
        eyebrow="FAQ"
        titleEn={
          locale === "en" ? <>Questions before you <em>book a demo.</em></> : undefined
        }
        titleEs={
          locale === "es" ? <>Preguntas antes de <em>pedir una demo.</em></> : undefined
        }
        bgClass="bg-white"
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
