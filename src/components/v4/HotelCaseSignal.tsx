import Link from "next/link";
import { JsonLd } from "@/components/ui/JsonLd";
import { getHotelCase, type HotelCaseLocale, type HotelCaseSlug } from "@/lib/content/hotel-cases";
import { articleSchema, breadcrumbSchema, casePersonSchema, collectionPageSchema, itemListSchema, quotationSchema, reviewSchema, statisticClaimSchema } from "@/lib/schema";

function Arrow() { return <span aria-hidden="true">↗</span>; }

export function HotelCaseSignal({ slug, locale }: { slug: HotelCaseSlug; locale: HotelCaseLocale }) {
  const c = getHotelCase(slug, locale);
  const prefix = locale === "es" ? "/es" : "";
  const casesLabel = locale === "es" ? "Casos de éxito" : "Case studies";
  const route = `${prefix}/case-studies/${slug}`;
  const otherSlug = slug === "palladium-hotel-group" ? "dreamplace-hotels" : "palladium-hotel-group";
  return <>
    <JsonLd data={breadcrumbSchema([{ name: casesLabel, url: `${prefix}/case-studies` }, { name: c.client, url: route }], locale)} />
    <JsonLd data={casePersonSchema({ name:c.person, jobTitle:c.role, worksForName:c.client, worksForUrl:c.companyUrl, caseUrl:route, caseName:c.title })} />
    <JsonLd data={articleSchema({ headline:c.title, description:c.description, datePublished:"2026-04-15", dateModified:"2026-04-15", url:route, category:casesLabel, author:{ name:"SealMetrics", url:`${prefix}/about` }, image:"https://sealmetrics.com/og-image.png" })} />
    {c.metrics.map(metric => <JsonLd key={metric.label} data={statisticClaimSchema({ text:`${metric.value} — ${metric.label}. ${metric.note}`, source:c.sourceText, sourceAuthor:c.client, sourceDate:"2026-04-15", url:route, numericValue:metric.numericValue, unit:"PERCENT" })} />)}
    <JsonLd data={quotationSchema({ text:c.quote, spokenBy:c.person, spokenByRole:`${c.role} · ${c.client}`, url:route })} />
    <JsonLd data={quotationSchema({ text:c.secondQuote, spokenBy:c.person, spokenByRole:`${c.role} · ${c.client}`, url:route })} />
    <JsonLd data={reviewSchema({ reviewBody:c.quote, authorName:c.person, authorRole:`${c.role} · ${c.client}`, datePublished:"2026-04-15" })} />

    <main className="sig-case-page">
      <section className="sig-case-hero">
        <nav className="sig-case-breadcrumbs" aria-label="Breadcrumb"><Link href={`${prefix}/`}>{locale === "es" ? "Inicio" : "Home"}</Link><span>/</span><Link href={`${prefix}/case-studies/`}>{casesLabel}</Link><span>/</span><span>{c.client}</span></nav>
        <div className="sig-case-hero-grid">
          <div><img src={c.logo} alt={c.client} className="sig-case-logo" /><p className="sig-case-eyebrow"><span>{c.eyebrow}</span></p><h1>{c.hero}</h1><p className="sig-case-hero-body">{c.heroBody}</p></div>
          <aside className="sig-case-file"><div className="sig-case-module-top"><span>CASE FILE</span><span>VERIFIED · 2026</span></div>{c.meta.map(([label,value],index)=><div key={label}><span>0{index+1}</span><strong>{label}</strong><b>{value}</b></div>)}<p>{c.sourceLabel} · {c.sourceText}</p></aside>
        </div>
      </section>

      <section className="sig-case-metrics"><div className="sig-case-metric-grid">{c.metrics.map((metric,index)=><article key={metric.label}><span>0{index+1}</span><strong>{metric.value}</strong><h2>{metric.label}</h2><p>{metric.note}</p></article>)}</div></section>

      <section className="sig-case-problem"><div className="sig-case-section-head"><h2>{c.problemTitle}</h2><div>{c.problemBody.map(body=><p key={body}>{body}</p>)}</div></div><blockquote><p>“{c.quote}”</p><cite>{c.person} · {c.role} · {c.client}</cite></blockquote></section>

      <section className="sig-case-method"><div className="sig-case-section-head"><div><p className="sig-case-tag">{locale === "es" ? "Método" : "Method"}</p><h2>{c.methodTitle}</h2></div><p>{c.methodBody}</p></div><ol>{c.steps.map(([number,title,body])=><li key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol></section>

      <section className="sig-case-result"><div><p className="sig-case-tag">{locale === "es" ? "Resultado" : "Result"}</p><h2>{c.resultTitle}</h2>{c.resultBody.map(body=><p key={body}>{body}</p>)}</div><aside><span>{c.resultSignal}</span><strong>{c.resultLabel}</strong><p>{c.sourceText}</p></aside></section>

      <section className="sig-case-quote"><blockquote><p>“{c.secondQuote}”</p><cite>{c.person} · {c.role} · {c.client}</cite></blockquote></section>

      <section className="sig-case-final"><p className="sig-case-tag">{locale === "es" ? "Compara con tu dato" : "Compare with your data"}</p><h2>{c.ctaTitle}</h2><p>{c.ctaBody}</p><div className="sig-case-actions"><Link className="sig-case-button" href={`${prefix}/demo/`}>{c.ctaPrimary}<Arrow /></Link><Link className="sig-case-link" href={`${prefix}/case-studies/${otherSlug}/`}>{c.ctaSecondary} <Arrow /></Link></div></section>
    </main>
  </>;
}

export function CaseStudyIndexSignal({ locale }: { locale: HotelCaseLocale }) {
  const prefix = locale === "es" ? "/es" : "";
  const cases = (["palladium-hotel-group", "dreamplace-hotels"] as const).map(slug => ({ slug, data:getHotelCase(slug, locale) }));
  const label = locale === "es" ? "Casos de éxito" : "Case studies";
  const title = locale === "es" ? <>Equipos reales.<br/>Números <em>que se pueden defender.</em></> : <>Real teams.<br/>Numbers <em>worth defending.</em></>;
  const intro = locale === "es" ? "Dos grupos hoteleros han publicado las brechas que encontraron, el método que aplicaron y las decisiones que cambiaron. Clientes con nombre, cifras contrastables y contexto operativo." : "Two hotel groups have published the gaps they found, the method they applied and the decisions that changed. Named clients, inspectable figures and operating context.";
  return <>
    <JsonLd data={breadcrumbSchema([{ name:label, url:`${prefix}/case-studies` }], locale)} />
    <JsonLd data={collectionPageSchema({ name:label, description:intro, url:`${prefix}/case-studies` })} />
    <JsonLd data={itemListSchema({ name:`SealMetrics ${label}`, description:intro, url:`${prefix}/case-studies`, items:cases.map(({slug,data})=>({ name:data.client, url:`https://sealmetrics.com${prefix}/case-studies/${slug}/` })) })} />
    {cases.map(({data})=><JsonLd key={data.client} data={reviewSchema({ reviewBody:data.quote, authorName:data.person, authorRole:`${data.role} · ${data.client}` })} />)}
    <main className="sig-case-page sig-case-index">
      <section className="sig-case-index-hero"><nav className="sig-case-breadcrumbs" aria-label="Breadcrumb"><Link href={`${prefix}/`}>{locale === "es" ? "Inicio" : "Home"}</Link><span>/</span><span>{label}</span></nav><p className="sig-case-eyebrow"><span>{label}</span></p><h1>{title}</h1><p>{intro}</p></section>
      <section className="sig-case-index-list">{cases.map(({slug,data},index)=><Link key={slug} href={`${prefix}/case-studies/${slug}/`} className="sig-case-index-card"><div className="sig-case-index-card-top"><span>0{index+1} · {data.eyebrow}</span><Arrow /></div><img src={data.logo} alt={data.client}/><h2>{data.hero}</h2><div className="sig-case-index-stats">{data.metrics.slice(0,2).map(metric=><p key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></p>)}</div><blockquote>“{data.quote}”<cite>{data.person} · {data.role}</cite></blockquote></Link>)}</section>
      <section className="sig-case-final"><p className="sig-case-tag">{locale === "es" ? "Tu comparación" : "Your comparison"}</p><h2>{locale === "es" ? <>Contrasta tu stack<br/><em>contra el total real.</em></> : <>Test your stack<br/><em>against the real total.</em></>}</h2><p>{locale === "es" ? "Mide en paralelo sin retirar la analítica actual y localiza la diferencia sobre tu propio tráfico e ingresos." : "Measure in parallel without removing the current analytics and locate the difference on your own traffic and revenue."}</p><div className="sig-case-actions"><Link className="sig-case-button" href={`${prefix}/demo/`}>{locale === "es" ? "Reserva una revisión" : "Book a measurement review"}<Arrow /></Link></div></section>
    </main>
  </>;
}
