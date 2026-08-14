const SITE_ORIGIN = "https://sealmetrics.com";
const FILE_PATH = /\/[^/]+\.[a-z0-9]+$/i;

function normalizeInternalPageUrls(value: unknown): unknown {
  if (typeof value === "string" && value.startsWith(`${SITE_ORIGIN}/`)) {
    const url = new URL(value);
    if (!url.pathname.endsWith("/") && !FILE_PATH.test(url.pathname)) {
      url.pathname = `${url.pathname}/`;
      return url.toString();
    }
    return value;
  }
  if (Array.isArray(value)) return value.map(normalizeInternalPageUrls);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [key, normalizeInternalPageUrls(child)]),
    );
  }
  return value;
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(normalizeInternalPageUrls(data)) }}
    />
  );
}
