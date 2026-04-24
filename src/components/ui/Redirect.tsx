import type { Metadata } from "next";
import Link from "next/link";

/**
 * Static-export-friendly client-side redirect.
 * - Emits <meta http-equiv="refresh"> which GitHub Pages respects
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
    other: {
      refresh: `0; url=${destination}`,
    },
  };
}

export function RedirectStub({ to }: { to: string }) {
  return (
    <>
      {/* Meta refresh for no-JS fallback — Next.js hoists this to <head> via metadata */}
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
