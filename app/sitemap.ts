import type { MetadataRoute } from "next";

import { LONG_TAIL_SLUGS } from "@/lib/seo-long-tail-data";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "https://www.cbcbs.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/ai-resume-builder", priority: 0.9, changeFrequency: "weekly" },
    { path: "/ai-resume-builder-tool", priority: 0.9, changeFrequency: "weekly" },
    { path: "/cover-letter-generator", priority: 0.85, changeFrequency: "weekly" },
    { path: "/resume-generator-free", priority: 0.85, changeFrequency: "weekly" },
    { path: "/ats-resume-checker", priority: 0.85, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/blog/ai-resume-builder", priority: 0.75, changeFrequency: "monthly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const seoEntries: MetadataRoute.Sitemap = LONG_TAIL_SLUGS.map((slug) => ({
    url: `${SITE_URL}/seo/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.72,
  }));

  return [...staticEntries, ...seoEntries];
}
