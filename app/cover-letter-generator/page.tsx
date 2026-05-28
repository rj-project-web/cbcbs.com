import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { CoverLetterGenerator } from "@/components/cover-letter-generator";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { webApplicationJsonLd } from "@/lib/seo-json-ld";

export const metadata: Metadata = buildPageMetadata({
  title: "AI Cover Letter Generator Online | CV Builder",
  description:
    "Create tailored AI cover letters for each job application, align your narrative with resume keywords, and speed up application-ready drafts.",
  path: "/cover-letter-generator",
});

export default function CoverLetterGeneratorPage() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: "CV Builder Cover Letter Generator",
          description:
            "Free AI cover letter generator that writes professional English cover letters from your job title and background.",
          path: "/cover-letter-generator",
        })}
      />
      <section className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <header className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            CV Builder · Cover letter tool
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            AI Cover Letter Generator
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Generate a concise, professional cover letter aligned with your target role. Pair it with
            our{" "}
            <a href="/ai-resume-builder-tool" className="font-semibold text-cyan-200 hover:underline">
              AI resume generator
            </a>{" "}
            for a consistent application package.
          </p>
        </header>
        <CoverLetterGenerator />
      </section>
    </>
  );
}
