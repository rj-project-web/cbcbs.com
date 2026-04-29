import Link from "next/link";

import { LONG_TAIL_PAGES, LONG_TAIL_SLUGS } from "@/lib/seo-long-tail-data";

export function SiteLinkHub() {
  return (
    <section className="mx-auto mt-14 w-full max-w-7xl px-6 lg:px-10">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-slate-950/20">
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-300">
          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>
          <Link href="/ai-resume-builder" className="hover:text-white">
            AI Resume Builder
          </Link>
          <Link href="/resume-generator-free" className="hover:text-white">
            Free Resume Generator
          </Link>
          <Link href="/ats-resume-checker" className="hover:text-white">
            ATS Resume Checker
          </Link>
        </div>

        <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Guides by situation
        </p>
        <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-300">
          {LONG_TAIL_SLUGS.map((slug) => (
            <Link key={slug} href={`/blog/${slug}`} className="hover:text-white">
              {LONG_TAIL_PAGES[slug].shortLabel}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
