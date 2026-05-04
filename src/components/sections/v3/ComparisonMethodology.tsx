import Link from "next/link";

const COPY = {
  en: {
    eyebrow: "How we compared",
    title: "Methodology + sources",
    items: [
      {
        h: "Sources",
        b: (competitor: string) => (
          <>
            Public vendor documentation for {competitor} (pricing, feature lists, EU
            data residency statements). G2 and Capterra reviews referenced where they
            illuminate workflow differences. SealMetrics data points come from our own
            architecture and from named customer audits (
            <Link
              href="/case-studies/palladium-hotel-group"
              className="text-ink no-underline border-b border-warm-200 pb-px hover:border-ink"
            >
              Palladium Hotel Group
            </Link>
            ,{" "}
            <Link
              href="/case-studies/dreamplace-hotels"
              className="text-ink no-underline border-b border-warm-200 pb-px hover:border-ink"
            >
              Dreamplace Hotels
            </Link>
            ).
          </>
        ),
      },
      {
        h: "Pricing as of",
        b: (_c: string, dateModified: string) => (
          <>
            Pricing data is current as of <time dateTime={dateModified}>{dateModified}</time>.
            Vendor pricing changes; we review quarterly and re-anchor on every major
            competitor release. SealMetrics pricing comes from{" "}
            <Link href="/pricing" className="text-ink no-underline border-b border-warm-200 pb-px hover:border-ink">
              /pricing
            </Link>{" "}
            (single source of truth).
          </>
        ),
      },
      {
        h: "Disclosure",
        b: () => (
          <>
            SealMetrics is our product. We built this comparison to be useful even if
            you don&rsquo;t choose us — every competitor mention is verifiable against
            its public documentation. If you find a fact that&rsquo;s wrong or has
            changed, write to us and we&rsquo;ll correct it within 48 hours.
          </>
        ),
      },
      {
        h: "Update cadence",
        b: () => (
          <>
            Reviewed quarterly. Flagged for immediate update when a competitor ships a
            major change (pricing, EU hosting, attribution model). The page
            &ldquo;updated&rdquo; date below the H1 reflects the most recent edit.
          </>
        ),
      },
    ],
  },
  es: {
    eyebrow: "Cómo comparamos",
    title: "Metodología + fuentes",
    items: [
      {
        h: "Fuentes",
        b: (competitor: string) => (
          <>
            Documentación pública de {competitor} (precio, features, residencia de
            datos UE). Reviews de G2 y Capterra referenciadas cuando aclaran
            diferencias de workflow. Los datos de SealMetrics proceden de nuestra
            arquitectura y de auditorías con clientes nombrados (
            <Link
              href="/es/case-studies/palladium-hotel-group"
              className="text-ink no-underline border-b border-warm-200 pb-px hover:border-ink"
            >
              Palladium Hotel Group
            </Link>
            ,{" "}
            <Link
              href="/es/case-studies/dreamplace-hotels"
              className="text-ink no-underline border-b border-warm-200 pb-px hover:border-ink"
            >
              Dreamplace Hotels
            </Link>
            ).
          </>
        ),
      },
      {
        h: "Precio a fecha",
        b: (_c: string, dateModified: string) => (
          <>
            Datos de precio actualizados a <time dateTime={dateModified}>{dateModified}</time>.
            El precio de los vendors cambia; revisamos trimestralmente y reanclamos
            ante cada release competitiva mayor. El precio de SealMetrics viene de{" "}
            <Link href="/es/pricing" className="text-ink no-underline border-b border-warm-200 pb-px hover:border-ink">
              /es/pricing
            </Link>{" "}
            (fuente única de verdad).
          </>
        ),
      },
      {
        h: "Conflicto de interés",
        b: () => (
          <>
            SealMetrics es nuestro producto. Hemos construido esta comparativa para
            que te sea útil incluso si no nos eliges — cada mención del competidor es
            verificable contra su documentación pública. Si encuentras un dato
            incorrecto o desactualizado, escríbenos y lo corregimos en 48 horas.
          </>
        ),
      },
      {
        h: "Cadencia de actualización",
        b: () => (
          <>
            Revisado trimestralmente. Actualización inmediata cuando un competidor
            cambia algo material (precio, hosting UE, modelo de atribución). La fecha
            &ldquo;actualizado&rdquo; bajo el H1 refleja la última edición.
          </>
        ),
      },
    ],
  },
} as const;

/**
 * Trust-signal block rendered at the bottom of every /vs/* and /alternatives/*
 * page. Discloses sources, pricing date, conflict of interest, and update cadence —
 * the four signals Google's QRG and AI engines weigh when assessing comparison
 * page credibility.
 */
export function ComparisonMethodology({
  locale = "en",
  competitor,
  dateModified,
}: {
  locale?: "en" | "es";
  competitor: string;
  dateModified: string;
}) {
  const t = COPY[locale];
  return (
    <section className="py-20 bg-warm-50 border-t border-warm-100">
      <div className="max-w-[860px] mx-auto px-5 sm:px-8">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-soft font-semibold">
          {t.eyebrow}
        </span>
        <h2 className="text-[26px] sm:text-[30px] font-semibold tracking-[-0.02em] text-ink mt-3 mb-8 leading-[1.15]">
          {t.title}
        </h2>
        <dl className="space-y-6">
          {t.items.map((item) => (
            <div key={item.h} className="grid sm:grid-cols-[180px_1fr] gap-3 sm:gap-8">
              <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink font-semibold pt-1">
                {item.h}
              </dt>
              <dd className="text-[15px] leading-[1.6] text-ink-2 m-0">
                {item.b(competitor, dateModified)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
