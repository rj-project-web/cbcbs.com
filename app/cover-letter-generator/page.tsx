import type { Metadata } from "next";

import { CoverLetterGenerator } from "@/components/cover-letter-generator";
import { JsonLd } from "@/components/json-ld";
import { ToolPageSeoContent } from "@/components/tool-page-seo-content";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { faqPageJsonLd, softwareApplicationJsonLd } from "@/lib/seo-json-ld";

export const metadata: Metadata = buildPageMetadata({
  title: "AI Cover Letter Generator Online | CV Builder",
  description:
    "Create tailored AI cover letters for each job application, align your narrative with resume keywords, and speed up application-ready drafts.",
  path: "/cover-letter-generator",
});

const faqItems = [
  {
    question: "Do I still need a cover letter if I use an AI resume builder?",
    answer:
      "Often yes for competitive roles. A resume carries proof; a cover letter can explain motivation, context, and transitions so recruiters see a consistent story across documents.",
  },
  {
    question: "How long should an AI-generated cover letter be?",
    answer:
      "Aim for a concise letter: a clear opening, one or two proof paragraphs, and a short close. Most recruiters prefer focused writing over a full page of generic praise.",
  },
  {
    question: "Can I reuse one cover letter for every job?",
    answer:
      "Keep a master narrative, then tailor the company, role, and top proof points per application. Small truthful adjustments usually outperform large generic rewrites.",
  },
  {
    question: "How do I keep the letter from sounding robotic?",
    answer:
      "Provide specific wins, tools, and constraints in your inputs, then edit the draft for voice. Delete buzzwords you cannot support in an interview.",
  },
];

export default function CoverLetterGeneratorPage() {
  return (
    <>
      <JsonLd
        data={[
          softwareApplicationJsonLd({
            name: "AI Cover Letter Generator",
            description:
              "Create tailored AI cover letters for each job application, align your narrative with resume keywords, and speed up application-ready drafts.",
            path: "/cover-letter-generator",
            featureList: [
              "AI-powered cover letter drafting",
              "Role and company alignment",
              "Consistent narrative with your resume",
              "One-click copy for applications",
              "No sign-up required",
            ],
          }),
          faqPageJsonLd(faqItems),
        ]}
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
            Generate a concise, professional cover letter aligned with your target role. This AI
            cover letter generator helps you move from blank page anxiety to a tailored draft you can
            refine in minutes—so your motivation and proof points stay consistent with your resume.
          </p>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Pair this tool with our{" "}
            <a href="/ai-resume-builder-tool" className="font-semibold text-cyan-200 hover:underline">
              free AI resume builder
            </a>{" "}
            for a complete application package, then use the{" "}
            <a href="/ats-resume-checker" className="font-semibold text-cyan-200 hover:underline">
              ATS resume checker
            </a>{" "}
            guide when you finalize formatting and keyword alignment for company portals.
          </p>
        </header>

        <CoverLetterGenerator />

        <div className="mx-auto mt-4 max-w-3xl">
          <ToolPageSeoContent
            howItWorks={[
              {
                title: "Share the role and your background",
                body: "Enter the job title or company context and a short summary of what you bring—projects, outcomes, and why you are a fit.",
              },
              {
                title: "Generate a tailored letter draft",
                body: "The AI cover letter generator returns a professional English draft with a clear opening, proof, and a confident close.",
              },
              {
                title: "Edit for voice and truth",
                body: "Replace generic claims with specifics you can discuss in interviews, and mirror vocabulary from the posting where it matches your experience.",
              },
              {
                title: "Submit with a matching resume",
                body: "Copy the letter into your application, keep the resume bullets aligned, and save a variant per employer when applying at volume.",
              },
            ]}
            features={[
              {
                title: "Fast first drafts",
                body: "Skip staring at a blank page—get a structured letter you can refine instead of writing every sentence from scratch.",
              },
              {
                title: "Role-aware narrative",
                body: "Connect your background to the job you want so recruiters see motivation and relevance in the first screen.",
              },
              {
                title: "Resume consistency",
                body: "Use the same proof points as your resume so your story does not contradict itself across documents.",
              },
              {
                title: "Copy-friendly output",
                body: "Paste into email, portals, or Word without wrestling multi-step exports or locked templates.",
              },
              {
                title: "Iteration-friendly",
                body: "Regenerate after you improve inputs—ideal when you are applying to several roles in the same week.",
              },
            ]}
            whoIntro="Use this AI cover letter generator when a resume alone is not enough—and you need a clear, tailored narrative quickly."
            whoItems={[
              "Candidates applying to roles that request or prefer a cover letter",
              "Career changers who need to explain transitions without oversharing",
              "Students and freshers pairing projects with motivation for internships",
              "Experienced professionals who want faster, consistent letter variants",
            ]}
            faq={faqItems}
          />
        </div>
      </section>
    </>
  );
}
