// Cálculo del attribution security grade + estimación de leakage mensual.
// Las constantes son explícitas y reflejan la lógica acordada con Rafa.
// Cualquier cambio debe revisarse en conjunto: el grade influye el copy de la landing.

import type { Detections, Grade, Risk } from "./types";

// Tasa de pérdida de señal cuando hay tracking cookie-dependent detrás de un CMP.
// 35% es la cota superior conservadora que defendemos en la landing.
const BLIND_SPOT_WITH_CONSENT = 0.35;

// Tasa cuando hay pixels pero no se detecta CMP (browser-level loss: Safari ITP, in-app, etc.)
const BLIND_SPOT_PIXELS_NO_CONSENT = 0.2;

// Fracción del "blind traffic" que asumimos que se convierte en gasto ineficiente.
// (No es el 100% del valor ciego — sólo la parte que se mal-optimiza.)
const LEAKAGE_OF_BLIND = 0.2;

function gradeFor(d: Detections): Grade {
  const anyPixel = d.metaPixelDetected || d.tiktokPixelDetected;
  const anyAnalytics = d.ga4Detected || d.gtmDetected;

  // F — peor caso: CMP + adtech (Meta/TikTok) + analytics (GA/GTM)
  if (d.consentBannerDetected && anyPixel && anyAnalytics) return "F";

  // D- — CMP + algún pixel de ads/social
  if (d.consentBannerDetected && anyPixel) return "D-";

  // D — CMP + sólo GA/GTM
  if (d.consentBannerDetected && anyAnalytics) return "D";

  // C — pixels detectados sin CMP visible (sigue habiendo browser-level loss)
  if (anyPixel) return "C";

  // B — solo analytics básico, sin CMP, sin pixels de ads
  if (anyAnalytics) return "B";

  // A — sin tracking tradicional detectado o señales insuficientes
  return "A";
}

export function computeRisk(detections: Detections, adSpend: number): Risk {
  const anyPixel =
    detections.metaPixelDetected ||
    detections.tiktokPixelDetected ||
    detections.ga4Detected ||
    detections.gtmDetected;

  const cookieDependentTracking = detections.consentBannerDetected && anyPixel;

  let estimatedBlindSpotRate: number;
  if (cookieDependentTracking) {
    estimatedBlindSpotRate = BLIND_SPOT_WITH_CONSENT;
  } else if (anyPixel) {
    estimatedBlindSpotRate = BLIND_SPOT_PIXELS_NO_CONSENT;
  } else {
    estimatedBlindSpotRate = 0;
  }

  const safeAdSpend = Number.isFinite(adSpend) && adSpend > 0 ? adSpend : 0;
  const blindTrafficValue = safeAdSpend * estimatedBlindSpotRate;
  const estimatedMonthlyLeakage = blindTrafficValue * LEAKAGE_OF_BLIND;

  return {
    attributionSecurityGrade: gradeFor(detections),
    cookieDependentTracking,
    estimatedBlindSpotRate,
    blindTrafficValue: Math.round(blindTrafficValue),
    estimatedMonthlyLeakage: Math.round(estimatedMonthlyLeakage),
  };
}
