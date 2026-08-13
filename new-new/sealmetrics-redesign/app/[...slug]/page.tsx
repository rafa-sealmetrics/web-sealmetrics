import type { Metadata } from "next";
import { EditorialPage, metadataForPage, type CanonicalPage } from "../components/editorial-page";
import siteContent from "../site-content.generated.json";

export const dynamic = "force-static";
export const dynamicParams = false;

const pages = siteContent as Record<string, CanonicalPage>;

function pathFrom(slug: string[]) {
  return slug.join("/");
}

function alternateFor(path: string) {
  const alternatePath = path === "es" ? "" : path.startsWith("es/") ? path.slice(3) : `es/${path}`;
  return pages[alternatePath];
}

export function generateStaticParams() {
  return Object.keys(pages).filter(Boolean).map(path => ({ slug: path.split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const path = pathFrom(slug);
  const page = pages[path];
  return page ? metadataForPage(page, alternateFor(path)) : { title: "SealMetrics" };
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const path = pathFrom(slug);
  return <EditorialPage page={pages[path]} route={path} />;
}
