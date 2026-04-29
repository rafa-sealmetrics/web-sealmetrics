"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { DemoTier } from "@/lib/demo-scoring";

interface Variant {
  eyebrow: string;
  headline: React.ReactNode;
  lede: React.ReactNode;
  primaryCta: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string };
  next: { title: string; desc: string }[];
}

const variants: Record<DemoTier, Variant> = {
  A: {
    eyebrow: "Priority slot reserved",
    headline: <>Your audit is in the founder&apos;s queue.</>,
    lede: (
      <>
        From your answers, we&apos;re going to set this up directly with the founder. Pick a 30-minute slot below — we&apos;ll prepare your real-data audit before the call.
      </>
    ),
    primaryCta: {
      label: "Book my 30-min walkthrough →",
      href: "https://cal.com/sealmetrics",
      external: true,
    },
    secondaryCta: { label: "Back to homepage", href: "/" },
    next: [
      {
        title: "Pick your slot",
        desc: "Direct Cal.com link with the founder. No sales handoff.",
      },
      {
        title: "We prepare your audit",
        desc: "We pull your site through the gap calculator and bring real numbers to the call.",
      },
      {
        title: "30-minute walkthrough",
        desc: "Side-by-side with GA4 on your own data. If it&apos;s not for you, we tell you.",
      },
    ],
  },
  B: {
    eyebrow: "Audit confirmed",
    headline: <>Your audit is being written by hand.</>,
    lede: (
      <>
        We&apos;ll send you a personalised report within 24 hours with the gap between GA4 and your real backend revenue. No automated sequence.
      </>
    ),
    primaryCta: {
      label: "Create a free account",
      href: "https://my.sealmetrics.com/register",
      external: true,
    },
    secondaryCta: { label: "Back to homepage", href: "/" },
    next: [
      {
        title: "Audit delivered in 24h",
        desc: "Human-written analysis of your GA4 gap. Sent to your inbox.",
      },
      {
        title: "Optional: install the pixel now",
        desc: "Create a free account and we&apos;ll capture real data before the audit lands.",
      },
      {
        title: "Follow-up call if it makes sense",
        desc: "If the audit shows a meaningful gap, we&apos;ll suggest a 30-min walkthrough.",
      },
    ],
  },
  C: {
    eyebrow: "Thanks for taking the time",
    headline: <>We&apos;ll keep you in the loop.</>,
    lede: (
      <>
        Your situation isn&apos;t the best fit for SealMetrics today, but the analytics landscape is moving fast. We&apos;ll send you the occasional piece of writing on cookieless analytics and EU privacy.
      </>
    ),
    primaryCta: {
      label: "Calculate your data loss",
      href: "/data-loss-calculator",
    },
    secondaryCta: { label: "Read the blog", href: "/blog" },
    next: [
      {
        title: "Use the data-loss calculator",
        desc: "Free tool. Estimate your GA4 blind spot with three inputs.",
      },
      {
        title: "Read the cookieless analytics primer",
        desc: "How EU privacy is changing measurement — and what to do about it.",
      },
      {
        title: "We&apos;ll be here when the time fits",
        desc: "If your context changes, the demo form is always open.",
      },
    ],
  },
};

function isTier(value: string | null): value is DemoTier {
  return value === "A" || value === "B" || value === "C";
}

export function ThankYouVariants() {
  const params = useSearchParams();
  const tierParam = params.get("tier");
  const tier: DemoTier = isTier(tierParam) ? tierParam : "B";
  const v = variants[tier];

  return (
    <div className="max-w-[640px] mx-auto px-5 sm:px-8">
      <div className="w-14 h-14 mx-auto mb-7 rounded-full flex items-center justify-center" style={{ background: "rgba(45,139,109,0.12)" }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2D8B6D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <span className="eyebrow mx-auto mb-5" style={{ display: "inline-flex", justifyContent: "center" }}>
        {v.eyebrow}
      </span>
      <h1
        className="font-semibold text-ink leading-[1.1] tracking-[-0.025em] text-center mt-4"
        style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}
      >
        {v.headline}
      </h1>
      <p className="text-[16px] leading-[1.6] text-ink-soft text-center mt-5 mx-auto max-w-[54ch]">
        {v.lede}
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-3 mt-9">
        {v.primaryCta.external ? (
          <a
            href={v.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 text-[15px] font-semibold text-white bg-ink rounded-md no-underline hover:bg-brand transition-colors"
          >
            {v.primaryCta.label}
          </a>
        ) : (
          <Link
            href={v.primaryCta.href}
            className="inline-flex items-center justify-center px-7 py-3.5 text-[15px] font-semibold text-white bg-ink rounded-md no-underline hover:bg-brand transition-colors"
          >
            {v.primaryCta.label}
          </Link>
        )}
        {v.secondaryCta && (
          <Link
            href={v.secondaryCta.href}
            className="inline-flex items-center justify-center px-7 py-3.5 text-[15px] font-semibold text-ink border border-warm-200 rounded-md no-underline hover:bg-warm-50 transition-colors"
          >
            {v.secondaryCta.label}
          </Link>
        )}
      </div>

      <div className="mt-14 text-left">
        <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft mb-5">
          What happens next
        </h3>
        <div className="flex flex-col gap-4">
          {v.next.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 pb-4 border-b border-warm-100 last:border-0 last:pb-0"
            >
              <span className="font-mono text-[12px] font-semibold text-brand mt-0.5 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-[14.5px] font-semibold text-ink leading-[1.4]">
                  {item.title}
                </p>
                <p className="text-[13.5px] text-ink-soft mt-1 leading-[1.55]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
