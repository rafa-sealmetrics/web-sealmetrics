import { NotFoundContent } from "@/components/ui/NotFoundContent";

// Handles `notFound()` raised inside the (en) segment. The file GitHub Pages
// actually serves for unknown URLs is built from src/app/(en)/404-page/ —
// both render NotFoundContent so they cannot drift.
export default function NotFound() {
  return <NotFoundContent />;
}
