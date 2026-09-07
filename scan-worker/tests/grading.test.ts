import { describe, expect, it } from "vitest";
import { computeRisk } from "../src/grading";
import type { Detections } from "../src/types";

function det(overrides: Partial<Detections> = {}): Detections {
  return {
    ga4Detected: false,
    gtmDetected: false,
    metaPixelDetected: false,
    tiktokPixelDetected: false,
    consentBannerDetected: false,
    platform: "unknown",
    ...overrides,
  };
}

describe("computeRisk — grading", () => {
  it("A: sin tracking detectado", () => {
    const r = computeRisk(det(), 50000);
    expect(r.attributionSecurityGrade).toBe("A");
    expect(r.estimatedBlindSpotRate).toBe(0);
    expect(r.estimatedMonthlyLeakage).toBe(0);
  });

  it("B: solo GA4 detectado, sin CMP, sin pixels", () => {
    const r = computeRisk(det({ ga4Detected: true }), 50000);
    expect(r.attributionSecurityGrade).toBe("B");
  });

  it("B: solo GTM detectado", () => {
    expect(computeRisk(det({ gtmDetected: true }), 0).attributionSecurityGrade).toBe("B");
  });

  it("C: pixel de Meta sin CMP", () => {
    const r = computeRisk(det({ metaPixelDetected: true }), 10000);
    expect(r.attributionSecurityGrade).toBe("C");
    expect(r.estimatedBlindSpotRate).toBe(0.2);
  });

  it("C: pixel de TikTok sin CMP", () => {
    expect(computeRisk(det({ tiktokPixelDetected: true }), 0).attributionSecurityGrade).toBe("C");
  });

  it("D: CMP + sólo GA/GTM", () => {
    const r = computeRisk(det({ consentBannerDetected: true, ga4Detected: true }), 20000);
    expect(r.attributionSecurityGrade).toBe("D");
  });

  it("D-: CMP + Meta Pixel", () => {
    const r = computeRisk(
      det({ consentBannerDetected: true, metaPixelDetected: true }),
      20000,
    );
    expect(r.attributionSecurityGrade).toBe("D-");
  });

  it("D-: CMP + TikTok Pixel", () => {
    const r = computeRisk(
      det({ consentBannerDetected: true, tiktokPixelDetected: true }),
      20000,
    );
    expect(r.attributionSecurityGrade).toBe("D-");
  });

  it("F: CMP + Meta + GA", () => {
    const r = computeRisk(
      det({
        consentBannerDetected: true,
        metaPixelDetected: true,
        ga4Detected: true,
      }),
      100000,
    );
    expect(r.attributionSecurityGrade).toBe("F");
  });
});

describe("computeRisk — cálculo", () => {
  it("cookieDependentTracking true cuando CMP + algún tracker", () => {
    const r = computeRisk(
      det({ consentBannerDetected: true, ga4Detected: true }),
      0,
    );
    expect(r.cookieDependentTracking).toBe(true);
  });

  it("cookieDependentTracking false si no hay CMP", () => {
    const r = computeRisk(det({ metaPixelDetected: true }), 0);
    expect(r.cookieDependentTracking).toBe(false);
  });

  it("blindSpotRate 0.35 si CMP + pixel", () => {
    const r = computeRisk(
      det({ consentBannerDetected: true, metaPixelDetected: true }),
      50000,
    );
    expect(r.estimatedBlindSpotRate).toBe(0.35);
    expect(r.blindTrafficValue).toBe(17500);
    expect(r.estimatedMonthlyLeakage).toBe(3500);
  });

  it("blindSpotRate 0.20 si hay pixels sin CMP", () => {
    const r = computeRisk(det({ metaPixelDetected: true }), 50000);
    expect(r.estimatedBlindSpotRate).toBe(0.2);
    expect(r.blindTrafficValue).toBe(10000);
    expect(r.estimatedMonthlyLeakage).toBe(2000);
  });

  it("blindSpotRate 0 si no hay tracking", () => {
    const r = computeRisk(det(), 50000);
    expect(r.estimatedBlindSpotRate).toBe(0);
    expect(r.blindTrafficValue).toBe(0);
    expect(r.estimatedMonthlyLeakage).toBe(0);
  });

  it("adSpend negativo o no-numérico se clampa a 0", () => {
    const r1 = computeRisk(det({ metaPixelDetected: true }), -100);
    expect(r1.blindTrafficValue).toBe(0);
    const r2 = computeRisk(det({ metaPixelDetected: true }), Number.NaN);
    expect(r2.blindTrafficValue).toBe(0);
  });
});
