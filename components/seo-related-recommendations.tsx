import Link from "next/link";

import { LONG_TAIL_PAGES, LONG_TAIL_SLUGS } from "@/lib/seo-long-tail-data";

type RelatedItem = {
  href: string;
  title: string;
  description: string;
};

const CORE_PAGES: RelatedItem[] = [
  {
    href: "/blog/ai-resume-builder",
    title: "How to use an AI resume builder (without sounding generic)",
    description: "Long-form workflow, mistakes, and FAQs for serious candidates.",
  },
  {
    href: "/ai-resume-builder",
    title: "AI resume builder overview",
    description: "What CBCBS helps you ship and how the product flow fits your search.",
  },
  {
    href: "/resume-generator-free",
    title: "Free resume generator online",
    description: "A practical entry point when you want speed without heavy templates.",
  },
  {
    href: "/ats-resume-checker",
    title: "ATS resume checker guide",
    description: "Parseability, keywords, and a checklist mindset before you submit.",
  },
];

type SeoRelatedRecommendationsProps = {
  /** Current page path, e.g. `/seo/ai-resume-builder-for-students` or `/blog/ai-resume-builder` */
  currentPath: string;
};

export function SeoRelatedRecommendations({ currentPath }: SeoRelatedRecommendationsProps) {
  const siblingSeo: RelatedItem[] = LONG_TAIL_SLUGS.filter(
    (slug) => `/seo/${slug}` !== currentPath,
  ).map((slug) => ({
    href: `/seo/${slug}`,
    title: LONG_TAIL_PAGES[slug].shortLabel,
    description: "Situation-specific guide with steps, FAQs, and CBCBS CTAs.",
  }));

  const coreFiltered = CORE_PAGES.filter((item) => item.href !== currentPath);

  const items = [...coreFiltered, ...siblingSeo].slice(0, 8);

  if (items.length === 0) {
    return null;
  }

  return (
    <section className="mt-14" aria-labelledby="related-recommendations-heading">
      <h2
        id="related-recommendations-heading"
        className="text-2xl font-semibold tracking-tight text-white"
      >
        Related recommendations
      </h2>
      <p className="mt-3 text-base leading-7 text-slate-400">
        Keep reading—or jump straight into the tool that matches your next task.
      </p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="card-lift block h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg shadow-slate-950/20 transition hover:border-cyan-400/25"
            >
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
              <span className="mt-3 inline-block text-xs font-semibold text-cyan-200">Open →</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
