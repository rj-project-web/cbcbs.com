import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SeoLongTailTemplate } from "@/components/seo-long-tail-template";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { getLongTailPage, LONG_TAIL_SLUGS } from "@/lib/seo-long-tail-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return LONG_TAIL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getLongTailPage(slug);
  if (!data) {
    return { title: "Not found | CV Builder" };
  }

  return buildPageMetadata({
    title: data.metaTitle,
    description: data.metaDescription,
    path: `/blog/${data.slug}`,
    openGraphType: "article",
  });
}

export default async function BlogLongTailSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getLongTailPage(slug);
  if (!data) {
    notFound();
  }

  return <SeoLongTailTemplate data={data} />;
}
