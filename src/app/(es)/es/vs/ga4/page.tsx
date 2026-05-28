import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SealMetrics vs Google Analytics 4",
  description:
    "Esta comparativa vive en /es/vs-ga4/. Te estamos redirigiendo.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://sealmetrics.com/es/vs-ga4" },
};

export default function Page() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/es/vs-ga4/" />
      <script
        dangerouslySetInnerHTML={{
          __html: "window.location.replace('/es/vs-ga4/');",
        }}
      />
      <main className="max-w-[640px] mx-auto px-5 py-32 text-center">
        <p className="text-ink-soft text-[15px] leading-[1.55]">
          La comparativa SealMetrics vs GA4 vive en{" "}
          <Link href="/es/vs-ga4/" className="text-brand underline">
            /es/vs-ga4
          </Link>
          . Redirigiendo…
        </p>
      </main>
    </>
  );
}
