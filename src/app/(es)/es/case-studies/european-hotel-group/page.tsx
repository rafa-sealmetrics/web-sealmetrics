import { buildRedirectMetadata, RedirectStub } from "@/components/ui/Redirect";

export const metadata = buildRedirectMetadata("/es/case-studies/palladium-hotel-group");

export default function Page() {
  return <RedirectStub to="/es/case-studies/palladium-hotel-group" />;
}
