import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { ResumeGenerator } from "@/components/resume-generator";
import { ToolPageSeoContent } from "@/components/tool-page-seo-content";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { faqPageJsonLd, softwareApplicationJsonLd } from "@/lib/seo-json-ld";

export const metadata: Metadata = buildPageMetadata({
  title: "Free AI Resume Generator Online | CV Builder Tool",
  description:
    "Generate ATS-friendly resume drafts instantly with our free AI resume generator online. Enter your experience and skills, then copy and tailor for each job.",
  path: "/ai-resume-builder-tool",
});

const faqItems = [
  {
    question: "Is this AI resume builder really free?",
    answer:
      "Yes. You can generate ATS-friendly resume drafts without installing software. Free usage limits may apply to keep the service reliable for everyone, and you can always copy your draft into your own editor.",
  },
  {
    question: "Will the output pass an applicant tracking system?",
    answer:
      "The tool focuses on clean, structured English with standard sections and bullet points that tend to parse reliably. You should still place the draft into a conservative template and align keywords with each job description before you submit.",
  },
  {
    question: "What should I enter to get a stronger draft?",
    answer:
      "Include outcomes, tools, scope, and timelines—not only job titles. Metrics, constraints, and stakeholders help the model write credible bullets you can defend in interviews.",
  },
  {
    question: "Can I edit the resume after generation?",
    answer:
      "Absolutely. Treat the result as a first draft: copy it, reorder bullets, tighten the summary, and create role-specific variants for each application.",
  },
];

export default function AiResumeBuilderToolPage() {
  return (
    <>
      <JsonLd
        data={[
          softwareApplicationJsonLd({
            name: "Free AI Resume Builder",
            description:
              "Generate ATS-friendly resume drafts instantly with our free AI resume builder. Enter your experience and skills, then copy and tailor for each job application.",
            path: "/ai-resume-builder-tool",
            featureList: [
              "AI-powered resume content generation",
              "ATS-friendly formatting",
              "Role-specific bullet point suggestions",
              "One-click copy and export",
              "No sign-up required",
            ],
          }),
          faqPageJsonLd(faqItems),
        ]}
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
            Enter your details below to generate an ATS-friendly resume draft in seconds. This free
            AI resume builder helps job seekers turn raw experience into structured, recruiter-ready
            English without fighting a blank document. For strategy and best practices, see our{" "}
            <a href="/ai-resume-builder" className="font-semibold text-cyan-200 hover:underline">
              AI resume builder guide
            </a>
            .
          </p>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Strong applications start with truthful evidence: outcomes, tools, and scope. Paste those
            details into the form, generate a draft, then refine the top third for each role. Pair the
            result with our{" "}
            <a href="/cover-letter-generator" className="font-semibold text-cyan-200 hover:underline">
              cover letter generator
            </a>{" "}
            and review parseability tips in the{" "}
            <a href="/ats-resume-checker" className="font-semibold text-cyan-200 hover:underline">
              ATS resume checker
            </a>{" "}
            guide before you submit through a company portal.
          </p>
        </header>

        <ResumeGenerator />

        <div className="mx-auto mt-4 max-w-3xl">
          <ToolPageSeoContent
            howItWorks={[
              {
                title: "Paste your experience",
                body: "Enter your name, a narrative of your roles and achievements, and a comma-separated skills list aligned to the jobs you want.",
              },
              {
                title: "AI generates structured resume text",
                body: "Get an ATS-oriented draft with clearer bullets, stronger verbs, and a professional tone you can skim in seconds.",
              },
              {
                title: "Copy, tailor, and apply",
                body: "Edit metrics and keywords for each posting, paste into a clean template, then export—keeping facts interview-defensible.",
              },
              {
                title: "Iterate for the next role",
                body: "Reuse your master notes, regenerate variants quickly, and keep a living backlog of wins so every application stays fresh.",
              },
            ]}
            features={[
              {
                title: "AI-powered drafting",
                body: "Transform messy notes into recruiter-style sections so you spend time on accuracy instead of formatting from scratch.",
              },
              {
                title: "ATS-friendly structure",
                body: "Output favors plain, parseable text and standard patterns that reduce risk when portals extract your resume.",
              },
              {
                title: "Role-specific language",
                body: "Supply skills from the job description and the draft can mirror truthful vocabulary hiring teams actually search for.",
              },
              {
                title: "One-click copy",
                body: "Copy the generated content into your template, Notion doc, or editor without a heavy multi-step export funnel.",
              },
              {
                title: "Built for iteration",
                body: "Regenerate after you improve inputs—perfect when you are applying at volume and need multiple tailored variants.",
              },
            ]}
            whoIntro="This free AI resume builder is designed for candidates who need a credible first draft fast—without sacrificing clarity or truth."
            whoItems={[
              "Job seekers rewriting resumes for a new industry or title family",
              "Students and early-career applicants turning projects into proof",
              "Engineers, marketers, nurses, teachers, and PMs who want stronger bullets",
              "Anyone who wants an ATS-oriented draft before final layout and export",
            ]}
            faq={faqItems}
          />
        </div>
      </section>
    </>
  );
}
