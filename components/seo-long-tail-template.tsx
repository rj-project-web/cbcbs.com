import type { LongTailPageData } from "@/lib/seo-long-tail-types";

import { JsonLd } from "@/components/json-ld";
import { RichParagraph } from "@/components/rich-paragraph";
import { SeoCtaBlock } from "@/components/seo-cta-block";
import { SeoInternalToolLinks } from "@/components/seo-internal-tool-links";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { SeoRelatedRecommendations } from "@/components/seo-related-recommendations";
import {
  articleJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
} from "@/lib/seo-json-ld";
import { sitemapLastModified } from "@/lib/sitemap-dates";

type SeoLongTailTemplateProps = {
  data: LongTailPageData;
};

export function SeoLongTailTemplate({ data }: SeoLongTailTemplateProps) {
  const path = `/blog/${data.slug}`;
  const modified = sitemapLastModified(path).toISOString().slice(0, 10);

  return (
    <SeoPageLayout>
      <JsonLd
        data={[
          articleJsonLd({
            headline: data.h1,
            description: data.metaDescription,
            path,
            datePublished: modified,
            dateModified: modified,
          }),
          breadcrumbListJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: data.shortLabel, path },
          ]),
          faqPageJsonLd(data.faq),
        ]}
      />

      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{data.eyebrow}</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-[2.35rem] sm:leading-tight">
        {data.h1}
      </h1>

      {data.coverImage ? (
        <figure className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.coverImage.src}
            alt={data.coverImage.alt}
            className="h-auto w-full object-cover"
            width={1200}
            height={630}
          />
          {data.coverImage.caption ? (
            <figcaption className="px-4 py-3 text-xs text-slate-400">{data.coverImage.caption}</figcaption>
          ) : null}
        </figure>
      ) : null}

      <div className="mt-8 space-y-5">
        {data.intro.map((paragraph, index) => (
          <RichParagraph key={`intro-${index}`} text={paragraph} />
        ))}
      </div>

      {data.images?.length ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {data.images.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                className="h-auto w-full object-cover"
                width={800}
                height={500}
              />
              {image.caption ? (
                <figcaption className="px-3 py-2 text-xs text-slate-400">{image.caption}</figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      ) : null}

      <SeoInternalToolLinks variant={data.slug} />

      {data.sections.map((section) => (
        <section key={section.h2} className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-white">{section.h2}</h2>
          <div className="mt-5 space-y-4">
            {section.paragraphs.map((paragraph, index) => (
              <RichParagraph key={`${section.h2}-${index}`} text={paragraph} />
            ))}
          </div>
          {section.codeBlock ? (
            <pre className="mt-5 overflow-x-auto rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm leading-6 text-slate-200 whitespace-pre-wrap">
              {section.codeBlock}
            </pre>
          ) : null}
          {section.subsections?.map((sub) => (
            <div key={`${section.h2}-${sub.h3}`} className="mt-8">
              <h3 className="text-lg font-semibold text-white">{sub.h3}</h3>
              <div className="mt-3 space-y-3">
                {sub.paragraphs.map((paragraph, index) => (
                  <RichParagraph key={`${sub.h3}-${index}`} text={paragraph} />
                ))}
              </div>
              {sub.codeBlock ? (
                <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm leading-6 text-slate-200 whitespace-pre-wrap">
                  {sub.codeBlock}
                </pre>
              ) : null}
            </div>
          ))}
        </section>
      ))}

      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight text-white">{data.steps.h2}</h2>
        <ol className="mt-5 list-decimal space-y-3 pl-5 text-base leading-7 text-slate-300">
          {data.steps.items.map((item, index) => (
            <li key={`step-${index}`}>
              <RichParagraph text={item} />
            </li>
          ))}
        </ol>
      </section>

      <SeoRelatedRecommendations currentPath={path} />

      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Frequently asked questions</h2>
        <div className="mt-6 space-y-8">
          {data.faq.map((item) => (
            <div key={item.question}>
              <h3 className="text-lg font-semibold text-white">{item.question}</h3>
              <div className="mt-2">
                <RichParagraph text={item.answer} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <SeoCtaBlock
        title={data.ctaTitle}
        description={data.ctaDescription}
        primaryHref={data.ctaPrimaryHref}
        primaryLabel={data.ctaPrimaryLabel}
      />
    </SeoPageLayout>
  );
}
