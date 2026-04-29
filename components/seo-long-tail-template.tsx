import type { LongTailPageData } from "@/lib/seo-long-tail-types";

import { SeoCtaBlock } from "@/components/seo-cta-block";
import { SeoInternalToolLinks } from "@/components/seo-internal-tool-links";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { SeoRelatedRecommendations } from "@/components/seo-related-recommendations";

type SeoLongTailTemplateProps = {
  data: LongTailPageData;
};

export function SeoLongTailTemplate({ data }: SeoLongTailTemplateProps) {
  return (
    <SeoPageLayout>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{data.eyebrow}</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-[2.35rem] sm:leading-tight">
        {data.h1}
      </h1>

      <div className="mt-8 space-y-5 text-base leading-7 text-slate-300">
        {data.intro.map((paragraph, index) => (
          <p key={`intro-${index}`}>{paragraph}</p>
        ))}
      </div>

      <SeoInternalToolLinks variant={data.slug} />

      {data.sections.map((section) => (
        <section key={section.h2} className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-white">{section.h2}</h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-slate-300">
            {section.paragraphs.map((paragraph, index) => (
              <p key={`${section.h2}-${index}`}>{paragraph}</p>
            ))}
          </div>
        </section>
      ))}

      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight text-white">{data.steps.h2}</h2>
        <ol className="mt-5 list-decimal space-y-3 pl-5 text-base leading-7 text-slate-300">
          {data.steps.items.map((item, index) => (
            <li key={`step-${index}`}>{item}</li>
          ))}
        </ol>
      </section>

      <SeoRelatedRecommendations currentPath={`/blog/${data.slug}`} />

      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Frequently asked questions</h2>
        <div className="mt-6 space-y-8">
          {data.faq.map((item) => (
            <div key={item.question}>
              <h3 className="text-lg font-semibold text-white">{item.question}</h3>
              <p className="mt-2 text-base leading-7 text-slate-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <SeoCtaBlock title={data.ctaTitle} description={data.ctaDescription} />
    </SeoPageLayout>
  );
}
