import { COVER_LETTER_LONG_TAIL_SLUGS } from "@/lib/seo-long-tail-cover-letter";
import { PHASE3_LONG_TAIL_SLUGS } from "@/lib/seo-long-tail-phase3";

/** Last-modified dates for sitemap (ISO date strings). */
const BASE_SITEMAP_DATES: Record<string, string> = {
  "/": "2026-05-27",
  "/ai-resume-builder": "2026-05-27",
  "/ai-resume-builder-tool": "2026-05-27",
  "/cover-letter-generator": "2026-05-27",
  "/resume-generator-free": "2026-05-27",
  "/ats-resume-checker": "2026-05-27",
  "/blog": "2026-05-27",
  "/blog/ai-resume-builder": "2026-04-23",
  "/blog/ai-resume-builder-for-students": "2026-04-23",
  "/blog/ai-resume-builder-for-freshers": "2026-04-23",
  "/blog/ai-resume-builder-for-developers": "2026-04-23",
  "/blog/free-resume-generator-online": "2026-04-23",
  "/blog/ats-resume-checker-free": "2026-04-23",
  "/blog/resume-for-software-engineer-example": "2026-04-23",
  "/blog/resume-with-no-experience-example": "2026-04-23",
  "/blog/how-to-write-a-resume-for-internship": "2026-04-23",
  "/blog/ats-friendly-resume-template": "2026-04-23",
};

const PHASE3_SITEMAP_DATES = Object.fromEntries(
  PHASE3_LONG_TAIL_SLUGS.map((slug) => [`/blog/${slug}`, "2026-05-27"]),
);

const COVER_LETTER_SITEMAP_DATES = Object.fromEntries(
  COVER_LETTER_LONG_TAIL_SLUGS.map((slug) => [`/blog/${slug}`, "2026-07-30"]),
);

export const SITEMAP_LAST_MODIFIED: Record<string, string> = {
  ...BASE_SITEMAP_DATES,
  ...PHASE3_SITEMAP_DATES,
  ...COVER_LETTER_SITEMAP_DATES,
};

export function sitemapLastModified(path: string): Date {
  return new Date(SITEMAP_LAST_MODIFIED[path] ?? "2026-05-27");
}
