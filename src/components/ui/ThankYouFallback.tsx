/**
 * Static heading shipped as the Suspense fallback on the thank-you pages.
 *
 * The variant component behind the boundary reads `useSearchParams()`, so in a
 * static export it renders nothing at build time — which left the page with no
 * <h1> at all in the delivered HTML, and nothing readable for a visitor with
 * JavaScript disabled. This mirrors the neutral variant so there is always
 * exactly one <h1> in the HTML; hydration then swaps in the scored variant.
 */
export function ThankYouFallback({ locale = "en" }: { locale?: "en" | "es" }) {
  const copy =
    locale === "es"
      ? {
          eyebrow: "Gracias por tu tiempo",
          headline: "Gracias — te escribimos en breve.",
          lede: "Revisamos tu caso y te respondemos en un día laborable.",
        }
      : {
          eyebrow: "Thanks for taking the time",
          headline: "Thanks — we'll be in touch.",
          lede: "We'll review your situation and reply within one business day.",
        };

  return (
    <div className="max-w-[640px] mx-auto px-5 sm:px-8 text-center">
      <span
        className="eyebrow mx-auto mb-5"
        style={{ display: "inline-flex", justifyContent: "center" }}
      >
        {copy.eyebrow}
      </span>
      <h1
        className="font-semibold text-ink leading-[1.1] tracking-[-0.025em] mt-4"
        style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}
      >
        {copy.headline}
      </h1>
      <p className="text-[16.5px] leading-[1.6] text-ink-soft mt-5 mx-auto max-w-[58ch]">
        {copy.lede}
      </p>
    </div>
  );
}
