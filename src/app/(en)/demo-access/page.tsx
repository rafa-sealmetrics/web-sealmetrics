import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { AccessForm } from "./AccessForm";

export const metadata: Metadata = {
  title: "Get Demo Account Access — SealMetrics",
  description:
    "Request credentials for the live SealMetrics demo account. Corporate email required. Credentials delivered by email.",
  openGraph: {
    title: "Get Demo Account Access — SealMetrics",
    description:
      "Request credentials for the live SealMetrics demo account. Corporate email required.",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  alternates: {
    canonical: "https://sealmetrics.com/demo-access",
  },
  robots: { index: false, follow: true },
};

export default function DemoAccessPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Demo account access" }]} />
      <JsonLd data={breadcrumbSchema([{ name: "Demo account access", url: "/demo-access" }])} />

      <section className="pt-24 md:pt-28 pb-24 bg-warm-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20 items-start">
            {/* Left: info */}
            <div>
              <span className="eyebrow mb-5" style={{ display: "inline-flex" }}>
                Demo account access
              </span>
              <h1
                className="h-display mt-5"
                style={{ maxWidth: "20ch", fontSize: "clamp(40px, 5.4vw, 72px)" }}
              >
                Try the live demo — <em>with real data.</em>
              </h1>
              <p
                className="text-ink-soft mt-7 leading-[1.55] max-w-[52ch]"
                style={{ fontSize: "clamp(16px, 1.3vw, 19px)" }}
              >
                Get credentials to log in to a working SealMetrics dashboard. Real traffic, real revenue attribution, real reports — so you can click around at your own pace before talking to anyone.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {[
                  {
                    t: "Real account, not a sandbox",
                    d: "A live, anonymized eCommerce dataset. You see exactly what the product looks like in production.",
                  },
                  {
                    t: "Corporate email required",
                    d: "We don't send credentials to free providers (Gmail, Hotmail, Outlook, etc.). Your work email keeps the demo for real evaluators.",
                  },
                  {
                    t: "Credentials by email",
                    d: "If your domain checks out, you receive user and password within minutes. No call required to start.",
                  },
                ].map((item) => (
                  <div
                    key={item.t}
                    className="flex gap-4 pb-4 border-b border-warm-100 last:border-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 shrink-0" />
                    <div>
                      <h3 className="text-[16px] font-semibold text-ink tracking-[-0.01em] mb-1">
                        {item.t}
                      </h3>
                      <p className="text-[14px] text-ink-soft leading-[1.55]">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-8 p-6 bg-white rounded-xl"
                style={{ borderLeft: "3px solid #2E5C8A" }}
              >
                <p className="text-[15px] text-ink-2 leading-[1.6] italic">
                  &ldquo;Want a guided walkthrough on your own data instead? Book a 30-minute session and we&apos;ll run the gap calculator on your real site.&rdquo;
                </p>
                <p className="font-mono text-[11px] text-ink-soft uppercase tracking-[0.08em] font-semibold mt-3">
                  <Link
                    href="/demo"
                    className="text-ink hover:text-brand transition-colors"
                  >
                    Book a guided demo →
                  </Link>
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[13.5px]">
                <Link
                  href="/how-it-works"
                  className="text-ink-soft no-underline border-b border-warm-200 pb-0.5 hover:text-ink transition-colors"
                >
                  How it works
                </Link>
                <Link
                  href="/product"
                  className="text-ink-soft no-underline border-b border-warm-200 pb-0.5 hover:text-ink transition-colors"
                >
                  Full product
                </Link>
                <Link
                  href="/pricing"
                  className="text-ink-soft no-underline border-b border-warm-200 pb-0.5 hover:text-ink transition-colors"
                >
                  Pricing
                </Link>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:sticky lg:top-24">
              <div className="mb-5">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-brand">
                  Request access
                </span>
                <h2
                  className="font-semibold text-ink leading-[1.15] tracking-[-0.02em] mt-2"
                  style={{ fontSize: "clamp(22px, 2.4vw, 28px)" }}
                >
                  Fill in 4 fields — <em className="italic-accent">credentials by email.</em>
                </h2>
                <p className="text-[14px] text-ink-soft leading-[1.55] mt-2">
                  Your email domain must match your website. Free email providers are not accepted.
                </p>
              </div>
              <AccessForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
