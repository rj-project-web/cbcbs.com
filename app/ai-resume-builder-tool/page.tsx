import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { ResumeGenerator } from "@/components/resume-generator";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { webApplicationJsonLd } from "@/lib/seo-json-ld";

export const metadata: Metadata = buildPageMetadata({
  title: "Free AI Resume Generator Online | CV Builder Tool",
  description:
    "Generate ATS-friendly resume drafts instantly with our free AI resume generator online. Enter your experience and skills, then copy and tailor for each job.",
  path: "/ai-resume-builder-tool",
});

export default function AiResumeBuilderToolPage() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "CV Builder AI Resume Generator",
          description:
            "Free online AI resume generator that creates ATS-friendly English resume drafts from your experience and skills.",
          path: "/ai-resume-builder-tool",
        })}
      />
      <section className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <header className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            CV Builder · Online tool
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Free AI Resume Generator Online
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Enter your details below to generate an ATS-friendly resume draft in seconds. For strategy
            and best practices, see our{" "}
            <a href="/ai-resume-builder" className="font-semibold text-cyan-200 hover:underline">
              AI resume builder guide
            </a>
            .
          </p>
        </header>
        <ResumeGenerator />
      </section>
    </>
  );
}
