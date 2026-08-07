import { buildRedirectMetadata, RedirectStub } from "@/components/ui/Redirect";

// Canonical for this comparison is /vs-ga4/. This path stays alive for
// already-indexed URLs. Using the shared stub instead of a hand-rolled one
// keeps the noindex, the canonical, the OG/Twitter card and the <h1>
// consistent with every other redirect on the site — the hand-rolled version
// shipped no og:url, no Twitter card and no heading at all.
export const metadata = buildRedirectMetadata("/vs-ga4/");

export default function Page() {
  return <RedirectStub to="/vs-ga4/" />;
}
