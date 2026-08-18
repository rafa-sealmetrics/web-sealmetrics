import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/ui/JsonLd";

/**
 * Static-export-friendly client-side redirect.
 * - Emits a real <meta http-equiv="refresh"> from the page body, which React
 *   hoists into <head>. It MUST NOT go through Next.js `metadata.other`:
 *   that renders every key as `name="…"`, and <meta name="refresh"> is inert —
 *   it silently did nothing in production until the 2026-08-18 audit
 * - Adds canonical to the real destination (no duplicate content)
 * - Adds noindex so search engines don't index the alias
 * - Renders a visible fallback link for users without JS/meta-refresh
 */
export function buildRedirectMetadata(destination: string): Metadata {
  const absolute = destination.startsWith("http")
    ? destination
    : `https://sealmetrics.com${destination}`;
  return {
    title: `Redirecting to ${destination} — SealMetrics`,
    description: `This page has moved. Redirecting to ${destination}.`,
    alternates: { canonical: absolute },
    robots: { index: false, follow: true },
    openGraph: {
      title: `Redirecting to ${destination} — SealMetrics`,
      description: `This page has moved. Redirecting to ${destination}.`,
      url: absolute,
      siteName: "SealMetrics",
      type: "website",
      images: ["https://sealmetrics.com/og-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `Redirecting to ${destination} — SealMetrics`,
      description: `This page has moved. Redirecting to ${destination}.`,
      images: ["https://sealmetrics.com/og-image.png"],
    },
  };
}

export function RedirectStub({ to }: { to: string }) {
  const absolute = to.startsWith("http") ? to : `https://sealmetrics.com${to}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Page moved",
          url: absolute,
          isPartOf: {
            "@type": "WebSite",
            name: "SealMetrics",
            url: "https://sealmetrics.com",
          },
        }}
      />
      {/* Real meta refresh: works without JS. React hoists <meta> to <head>. */}
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <section className="min-h-[50vh] flex items-center justify-center px-5 py-20 bg-warm-white">
        <div className="text-center max-w-[480px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft mb-3">
            Page moved
          </p>
          <h1 className="text-[28px] font-semibold text-ink tracking-[-0.02em] mb-4">
            Redirecting you to <code className="font-mono text-[20px]">{to}</code>
          </h1>
          <p className="text-ink-soft mb-6">
            If your browser doesn&apos;t redirect automatically, click below.
          </p>
          <Link
            href={to}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-ink text-white rounded-md text-[15px] font-semibold no-underline hover:bg-brand transition-colors"
          >
            Continue to {to} →
          </Link>
        </div>
      </section>
      {/* Manual JS redirect as secondary fallback */}
      <script
        dangerouslySetInnerHTML={{
          __html: `setTimeout(function(){window.location.replace(${JSON.stringify(to)})},100);`,
        }}
      />
    </>
  );
}
