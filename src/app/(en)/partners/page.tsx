import { buildRedirectMetadata, RedirectStub } from "@/components/ui/Redirect";

export const metadata = buildRedirectMetadata("/for/agencies");

export default function Page() {
  return <RedirectStub to="/for/agencies" />;
}
