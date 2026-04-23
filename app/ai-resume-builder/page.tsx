import type { Metadata } from "next";
import Link from "next/link";

import { SeoCtaBlock } from "@/components/seo-cta-block";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { SeoRelatedRecommendations } from "@/components/seo-related-recommendations";

export const metadata: Metadata = {
  title: "AI Resume Builder for ATS-Friendly Resumes | CV Builder",
  description:
    "Use CV Builder's AI resume builder to create ATS-friendly resume drafts, stronger bullet points, and tailored job application content in minutes.",
  openGraph: {
    title: "AI Resume Builder for ATS-Friendly Resumes | CV Builder",
    description:
      "Build ATS-friendly resumes faster with guided inputs, AI drafting, and a practical workflow for high-intent job seekers.",
  },
};

const faqItems = [
  {
    question: "What makes CBCBS different from a generic AI resume builder?",
    answer:
      "CBCBS focuses on outcomes that hiring teams actually scan for: tight storytelling, measurable impact, and ATS-friendly structure. Instead of dumping buzzwords, the workflow pushes you to supply real experience details so the model can shape them into a coherent narrative.",
  },
  {
    question: "Is an AI-built resume ATS compliant?",
    answer:
      "ATS systems parse plain text and common section patterns. CBCBS prompts the model to return clean, readable English with standard headings and bullet points—formats that tend to parse reliably. You should still proofread and align keywords with each job description you target.",
  },
  {
    question: "Do I need to pay to try the CBCBS resume generator?",
    answer:
      "You can start with the free generator flow on CBCBS to produce drafts quickly. For production-scale usage or teams, you may upgrade later—but the goal is to get you to a strong first draft immediately.",
  },
  {
    question: "Can I edit the resume after generation?",
    answer:
      "Yes. Treat the output as a professional first draft. Copy it into your preferred editor or resume tool, refine metrics, reorder bullets, and tailor keywords for each role.",
  },
];

