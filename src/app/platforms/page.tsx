import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Supported Platforms — SealMetrics",
  description:
    "SealMetrics works on any website. One script tag for WordPress, WooCommerce, Shopify, Magento, Wix, Webflow, and more. Set up in under 2 minutes.",
  openGraph: {
    title: "Supported Platforms — SealMetrics",
    description:
      "SealMetrics works on any website. One script tag for WordPress, WooCommerce, Shopify, Magento, Wix, Webflow, and more. Set up in under 2 minutes.",
  },
  alternates: {
    canonical: "https://sealmetrics.com/platforms",
  },
};

const platforms = [
  {
    logo: "/logos/brands/wordpress.svg",
    name: "WordPress",
    method: "Paste the script in your theme header or use a header/footer plugin.",
  },
  {
    logo: "/logos/brands/woocommerce.svg",
    name: "WooCommerce",
    method: "Same as WordPress — paste in theme header. Ecommerce events tracked automatically.",
  },
  {
    logo: "/logos/brands/magento.svg",
    name: "Magento",
    method: "Add the script via Stores → Configuration → Design → HTML Head.",
  },
  {
    logo: "/logos/brands/prestashop.svg",
    name: "PrestaShop",
    method: "Paste in Back Office → Design → Theme & Logo → Custom code section.",
  },
  {
    logo: "/logos/brands/shopify.svg",
    name: "Shopify",
    badge: "Coming soon",
    method: "Native Shopify integration arriving soon. Contact us for early access.",
  },
  {
    logo: "/logos/brands/joomla.svg",
    name: "Joomla",
    method: "Add the script in Extensions → Templates → your template → index.php header.",
  },
  {
    logo: "/logos/brands/drupal.svg",
    name: "Drupal",
    method: "Paste in your theme's html.html.twig or use the Asset Injector module.",
  },
  {
    logo: "/logos/brands/wix.svg",
    name: "Wix",
    method: "Settings → Custom Code → Add Code → paste in Head, apply to All Pages.",
  },
  {
    logo: "/logos/brands/webflow.svg",
    name: "Webflow",
    method: "Project Settings → Custom Code → Head Code. Applies site-wide.",
  },
  {
    logo: "/logos/brands/html5.svg",
    name: "Custom HTML",
    method: "Paste the script tag in your <head> section. Works on any static or dynamic site.",
  },
];

const steps = [
  {
    number: "1",
    title: "Copy your script tag",
    description:
      "Sign up and copy the single script tag from your SealMetrics dashboard. It is unique to your domain.",
  },
  {
    number: "2",
    title: "Paste it in your site header",
    description:
      "Add the script to the <head> section of your website — through your CMS, theme settings, or directly in HTML.",
  },
  {
    number: "3",
    title: "Data flows immediately",
    description:
      "SealMetrics starts capturing 100% of your traffic in real time. No cookies, no consent banner, no configuration.",
  },
];

const faqs = [
  {
    question: "Do I need a plugin to install SealMetrics?",
    answer:
      "No. SealMetrics works with a single script tag pasted into your site's <head> section. No plugin, extension, or package required. If your CMS supports custom header code — and all major ones do — you are ready.",
  },
  {
    question: "Does SealMetrics work with page builders like Elementor, Divi, or Oxygen?",
    answer:
      "Yes. Page builders render content inside your WordPress theme, and the SealMetrics script lives in the theme header — above the builder layer. It works with Elementor, Divi, Oxygen, Beaver Builder, Bricks, and any other builder.",
  },
  {
    question: "What about Shopify?",
    answer:
      "A native Shopify integration is coming soon. In the meantime, contact our team for early access and manual setup guidance.",
  },
  {
    question: "Can I install SealMetrics via Google Tag Manager?",
    answer:
      "We recommend installing the script directly in your site header for optimal performance. GTM adds an extra layer that can delay script loading and increase page weight. Direct installation means fewer dependencies and faster data capture.",
  },
  {
    question: "Does the script affect page speed?",
    answer:
      "The SealMetrics script is ~846 bytes — roughly 52x lighter than Google Analytics. It loads asynchronously and adds less than 5ms to page load. We published a benchmark comparing every major analytics script at sealmetrics.com/blog/we-measured-every-analytics-script.",
  },
];

