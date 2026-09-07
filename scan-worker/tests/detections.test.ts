import { describe, expect, it } from "vitest";
import { detectSignals } from "../src/detections";

describe("detectSignals", () => {
  it("HTML vacío no detecta nada", () => {
    const d = detectSignals("<!doctype html><html><head></head><body></body></html>");
    expect(d.ga4Detected).toBe(false);
    expect(d.gtmDetected).toBe(false);
    expect(d.metaPixelDetected).toBe(false);
    expect(d.tiktokPixelDetected).toBe(false);
    expect(d.consentBannerDetected).toBe(false);
    expect(d.platform).toBe("unknown");
  });

  it("detecta GA4 vía gtag", () => {
    const html = '<script src="https://www.googletagmanager.com/gtag/js?id=G-ABC123"></script>';
    expect(detectSignals(html).ga4Detected).toBe(true);
  });

  it("detecta GA legacy vía google-analytics.com", () => {
    const html = '<script src="https://www.google-analytics.com/analytics.js"></script>';
    expect(detectSignals(html).ga4Detected).toBe(true);
  });

  it("detecta GTM", () => {
    const html = '<script>(function(){var s="GTM-ABCD123";})()</script>';
    expect(detectSignals(html).gtmDetected).toBe(true);
  });

  it("detecta Meta Pixel vía fbevents.js", () => {
    const html = '<script src="https://connect.facebook.net/en_US/fbevents.js"></script>';
    expect(detectSignals(html).metaPixelDetected).toBe(true);
  });

  it("detecta Meta Pixel vía facebook.com/tr", () => {
    const html = '<img src="https://www.facebook.com/tr?id=123" />';
    expect(detectSignals(html).metaPixelDetected).toBe(true);
  });

  it("detecta TikTok Pixel vía ttq.load", () => {
    const html = "<script>ttq.load('ABC123');</script>";
    expect(detectSignals(html).tiktokPixelDetected).toBe(true);
  });

  it("detecta TikTok vía analytics.tiktok.com", () => {
    const html = '<script src="https://analytics.tiktok.com/i18n/pixel/events.js"></script>';
    expect(detectSignals(html).tiktokPixelDetected).toBe(true);
  });

  it.each([
    ["OneTrust", '<script src="//cdn.cookielaw.org/consent/OneTrust.js"></script>'],
    ["Cookiebot", '<script id="Cookiebot" src="https://consent.cookiebot.com/uc.js"></script>'],
    ["CookieYes", '<script src="https://cdn-cookieyes.com/client_data/abc.js"></script>'],
    ["Didomi", '<script>window.didomiConfig = {};</script>'],
    ["Usercentrics", '<script src="https://app.usercentrics.eu/browser-ui/latest/loader.js"></script>'],
    ["cookieconsent", '<script src="cookieconsent.min.js"></script>'],
  ])("detecta CMP: %s", (_name, html) => {
    expect(detectSignals(html).consentBannerDetected).toBe(true);
  });

  it("detecta Shopify", () => {
    const html = '<link rel="stylesheet" href="https://cdn.shopify.com/s/files/1/0001/theme.css">';
    expect(detectSignals(html).platform).toBe("shopify");
  });

  it("detecta WooCommerce", () => {
    const html = '<link href="/wp-content/plugins/woocommerce/assets/css/woocommerce.css">';
    expect(detectSignals(html).platform).toBe("woocommerce");
  });

  it("detecta VTEX", () => {
    const html = '<script src="https://vtexassets.com/foo.js"></script>';
    expect(detectSignals(html).platform).toBe("vtex");
  });

  it("detecta Magento", () => {
    const html = '<script>Mage.Cookies = {};</script>';
    expect(detectSignals(html).platform).toBe("magento");
  });

  it("detecta PrestaShop", () => {
    const html = '<meta name="generator" content="PrestaShop">';
    expect(detectSignals(html).platform).toBe("prestashop");
  });

  it("detecta multi-pixel combinado (Shopify + GA4 + Meta + CMP)", () => {
    const html = `
      <script src="https://cdn.shopify.com/s/files/1/0001/theme.css"></script>
      <script src="https://www.googletagmanager.com/gtag/js?id=G-X"></script>
      <script src="https://connect.facebook.net/en_US/fbevents.js"></script>
      <script src="https://cdn.cookielaw.org/onetrust.js"></script>
    `;
    const d = detectSignals(html);
    expect(d.platform).toBe("shopify");
    expect(d.ga4Detected).toBe(true);
    expect(d.metaPixelDetected).toBe(true);
    expect(d.consentBannerDetected).toBe(true);
  });
});
