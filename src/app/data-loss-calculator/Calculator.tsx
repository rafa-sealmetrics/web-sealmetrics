"use client";

import { useState } from "react";
import Link from "next/link";

const CONSENT_REJECTION_RATE = 0.35;
const AD_BLOCKER_RATE = 0.4;
const BROWSER_COOKIE_LOSS = 0.4;
const SAMPLING_LOSS = 0.25;

function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return n.toFixed(0);
}

function formatPercent(n: number): string {
  return `${(n * 100).toFixed(0)}%`;
}

export function Calculator() {
  const [monthlyVisitors, setMonthlyVisitors] = useState<string>("");
  const [conversionRate, setConversionRate] = useState<string>("2");
  const [avgOrderValue, setAvgOrderValue] = useState<string>("80");
  const [region, setRegion] = useState<"eu" | "us" | "mixed">("eu");
  const [hasCalculated, setHasCalculated] = useState(false);

  const visitors = parseInt(monthlyVisitors.replace(/[,.\s]/g, ""), 10) || 0;
  const crRate = parseFloat(conversionRate) / 100 || 0;
  const aov = parseFloat(avgOrderValue) || 0;

  const consentRate = region === "eu" ? 0.35 : region === "us" ? 0.1 : 0.22;

  // Cascade of losses
  const afterConsent = visitors * (1 - consentRate);
  const afterAdBlock = afterConsent * (1 - AD_BLOCKER_RATE);
  const afterBrowser = afterAdBlock * (1 - BROWSER_COOKIE_LOSS);
  const afterSampling = afterBrowser * (1 - SAMPLING_LOSS);

  const ga4Visible = Math.round(afterSampling);
  const lostVisitors = visitors - ga4Visible;
  const lossPercentage = visitors > 0 ? lostVisitors / visitors : 0;
  const capturePercentage = visitors > 0 ? ga4Visible / visitors : 0;

  // Revenue impact
  const realConversions = Math.round(visitors * crRate);
  const ga4Conversions = Math.round(ga4Visible * crRate);
  const lostConversions = realConversions - ga4Conversions;
  const lostRevenue = lostConversions * aov;
  const annualLostRevenue = lostRevenue * 12;

  const handleCalculate = () => {
    if (visitors > 0) setHasCalculated(true);
  };

  const funnel = [
    {
      label: "Real visitors on your site",
      value: visitors,
      width: 100,
      color: "bg-text-primary",
    },
    {
      label: `After consent banner (${formatPercent(consentRate)} decline)`,
      value: Math.round(afterConsent),
      width: visitors > 0 ? (afterConsent / visitors) * 100 : 0,
      color: "bg-text-body",
    },
    {
      label: "After ad blockers (40% strip tracking)",
      value: Math.round(afterAdBlock),
      width: visitors > 0 ? (afterAdBlock / visitors) * 100 : 0,
      color: "bg-text-secondary",
    },
    {
      label: "After browser cookie restrictions",
      value: Math.round(afterBrowser),
      width: visitors > 0 ? (afterBrowser / visitors) * 100 : 0,
      color: "bg-text-tertiary",
    },
    {
      label: "After GA4 sampling and thresholds",
      value: ga4Visible,
      width: visitors > 0 ? capturePercentage * 100 : 0,
      color: "bg-red-alert",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      {/* Inputs */}
      <div className="bg-warm-white border border-warm-100 rounded-[4px] p-10">
        <h2 className="font-serif text-[1.35rem] font-medium text-text-primary mb-2">
          Your numbers
        </h2>
        <p className="text-[0.85rem] text-text-secondary mb-8">
          Enter your approximate figures. The calculation uses industry-standard
          loss rates.
        </p>

        <div className="space-y-6">
          <div>
            <label className="block text-[0.8rem] font-medium text-text-body mb-1.5">
              Monthly website visitors
            </label>
            <input
              type="text"
              inputMode="numeric"
              value={monthlyVisitors}
              onChange={(e) => {
                setMonthlyVisitors(e.target.value);
                setHasCalculated(false);
              }}
              placeholder="e.g. 100000"
              className="w-full px-4 py-3 text-[0.9rem] border border-warm-200 rounded-[4px] bg-white text-text-primary outline-none focus:border-text-body transition-colors"
            />
          </div>

          <div>
            <label className="block text-[0.8rem] font-medium text-text-body mb-1.5">
              Primary audience region
            </label>
            <select
              value={region}
              onChange={(e) => {
                setRegion(e.target.value as "eu" | "us" | "mixed");
                setHasCalculated(false);
              }}
              className="w-full px-4 py-3 text-[0.9rem] border border-warm-200 rounded-[4px] bg-white text-text-primary outline-none focus:border-text-body transition-colors"
            >
              <option value="eu">Europe (GDPR, 35% consent rejection)</option>
              <option value="us">United States (10% consent rejection)</option>
              <option value="mixed">Mixed / Global (22% consent rejection)</option>
            </select>
          </div>

          <div>
            <label className="block text-[0.8rem] font-medium text-text-body mb-1.5">
              Conversion rate (%)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={conversionRate}
              onChange={(e) => {
                setConversionRate(e.target.value);
                setHasCalculated(false);
              }}
              placeholder="2"
              className="w-full px-4 py-3 text-[0.9rem] border border-warm-200 rounded-[4px] bg-white text-text-primary outline-none focus:border-text-body transition-colors"
            />
          </div>

          <div>
            <label className="block text-[0.8rem] font-medium text-text-body mb-1.5">
              Average order value (EUR)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={avgOrderValue}
              onChange={(e) => {
                setAvgOrderValue(e.target.value);
                setHasCalculated(false);
              }}
              placeholder="80"
              className="w-full px-4 py-3 text-[0.9rem] border border-warm-200 rounded-[4px] bg-white text-text-primary outline-none focus:border-text-body transition-colors"
            />
          </div>

          <button
            type="button"
            onClick={handleCalculate}
            disabled={visitors === 0}
            className="w-full py-3.5 text-[0.95rem] font-medium text-white bg-text-primary rounded-[4px] hover:bg-[#333] transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Calculate Data Loss
          </button>

          <p className="text-[0.75rem] text-text-tertiary text-center">
            Loss rates based on published industry research and SealMetrics
            client benchmarks.
          </p>
        </div>
      </div>

      {/* Results */}
      <div>
        {!hasCalculated ? (
          <div className="p-10 bg-warm-white border border-warm-100 rounded-[4px] text-center">
            <p className="text-[1rem] text-text-tertiary">
              Enter your numbers and click Calculate to see results.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Summary cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-warm-white border border-warm-100 rounded-[4px]">
                <p className="text-[0.75rem] text-text-tertiary uppercase tracking-wider mb-1">
                  GA4 reports
                </p>
                <p className="font-mono text-[1.8rem] font-medium text-red-alert leading-tight">
                  {formatNumber(ga4Visible)}
                </p>
                <p className="text-[0.8rem] text-text-tertiary mt-1">
                  {formatPercent(capturePercentage)} of real traffic
                </p>
              </div>
              <div className="p-6 bg-warm-white border border-warm-100 rounded-[4px]">
                <p className="text-[0.75rem] text-text-tertiary uppercase tracking-wider mb-1">
                  SealMetrics captures
                </p>
                <p className="font-mono text-[1.8rem] font-medium text-green-muted leading-tight">
                  {formatNumber(visitors)}
                </p>
                <p className="text-[0.8rem] text-text-tertiary mt-1">
                  100% of real traffic
                </p>
              </div>
            </div>

            {/* Lost visitors */}
            <div className="p-6 bg-warm-white border border-warm-100 rounded-[4px]">
              <p className="text-[0.85rem] text-text-secondary mb-1">
                You are invisible to
              </p>
              <p className="font-mono text-[2.4rem] font-medium text-text-primary leading-tight">
                {formatNumber(lostVisitors)}{" "}
                <span className="text-[1rem] text-text-tertiary">
                  visitors/month
                </span>
              </p>
              <p className="text-[0.85rem] text-red-alert mt-2">
                That is {formatPercent(lossPercentage)} of your real traffic that
                GA4 never records.
              </p>
            </div>

            {/* Funnel */}
            <div>
              <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-4">
                Where the data disappears
              </h3>
              <div className="space-y-5">
                {funnel.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-[0.8rem] mb-1.5">
                      <span className="text-text-secondary">{item.label}</span>
                      <span className="font-mono text-text-primary font-medium">
                        {formatNumber(item.value)}
                      </span>
                    </div>
                    <div className="h-5 bg-warm-100 rounded-[2px]">
                      <div
                        className={`h-full ${item.color} rounded-[2px] transition-all duration-500`}
                        style={{ width: `${Math.max(item.width, 1)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 border border-warm-100 rounded-[4px]">
                <div className="flex justify-between text-[0.8rem] mb-1.5">
                  <span className="text-text-secondary">
                    What SealMetrics captures
                  </span>
                  <span className="font-mono text-green-muted font-medium">
                    {formatNumber(visitors)}
                  </span>
                </div>
                <div className="h-5 bg-warm-100 rounded-[2px]">
                  <div className="h-full bg-green-muted rounded-[2px] w-full" />
                </div>
              </div>
            </div>

            {/* Revenue impact */}
            {crRate > 0 && aov > 0 && (
              <div className="p-6 bg-warm-white border border-warm-100 rounded-[4px]">
                <h3 className="font-serif text-[1.1rem] font-medium text-text-primary mb-4">
                  Revenue impact
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-[0.85rem]">
                    <span className="text-text-secondary">
                      Conversions GA4 sees
                    </span>
                    <span className="font-mono text-text-primary">
                      {formatNumber(ga4Conversions)}/mo
                    </span>
                  </div>
                  <div className="flex justify-between text-[0.85rem]">
                    <span className="text-text-secondary">
                      Real conversions happening
                    </span>
                    <span className="font-mono text-text-primary">
                      {formatNumber(realConversions)}/mo
                    </span>
                  </div>
                  <div className="pt-3 border-t border-warm-100 flex justify-between text-[0.85rem]">
                    <span className="text-text-secondary">
                      Untracked conversions
                    </span>
                    <span className="font-mono text-red-alert font-medium">
                      {formatNumber(lostConversions)}/mo
                    </span>
                  </div>
                  <div className="flex justify-between text-[0.85rem]">
                    <span className="text-text-secondary">
                      Unattributed revenue (monthly)
                    </span>
                    <span className="font-mono text-red-alert font-medium">
                      {"\u20AC"}{formatNumber(lostRevenue)}
                    </span>
                  </div>
                  <div className="flex justify-between text-[0.95rem] pt-3 border-t border-warm-100">
                    <span className="text-text-primary font-medium">
                      Annual invisible revenue
                    </span>
                    <span className="font-mono text-red-alert font-medium">
                      {"\u20AC"}{formatNumber(annualLostRevenue)}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="text-center pt-4">
              <Link
                href="/demo"
                className="inline-flex items-center px-9 py-4 text-[1rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
              >
                See Your Real Data
              </Link>
              <p className="mt-3 text-[0.8rem] text-text-tertiary">
                30-minute demo with your actual traffic. No commitment.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
