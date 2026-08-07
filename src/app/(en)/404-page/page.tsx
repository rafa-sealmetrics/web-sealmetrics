import type { Metadata } from "next";
import { NotFoundContent } from "@/components/ui/NotFoundContent";

/**
 * Source route for out/404.html — the page GitHub Pages serves for any URL
 * that does not exist.
 *
 * It exists as a real route because a static export cannot produce out/404.html
 * from `app/not-found.tsx` without a root `app/layout.tsx`, and this app
 * deliberately has none: (en) and (es) are separate root layouts so each owns
 * its own <html lang>. Adding a root layout would nest <html> inside <html>.
 *
 * scripts/build-404.mjs moves the built file to out/404.html and DELETES this
 * route from the output, so /404-page/ is never published. It is noindex on top
 * of that, so it stays out of the sitemap even if the move ever fails.
 */
export const metadata: Metadata = {
  title: "Page not found (404) — SealMetrics",
  description:
    "That page does not exist or has moved. Jump to the product, pricing, how it works, the blog or the analytics glossary.",
  robots: { index: false, follow: true },
  openGraph: {
    title: "Page not found (404) — SealMetrics",
    description: "That page does not exist or has moved.",
    url: "https://sealmetrics.com/404.html",
    siteName: "SealMetrics",
    locale: "en_US",
    type: "website",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sealmetrics",
    title: "Page not found (404) — SealMetrics",
    description: "That page does not exist or has moved.",
    images: ["https://sealmetrics.com/og-image.png"],
  },
  // No canonical: a 404 must not present itself as a real document.
};

export default function Page() {
  return <NotFoundContent />;
}
