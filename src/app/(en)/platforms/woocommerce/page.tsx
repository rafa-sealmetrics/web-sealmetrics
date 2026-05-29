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
  title: "WooCommerce analytics without cookies — SealMetrics plugin",
  description:
    "Install SealMetrics on WooCommerce in 10 minutes. Cookieless, reconciles with WooCommerce orders, no consent banner required for the analytics layer.",
  openGraph: {
    title: "WooCommerce analytics without cookies — SealMetrics plugin",
    description:
      "WordPress plugin install, WooCommerce hook coverage, and the order_id reconciliation pattern for finance teams.",
    type: "article",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/platforms/woocommerce",
    languages: getAlternates("/platforms/woocommerce"),
  },
};

const events = [
  { name: "page_viewed", hook: "wp_head", note: "Pageview with channel, landing-page and UTM metadata." },
  { name: "product_viewed", hook: "woocommerce_after_single_product", note: "Product page. Variant ID, price, category captured." },
  { name: "product_added_to_cart", hook: "woocommerce_add_to_cart", note: "Cart add. Quantity, variant, line value." },
  { name: "checkout_started", hook: "woocommerce_before_checkout_form", note: "Begin checkout step. Cart contents, total." },
  { name: "order_placed", hook: "woocommerce_thankyou", note: "Order confirmation. Revenue, currency, order ID, line items, status." },
  { name: "search_submitted", hook: "pre_get_posts", note: "On-site product search. Term only, no PII." },
];

const faqs = [
  {
    q: "How is the SealMetrics plugin different from the WooCommerce GA plugin?",
    a: "WooCommerce's official Google Analytics integration depends on GA4's cookie-based tracking — and inherits the 40–60% consent-rejection loss. SealMetrics installs as a separate WordPress plugin, hooks into the same WooCommerce action surface, and writes no cookie. Both can run side by side: keep the GA plugin for Google Ads conversion import, run SealMetrics for revenue and channel decisions.",
  },
  {
    q: "Does it support WooCommerce Subscriptions and Bookings?",
    a: "Yes. The plugin subscribes to the WooCommerce subscription_payment_complete and booking_completed hooks. Recurring revenue is recorded with the original order_id chain so finance can see lifetime channel attribution per customer in BigQuery (aggregate, not per-individual).",
  },
  {
    q: "Does it work with WPML or Polylang for multilingual stores?",
    a: "Yes. The plugin captures the page locale alongside each event so multilingual stores can split channel performance by language. Both WPML and Polylang are tested. Translated product slugs are normalised so the same product across locales rolls up in the same aggregate.",
  },
  {
    q: "What about WooCommerce checkout blocks vs classic checkout?",
    a: "Both are supported. The plugin detects the active checkout (blocks or classic) and subscribes to the appropriate hooks automatically. Order confirmation fires on the woocommerce_thankyou hook regardless of which checkout the customer used.",
  },
  {
    q: "Does the plugin slow down my WooCommerce site?",
    a: "The plugin loads a single 846-byte script asynchronously in the page head. Server-side, it adds a small amount of work on the woocommerce_thankyou hook (a single async HTTP POST). Typical LCP impact is below 50ms — measurably smaller than the GA4 + GTM stack it usually replaces. Documented on the cookieless analytics pillar.",
  },
  {
    q: "Will I need to change my consent banner setup?",
    a: "Not necessarily. If SealMetrics is the only analytics on the site, the analytics-specific reason for the banner disappears (the plugin sets no cookie, stores no localStorage). If you also run ad pixels or A/B testing tools that do set cookies, those still require consent. Many WooCommerce stores shrink the banner scope to those specific products instead of running a catch-all banner.",
  },
];

