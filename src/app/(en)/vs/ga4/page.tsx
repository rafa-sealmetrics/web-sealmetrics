import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SealMetrics vs Google Analytics 4",
  description:
    "This comparison lives at /vs-ga4/. You are being redirected.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://sealmetrics.com/vs-ga4" },
  other: {
    "http-equiv:refresh": "0; url=/vs-ga4/",
  },
};

export default function Page() {
  return (
    <>
      {/* Meta refresh handles HTTP-level redirect. JS handles the SPA case. */}
      <meta httpEquiv="refresh" content="0; url=/vs-ga4/" />
      <script
        dangerouslySetInnerHTML={{
          __html: "window.location.replace('/vs-ga4/');",
        }}
      />
      <main className="max-w-[640px] mx-auto px-5 py-32 text-center">
        <p className="text-ink-soft text-[15px] leading-[1.55]">
          The SealMetrics vs GA4 comparison lives at{" "}
          <Link href="/vs-ga4/" className="text-brand underline">
            /vs-ga4
          </Link>
          . Redirecting…
        </p>
      </main>
    </>
  );
}
