import { type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface Card {
  title: string;
  desc: string;
  outcome: string;
  visual: ReactNode;
  /** Comparison cards show GA4 vs Complete lines */
  ga4?: string;
  complete?: string;
}

const cards: Card[] = [
  // Row 1: large left, small right
  {
    title: "Discover which channels actually drive revenue",
    desc: "Your GA4 says organic brings 12% of revenue. The real number is 4x higher — but you can't see it because GA4 lost the sessions.",
    ga4: "340 conversions attributed",
    complete: "1,290 conversions tracked",
    outcome: "Organic was 4x bigger than GA4 showed — budget reallocated.",
    visual: (
      <div className="flex items-end gap-2 h-12 mb-5">
        <div className="w-6 bg-warm-200 rounded-[2px]" style={{ height: "30%" }} />
        <div className="w-6 bg-warm-200 rounded-[2px]" style={{ height: "20%" }} />
        <div className="w-6 bg-green-muted rounded-[2px]" style={{ height: "100%" }} />
        <div className="w-6 bg-warm-200 rounded-[2px]" style={{ height: "45%" }} />
        <div className="w-6 bg-warm-200 rounded-[2px]" style={{ height: "15%" }} />
      </div>
    ),
  },
  {
    title: "Find the campaigns worth scaling",
    desc: "Your Meta campaign looks like it's breaking even.",
    ga4: "340 conversions recorded",
    complete: "1,290 real conversions",
    outcome: "True ROAS was 3.8x — the campaign deserved 3x more budget.",
    visual: (
      <div className="flex items-center gap-3 mb-5">
        <span className="font-mono text-[1.1rem] text-warm-300 line-through">340</span>
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-green-muted">
          <path d="M1 6h16M13 1l5 5-5 5" />
        </svg>
        <span className="font-mono text-[1.1rem] text-green-muted font-medium">1,290</span>
      </div>
    ),
  },
  // Row 2: small left, large right
  {
    title: "Catch problems before they cost you",
    desc: "A payment page error goes unnoticed for 14 hours.",
    ga4: "You see a dip in conversions... tomorrow",
    complete: "LENS AI alerts you at 3 AM with root cause",
    outcome: "Fixed in 20 minutes instead of losing a full day of revenue.",
    visual: (
      <div className="flex items-center gap-2 mb-5">
        <span className="inline-block w-2 h-2 rounded-full bg-green-muted animate-pulse" />
        <span className="font-mono text-[0.8rem] text-green-muted">LENS AI — alert triggered</span>
      </div>
    ),
  },
  {
    title: "Report numbers your CFO trusts",
    desc: "Your board sees different numbers from every tool. GA4 samples data and models conversions. SealMetrics observes everything — zero estimation, zero discrepancies.",
    ga4: "Sampled data, modeled conversions",
    complete: "100% observed data, zero sampling",
    outcome: "One source of truth — no more defending discrepancies.",
    visual: (
      <div className="font-mono text-[0.8rem] text-text-tertiary mb-5 space-y-1.5">
        <div className="flex justify-between max-w-[180px]">
          <span>Sampling</span>
          <span className="text-green-muted font-medium">0%</span>
        </div>
        <div className="flex justify-between max-w-[180px]">
          <span>Coverage</span>
          <span className="text-green-muted font-medium">100%</span>
        </div>
        <div className="flex justify-between max-w-[180px]">
          <span>Modelled</span>
          <span className="text-green-muted font-medium">0%</span>
        </div>
      </div>
    ),
  },
  // Row 3: large left, small right
  {
    title: "Real-time stats, even during Black Friday",
    desc: "While GA4 delays data for hours or samples it away during peak traffic, SealMetrics shows everything in real time. Every sale, every source, every conversion — as it happens, even during Black Friday.",
    outcome: "React to what's happening now, not what happened yesterday.",
    visual: (
      <div className="flex items-center gap-2 mb-5">
        <span className="inline-block w-2 h-2 rounded-full bg-green-muted animate-pulse" />
        <span className="font-mono text-[0.8rem] text-text-tertiary">
          Live &mdash;{" "}
          <span className="text-green-muted font-medium">2,847</span> visitors now
        </span>
      </div>
    ),
  },
  {
    title: "SuperAPI: your data team's best friend",
    desc: "One API that serves raw analytics data to any tool — BI dashboards, data warehouses, custom models. No export limits, no quotas.",
    outcome: "Your data team builds on complete data, not sampled exports.",
    visual: (
      <div className="font-mono text-[0.75rem] text-text-tertiary mb-5 space-y-0.5">
        <div><span className="text-green-muted">GET</span> /api/v1/conversions</div>
        <div><span className="text-green-muted">GET</span> /api/v1/sources</div>
        <div><span className="text-green-muted">GET</span> /api/v1/journeys</div>
      </div>
    ),
  },
  // Row 4: small left, large right
  {
    title: "No consent banner. More conversions.",
    desc: "SealMetrics is cookieless by architecture. No cookies means no consent banner. Clients report 8% lower bounce rates from day one.",
    outcome: "Remove friction, recover conversions — and stay 100% GDPR compliant.",
    visual: (
      <div className="flex items-center gap-3 mb-5">
        <span className="font-mono text-[0.8rem] text-warm-300 line-through">Cookie banner</span>
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-green-muted">
          <path d="M1 6h16M13 1l5 5-5 5" />
        </svg>
        <span className="font-mono text-[0.8rem] text-green-muted font-medium">Clean UX</span>
      </div>
    ),
  },
  {
    title: "MCP: ask your data anything",
    desc: "Connect SealMetrics to Claude, ChatGPT or any AI assistant via MCP. Ask questions in plain language and get answers from your actual analytics data — no dashboards, no SQL, no waiting for your analyst.",
    outcome: "The insights that used to take a meeting now take a sentence.",
    visual: (
      <div className="font-mono text-[0.75rem] mb-5 space-y-1.5">
        <div className="p-2 bg-white border border-warm-100 rounded-[4px]">
          <span className="text-text-tertiary">&gt; </span>
          <span className="text-text-secondary">Which SKUs get added to cart the most but bought the least?</span>
        </div>
        <div className="p-2 bg-white border border-warm-100 rounded-[4px]">
          <span className="text-text-tertiary">&gt; </span>
          <span className="text-text-secondary">Which SKUs are trending up and could break out next month?</span>
        </div>
        <div className="p-2 bg-white border border-warm-100 rounded-[4px]">
          <span className="text-text-tertiary">&gt; </span>
          <span className="text-text-secondary">What campaign drove the most revenue last Tuesday?</span>
        </div>
        <div className="p-2 bg-white border border-warm-100 rounded-[4px]">
          <span className="text-text-tertiary">&gt; </span>
          <span className="text-text-secondary">Which landing pages have the highest drop-off before purchase?</span>
        </div>
        <div className="p-2 bg-white border border-warm-100 rounded-[4px]">
          <span className="text-text-tertiary">&gt; </span>
          <span className="text-text-secondary">Compare paid vs organic revenue this month vs last month.</span>
        </div>
      </div>
    ),
  },
];

/**
 * Bento grid: alternating large/small cards per row.
 * Row pattern: [large 2/3, small 1/3], [small 1/3, large 2/3], repeat.
 */
function BentoCard({ card, large }: { card: Card; large: boolean }) {
  return (
    <div className={`p-8 border border-warm-100 rounded-[4px] bg-warm-white ${large ? "md:col-span-2" : "md:col-span-1"}`}>
      {card.visual}
      <h3 className={`font-medium text-text-primary mb-3 ${large ? "text-[1.2rem]" : "text-[1.05rem]"}`}>
        {card.title}
      </h3>
      <p className="text-[0.9rem] text-text-secondary mb-4 leading-[1.7]">
        {card.desc}
      </p>
      {card.ga4 && card.complete && (
        <div className="space-y-2 mb-4">
          <div className="flex items-start gap-2 text-[0.85rem]">
            <span className="text-text-tertiary shrink-0">GA4:</span>
            <span className="text-text-secondary">{card.ga4}</span>
          </div>
          <div className="flex items-start gap-2 text-[0.85rem]">
            <span className="text-green-muted shrink-0">Complete:</span>
            <span className="text-text-primary font-medium">{card.complete}</span>
          </div>
        </div>
      )}
      <p className="text-[0.85rem] text-green-muted font-medium">
        {card.outcome}
      </p>
    </div>
  );
}

export function Scenarios() {
  // First 8 cards in bento pairs, last card (MCP) full-width
  const paired = cards.slice(0, 8);
  const mcp = cards[8];

  const rows: [Card, Card][] = [];
  for (let i = 0; i < paired.length; i += 2) {
    rows.push([paired[i], paired[i + 1]]);
  }

  return (
    <section className="py-28 bg-white border-t border-warm-100">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <h2 className="headline-section mb-4">
          Here is what you can do with complete data.
        </h2>
        <p className="text-[1.05rem] leading-[1.7] text-text-secondary mb-16 max-w-[600px]">
          When you see 100% of your traffic and conversions, you stop guessing
          and start making decisions that grow revenue. Here is what our{" "}
          <Link href="/product" className="text-text-primary no-underline border-b border-warm-200 hover:border-text-primary transition-colors">
            eCommerce analytics platform
          </Link>{" "}
          makes possible.
        </p>

        <div className="space-y-6">
          {rows.map((row, i) => {
            const evenRow = i % 2 === 0;
            return (
              <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {evenRow ? (
                  <>
                    <BentoCard card={row[0]} large />
                    <BentoCard card={row[1]} large={false} />
                  </>
                ) : (
                  <>
                    <BentoCard card={row[0]} large={false} />
                    <BentoCard card={row[1]} large />
                  </>
                )}
              </div>
            );
          })}

          {/* MCP — full-width featured card */}
          {mcp && (
            <div className="p-8 md:p-10 border border-warm-100 rounded-[4px] bg-warm-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-[1.3rem] font-medium text-text-primary mb-3">
                    {mcp.title}
                  </h3>
                  <p className="text-[0.95rem] text-text-secondary mb-4 leading-[1.7]">
                    {mcp.desc}
                  </p>
                  <p className="text-[0.85rem] text-green-muted font-medium mb-6">
                    {mcp.outcome}
                  </p>
                  <div className="border border-warm-100 rounded-[4px] overflow-hidden">
                    <Image
                      src="/screenshots/dashboard-property-skus.png"
                      alt="SealMetrics property analysis showing SKU-level conversion data by source, medium and campaign"
                      width={1080}
                      height={900}
                      className="w-full h-auto"
                      unoptimized
                    />
                  </div>
                </div>
                <div>{mcp.visual}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
