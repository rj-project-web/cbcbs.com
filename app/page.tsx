import type { Metadata } from "next";
import Link from "next/link";

import { FeatureCard } from "@/components/feature-card";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "AI Resume Builder & Cover Letter Generator | CV Builder",
  description:
    "Create ATS-friendly resumes, tailored cover letters, and role-specific drafts fast with CV Builder's AI resume builder workflow.",
};

const features = [
  {
    index: "01",
    title: "Fast guided inputs",
    description:
      "Capture role, achievements, and tone in a few fields instead of staring at a blank document.",
  },
  {
    index: "02",
    title: "Polished output",
    description:
      "Generate clean resume and cover letter drafts with a modern, recruiter-friendly structure.",
  },
  {
    index: "03",
    title: "Built for iteration",
    description:
      "Refine content quickly, compare variants, and tailor every application to the role.",
  },
];

export default function HomePage() {
  return (
    <div className="surface-grid">
      <section className="relative overflow-hidden">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
              CBCBS - AI Job Toolkit
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Build a Job-Winning Resume in Seconds
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Use AI to generate resumes and cover letters instantly
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/resume-generator"
                className="btn-lift rounded-full border border-blue-300/50 bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/40 transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/70"
              >
                Generate Your Resume
              </Link>
              <Link
                href="/cover-letter-generator"
                className="btn-lift rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Explore Cover Letters
              </Link>
            </div>

            <div className="mt-12 grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
              <div className="card-lift rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-xl shadow-slate-950/20">
                <p className="text-2xl font-semibold text-white">3</p>
                <p className="mt-2">ready-to-use pages</p>
              </div>
              <div className="card-lift rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-xl shadow-slate-950/20">
                <p className="text-2xl font-semibold text-white">100%</p>
                <p className="mt-2">responsive layout</p>
              </div>
              <div className="card-lift rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-xl shadow-slate-950/20">
                <p className="text-2xl font-semibold text-white">0</p>
                <p className="mt-2">heavy UI libraries</p>
              </div>
            </div>
          </div>

          <div className="card-lift w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-slate-950/30 backdrop-blur">
            <div className="rounded-[1.5rem] border border-cyan-400/20 bg-slate-900/85 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    AI Preview
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Land more interviews
                  </h2>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Live draft
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-sm font-medium text-white">Resume Summary</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Results-driven marketer with 6+ years of experience building
                    scalable campaigns, AI workflows, and high-performing
                    acquisition systems.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-sm font-medium text-white">Cover Letter Hook</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    I am excited about the opportunity to help Northstar Labs turn
                    product momentum into memorable storytelling and measurable growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
        <SectionHeading
          eyebrow="Why it works"
          title="Everything you need to create better applications faster"
          description="A lean product experience designed to feel modern, premium, and focused on getting candidates to a strong first draft quickly."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.index} {...feature} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card-lift rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-slate-950/20">
            <SectionHeading
              eyebrow="Resume Generator"
              title="Turn your achievements into a crisp resume narrative"
              description="The resume page helps users organize strengths, outcomes, and skills into a strong professional summary and scan-friendly sections."
            />
            <Link
              href="/resume-generator"
              className="btn-lift mt-8 inline-flex rounded-full border border-blue-300/50 bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/40 transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/70"
            >
              Open Resume Generator
            </Link>
          </div>

          <div className="card-lift rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-slate-950/20">
            <SectionHeading
              eyebrow="Cover Letter Generator"
              title="Draft personalized letters without starting from scratch"
              description="Use company context, role details, and your most relevant wins to create a tailored cover letter preview in seconds."
            />
            <Link
              href="/cover-letter-generator"
              className="btn-lift mt-8 inline-flex rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Open Cover Letter Generator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
