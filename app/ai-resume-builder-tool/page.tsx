import type { Metadata } from "next";

import { ResumeGenerator } from "@/components/resume-generator";

export const metadata: Metadata = {
  title: "AI Resume Builder Tool (Free) | CV Builder",
  description:
    "Generate ATS-friendly resume drafts with our free AI resume builder tool, then optimize wording and keywords for each job application.",
  alternates: {
    canonical: "/ai-resume-builder-tool",
  },
};

export default function AiResumeBuilderToolPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
      <ResumeGenerator />
    </section>
  );
}
