import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { TldrBlock } from "@/components/ui/TldrBlock";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { FaqAccordionV3 } from "@/components/sections/v3/FaqAccordionV3";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";

export const metadata: Metadata = {
  title: "Security & Compliance — SealMetrics",
  description: "EU-hosted in Dublin. Zero personal data collection. GDPR-compliant by architecture, not by a compliance layer bolted on afterwards.",
  alternates: { canonical: "https://sealmetrics.com/security", languages: getAlternates("/security") },
};

const faqs = [
  { q: "Where is data processed and stored?", a: "Dublin, Ireland. Single EU region. No failover to third countries. No sub-processors outside the EU." },
  { q: "Does SealMetrics fall under GDPR?", a: "No. GDPR applies to processing of personal data. SealMetrics doesn't process personal data — no cookies, no identifiers, no fingerprinting. Outside GDPR material scope." },
  { q: "Do you sign DPAs?", a: "Yes. Standard DPA with every plan. Enterprise plans support custom DPA negotiation for regulated industries." },
  { q: "What security documentation can you provide?", a: "DPA, architecture diagrams and vendor security questionnaire (TPSR) available under NDA during procurement review." },
  { q: "What happens in a security incident?", a: "Customers notified within 4 hours. Public report within 72 hours. Full post-mortem within 7 days. Status at status.sealmetrics.com." },
  { q: "Vendor security questionnaires?", a: "Pre-built TPSR package with all questionnaires, certificates and architecture diagrams. Cuts vendor review from months to weeks." },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Security" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Security", url: "/security" }])} />
      <JsonLd data={faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))} />

      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <span className="eyebrow mb-5" style={{ display: "inline-flex", justifyContent: "center" }}>Security & compliance</span>
          <h1 className="h-display mx-auto mt-5" style={{ maxWidth: "22ch" }}>Compliant <em>by architecture.</em></h1>
          <p className="text-ink-soft mt-8 mx-auto max-w-[62ch] leading-[1.55]" style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}>
            EU-hosted in Dublin. Zero personal data collection. Zero sub-processors outside the EU. Your compliance team signs off in one meeting — not three.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-9">
            <Link href="/demo" className="inline-flex items-center gap-2 px-7 py-4 bg-ink text-white rounded-md text-[15px] font-semibold no-underline hover:bg-brand transition-colors">
              Request compliance pack →
            </Link>
          </div>
        </div>
      </section>

      <TldrBlock
        answer={
          <>SealMetrics is <strong>GDPR-compliant by architecture</strong> — not by a compliance layer added on top. No cookies, no personal identifiers, no fingerprinting. All processing happens in Dublin, Ireland, on EU-owned infrastructure with zero sub-processors outside the EU. That places SealMetrics outside the material scope of GDPR and ePrivacy for most eCommerce use cases.</>
        }
        bullets={[
          <>EU-hosted in Dublin, single region, no third-country transfers (Schrems II clean).</>,
          <>Standard DPA with every plan; TPSR (Third-Party Security Review) package pre-built.</>,
          <>Zero personal data stored — compliance team signs off in one meeting, not three.</>,
        ]}
      />

      <section className="py-28 bg-warm-50 border-t border-warm-100">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-end mb-12">
            <div>
              <span className="eyebrow mb-5">Certifications</span>
              <h2 className="h-section mt-5">All the <em>paperwork.</em> None of the excuses.</h2>
            </div>
            <p className="text-[18px] leading-[1.55] text-ink-soft max-w-[54ch]">
              Every certification and framework your compliance team looks for — certified, audited, available under NDA during procurement review.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { name: "GDPR", desc: "Compliant by architecture — outside material scope." },
              { name: "ePrivacy", desc: "No cookies, no localStorage — directive doesn't apply." },
              { name: "Schrems II", desc: "Zero transfers outside EU. No SCCs needed." },
              { name: "EU-hosted · Dublin", desc: "Single region. No failover to third countries." },
              { name: "DPA included", desc: "Standard DPA with every plan. Custom DPA on Enterprise." },
              { name: "TPSR package", desc: "Vendor security questionnaire pre-built for procurement review." },
            ].map((c) => (
              <article key={c.name} className="bg-white border border-warm-100 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-brand" />
                  <h3 className="text-[17px] font-semibold text-ink tracking-[-0.015em]">{c.name}</h3>
                </div>
                <p className="text-[13.5px] leading-[1.6] text-ink-soft">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-end mb-12">
            <div>
              <span className="eyebrow mb-5">Data flow</span>
              <h2 className="h-section mt-5">From visitor to dashboard. <em>All inside Ireland.</em></h2>
            </div>
            <p className="text-[18px] leading-[1.55] text-ink-soft max-w-[54ch]">
              Every byte of data stays within the EU. No third-country transfers, no sub-processors, no hidden dependencies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {[
              { n: "01 · Collect", t: "First-party pixel", p: "Your domain. No cookies. No localStorage. No identifiers. Zero personal data on the device." },
              { n: "02 · Transit", t: "Encrypted TLS 1.3", p: "Direct-to-server with PFS. No third-party CDN for analytics traffic." },
              { n: "03 · Process", t: "EU-only servers", p: "Dublin region. Isolated VPC. Anonymous event counting with no personal identifiers ever stored." },
              { n: "04 · Store", t: "Encrypted at rest", p: "AES-256. Dublin region. 24-month retention. No third-country replication." },
            ].map((s) => (
              <div key={s.n} className="bg-warm-50 border border-warm-100 rounded-xl p-6">
                <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-brand mb-3">{s.n}</div>
                <h4 className="text-[17px] font-semibold tracking-[-0.015em] text-ink mb-2">{s.t}</h4>
                <p className="text-[13.5px] leading-[1.55] text-ink-soft">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordionV3
        locale="en"
        items={faqs}
        eyebrow="FAQ"
        titleEn={<>The <em>compliance questions</em>, answered.</>}
        ledeEn="What DPOs, CISOs and procurement teams ask. If your team has something else, we'll answer it in the walkthrough."
      />
      <FinalCtaSharedV3
        locale="en"
        titleEn={<>Get the <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>full compliance pack.</em></>}
        titleEs={<>Recibe el <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>pack compliance completo.</em></>}
        ledeEn="30 minutes with our compliance lead. Architecture, DPA, Schrems II stance, TPSR — walked through with your legal team."
        ledeEs="30 min con nuestro lead de compliance. Arquitectura, DPA, postura Schrems II, TPSR — revisado con tu equipo legal."
      />
    </>
  );
}
