import Link from "next/link";
import { JsonLd } from "@/components/ui/JsonLd";
import { caseStudyOrder, getCaseStudy, nextCaseStudy, type CaseStudyLocale, type CaseStudySlug, type EvidenceBlock } from "@/lib/content/case-studies";
import { articleSchema, breadcrumbSchema, casePersonSchema, collectionPageSchema, itemListSchema, quotationSchema, reviewSchema, statisticClaimSchema } from "@/lib/schema";

/**
 * Intrinsic dimensions from each SVG's viewBox. CSS still sets the rendered
 * size (`.sig-case-logo`, `.sig-case-index-card>img`); these attributes only
 * give the browser an aspect ratio to reserve before the SVG arrives, which is
 * what keeps CLS at 0.
 */
const LOGO_BOX: Record<string, { width: number; height: number }> = {
  "/logos/clients/palladium-dark.svg": { width: 200, height: 60 },
  "/logos/clients/dreamplace.svg": { width: 260, height: 60 },
  "/logos/clients/incapto.svg": { width: 856, height: 198 },
};
const logoBox = (src: string) => LOGO_BOX[src] ?? { width: 260, height: 60 };


function Arrow() { return <span aria-hidden="true">↗</span>; }

/** "https://www.incapto.com/" -> "incapto.com". The bare host reads as an
    identity rather than a URL, and the arrow already says it leaves the site. */
const displayHost = (url: string) => url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");


/**
 * Renders one evidence block. Widths come from the data as percentages of the
 * block's own maximum, so a bar is always read against the row beside it and
 * never against an absolute scale that does not exist.
 */
