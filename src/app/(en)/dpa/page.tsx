import { buildRedirectMetadata, RedirectStub } from "@/components/ui/Redirect";

/* El DPA dejó de ser público (#51). Se conserva la ruta como stub para que las
   URLs ya indexadas y los enlaces externos no acaben en 404: canonical a
   /privacy y noindex, igual que el resto de alias del site. */
export const metadata = buildRedirectMetadata("/privacy");

export default function Page() {
  return <RedirectStub to="/privacy" />;
}