export default function PlatformsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Platforms", href: "/platforms" },
        ]}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://sealmetrics.com" },
          { name: "Platforms", url: "https://sealmetrics.com/platforms" },
        ])}
      />
      <JsonLd
        data={faqSchema(
          faqs.map((f) => ({ question: f.question, answer: f.answer }))
        )}
      />

      {/* Hero */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[720px]">
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
              Platform Compatibility
            </span>
            <h1 className="headline-hero mb-6">
              One script tag. Any website.
            </h1>
            <p className="text-[1.1rem] leading-[1.8] text-text-secondary max-w-[600px]">
              SealMetrics installs in under 2 minutes on any platform. No
              plugins, no SDKs, no Tag Manager configuration. Paste one script
              tag in your site header and start capturing 100% of your traffic
              immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Script tag visual */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-[700px] mx-auto mb-10">
            <h2 className="headline-section mb-4">This is all you need.</h2>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary">
              One async script tag. ~846 bytes. No cookies, no consent banner,
              no configuration.
            </p>
          </div>
          <div className="max-w-[700px] mx-auto bg-warm-900 rounded-[4px] p-6 overflow-x-auto">
            <pre className="text-[0.8rem] leading-relaxed text-warm-300 font-mono whitespace-pre-wrap break-all">
              <code>{`<script async src="https://t.sealmetrics.com/t.js?siteid=yoursite"></script>`}</code>
            </pre>
          </div>
          <p className="text-center text-[0.8rem] text-text-tertiary mt-4">
            Replace <span className="font-mono">yoursite</span> with your
            site ID. You get this when you sign up.
          </p>
        </div>
      </section>

      {/* Platforms grid */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="headline-section mb-4">
              Compatible with every major platform.
            </h2>
            <p className="text-[1.05rem] leading-[1.75] text-text-secondary">
              If your platform supports custom code in the header, SealMetrics
              works. Here is how to install it on each one.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="p-6 border border-warm-100 rounded-[4px] bg-warm-white hover:border-text-tertiary transition-colors relative"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Image
                    src={platform.logo}
                    alt={platform.name}
                    width={24}
                    height={24}
                    className="opacity-40 grayscale"
                  />
                  <h3 className="text-[1rem] font-medium text-text-primary">
                    {platform.name}
                  </h3>
                  {platform.badge && (
                    <span className="text-[0.6rem] uppercase tracking-wider text-text-tertiary bg-warm-100 px-1.5 py-0.5 rounded">
                      {platform.badge}
                    </span>
                  )}
                </div>
                <p className="text-[0.85rem] leading-[1.7] text-text-secondary">
                  {platform.method}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 steps */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="headline-section mb-4">
              Three steps. Two minutes.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-warm-200 text-[0.9rem] font-medium text-text-secondary mb-4">
                  {step.number}
                </div>
                <h3 className="text-[1rem] font-medium text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-[0.85rem] leading-[1.7] text-text-secondary max-w-[300px] mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px] mx-auto">
            <h2 className="headline-section mb-10 text-center">
              Frequently asked questions
            </h2>
            <div className="space-y-8">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-[1rem] font-medium text-text-primary mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-[0.9rem] leading-[1.75] text-text-secondary">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-warm-white border-t border-warm-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <h2 className="headline-section mb-4">
            Ready to capture 100% of your traffic?
          </h2>
          <p className="text-[1.05rem] leading-[1.75] text-text-secondary max-w-[520px] mx-auto mb-8">
            Set up SealMetrics on your platform in under 2 minutes. No cookies,
            no consent banner, no data loss.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/demo"
              className="inline-flex items-center px-9 py-4 text-[0.95rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
            >
              Book a Demo
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center px-7 py-3.5 text-[0.95rem] font-medium text-text-primary bg-transparent border border-warm-200 rounded-[4px] no-underline hover:border-text-primary transition-colors"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
