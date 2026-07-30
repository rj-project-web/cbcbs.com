import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { SeoPageLayout } from "@/components/seo-page-layout";
import {
  ALL_BLOG_POSTS,
  BLOG_GUIDE_BY_CATEGORY,
  FEATURED_BLOG_POST,
  type BlogPostEntry,
} from "@/lib/blog-posts";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { breadcrumbListJsonLd, itemListJsonLd } from "@/lib/seo-json-ld";

export const metadata: Metadata = buildPageMetadata({
  title: "AI Resume Builder Blog | CV Builder Career Guides",
  description:
    "Read practical AI resume builder guides, ATS resume checker tips, and cover letter strategies built for modern job seekers.",
  path: "/blog",
});

/** ISR: refresh blog index periodically when content source changes. */
export const revalidate = 3600;

function formatPostDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PostCard({ post, badge }: { post: BlogPostEntry; badge?: string }) {
  return (
    <article className="card-lift rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-slate-950/20">
      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
        <time dateTime={post.datePublished}>{formatPostDate(post.datePublished)}</time>
        {badge ? ` · ${badge}` : ""}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">
        <a href={post.href} className="hover:text-cyan-200">
          {post.title}
        </a>
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-300 line-clamp-3">{post.description}</p>
      <a
        href={post.href}
        className="mt-4 inline-block text-sm font-semibold text-cyan-200 underline-offset-4 hover:underline"
      >
        Read guide →
      </a>
    </article>
  );
}

function GuideSection({
  title,
  description,
  posts,
}: {
  title: string;
  description: string;
  posts: BlogPostEntry[];
}) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
      <p className="mt-3 text-base leading-7 text-slate-300">{description}</p>
      <ul className="mt-6 grid gap-6 lg:grid-cols-2">
        {posts.map((post) => (
          <li key={post.href}>
            <PostCard post={post} badge="Guide" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function BlogIndexPage() {
  // Server-rendered from static content modules (no Sanity client in this repo).
  const posts = ALL_BLOG_POSTS;

  return (
    <SeoPageLayout>
      <JsonLd
        data={[
          breadcrumbListJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
          itemListJsonLd(
            posts.map((post) => ({
              name: post.title,
              path: post.href,
              description: post.description,
            })),
          ),
        ]}
      />

      <h1 className="text-4xl font-semibold tracking-tight text-white">Blog</h1>
      <p className="mt-4 text-base leading-7 text-slate-300">
        Guides for candidates who want clearer resumes, stronger narratives, and a faster application
        workflow. Browse by role, writing tactics, or examples and templates.
      </p>

      <section aria-label="All articles" className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-white">All articles</h2>
        <p className="mt-3 text-base leading-7 text-slate-300">
          Complete index of CV Builder guides ({posts.length} articles).
        </p>
        <ol className="mt-6 list-decimal space-y-2 pl-5 text-base leading-7 text-slate-300">
          {posts.map((post) => (
            <li key={`index-${post.href}`}>
              <a href={post.href} className="font-medium text-cyan-200 underline-offset-4 hover:underline">
                {post.title}
              </a>
            </li>
          ))}
        </ol>
      </section>

      <h2 className="mt-14 text-2xl font-semibold tracking-tight text-white">Featured article</h2>
      <ul className="mt-6 space-y-6">
        <li>
          <PostCard post={FEATURED_BLOG_POST} badge="Featured" />
        </li>
      </ul>

      <GuideSection
        title="Guides by role & industry"
        description="Student, healthcare, education, marketing, sales, project management, and engineering—each guide shows what to emphasize and how to draft with CV Builder."
        posts={BLOG_GUIDE_BY_CATEGORY.role}
      />

      <GuideSection
        title="Writing & AI workflow"
        description="Bullet points, summaries, action verbs, free generators, ATS checks, and how dedicated resume tools compare to general chat models."
        posts={BLOG_GUIDE_BY_CATEGORY.writing}
      />

      <GuideSection
        title="Examples & templates"
        description="Resume examples, internship structure, no-experience patterns, software engineer samples, and ATS-friendly layout guidance."
        posts={BLOG_GUIDE_BY_CATEGORY.examples}
      />
    </SeoPageLayout>
  );
}