export default function WooCommercePlatformPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Platforms", href: "/platforms" }, { label: "WooCommerce" }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Platforms", url: "/platforms" },
          { name: "WooCommerce", url: "/platforms/woocommerce" },
        ])}
      />
      <JsonLd
        data={speakableWebPageSchema({
          url: "/platforms/woocommerce",
          name: "WooCommerce analytics without cookies — SealMetrics plugin",
        })}
      />
      <JsonLd
        data={articleSchema({
          headline:
            "WooCommerce analytics without cookies — install, hooks, and order reconciliation",
          description:
            "Install SealMetrics on WooCommerce in 10 minutes. Cookieless capture, full WooCommerce hook coverage, order_id reconciliation for finance teams.",
          datePublished: DATE_PUBLISHED,
          dateModified: DATE_MODIFIED,
          url: "/platforms/woocommerce",
          category: "Integration",
          author: { name: "Rafa Jiménez", url: "/authors/rafa-jimenez", jobTitle: "Founder, SealMetrics" },
        })}
      />

      <section className="relative overflow-hidden bg-warm-white pt-28 md:pt-32 pb-12">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 text-center">
          <span className="eyebrow mb-5" style={{ display: "inline-flex", justifyContent: "center" }}>
            Platform — WooCommerce
          </span>
          <h1 className="h-display mx-auto mt-5" style={{ maxWidth: "22ch" }}>
            WooCommerce analytics.{" "}
            <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>
              Ten minutes. No banner.
            </em>
          </h1>
          <p className="text-ink-soft mt-8 mx-auto max-w-[64ch] leading-[1.55]" style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}>
            A WordPress plugin that hooks into the WooCommerce action
            surface — from pageview through order confirmation —
            without writing a cookie. Order data reconciles with the
            WooCommerce backend on the same order_id.
          </p>
        </div>
      </section>

      <TldrBlock
        answer={
          <>
            SealMetrics for WooCommerce installs as a standard
            WordPress plugin in 10 minutes. It subscribes to the
            WooCommerce action hooks — <code>woocommerce_add_to_cart</code>,
            {" "}<code>woocommerce_before_checkout_form</code>,
            {" "}<code>woocommerce_thankyou</code> — and records each
            event as an aggregate, anonymous count with channel and
            campaign metadata. No cookie is set. No customer email is
            collected. No banner is required for the analytics layer.
            Every order recorded in WooCommerce is recorded in
            SealMetrics with the same <code>order_id</code>, so
            finance can join both datasets in BigQuery without
            ambiguity.
          </>
        }
        bullets={[
          <><strong>10-minute install</strong> — standard WordPress plugin, zero config.</>,
          <><strong>Full WooCommerce hook coverage</strong> from product_viewed to order_placed.</>,
          <><strong>order_id reconciliation</strong> — finance can join SealMetrics + WooCommerce datasets natively.</>,
          <><strong>WPML / Polylang compatible</strong>, supports Subscriptions and Bookings.</>,
        ]}
      />

      <section className="py-20 bg-white border-t border-warm-100">
        <div className="max-w-[840px] mx-auto px-5 sm:px-8">
          <h2 className="h-section">Install on WooCommerce</h2>
          <p className="mt-6 text-[17px] leading-[1.75] text-ink-soft">
            One install path — the WordPress plugin. Once activated,
            the plugin hooks into WooCommerce automatically; no manual
            event configuration required for the standard purchase
            funnel.
          </p>

          <ol className="mt-10 space-y-5 text-[15.5px] leading-[1.7] text-ink list-decimal pl-6">
            <li>WordPress admin → Plugins → Add New → search &ldquo;SealMetrics&rdquo; → Install &amp; Activate.</li>
            <li>Open the SealMetrics settings panel. Paste your workspace ID (taken from the SealMetrics dashboard).</li>
            <li>
              Configure the pixel CNAME under your own domain
              (<code className="font-mono text-[13px] bg-warm-100 px-1.5 py-0.5 rounded">pixel.yourdomain.com</code>) —
              this keeps the request first-party and invisible to ad blockers.
            </li>
            <li>Save. The plugin starts ingesting on the next pageview. Verify in the SealMetrics debugger.</li>
          </ol>

          <p className="mt-8 text-[14.5px] leading-[1.65] text-ink-soft">
            For non-managed WordPress (self-hosted, WP Engine,
            WP-CLI), the plugin is also available via direct download
            and via <code className="font-mono text-[13px] bg-warm-100 px-1.5 py-0.5 rounded">wp plugin install sealmetrics</code>.
            Multisite networks are supported with per-site or
            network-wide activation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-warm-white border-t border-warm-100">
        <div className="max-w-[960px] mx-auto px-5 sm:px-8">
          <h2 className="h-section">WooCommerce hooks consumed</h2>
          <p className="mt-6 text-[17px] leading-[1.75] text-ink-soft">
            The plugin subscribes to standard WooCommerce action
            hooks. No theme edits required, no template overrides, no
            functions.php additions. If you have customised the
            checkout, the standard hooks still fire and the plugin
            still consumes them.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-[14.5px] border-collapse">
              <thead>
                <tr className="border-b border-warm-200 text-left">
                  <th className="py-3 pr-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft font-semibold">SealMetrics event</th>
                  <th className="py-3 px-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft font-semibold">WordPress / WooCommerce hook</th>
                  <th className="py-3 pl-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft font-semibold">What it carries</th>
                </tr>
              </thead>
              <tbody className="text-ink">
                {events.map((e) => (
                  <tr key={e.name} className="border-b border-warm-100">
                    <td className="py-3 pr-4 font-mono text-[13.5px]">{e.name}</td>
                    <td className="py-3 px-4 font-mono text-[12.5px] text-ink-soft">{e.hook}</td>
                    <td className="py-3 pl-4 text-ink-soft">{e.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-[14.5px] leading-[1.65] text-ink-soft">
            All events are aggregate-anonymous. No customer name, no
            email, no shipping address, no IP. What is captured is
            channel-level data needed for attribution and revenue
            reporting — never personal data from the order itself.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-warm-100">
        <div className="max-w-[840px] mx-auto px-5 sm:px-8">
          <h2 className="h-section">Order reconciliation with WooCommerce</h2>
          <p className="mt-6 text-[17px] leading-[1.75] text-ink-soft">
            The number a CFO will ask about is whether the marketing
            dashboard ties to the WooCommerce backend. Two
            reconciliation levels:
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="border border-warm-100 rounded-2xl p-6 bg-warm-white">
              <h3 className="text-[16px] font-semibold text-ink mb-3">Aggregate level</h3>
              <p className="text-[14.5px] leading-[1.65] text-ink-soft">
                Weekly and monthly aggregate revenue lands within{" "}
                <strong>15–20%</strong> of WooCommerce reports. The
                residual gap is shipping, taxes, gift cards and
                refunds handled differently between the two systems.
              </p>
            </div>

            <div className="border border-warm-100 rounded-2xl p-6 bg-warm-white">
              <h3 className="text-[16px] font-semibold text-ink mb-3">Order-by-order</h3>
              <p className="text-[14.5px] leading-[1.65] text-ink-soft">
                Every WooCommerce order is recorded in SealMetrics
                with the same <code className="font-mono text-[13px]">order_id</code>{" "}
                from the wp_posts table. Finance joins both datasets
                in BigQuery on <code className="font-mono text-[13px]">order_id</code>{" "}
                — no ambiguity, no fuzzy matching.
              </p>
            </div>
          </div>

          <p className="mt-8 text-[15px] leading-[1.7] text-ink-soft">
            The wider argument for complete-data reconciliation lives
            on the{" "}
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
                Reconciliation patterns for Shopify, WooCommerce and Magento — in editorial depth.
              </p>
            </Link>
            <Link
              href="/platforms/shopify"
              className="group block border border-warm-100 rounded-xl p-7 bg-white no-underline transition-all hover:border-warm-200 hover:-translate-y-0.5"
            >
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Platform</span>
              <h3 className="mt-3 text-[18px] font-semibold tracking-[-0.01em] text-ink leading-[1.3] group-hover:text-brand transition-colors">SealMetrics for Shopify</h3>
              <p className="mt-3 text-[14.5px] leading-[1.6] text-ink-soft">
                Equivalent install pattern for stores on Shopify or Shopify Plus.
              </p>
            </Link>
            <Link
              href="/use-cases/ga4-migration"
              className="group block border border-warm-100 rounded-xl p-7 bg-white no-underline transition-all hover:border-warm-200 hover:-translate-y-0.5"
            >
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Use case</span>
              <h3 className="mt-3 text-[18px] font-semibold tracking-[-0.01em] text-ink leading-[1.3] group-hover:text-brand transition-colors">GA4 migration — 30-day parallel plan</h3>
              <p className="mt-3 text-[14.5px] leading-[1.6] text-ink-soft">
                Run SealMetrics alongside the WooCommerce GA plugin without breaking Google Ads.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-warm-100">
        <div className="max-w-[840px] mx-auto px-5 sm:px-8">
          <h2 className="h-section text-center">Common WooCommerce questions</h2>
          <dl className="mt-12 divide-y divide-warm-100 border-y border-warm-100">
            {faqs.map((f) => (
              <div key={f.q} className="py-7">
                <dt className="text-[17px] font-semibold text-ink mb-3">{f.q}</dt>
                <dd data-speakable className="faq-answer text-[15.5px] leading-[1.7] text-ink-soft max-w-[68ch]">
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
            Install in <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>ten minutes</em>. See real channel revenue this week.
          </>
        }
        titleEs={
          <>
            Instala en <em className="italic font-medium" style={{ color: "#E8B84B", fontStyle: "italic" }}>diez minutos</em>. Ve ingresos reales por canal esta semana.
          </>
        }
        ledeEn="Book 30 minutes with the founder. We install on your WooCommerce store live, hook into the right actions, and run the first reconciliation against your CRM."
        ledeEs="Reserva 30 min con el founder. Instalamos en tu WooCommerce en directo, conectamos los hooks y hacemos la primera conciliación contra tu CRM."
      />
    </>
  );
}
