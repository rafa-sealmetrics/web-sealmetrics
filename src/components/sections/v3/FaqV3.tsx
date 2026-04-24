"use client";

import { useState } from "react";
import Link from "next/link";

const ITEMS = [
  {
    q: "Why pay for SealMetrics when GA4 is free?",
    a: "GA4 is free because you are the product — your data trains Google's ad models. More importantly, GA4 relies on cookies most EU visitors reject. You make budget decisions on a fraction of real data. The cost of SealMetrics is a rounding error compared to the cost of misallocated ad spend.",
  },
  {
    q: 'Why is "neutrality" a feature?',
    a: "Meta reports with Meta's bias. Google reports with Google's bias. GA lives inside Google's ecosystem. SealMetrics has no ad inventory to sell and no channel to favour — so brand, agencies and finance can all sign the same number without feeling they're signing against a rival.",
  },
  {
    q: "How accurate is cookieless tracking?",
    a: "A Spanish hotel chain measured +30% more traffic vs GA and 15–20% more attributed sales — approaching their CRM reality. A European hotel group discovered 50% of their traffic was invisible in their previous stack. No sampling, no modelling — every data point observed.",
  },
  {
    q: "Do I need to remove GA4?",
    a: "No. Most clients run SealMetrics alongside GA4 for the first 30 days so you can compare side by side. After that, most teams use SealMetrics as their source of truth and keep GA4 for specific Google product integrations.",
  },
  {
    q: "GDPR compliant without a consent banner?",
    a: "Yes. Cookieless by architecture — no cookies, no personal data storage, no cross-site tracking. 100% EU-hosted in Dublin, Ireland. Complies with GDPR, ePrivacy and Schrems II without consent banners.",
  },
  {
    q: "How long does implementation take?",
    a: "Five minutes to install. First data from the first hour. Our team handles full onboarding and configures goals, funnels and reports in week one.",
  },
];

export function FaqV3() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-28 bg-white border-t border-warm-100">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-end mb-14">
          <div>
            <span className="eyebrow mb-5">FAQ</span>
            <h2 className="h-section mt-5">
              The things every <em>CMO asks.</em>
            </h2>
          </div>
          <p className="text-[18px] leading-[1.55] text-ink-soft max-w-[54ch]">
            Straight answers. No fluff.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.8fr] gap-12 md:gap-20">
          <div>
            <p className="text-[16px] text-ink-soft leading-[1.55] mb-5">
              Still have questions? Our team — including the founder — is one message away.
            </p>
            <Link
              href="#audit"
              className="inline-flex items-center gap-2 bg-ink text-white px-7 py-3.5 rounded-md text-[15px] font-semibold no-underline hover:bg-brand transition-colors"
            >
              Talk to us →
            </Link>
          </div>

          <div className="flex flex-col gap-2.5">
            {ITEMS.map((item, i) => {
              const isOpen = i === openIdx;
              return (
                <button
                  key={item.q}
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className={`w-full text-left border rounded-xl px-7 py-5 transition-all ${
                    isOpen
                      ? "bg-ink text-white border-ink"
                      : "bg-white border-warm-100 hover:border-warm-200"
                  }`}
                >
                  <div className="flex justify-between items-center gap-6">
                    <h4 className={`text-[17px] font-semibold tracking-[-0.015em] ${isOpen ? "text-white" : "text-ink"}`}>
                      {item.q}
                    </h4>
                    <span
                      className={`w-7 h-7 rounded-md flex items-center justify-center text-[18px] font-normal shrink-0 transition-transform ${
                        isOpen ? "bg-brand text-white rotate-45" : "bg-warm-50 text-ink-soft"
                      }`}
                    >
                      +
                    </span>
                  </div>
                  {isOpen && (
                    <p className="mt-3.5 text-[14.5px] leading-[1.6] text-white/75 max-w-[62ch]">
                      {item.a}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
