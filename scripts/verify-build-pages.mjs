import { existsSync } from "node:fs";
import { join } from "node:path";

/** Must match PHASE3_LONG_TAIL_SLUGS in lib/seo-long-tail-phase3.ts */
const PHASE3_SLUGS = [
  "ai-resume-builder-for-nurses",
  "ai-resume-builder-for-teachers",
  "ai-resume-builder-for-marketers",
  "ai-resume-builder-for-project-managers",
  "ai-resume-builder-for-sales",
  "resume-bullet-point-generator",
  "resume-summary-generator",
  "professional-summary-for-resume-examples",
  "ai-resume-builder-vs-chatgpt",
  "action-verbs-for-resume",
];

/** Must match COVER_LETTER_LONG_TAIL_SLUGS in lib/seo-long-tail-cover-letter.ts */
const COVER_LETTER_SLUGS = [
  "how-to-write-a-cover-letter",
  "ai-cover-letter-generator-vs-manual",
  "cover-letter-examples-for-career-changers",
  "short-cover-letter-samples",
];

const REQUIRED_SLUGS = [...PHASE3_SLUGS, ...COVER_LETTER_SLUGS];

const blogOutputDir = join(process.cwd(), ".next/server/app/blog");
const missing = [];

for (const slug of REQUIRED_SLUGS) {
  const htmlPath = join(blogOutputDir, `${slug}.html`);
  if (!existsSync(htmlPath)) {
    missing.push(slug);
  }
}

if (missing.length > 0) {
  console.error("Build verification failed. Missing prerendered blog pages:");
  for (const slug of missing) {
    console.error(`  - /blog/${slug} (expected ${join(blogOutputDir, `${slug}.html`)})`);
  }
  process.exit(1);
}

console.log(
  `Build verification passed (${PHASE3_SLUGS.length} phase-3 + ${COVER_LETTER_SLUGS.length} cover-letter blog pages present).`,
);
