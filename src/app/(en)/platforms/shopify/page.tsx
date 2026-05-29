import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { TldrBlock } from "@/components/ui/TldrBlock";
import {
  articleSchema,
  breadcrumbSchema,
  speakableWebPageSchema,
} from "@/lib/schema";
import { getAlternates } from "@/lib/i18n/navigation";
import { FinalCtaSharedV3 } from "@/components/sections/v3/FinalCtaSharedV3";

const DATE_PUBLISHED = "2026-05-29";
const DATE_MODIFIED = "2026-05-29";

export const metadata: Metadata = {
  title: "Shopify analytics without cookies — SealMetrics integration",
  description:
    "Install SealMetrics on Shopify in 5 minutes. Cookieless, reconciles with Shopify orders to within 15–20%, no consent banner required for the analytics layer.",
  openGraph: {
    title: "Shopify analytics without cookies — SealMetrics integration",
    description:
      "Shopify Plus one-click install, Shopify Standard theme snippet, dataLayer event coverage, and order reconciliation patterns.",
    type: "article",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/platforms/shopify",
    languages: getAlternates("/platforms/shopify"),
  },
};

const events = [
  { name: "page_viewed", maps: "Native Shopify event", note: "Pageview with channel and landing-page metadata." },
  { name: "product_viewed", maps: "view_item (GA4 equivalent)", note: "Product page load. Variant ID, price, category captured." },
  { name: "product_added_to_cart", maps: "add_to_cart", note: "Add-to-cart event with quantity and variant." },
  { name: "checkout_started", maps: "begin_checkout", note: "First step of the Shopify checkout funnel." },
  { name: "checkout_completed", maps: "purchase", note: "Order confirmation. Revenue, currency, order ID, line items." },
  { name: "search_submitted", maps: "search", note: "On-site search query (term only — no PII)." },
];

const faqs = [
  {
    q: "Does SealMetrics work on Shopify Standard or only Plus?",
    a: "Both. Shopify Plus customers get the one-click app install (via the Shopify App Store). Shopify Standard customers add a theme.liquid snippet — 5 lines of code, pasted once into the <head> section of theme.liquid. The order events flow through Shopify's Customer Events API in both cases. No difference in coverage between the two plans.",
  },
  {
    q: "How does it reconcile with Shopify Analytics?",
    a: "Aggregate channel revenue reported by SealMetrics typically lands within 15–20% of Shopify Analytics totals — the gap is shipping discounts, taxes and gift-card credits handled differently between the two systems. For per-order reconciliation, the order_id matches exactly: every order recorded in Shopify is recorded in SealMetrics with the same identifier, so finance can join the two datasets in BigQuery without ambiguity.",
  },
  {
    q: "Does it replace Shopify's native analytics?",
    a: "No. Shopify Analytics stays — it is the operational view for the merchandising team (which products are selling, which collections are converting, which discount codes are working). SealMetrics replaces the marketing-side analytics (which channels and campaigns drove the revenue). They answer different questions on overlapping data.",
  },
  {
    q: "What happens with the existing Google Analytics on my Shopify store?",
    a: "Run both in parallel. GA4 keeps firing for Google Ads conversion import and for any GTM container you already have. SealMetrics installs alongside without touching GA4. After 30 days, most teams move strategic decisions to SealMetrics and keep GA4 as the Google Ads conduit. The full migration plan lives on /use-cases/ga4-migration.",
  },
  {
    q: "Does it work with checkout.shopify.com (Shopify-hosted checkout)?",
    a: "Yes. The Shopify-hosted checkout pages emit Customer Events that SealMetrics consumes server-to-server. No script needs to load on checkout.shopify.com itself. Conversion events are captured at the order confirmation step regardless of the checkout host.",
  },
  {
    q: "What about Shopify Markets and multi-currency?",
    a: "Multi-currency stores are supported. Revenue is recorded in the original transaction currency and converted to a reporting currency (configurable per workspace) using daily ECB rates. Shopify Markets storefronts behave as separate properties or as one rolled-up property depending on how the install is configured.",
  },
];

