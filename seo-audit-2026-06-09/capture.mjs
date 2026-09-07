import { chromium } from 'playwright';
import fs from 'fs';

const OUT = '/Users/rafa/code/web-sealmetrics/seo-audit-2026-06-09/screenshots';
const pages = [
  ['home', 'https://sealmetrics.com/'],
  ['pricing', 'https://sealmetrics.com/pricing/'],
  ['vs-ga360', 'https://sealmetrics.com/vs/ga360/'],
  ['blog-ga4-13pct', 'https://sealmetrics.com/blog/why-ga4-shows-13pct-eu-traffic/'],
  ['es-home', 'https://sealmetrics.com/es/'],
];
const viewports = [
  ['desktop', { width: 1440, height: 900 }, false],
  ['mobile', { width: 390, height: 844 }, true],
];

const results = [];
const browser = await chromium.launch();
for (const [vname, vp, isMobile] of viewports) {
  const ctx = await browser.newContext({
    viewport: vp,
    isMobile,
    hasTouch: isMobile,
    deviceScaleFactor: isMobile ? 3 : 1,
    userAgent: isMobile ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1' : undefined,
  });
  for (const [name, url] of pages) {
    const page = await ctx.newPage();
    const r = { page: name, viewport: vname, url };
    try {
      const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
      r.status = resp ? resp.status() : null;
      await page.waitForTimeout(1500);
      await page.screenshot({ path: `${OUT}/${name}-${vname}.png`, fullPage: false });
      await page.screenshot({ path: `${OUT}/${name}-${vname}-full.png`, fullPage: true });

      r.metrics = await page.evaluate(() => {
        const out = {};
        out.title = document.title;
        out.viewportMeta = document.querySelector('meta[name=viewport]')?.content || null;
        out.docWidth = document.documentElement.scrollWidth;
        out.innerWidth = window.innerWidth;
        out.hasHorizontalScroll = document.documentElement.scrollWidth > window.innerWidth + 1;
        // overflowing elements
        const offenders = [];
        document.querySelectorAll('body *').forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.right > window.innerWidth + 2 && rect.width > 20) {
            const id = el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.split(' ').slice(0,2).join('.') : '');
            if (offenders.length < 8) offenders.push({ el: id, right: Math.round(rect.right), w: Math.round(rect.width) });
          }
        });
        out.overflowing = offenders;
        // H1
        const h1s = [...document.querySelectorAll('h1')];
        out.h1Count = h1s.length;
        if (h1s[0]) {
          const r1 = h1s[0].getBoundingClientRect();
          out.h1Text = h1s[0].innerText.slice(0, 120);
          out.h1Top = Math.round(r1.top);
          out.h1AboveFold = r1.top >= 0 && r1.top < window.innerHeight;
          out.h1FontSize = getComputedStyle(h1s[0]).fontSize;
        }
        // CTAs above fold
        const ctas = [];
        document.querySelectorAll('a, button').forEach(el => {
          const t = (el.innerText || '').trim();
          if (!t || t.length > 40) return;
          if (/demo|pricing|start|trial|book|calculate|compar|see |get /i.test(t)) {
            const rc = el.getBoundingClientRect();
            if (rc.width > 0 && rc.top >= 0 && rc.top < window.innerHeight) {
              ctas.push({ text: t.slice(0, 40), top: Math.round(rc.top), h: Math.round(rc.height), w: Math.round(rc.width) });
            }
          }
        });
        out.ctasAboveFold = ctas.slice(0, 6);
        // tap targets (mobile relevance): interactive elements < 44px
        const small = [];
        document.querySelectorAll('a, button, input, select').forEach(el => {
          const rc = el.getBoundingClientRect();
          if (rc.width > 0 && rc.height > 0 && (rc.height < 40 || rc.width < 40)) {
            const t = (el.innerText || el.getAttribute('aria-label') || el.tagName).trim().slice(0, 35);
            if (rc.top >= 0 && rc.top < document.documentElement.scrollHeight) {
              small.push({ t, w: Math.round(rc.width), h: Math.round(rc.height) });
            }
          }
        });
        out.smallTapTargets = small.slice(0, 15);
        out.smallTapTargetCount = small.length;
        // body font size
        out.bodyFontSize = getComputedStyle(document.body).fontSize;
        // smallest visible text
        let minFont = 100;
        document.querySelectorAll('p, li, span, a').forEach(el => {
          if (!el.innerText || !el.innerText.trim()) return;
          const rc = el.getBoundingClientRect();
          if (rc.width === 0) return;
          const fs = parseFloat(getComputedStyle(el).fontSize);
          if (fs < minFont) minFont = fs;
        });
        out.minFontSize = minFont;
        out.lang = document.documentElement.lang;
        return out;
      });
    } catch (e) {
      r.error = String(e).slice(0, 300);
    }
    results.push(r);
    await page.close();
  }
  await ctx.close();
}
await browser.close();
fs.writeFileSync('/Users/rafa/code/web-sealmetrics/seo-audit-2026-06-09/metrics.json', JSON.stringify(results, null, 2));
console.log('done', results.length);
