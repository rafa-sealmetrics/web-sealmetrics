"""Capture desktop + mobile screenshots for SEO visual audit."""
from playwright.sync_api import sync_playwright
import os
import sys

OUT = "/Users/rafa/code/web-sealmetrics/.seo-audit/screenshots"
os.makedirs(OUT, exist_ok=True)

PAGES = [
    ("home", "https://sealmetrics.com/"),
    ("product", "https://sealmetrics.com/product/"),
    ("pricing", "https://sealmetrics.com/pricing/"),
    ("vs-ga4", "https://sealmetrics.com/vs/ga4/"),
    ("blog", "https://sealmetrics.com/blog/"),
    ("open", "https://sealmetrics.com/open/"),
]

VIEWPORTS = {
    "desktop": {"width": 1440, "height": 900, "is_mobile": False, "ua": None},
    "mobile":  {"width": 390,  "height": 844, "is_mobile": True,  "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"},
}

def capture():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for vp_name, vp in VIEWPORTS.items():
            context_kwargs = {
                "viewport": {"width": vp["width"], "height": vp["height"]},
                "device_scale_factor": 2 if vp["is_mobile"] else 1,
                "is_mobile": vp["is_mobile"],
                "has_touch": vp["is_mobile"],
            }
            if vp["ua"]:
                context_kwargs["user_agent"] = vp["ua"]
            context = browser.new_context(**context_kwargs)
            page = context.new_page()
            for slug, url in PAGES:
                outpath = os.path.join(OUT, f"{slug}-{vp_name}.png")
                try:
                    page.goto(url, wait_until="networkidle", timeout=30000)
                    # Wait briefly for fonts / late paint
                    page.wait_for_timeout(800)
                    # Above-the-fold only (full_page=False)
                    page.screenshot(path=outpath, full_page=False)
                    print(f"OK  {vp_name:7s} {slug:8s} -> {outpath}")
                except Exception as e:
                    print(f"ERR {vp_name:7s} {slug:8s} {url}  {e}", file=sys.stderr)
            context.close()
        browser.close()

if __name__ == "__main__":
    capture()
