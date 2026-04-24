import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { RelatedReading } from "@/components/ui/RelatedReading";

export const metadata: Metadata = {
  title: "Consentless Analytics for DTC: What It Is and Why It Matters in 2026",
  description:
    "Consentless analytics counts 100% of your DTC traffic without a cookie banner — anonymously, at channel level. How it works, why it's compliant, and what European DTC teams get from it.",
  openGraph: {
    title: "Consentless Analytics for DTC: What It Is and Why It Matters in 2026",
    description:
      "No consent banner required. No cookies. No user tracking. Aggregate channel totals on 100% of traffic.",
    type: "article",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/blog/consentless-analytics-for-dtc",
  },
};

const faqs = [
  {
    question: "What is consentless analytics?",
    answer:
      "Consentless analytics is web measurement that requires no user consent because it stores no information on the visitor's device, reads no information from it, and collects no personal identifiers. No cookies, no localStorage, no fingerprinting, no per-user tracking. It counts events anonymously and attributes each conversion last-click at channel level. Because the ePrivacy Directive's consent requirement attaches to storage and access of device information, analytics without either falls outside it.",
  },
  {
    question: "Is consentless the same as cookieless?",
    answer:
      "Closely related but not identical. Cookieless specifically means no cookies. Consentless is broader: no cookies AND no localStorage AND no fingerprinting AND no personal identifiers — so consent is not legally required. All consentless analytics is cookieless; not all cookieless analytics is fully consentless.",
  },
  {
    question: "Does consentless analytics track individual visitors?",
    answer:
      "No. That is the point. Consentless analytics counts events in aggregate — by channel, campaign, landing page, country — without linking any event to a specific person or device. There is no per-visitor profile, no returning-user recognition, no cross-session identifier.",
  },
  {
    question: "Why does consentless analytics matter for DTC brands in Europe?",
    answer:
      "DTC brands sell directly to consumers via paid media. Their budget decisions depend on attributing paid-channel spend to revenue. In the EU, cookie banners cause 40–60% of visitors to reject tracking — the ROAS numbers DTC teams optimise against are built on the minority who accepted. Consentless analytics restores aggregate channel totals on the full 100%.",
  },
  {
    question: "Is consentless analytics legal under GDPR?",
    answer:
      "When correctly implemented, yes. GDPR regulates processing of personal data; if no personal data is collected and no identifier is stored or read on the device, the analytics is outside the material scope. This is a question for a DPO to confirm against the specific implementation's architecture — SealMetrics ships a DPA and TPSR package for this review.",
  },
  {
    question: "Can I use consentless analytics alongside advertising pixels?",
    answer:
      "Yes. Advertising pixels (Meta, TikTok, Google Ads remarketing) still require consent because they use personal data for ad personalisation. Consentless analytics runs independently as your neutral measurement layer; the advertising pixels remain gated by your CMP.",
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Consentless Analytics for DTC" }]} />
      <JsonLd
        data={articleSchema({
          headline: "Consentless Analytics for DTC: What It Is and Why It Matters in 2026",
          description: "Consentless analytics counts 100% of DTC traffic anonymously at channel level — no banner, no tracking.",
          datePublished: "2026-04-24",
          url: "/blog/consentless-analytics-for-dtc",
          category: "eCommerce",
          author: { name: "Rafa Jiménez", url: "/authors/rafa-jimenez", jobTitle: "Founder, SealMetrics" },
        })}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Blog", url: "/blog" }, { name: "Consentless Analytics for DTC" }])} />
      <JsonLd data={faqSchema(faqs)} />

      <article className="pt-12 pb-28 bg-white">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">
          <header className="mb-12">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              DTC
            </span>
            <h1 className="font-serif text-[2.5rem] font-medium text-text-primary leading-[1.2] mb-6">
              Consentless Analytics for DTC: What It Is and Why It Matters
            </h1>
            <div className="flex items-center gap-4 text-[0.8rem] text-text-tertiary">
              <time className="font-mono">April 24, 2026</time>
              <span>7 min read</span>
              <span>By <Link href="/authors/rafa-jimenez" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">Rafa Jiménez</Link></span>
            </div>
          </header>

          <div className="mb-12 p-6 bg-warm-white border border-warm-100 rounded-[4px]">
            <h2 className="font-serif text-[1rem] font-medium text-text-primary mb-3">Key Takeaways</h2>
            <ul className="space-y-2 text-[0.9rem] leading-[1.7] text-text-secondary list-disc pl-5">
              <li>Consentless analytics = no cookies, no localStorage, no fingerprinting, no personal identifiers, no per-user tracking. Therefore no consent required under GDPR/ePrivacy.</li>
              <li>For DTC brands, this closes the 40–60% consent-rejection gap that breaks aggregate channel ROAS in Europe.</li>
              <li>It works alongside advertising pixels (Meta, Google Ads) — pixels stay consent-gated, analytics is free.</li>
              <li>Properly architected, aggregate channel revenue reconciles with Shopify/WooCommerce/Magento at within 15–20%.</li>
              <li>The legal standing depends on implementation details; a DPA and TPSR package should accompany any enterprise deployment.</li>
            </ul>
          </div>

          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-text-body">
            <p>
              For European DTC brands, the measurement problem is specific: paid media is the growth engine, and paid-media ROAS is measured against conversions the system actually observes. In the EU, 40–60% of visitors never become observable because they reject the cookie banner. The remaining 40–60% has channel attribution that is only partially trustworthy due to ad blockers and ITP.
            </p>
            <p>
              &ldquo;Consentless&rdquo; is the legal term for the fix. It means the analytics architecture is designed so that it does not trigger the consent requirement in the first place. Not &ldquo;we ask for consent and respect the answer&rdquo; — that is still consent-gated. Consentless means consent is not required, because no information is stored on or read from the device and no personal identifier ever exists.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Consentless does not mean &ldquo;tracked anonymously&rdquo;. It means not tracked.
            </h2>
            <p>
              This is the part most marketers get wrong. Consentless analytics does not anonymise a tracked user. It does not track any user at all. There is no identifier — not a cookie, not a localStorage key, not a fingerprint, not an anonymised ID. Pageviews are counted. Conversions are counted. Channel metadata (referrer, UTM, landing page) is logged against each event. That is the entire data model.
            </p>
            <p>
              The implication matters: with consentless analytics, you will never see a report that says &ldquo;this customer visited three times before buying.&rdquo; The system does not know. It knows: &ldquo;Channel A drove X visits, Y conversions, €Z revenue this week.&rdquo; That is what rolls up to a CFO.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              How consentless is different from cookieless
            </h2>
            <p>
              The terms overlap but are not synonymous. Cookieless specifically means: no cookies used. Consentless is a stricter standard: no cookies, no localStorage, no IndexedDB, no sessionStorage, no fingerprinting, no persistent identifier of any kind that would trigger the <Link href="/glossary/cookieless-analytics" className="text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">ePrivacy storage-and-access rule</Link>.
            </p>
            <p>
              Some &ldquo;cookieless&rdquo; analytics tools still use localStorage or device fingerprinting and technically still need consent. Fully consentless tools avoid all of them. Both are better than cookie-based, but only consentless is legally out of scope.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              What consentless looks like for a DTC stack
            </h2>
            <p>
              A typical European DTC stack running consentless analytics:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Shopify (or WooCommerce/Magento) + consentless analytics.</strong> Analytics counts events on 100% of traffic, pre-banner, no identifier ever created.</li>
              <li><strong>Meta pixel + Google Ads pixel behind the banner.</strong> These still require consent because they use personal data for ad personalisation.</li>
              <li><strong>Klaviyo or CRM for email.</strong> Runs on explicit email-list opt-in, not tracking cookies.</li>
              <li><strong>BigQuery for aggregate marketing-mix modelling.</strong> Fed by consentless analytics at full resolution of channel totals.</li>
            </ul>
            <p>
              The net effect: aggregate ROAS per channel is measured on 100% of traffic, not the 40% that accepted the banner. For a €20M DTC brand, the difference between &ldquo;channel ROAS on 40%&rdquo; and &ldquo;channel ROAS on 100%&rdquo; is often the difference between signing off on a €5M annual paid-media budget and defending it in a board meeting.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              What the compliance review looks like
            </h2>
            <p>
              A typical DPO review of a consentless analytics implementation checks:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Does the tool store anything on the device? (Must be no.)</li>
              <li>Does the tool read anything from the device beyond standard HTTP headers? (Must be no.)</li>
              <li>Does the tool collect IP addresses, device IDs, session IDs or any identifier that could link pageviews together? (Must be no.)</li>
              <li>Where is data processed and stored? (Should be EU for European DTC brands.)</li>
              <li>Is there a DPA signed with the vendor? (Should be yes — SealMetrics ships one by default.)</li>
              <li>Is a TPSR (Third-Party Security Review) package available? (Should be yes for enterprise procurement.)</li>
            </ol>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              What consentless analytics does not fix
            </h2>
            <p>
              Consentless analytics is a marketing-site measurement layer. It does not replace:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Advertising pixels</strong> — still required for Meta, TikTok, Google Ads optimisation. Still consent-gated.</li>
              <li><strong>CRM and email tracking</strong> — separate consent surface (explicit list opt-in, authenticated).</li>
              <li><strong>Customer data platforms (CDPs)</strong> — for authenticated users, different compliance basis and a different data model.</li>
            </ul>
            <p>
              Think of consentless analytics as replacing GA4 for aggregate top-of-funnel channel attribution, not as replacing the rest of the MarTech stack.
            </p>

            <h2 className="font-serif text-[1.5rem] font-medium text-text-primary mt-10 mb-4">
              Questions DTC teams ask
            </h2>
            {faqs.map((f) => (
              <div key={f.question} className="mt-6">
                <h3 className="font-serif text-[1.15rem] font-medium text-text-primary mb-2">{f.question}</h3>
                <p className="text-[0.95rem]">{f.answer}</p>
              </div>
            ))}
          </div>

          <RelatedReading currentSlug="consentless-analytics-for-dtc" />

          <section className="mt-16 pt-10 border-t border-warm-100">
            <h2 className="text-[0.75rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-5">
              Go deeper
            </h2>
            <ul className="space-y-4">
              <li>
                <Link href="/blog/cookieless-analytics-for-ecommerce" className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">Cookieless Analytics for eCommerce</Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">The full eCommerce guide with Shopify integration detail.</p>
              </li>
              <li>
                <Link href="/glossary/gdpr-analytics-compliance" className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">GDPR analytics compliance — definition</Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">What GDPR actually requires of web analytics.</p>
              </li>
              <li>
                <Link href="/for/ecommerce" className="text-[0.95rem] text-text-primary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors">SealMetrics for eCommerce</Link>
                <p className="text-[0.8rem] text-text-tertiary mt-1">Vertical page with DTC-specific pains and outcomes.</p>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}
