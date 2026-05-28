import { LONG_TAIL_PAGES, LONG_TAIL_SLUGS } from "@/lib/seo-long-tail-data";
import { PHASE3_LONG_TAIL_SLUGS } from "@/lib/seo-long-tail-phase3";

export type BlogPostCategory = "featured" | "role" | "writing" | "examples";

export type BlogPostEntry = {
  href: string;
  title: string;
  description: string;
  /** ISO date for display and schema */
  datePublished: string;
  category: BlogPostCategory;
};

export const FEATURED_BLOG_POST: BlogPostEntry = {
  href: "/blog/ai-resume-builder",
  title: "How to Use an AI Resume Builder Without Sounding Generic",
  description:
    "What an ai resume builder does, advantages, a step-by-step workflow, mistakes to avoid, and FAQs.",
  datePublished: "2026-04-23",
  category: "featured",
};

const ROLE_SLUGS = new Set([
  "ai-resume-builder-for-students",
  "ai-resume-builder-for-freshers",
  "ai-resume-builder-for-developers",
  "ai-resume-builder-for-nurses",
  "ai-resume-builder-for-teachers",
  "ai-resume-builder-for-marketers",
  "ai-resume-builder-for-project-managers",
  "ai-resume-builder-for-sales",
]);

const WRITING_SLUGS = new Set([
  "free-resume-generator-online",
  "ats-resume-checker-free",
  "resume-bullet-point-generator",
  "resume-summary-generator",
  "action-verbs-for-resume",
  "ai-resume-builder-vs-chatgpt",
]);

function categoryForSlug(slug: string): BlogPostCategory {
  if (ROLE_SLUGS.has(slug)) {
    return "role";
  }
  if (WRITING_SLUGS.has(slug)) {
    return "writing";
  }
  return "examples";
}

export const BLOG_GUIDE_POSTS: BlogPostEntry[] = LONG_TAIL_SLUGS.map((slug) => {
  const page = LONG_TAIL_PAGES[slug];
  const isNew = (PHASE3_LONG_TAIL_SLUGS as readonly string[]).includes(slug);
  return {
    href: `/blog/${slug}`,
    title: page.h1,
    description: page.metaDescription,
    datePublished: isNew ? "2026-05-27" : "2026-04-23",
    category: categoryForSlug(slug),
  };
});

export const BLOG_GUIDE_BY_CATEGORY = {
  role: BLOG_GUIDE_POSTS.filter((p) => p.category === "role"),
  writing: BLOG_GUIDE_POSTS.filter((p) => p.category === "writing"),
  examples: BLOG_GUIDE_POSTS.filter((p) => p.category === "examples"),
} as const;

export const ALL_BLOG_POSTS: BlogPostEntry[] = [FEATURED_BLOG_POST, ...BLOG_GUIDE_POSTS];