export default function AiResumeBuilderPage() {
  return (
    <SeoPageLayout>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
        CBCBS · AI Resume Builder
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        AI Resume Builder for Modern Job Seekers Who Need ATS-Friendly Results Fast
      </h1>
      <p className="mt-6 text-lg leading-8 text-slate-300">
        Searching for an{" "}
        <strong className="font-semibold text-white">AI resume builder</strong> usually means
        you are under time pressure: interviews are coming, your old resume is outdated, and you
        need something that reads like a real product manager, marketer, engineer, or operator—not
        a generic template stuffed with adjectives.{" "}
        <strong className="font-semibold text-white">CBCBS</strong> is built around a simple idea:
        guide you through the right inputs, generate a structured draft with strong verbs and bullet
        points, and help you iterate until the story matches the role you want.
      </p>
      <p className="mt-5 text-base leading-7 text-slate-300">
        The difference between an average resume and a strong one is rarely “more AI.” It is
        clarity: what you shipped, how you measured it, who you collaborated with, and what changed
        because of your work. CBCBS combines that discipline with an{" "}
        <Link
          href="/resume-generator"
          className="font-semibold text-cyan-200 underline-offset-4 hover:underline"
        >
          AI resume generator
        </Link>{" "}
        workflow so you can move from blank page to a credible draft without losing hours fighting
        formatting—then use the{" "}
        <Link
          href="/cover-letter-generator"
          className="font-semibold text-cyan-200 underline-offset-4 hover:underline"
        >
          cover letter generator
        </Link>{" "}
        when you need a narrative layer, and the{" "}
        <Link
          href="/ats-resume-checker"
          className="font-semibold text-cyan-200 underline-offset-4 hover:underline"
        >
          ATS resume checker
        </Link>{" "}
        guide before you lock your final template.
      </p>

      <h2 className="mt-14 text-2xl font-semibold tracking-tight text-white">
        Why an AI resume builder matters in today&apos;s hiring market
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-300">
        Recruiters skim quickly. Applicant tracking systems (ATS) normalize your resume into text
        and match signals against job descriptions. That means your resume needs two audiences: a
        human reader who wants confidence and specificity, and an automated parser that rewards
        consistent headings, readable bullets, and relevant keywords used in natural context.
      </p>
      <p className="mt-4 text-base leading-7 text-slate-300">
        CBCBS helps you produce an{" "}
        <strong className="font-semibold text-white">ATS-friendly resume</strong> by emphasizing
        plain-language sections, bullet-first experience blocks, and a professional summary that
        anchors your positioning. Whether you are switching careers, returning after a gap, or
        leveling up into a senior role, the goal is the same: a resume that reads like a credible
        product: tight, evidence-based, and easy to scan in under thirty seconds.
      </p>

      <h2 className="mt-14 text-2xl font-semibold tracking-tight text-white">
        What you get with the CBCBS AI resume builder experience
      </h2>
      <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-slate-300">
        <li>
          <strong className="text-white">Guided inputs:</strong> capture your name, experience, and
          skills in a structured way so the model can build a coherent narrative instead of guessing.
        </li>
        <li>
          <strong className="text-white">Professional tone:</strong> outputs are tuned for
          recruiter-ready English with action verbs and bullet points that highlight outcomes.
        </li>
        <li>
          <strong className="text-white">Speed without chaos:</strong> generate a draft, copy it,
          refine it, and tailor it per role—ideal when you are applying to multiple companies in a
          single week.
        </li>
        <li>
          <strong className="text-white">A workflow that pairs with cover letters:</strong> use the
          CBCBS cover letter generator alongside your resume so your story stays consistent across
          documents.
        </li>
      </ul>

      <h2 className="mt-14 text-2xl font-semibold tracking-tight text-white">
        Step-by-step: how to use the CBCBS AI resume builder
      </h2>
      <ol className="mt-5 list-decimal space-y-4 pl-5 text-base leading-7 text-slate-300">
        <li>
          <strong className="text-white">Open the CBCBS resume tool.</strong> Start from the{" "}
          <Link href="/resume-generator" className="font-semibold text-cyan-200 underline-offset-4 hover:underline">
            AI resume generator
          </Link>{" "}
          and keep your target role in mind while you write.
        </li>
        <li>
          <strong className="text-white">Write experience like evidence, not job duties.</strong>{" "}
          Include metrics, scope, stakeholders, and tools—specificity improves both ATS relevance
          and human trust.
        </li>
        <li>
          <strong className="text-white">Add skills as a comma-separated list.</strong> Align
          skills with the job description, but avoid keyword stuffing; natural phrasing performs
          better in practice.
        </li>
        <li>
          <strong className="text-white">Generate your draft.</strong> Review the summary and
          bullets, then edit for truth, tone, and role fit.
        </li>
        <li>
          <strong className="text-white">Tailor per application.</strong> Adjust keywords and
          reorder bullets so the top third of your resume matches the role&apos;s priorities.
        </li>
        <li>
          <strong className="text-white">Pair with a cover letter.</strong> Use the CBCBS{" "}
          <Link
            href="/cover-letter-generator"
            className="font-semibold text-cyan-200 underline-offset-4 hover:underline"
          >
            cover letter generator
          </Link>{" "}
          to reinforce your top wins and motivation in a complementary narrative.
        </li>
      </ol>

      <h2 className="mt-14 text-2xl font-semibold tracking-tight text-white">
        Best practices when using any AI resume builder
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-300">
        Even the best <strong className="font-semibold text-white">AI resume builder</strong> is
        still a drafting partner. Always verify facts, tighten numbers, and remove anything you
        cannot defend in an interview. If a bullet sounds impressive but is not true, delete it.
        Your reputation compounds faster than any single application.
      </p>
      <p className="mt-4 text-base leading-7 text-slate-300">
        Another practical tip: keep a “master resume” with everything you have done, then generate
        role-specific variants from that source of truth. CBCBS fits naturally into that habit: it
        helps you compress a large career story into a focused one-page narrative for each
        opportunity.
      </p>

      <SeoRelatedRecommendations currentPath="/ai-resume-builder" />

      <h2 className="mt-14 text-2xl font-semibold tracking-tight text-white">
        Frequently asked questions
      </h2>
      <div className="mt-6 space-y-8">
        {faqItems.map((item) => (
          <div key={item.question}>
            <h3 className="text-lg font-semibold text-white">{item.question}</h3>
            <p className="mt-2 text-base leading-7 text-slate-300">{item.answer}</p>
          </div>
        ))}
      </div>

      <SeoCtaBlock
        title="Start with the CBCBS AI resume builder"
        description="Generate a structured resume draft, then refine it for your target role. When you are ready, add a cover letter to complete your application package."
      />
    </SeoPageLayout>
  );
}