function Evidence({ block }: { block: EvidenceBlock }) {
  return (
    <article className="sig-case-ev">
      <p className="sig-case-ev-n">{block.number}</p>
      <h2>{block.title}</h2>
      <p className="sig-case-ev-cap">{block.caption}</p>

      {block.kind === "reconcile" && (
        <div className="sig-case-ev-reconcile">
          {block.panels.map(panel => (
            <div key={panel.label}>
              <strong>{panel.value}</strong>
              <div className="sig-case-ev-meter" role="img" aria-label={`${panel.value} ${panel.label}`}>
                <span style={{ width: `${panel.percent}%` }} />
              </div>
              <p>{panel.label}</p>
            </div>
          ))}
        </div>
      )}

      {block.kind === "bars" && (
        <div className="sig-case-ev-bars">
          {block.rows.map(row => (
            <div key={row.name} className="sig-case-ev-bar">
              <span className="sig-case-ev-name">{row.name}</span>
              <div className="sig-case-ev-track">
                {/* A bar too narrow to hold its own label keeps the small
                    type; the wide ones carry the figure at display size. */}
                <span className={`sig-case-ev-fill is-${row.tone}`} data-small={row.percent < 15 ? "" : undefined} style={{ width: `${row.percent}%` }}>
                  <b>{row.display}</b>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {block.kind === "channels" && (
        <div className="sig-case-ev-channels">
          {block.rows.map(row => (
            <div key={row.name} className="sig-case-ev-ch">
              <span className="sig-case-ev-name">{row.name}</span>
              <div className="sig-case-ev-track">
                <span
                  className={`sig-case-ev-fill ${row.offset === undefined ? "is-seal" : "is-range"}`}
                  style={{ width: `${row.percent}%`, marginLeft: row.offset === undefined ? undefined : `${row.offset}%` }}
                />
              </div>
              <b className="sig-case-ev-val">{row.display}</b>
            </div>
          ))}
        </div>
      )}

      {block.kind === "mix" && (
        <div className="sig-case-ev-mix">
          {block.bars.map((bar, index) => (
            <div key={bar.name} className="sig-case-ev-mixrow">
              {index === block.bars.length - 1 && <p className="sig-case-ev-mixnote">{block.note}</p>}
              <p className="sig-case-ev-name is-block">{bar.name}</p>
              <div className="sig-case-ev-stack">
                {bar.segments.map(segment => (
                  <span key={segment.key} className={`is-${segment.key}`} style={{ width: `${segment.percent}%` }}>
                    {segment.display}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <ul className="sig-case-ev-legend">
            {block.legend.map(([key, label]) => (
              <li key={key}><i className={`is-${key}`} aria-hidden="true" />{label}</li>
            ))}
          </ul>
        </div>
      )}

      <p className="sig-case-ev-body">{block.body}</p>
    </article>
  );
}

export function CaseStudySignal({ slug, locale }: { slug: CaseStudySlug; locale: CaseStudyLocale }) {
  const c = getCaseStudy(slug, locale);
  const prefix = locale === "es" ? "/es" : "";
  const casesLabel = locale === "es" ? "Casos de éxito" : "Case studies";
  const route = `${prefix}/case-studies/${slug}`;
  const otherSlug = nextCaseStudy(slug);
  return <>
    <JsonLd data={breadcrumbSchema([{ name: casesLabel, url: `${prefix}/case-studies` }, { name: c.client, url: route }], locale)} />
    <JsonLd data={casePersonSchema({ name:c.person, jobTitle:c.role, worksForName:c.client, worksForUrl:c.companyUrl, caseUrl:route, caseName:c.title })} />
    <JsonLd data={articleSchema({ headline:c.title, description:c.description, datePublished:c.datePublished, dateModified:c.datePublished, url:route, category:casesLabel, author:{ name:"Sealmetrics", url:`${prefix}/about` }, image:"https://sealmetrics.com/og-image.png" })} />
    {c.metrics.map(metric => <JsonLd key={metric.label} data={statisticClaimSchema({ text:`${metric.value} — ${metric.label}. ${metric.note}`, source:c.sourceText, sourceAuthor:c.client, sourceDate:c.datePublished, url:route, numericValue:metric.numericValue, unit:"PERCENT" })} />)}
    <JsonLd data={quotationSchema({ text:c.quote, spokenBy:c.person, spokenByRole:`${c.role} · ${c.client}`, url:route })} />
    {c.secondQuote && <JsonLd data={quotationSchema({ text:c.secondQuote, spokenBy:c.person, spokenByRole:`${c.role} · ${c.client}`, url:route })} />}
    <JsonLd data={reviewSchema({ reviewBody:c.quote, authorName:c.person, authorRole:`${c.role} · ${c.client}`, datePublished:c.datePublished })} />

    <main className="sig-case-page">
      <section className="sig-case-hero">
        <nav className="sig-case-breadcrumbs" aria-label="Breadcrumb"><Link href={`${prefix}/`}>{locale === "es" ? "Inicio" : "Home"}</Link><span>/</span><Link href={`${prefix}/case-studies/`}>{casesLabel}</Link><span>/</span><span>{c.client}</span></nav>
        <div className="sig-case-hero-grid">
          <div><img src={c.logo} alt={c.client} className="sig-case-logo" width={logoBox(c.logo).width} height={logoBox(c.logo).height} /><p className="sig-case-eyebrow"><span>{c.eyebrow}</span></p><h1>{c.hero}</h1><p className="sig-case-hero-body">{c.heroBody}</p><a className="sig-case-site" href={c.companyUrl} target="_blank" rel="noopener noreferrer">{displayHost(c.companyUrl)} <Arrow /></a></div>
          <aside className="sig-case-file"><div className="sig-case-module-top"><span>CASE FILE</span><span>VERIFIED · 2026</span></div>{c.meta.map(([label,value],index)=><div key={label}><span>0{index+1}</span><strong>{label}</strong><b>{value}</b></div>)}<p>{c.sourceLabel} · {c.sourceText}</p></aside>
        </div>
      </section>

      <section className="sig-case-metrics"><div className="sig-case-metric-grid">{c.metrics.map((metric,index)=><article key={metric.label}><span>0{index+1}</span><strong>{metric.value}</strong><h2>{metric.label}</h2><p>{metric.note}</p></article>)}</div></section>

      <section className="sig-case-problem"><div className="sig-case-section-head"><h2>{c.problemTitle}</h2><div>{c.problemBody.map(body=><p key={body}>{body}</p>)}</div></div><blockquote><p>“{c.quote}”</p><cite>{c.person} · {c.role} · {c.client}</cite></blockquote></section>

      {c.evidence && <section className="sig-case-evidence">{c.evidence.map(block => <Evidence key={block.number} block={block} />)}</section>}

      <section className="sig-case-method"><div className="sig-case-section-head"><div><p className="sig-case-tag">{locale === "es" ? "Método" : "Method"}</p><h2>{c.methodTitle}</h2></div><p>{c.methodBody}</p></div><ol>{c.steps.map(([number,title,body])=><li key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol></section>

      <section className="sig-case-result"><div><p className="sig-case-tag">{locale === "es" ? "Resultado" : "Result"}</p><h2>{c.resultTitle}</h2>{c.resultBody.map(body=><p key={body}>{body}</p>)}</div><aside><span>{c.resultSignal}</span><strong>{c.resultLabel}</strong><p>{c.sourceText}</p></aside></section>

      {c.limits && <section className="sig-case-limits"><div><p className="sig-case-tag">{c.limits.tag}</p><h2>{c.limits.title}</h2><p>{c.limits.body}</p></div></section>}

      {c.secondQuote && <section className="sig-case-quote"><blockquote><p>“{c.secondQuote}”</p><cite>{c.person} · {c.role} · {c.client}</cite></blockquote></section>}

      {c.notes && <section className="sig-case-notes"><p className="sig-case-tag">{c.notes.tag}</p><ul>{c.notes.items.map((item, index) => <li key={index}>{item}</li>)}</ul></section>}

      <section className="sig-case-final"><p className="sig-case-tag">{locale === "es" ? "Compara con tu dato" : "Compare with your data"}</p><h2>{c.ctaTitle}</h2><p>{c.ctaBody}</p><div data-md="skip" className="sig-case-actions"><Link className="sig-case-button" href={`${prefix}/demo/`}>{c.ctaPrimary}<Arrow /></Link><Link className="sig-case-link" href={`${prefix}/case-studies/${otherSlug}/`}>{c.ctaSecondary} <Arrow /></Link></div></section>
    </main>
  </>;
}

export function CaseStudyIndexSignal({ locale }: { locale: CaseStudyLocale }) {
  const prefix = locale === "es" ? "/es" : "";
  const cases = caseStudyOrder.map(slug => ({ slug, data:getCaseStudy(slug, locale) }));
  const label = locale === "es" ? "Casos de éxito" : "Case studies";
  const title = locale === "es" ? <>Equipos reales.<br/>Números <em>que se pueden defender.</em></> : <>Real teams.<br/>Numbers <em>worth defending.</em></>;
  const intro = locale === "es" ? "Dos grupos hoteleros y un eCommerce han publicado las brechas que encontraron, el método que aplicaron y las decisiones que cambiaron. Clientes con nombre, cifras contrastables y contexto operativo." : "Two hotel groups and one eCommerce brand have published the gaps they found, the method they applied and the decisions that changed. Named clients, inspectable figures and operating context.";
  return <>
    <JsonLd data={breadcrumbSchema([{ name:label, url:`${prefix}/case-studies` }], locale)} />
    <JsonLd data={collectionPageSchema({ name:label, description:intro, url:`${prefix}/case-studies` })} />
    <JsonLd data={itemListSchema({ name:`Sealmetrics ${label}`, description:intro, url:`${prefix}/case-studies`, items:cases.map(({slug,data})=>({ name:data.client, url:`https://sealmetrics.com${prefix}/case-studies/${slug}/` })) })} />
    {cases.map(({data})=><JsonLd key={data.client} data={reviewSchema({ reviewBody:data.quote, authorName:data.person, authorRole:`${data.role} · ${data.client}` })} />)}
    <main className="sig-case-page sig-case-index">
      <section className="sig-case-index-hero"><nav className="sig-case-breadcrumbs" aria-label="Breadcrumb"><Link href={`${prefix}/`}>{locale === "es" ? "Inicio" : "Home"}</Link><span>/</span><span>{label}</span></nav><p className="sig-case-eyebrow"><span>{label}</span></p><h1>{title}</h1><p>{intro}</p></section>
      <section className="sig-case-index-list">{cases.map(({slug,data},index)=><Link key={slug} href={`${prefix}/case-studies/${slug}/`} className="sig-case-index-card"><div className="sig-case-index-card-top"><span>0{index+1} · {data.eyebrow}</span><Arrow /></div><img src={data.logo} alt={data.client} width={logoBox(data.logo).width} height={logoBox(data.logo).height}/><h2>{data.hero}</h2><div className="sig-case-index-stats">{data.metrics.slice(0,2).map(metric=><p key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></p>)}</div><blockquote>“{data.quote}”<cite>{data.person} · {data.role}</cite></blockquote></Link>)}</section>
      <section className="sig-case-final"><p className="sig-case-tag">{locale === "es" ? "Tu comparación" : "Your comparison"}</p><h2>{locale === "es" ? <>Contrasta tu stack<br/><em>contra el total real.</em></> : <>Test your stack<br/><em>against the real total.</em></>}</h2><p>{locale === "es" ? "Mide en paralelo sin retirar la analítica actual y localiza la diferencia sobre tu propio tráfico e ingresos." : "Measure in parallel without removing the current analytics and locate the difference on your own traffic and revenue."}</p><div data-md="skip" className="sig-case-actions"><Link className="sig-case-button" href={`${prefix}/demo/`}>{locale === "es" ? "Reserva una revisión" : "Book a measurement review"}<Arrow /></Link></div></section>
    </main>
  </>;
}
