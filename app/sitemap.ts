import type { MetadataRoute } from "next";

import { LONG_TAIL_SLUGS } from "@/lib/seo-long-tail-data";
import { sitemapLastModified } from "@/lib/sitemap-dates";
import { SITE_URL } from "@/lib/site-config";

const STATIC_PAGES: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/ai-resume-builder", priority: 0.9, changeFrequency: "weekly" },
  { path: "/ai-resume-builder-tool", priority: 0.95, changeFrequency: "weekly" },
  { path: "/cover-letter-generator", priority: 0.85, changeFrequency: "weekly" },
  { path: "/resume-generator-free", priority: 0.85, changeFrequency: "weekly" },
  { path: "/ats-resume-checker", priority: 0.85, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/blog/ai-resume-builder", priority: 0.75, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: sitemapLastModified(page.path),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const guideEntries: MetadataRoute.Sitemap = LONG_TAIL_SLUGS.map((slug) => {
    const path = `/blog/${slug}`;
    return {
      url: `${SITE_URL}${path}`,
      lastModified: sitemapLastModified(path),
      changeFrequency: "monthly" as const,
      priority: 0.72,
    };
  });

  return [...staticEntries, ...guideEntries];
}
