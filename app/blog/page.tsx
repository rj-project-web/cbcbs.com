import type { Metadata } from "next";
import Link from "next/link";

import { SeoPageLayout } from "@/components/seo-page-layout";
import { LONG_TAIL_PAGES, LONG_TAIL_SLUGS } from "@/lib/seo-long-tail-data";

export const metadata: Metadata = {
  title: "AI Resume Builder Blog | CV Builder Career Guides",
  description:
    "Read practical AI resume builder guides, ATS resume checker tips, and cover letter strategies built for modern job seekers.",
};

const posts = [
  {
    href: "/blog/ai-resume-builder",
    title: "How to Use an AI Resume Builder Without Sounding Generic",
    description:
      "What an ai resume builder does, advantages, a step-by-step workflow, mistakes to avoid, and FAQs.",
    date: "2026",
  },
];

export default function BlogIndexPage() {
  return (
    <SeoPageLayout>
      <h1 className="text-4xl font-semibold tracking-tight text-white">Blog</h1>
      <p className="mt-4 text-base leading-7 text-slate-300">
        Guides for candidates who want clearer resumes, stronger narratives, and a faster application
        workflow.
      </p>
      <ul className="mt-10 space-y-6">
        {posts.map((post) => (
          <li key={post.href}>
            <article className="card-lift rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-slate-950/20">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                {post.date}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                <Link href={post.href} className="hover:text-cyan-200">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{post.description}</p>
              <Link
                href={post.href}
                className="mt-4 inline-block text-sm font-semibold text-cyan-200 underline-offset-4 hover:underline"
              >
                Read article →
              </Link>
            </article>
          </li>
        ))}
      </ul>

      <h2 className="mt-16 text-2xl font-semibold tracking-tight text-white">
        Guides for your situation
      </h2>
      <p className="mt-3 text-base leading-7 text-slate-300">
        Pick the guide that matches where you are today—whether you are still in school, applying
        for your first full-time role, writing a technical resume as a developer, trying a free
        online draft workflow, or tightening your resume for applicant tracking systems. Each guide
        walks you through what to emphasize, mistakes to avoid, clear next steps, and answers to
        common questions—so you leave with practical ideas you can use right away, not jargon.
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {LONG_TAIL_SLUGS.map((slug) => (
          <li key={slug}>
            <Link
              href={`/blog/${slug}`}
              className="card-lift block rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-200 shadow-lg shadow-slate-950/20 hover:text-cyan-200"
            >
              {LONG_TAIL_PAGES[slug].shortLabel}
            </Link>
          </li>
        ))}
      </ul>
    </SeoPageLayout>
  );
}
