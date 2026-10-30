import { notFound, redirect } from "next/navigation";
import PageShell from "@/components/PageShell";
import { PAGE_IDS, PAGES } from "@/lib/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return PAGE_IDS.filter((id) => id !== "beranda").map((page) => ({ page }));
}

export async function generateMetadata({ params }) {
  const { page } = await params;
  const meta = PAGES[page];
  if (!meta) return {};
  return { title: meta.title, description: meta.description };
}

export default async function Page({ params }) {
  const { page } = await params;
  if (!PAGES[page]) notFound();
  if (page === "beranda") redirect("/");
  return <PageShell initialPage={page} />;
}
