import { redirect } from "next/navigation";

import { LONG_TAIL_SLUGS } from "@/lib/seo-long-tail-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return LONG_TAIL_SLUGS.map((slug) => ({ slug }));
}

export default async function SeoLongTailSlugPage({ params }: PageProps) {
  const { slug } = await params;
  redirect(`/blog/${slug}`);
}
