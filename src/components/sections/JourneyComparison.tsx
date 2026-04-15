import Image from "next/image";
import Link from "next/link";

const revenueCards = [
  {
    title: "Know your real best-selling channels",
    withGA4: "GA4 attributes 40-60% of conversions to \"direct / none\" because cookies were blocked. You see a distorted channel mix.",
    withSeal: "SealMetrics tracks every session cookielessly. You see which channels actually generate purchases — and how much to invest in each.",
  },
  {
    title: "Find product pages that leak revenue",
    withGA4: "GA4 samples high-traffic pages, so a product with 12,000 visits and a 0.3% conversion rate looks normal in aggregated data.",
    withSeal: "With 100% data you spot the exact pages where visitors have high purchase intent but drop off. Fix the page, not the ad budget.",
  },
  {
    title: "Measure real campaign ROAS",
    withGA4: "GA4 recorded 340 conversions for your Meta campaign. Looks like it is breaking even. Should you cut it?",
    withSeal: "SealMetrics recorded 1,290 real conversions for the same campaign. True ROAS is 3.8x. You scale it instead of killing it.",
  },
  {
    title: "See which emails and promotions actually sell",
    withGA4: "A customer clicks your Tuesday email, browses, and buys on Friday. GA4 attributes the sale to \"direct\" because the session cookie expired.",
    withSeal: "SealMetrics attributes the conversion to the email campaign that started the visit — because it does not depend on cookies to connect sessions.",
  },
  {
    title: "Sell everywhere without data blind spots",
    withGA4: "Expanding to France, Germany, or Brazil? Each country has different consent laws. GA4 loses more traffic wherever regulations are stricter.",
    withSeal: "SealMetrics is consentless analytics worldwide. We comply with GDPR, ePrivacy, LGPD, POPIA and every major privacy regulation. Same 100% data in every market.",
  },
  {
    title: "React in real time during peak sales",
    withGA4: "Black Friday at 10 AM. GA4 data is 4-8 hours behind and sampling kicks in at high traffic. You are flying blind at the worst possible moment.",
    withSeal: "SealMetrics shows real-time data with zero sampling, even during your highest-traffic moments. And our 846-byte pixel means zero impact on page speed — your site stays fast when it matters most.",
  },
];

const costCards = [
  {
    title: "Cut ad spend on campaigns that don't convert",
    withGA4: "GA4 says your Meta campaign generates 40 conversions/month. You keep funding it based on that number.",
    withSeal: "SealMetrics shows the real number is 6. You cut 3,200 euro/month in wasted spend and reallocate to what actually works.",
  },
  {
    title: "Remove your consent banner and recover traffic",
    withGA4: "40-60% of EU visitors reject cookies. GA4 loses them entirely. Your bounce rate includes a popup that adds friction before visitors even see your product.",
    withSeal: "SealMetrics needs no cookies and no consent banner. Clients see 8% lower bounce rates from day one. That is revenue you were losing to a popup.",
  },
  {
    title: "Stop overfunding the wrong channels",
    withGA4: "GA4 says paid search drives 45% of revenue. You build your entire budget around that number.",
    withSeal: "SealMetrics shows the real number is 28%. You have been overspending 12,000 euro/month on a channel that is half as effective as you thought.",
  },
  {
    title: "Catch broken pages before they cost you a full day",
    withGA4: "A JavaScript error on your checkout page silently fails for 3% of visitors. GA4 shows a vague dip in conversions... 24 hours later.",
    withSeal: "LENS AI monitors 60+ rules and catches it in minutes. 900 lost transactions per month prevented, not discovered after the fact.",
  },
  {
    title: "End the weekly data reconciliation meeting",
    withGA4: "GA4 says 1,200 conversions. Your CRM says 1,800. Your ad platform says 2,100. Your team spends 6 hours per week explaining the gap to the board.",
    withSeal: "SealMetrics is one source of truth — 100% observed data, zero sampling, zero modelling. The numbers match because they are the real numbers.",
  },
  {
    title: "Keep your site fast — your SEO team will love you",
    withGA4: "GA4's gtag.js adds 80-90KB to every page load. Plus your consent manager, heatmap tool, and session recorder. Each script slows your Core Web Vitals.",
    withSeal: "SealMetrics' pixel is 846 bytes. That is 100x lighter than GA4. Your pages load faster, your CWV scores improve, and your SEO team stops complaining about analytics scripts.",
  },
];

export function JourneyComparison() {
  return (
    <section className="py-28 bg-warm-white border-t border-warm-100">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Increase revenue */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-green-muted">
              <path d="M10 16V4M5 9l5-5 5 5" />
            </svg>
            <span className="text-[0.8rem] font-medium uppercase tracking-[0.06em] text-green-muted">
              Revenue
            </span>
          </div>
          <h2 className="headline-section mb-4">
            Find revenue you did not know you had.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-12 max-w-[560px]">
            Your eCommerce is already generating more revenue than GA4 can show
            you. Here is what changes when you see 100% of your data with
            complete{" "}
            <Link href="/glossary/revenue-attribution" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors">
              revenue attribution
            </Link>.
          </p>
          <div className="mb-10 border border-green-muted/20 rounded-[4px] overflow-hidden">
            <Image
              src="/screenshots/dashboard-traffic-sources.png"
              alt="SealMetrics traffic by source report showing revenue attribution across google organic, google cpc, affiliate, facebook, and newsletter channels"
              width={1080}
              height={960}
              className="w-full h-auto"
              unoptimized
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {revenueCards.map((card) => (
              <div
                key={card.title}
                className="p-6 border border-green-muted/20 rounded-[4px] bg-white"
              >
                <h3 className="text-[0.95rem] font-medium text-text-primary mb-4 leading-snug">
                  {card.title}
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="inline-block text-[0.7rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-1">
                      With GA4
                    </span>
                    <p className="text-[0.83rem] leading-[1.65] text-text-secondary">
                      {card.withGA4}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-warm-100">
                    <span className="inline-block text-[0.7rem] font-medium uppercase tracking-[0.06em] text-green-muted mb-1">
                      With SealMetrics
                    </span>
                    <p className="text-[0.83rem] leading-[1.65] text-text-primary font-medium">
                      {card.withSeal}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reduce costs */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-red-alert">
              <path d="M10 4v12M5 11l5 5 5-5" />
            </svg>
            <span className="text-[0.8rem] font-medium uppercase tracking-[0.06em] text-red-alert">
              Costs
            </span>
          </div>
          <h2 className="headline-section mb-4">
            Stop spending on what does not work.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-12 max-w-[560px]">
            Incomplete data hides waste.{" "}
            <Link href="/glossary/data-loss-in-analytics" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors">
              Data loss in analytics
            </Link>{" "}
            means you cannot see where money is leaking — or how to stop it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {costCards.map((card) => (
              <div
                key={card.title}
                className="p-6 border border-warm-100 rounded-[4px] bg-white"
              >
                <h3 className="text-[0.95rem] font-medium text-text-primary mb-4 leading-snug">
                  {card.title}
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="inline-block text-[0.7rem] font-medium uppercase tracking-[0.06em] text-text-tertiary mb-1">
                      With GA4
                    </span>
                    <p className="text-[0.83rem] leading-[1.65] text-text-secondary">
                      {card.withGA4}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-warm-100">
                    <span className="inline-block text-[0.7rem] font-medium uppercase tracking-[0.06em] text-green-muted mb-1">
                      With SealMetrics
                    </span>
                    <p className="text-[0.83rem] leading-[1.65] text-text-primary font-medium">
                      {card.withSeal}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
