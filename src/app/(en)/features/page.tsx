import { buildRedirectMetadata, RedirectStub } from "@/components/ui/Redirect";

export const metadata = buildRedirectMetadata("/product");

export default function Page() {
  return <RedirectStub to="/product" />;
}
