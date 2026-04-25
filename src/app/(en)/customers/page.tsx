import { buildRedirectMetadata, RedirectStub } from "@/components/ui/Redirect";

export const metadata = buildRedirectMetadata("/case-studies");

export default function Page() {
  return <RedirectStub to="/case-studies" />;
}
