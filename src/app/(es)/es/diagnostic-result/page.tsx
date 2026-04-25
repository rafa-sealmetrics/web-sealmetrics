import { buildRedirectMetadata, RedirectStub } from "@/components/ui/Redirect";

export const metadata = buildRedirectMetadata("/diagnostic-result");

export default function Page() {
  return <RedirectStub to="/diagnostic-result" />;
}