export default function ShopifyPlatformPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Platforms", href: "/platforms" }, { label: "Shopify" }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Platforms", url: "/platforms" },
          { name: "Shopify", url: "/platforms/shopify" },
        ])}
      />
      <JsonLd
        data={speakableWebPageSchema({
          url: "/platforms/shopify",
          name: "Shopify analytics without cookies — SealMetrics integration",
        })}
      />
      <JsonLd
        data={articleSchema({
          headline:
            "Shopify analytics without cookies — install, events, and order reconciliation",
          description:
            "Install SealMetrics on Shopify Plus or Standard in under 15 minutes. Cookieless capture, full Customer Events coverage, order reconciliation within 15–20% of Shopify Analytics.",
          datePublished: DATE_PUBLISHED,
          dateModified: DATE_MODIFIED,
          url: "/platforms/shopify",
          category: "Integration",
          author: {
            name: "Rafa Jiménez",
            url: "/authors/rafa-jimenez",
            jobTitle: "Founder, SealMetrics",
          },
        })}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-12">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 text-center">
          <span className="eyebrow mb-5" style={{ display: "inline-flex", justifyContent: "center" }}>
            Platform — Shopify
          </span>
          <h1 className="h-display mx-auto mt-5" style={{ maxWidth: "22ch" }}>
            Shopify analytics.{" "}
            <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>
              Five minutes. No banner.
            </em>
          </h1>
          <p
            className="text-ink-soft mt-8 mx-auto max-w-[64ch] leading-[1.55]"
            style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}
          >
            One-click on Shopify Plus, a theme snippet on Shopify
            Standard. Native Customer Events coverage from pageview
            to order confirmation. Aggregate channel revenue
            reconciled to the Shopify backend within 15–20%.
          </p>
        </div>
      </section>

      <TldrBlock
        answer={
          <>
            SealMetrics installs on Shopify in five minutes — one
            click on Shopify Plus via the App Store, or a 5-line
            theme.liquid snippet on Shopify Standard. The tag is
            cookieless and first-party (no consent banner required
            for analytics), and consumes Shopify&rsquo;s Customer
            Events API to capture the full funnel: pageview,
            product_viewed, add_to_cart, checkout_started,
            checkout_completed. Aggregate channel revenue
            reconciles with Shopify Analytics totals within 15–20%
            (the gap is taxes, discounts and gift cards handled
            differently between systems). Order-level reconciliation
            uses the same order_id, so finance can join both
            datasets in BigQuery without ambiguity.
          </>
        }
        bullets={[
          <><strong>5-minute install</strong> — App Store on Plus, theme snippet on Standard.</>,
          <><strong>Full Customer Events coverage</strong> from pageview to checkout_completed.</>,
          <><strong>Order reconciliation</strong> within 15–20% of Shopify Analytics aggregates.</>,
          <><strong>No banner</strong> required for the analytics layer — cookieless first-party server-side.</>,
        ]}
      />

      {/* INSTALL */}
      <section className="py-20 bg-white border-t border-warm-100">
        <div className="max-w-[840px] mx-auto px-5 sm:px-8">
          <h2 className="h-section">Install on Shopify</h2>
          <p className="mt-6 text-[17px] leading-[1.75] text-ink-soft">
            Two install paths depending on plan. Both cover the same
            event surface; the difference is whether Shopify lets you
            install apps or only edit theme code.
          </p>

          <div className="mt-10 space-y-6">
            <div className="border border-warm-100 rounded-2xl p-7 bg-warm-white">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Path A — Shopify Plus</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft">5 min</span>
              </div>
              <ol className="mt-3 list-decimal pl-5 space-y-2 text-[15px] leading-[1.7] text-ink">
                <li>Install the SealMetrics app from the Shopify App Store.</li>
                <li>Authorise the Customer Events API scopes (read-only).</li>
                <li>Configure the workspace ID — taken from the SealMetrics dashboard. Done.</li>
              </ol>
              <p className="mt-4 text-[14.5px] leading-[1.65] text-ink-soft">
                The app installs the pixel automatically, subscribes
                to the Customer Events that map to the SealMetrics
                event vocabulary, and starts ingesting within
                seconds. No theme edits required.
              </p>
            </div>

            <div className="border border-warm-100 rounded-2xl p-7 bg-warm-white">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Path B — Shopify Standard</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft">10 min</span>
              </div>
              <ol className="mt-3 list-decimal pl-5 space-y-2 text-[15px] leading-[1.7] text-ink">
                <li>Open Online Store → Themes → Edit code → <code className="font-mono text-[13px] bg-warm-100 px-1.5 py-0.5 rounded">theme.liquid</code>.</li>
                <li>Paste the snippet (below) just before the closing <code className="font-mono text-[13px] bg-warm-100 px-1.5 py-0.5 rounded">&lt;/head&gt;</code> tag.</li>
                <li>Save. Verify event firing in the SealMetrics debugger.</li>
              </ol>

              <pre className="mt-5 p-5 bg-ink text-warm-50 rounded-xl text-[12.5px] leading-[1.6] overflow-x-auto font-mono">
{`<!-- SealMetrics — cookieless analytics -->
<script src="https://pixel.YOURDOMAIN.com/sm.js" async></script>
<script>
  window.sm = window.sm || function(){(sm.q=sm.q||[]).push(arguments)};
  sm('init', 'YOUR_WORKSPACE_ID');
</script>`}
              </pre>

              <p className="mt-4 text-[14.5px] leading-[1.65] text-ink-soft">
                Replace <code className="font-mono">YOURDOMAIN.com</code>{" "}
                with the CNAME you configured under your own domain
                (pixel.yourdomain.com), and{" "}
                <code className="font-mono">YOUR_WORKSPACE_ID</code>{" "}
                with the value from the SealMetrics dashboard. That
                is the entire client-side install.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS CAPTURED */}
      <section className="py-20 bg-warm-white border-t border-warm-100">
        <div className="max-w-[960px] mx-auto px-5 sm:px-8">
          <h2 className="h-section">Customer Events captured</h2>
          <p className="mt-6 text-[17px] leading-[1.75] text-ink-soft">
            SealMetrics subscribes to Shopify&rsquo;s standard
            Customer Events surface. No custom event configuration
            required — the events below flow automatically from day
            one.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-[14.5px] border-collapse">
              <thead>
                <tr className="border-b border-warm-200 text-left">
                  <th className="py-3 pr-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft font-semibold">SealMetrics event</th>
                  <th className="py-3 px-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft font-semibold">Maps to</th>
                  <th className="py-3 pl-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft font-semibold">What it carries</th>
                </tr>
              </thead>
              <tbody className="text-ink">
                {events.map((e) => (
                  <tr key={e.name} className="border-b border-warm-100">
                    <td className="py-3 pr-4 font-mono text-[13.5px]">{e.name}</td>
                    <td className="py-3 px-4 text-ink-soft">{e.maps}</td>
                    <td className="py-3 pl-4 text-ink-soft">{e.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-[14.5px] leading-[1.65] text-ink-soft">
            All events are aggregate-anonymous: no customer email, no
            checkout email, no IP address, no fingerprint stored.
            What is captured is what is needed for channel attribution
            and revenue reporting — order ID, line items, revenue,
            currency, channel and landing page.
          </p>
        </div>
      </section>

      {/* ORDER RECONCILIATION */}
      <section className="py-20 bg-white border-t border-warm-100">
        <div className="max-w-[840px] mx-auto px-5 sm:px-8">
          <h2 className="h-section">Order reconciliation with Shopify</h2>
          <p className="mt-6 text-[17px] leading-[1.75] text-ink-soft">
            The number that matters in a CFO review is whether the
            marketing dashboard ties to the Shopify backend.
            SealMetrics is built to reconcile at two levels:
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="border border-warm-100 rounded-2xl p-6 bg-warm-white">
              <h3 className="text-[16px] font-semibold text-ink mb-3">Aggregate level</h3>
              <p className="text-[14.5px] leading-[1.65] text-ink-soft">
                Weekly and monthly aggregate revenue reported by
                SealMetrics typically lands within{" "}
                <strong>15–20%</strong> of Shopify Analytics. The
                residual gap is shipping discounts, taxes and
                gift-card credits handled differently between the two
                systems — not measurement error.
              </p>
            </div>

            <div className="border border-warm-100 rounded-2xl p-6 bg-warm-white">
              <h3 className="text-[16px] font-semibold text-ink mb-3">Order-by-order</h3>
              <p className="text-[14.5px] leading-[1.65] text-ink-soft">
                Every order recorded in Shopify is recorded in
                SealMetrics with the same <code className="font-mono text-[13px]">order_id</code>.
                Finance can join the SealMetrics dataset and the
                Shopify dataset in BigQuery on{" "}
                <code className="font-mono text-[13px]">order_id</code>{" "}
                with no ambiguity — and audit per-channel
                attribution against per-order reality.
              </p>
            </div>
          </div>

          <p className="mt-8 text-[15px] leading-[1.7] text-ink-soft">
            For the wider argument about what complete-data
            reconciliation enables for CFO and board reporting, see
            the{" "}
            <Link
              href="/complete-data"
              className="text-brand underline decoration-1 underline-offset-2"
            >
              complete data pillar
            </Link>
            .
          </p>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-20 bg-warm-white border-t border-warm-100">
        <div className="max-w-[960px] mx-auto px-5 sm:px-8">
          <h2 className="h-section text-center">Related reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            <Link
              href="/blog/cookieless-analytics-for-ecommerce"
              className="group block border border-warm-100 rounded-xl p-7 bg-white no-underline transition-all hover:border-warm-200 hover:-translate-y-0.5"
            >
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">eCommerce</span>
              <h3 className="mt-3 text-[18px] font-semibold tracking-[-0.01em] text-ink leading-[1.3] group-hover:text-brand transition-colors">Cookieless analytics for eCommerce</h3>
              <p className="mt-3 text-[14.5px] leading-[1.6] text-ink-soft">
                The Shopify reconciliation pattern in full editorial detail.
              </p>
            </Link>

            <Link
              href="/use-cases/ga4-migration"
              className="group block border border-warm-100 rounded-xl p-7 bg-white no-underline transition-all hover:border-warm-200 hover:-translate-y-0.5"
            >
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Use case</span>
              <h3 className="mt-3 text-[18px] font-semibold tracking-[-0.01em] text-ink leading-[1.3] group-hover:text-brand transition-colors">GA4 migration — 30-day parallel plan</h3>
              <p className="mt-3 text-[14.5px] leading-[1.6] text-ink-soft">
                How to run SealMetrics alongside your existing GA4 install without breaking Google Ads.
              </p>
            </Link>

            <Link
              href="/cookieless-analytics"
              className="group block border border-warm-100 rounded-xl p-7 bg-white no-underline transition-all hover:border-warm-200 hover:-translate-y-0.5"
            >
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Pillar</span>
              <h3 className="mt-3 text-[18px] font-semibold tracking-[-0.01em] text-ink leading-[1.3] group-hover:text-brand transition-colors">Cookieless analytics</h3>
              <p className="mt-3 text-[14.5px] leading-[1.6] text-ink-soft">
                Why the architecture works, what it captures, and what it deliberately does not.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white border-t border-warm-100">
        <div className="max-w-[840px] mx-auto px-5 sm:px-8">
          <h2 className="h-section text-center">Common Shopify questions</h2>
          <dl className="mt-12 divide-y divide-warm-100 border-y border-warm-100">
            {faqs.map((f) => (
              <div key={f.q} className="py-7">
                <dt className="text-[17px] font-semibold text-ink mb-3">{f.q}</dt>
                <dd
                  data-speakable
                  className="faq-answer text-[15.5px] leading-[1.7] text-ink-soft max-w-[68ch]"
                >
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <FinalCtaSharedV3
        locale="en"
        titleEn={
          <>
            Install in <em
              className="italic font-medium"
              style={{ color: "#E8B84B", fontStyle: "italic" }}
            >
              five minutes
            </em>. See real channel revenue this week.
          </>
        }
        titleEs={
          <>
            Instala en <em
              className="italic font-medium"
              style={{ color: "#E8B84B", fontStyle: "italic" }}
            >
              cinco minutos
            </em>. Ve los ingresos reales por canal esta semana.
          </>
        }
        ledeEn="Book 30 minutes with the founder. We install on your Shopify store live, run the first reconciliation against your CRM, and you keep the dashboard."
        ledeEs="Reserva 30 min con el founder. Instalamos en tu Shopify en directo, hacemos la primera conciliación contra tu CRM y te quedas con el dashboard."
      />
    </>
  );
}
