import type { Metadata } from "next";

import { ResumeGenerator } from "@/components/resume-generator";

export const metadata: Metadata = {
  title: "AI Resume Builder | CV Builder",
  description:
    "Use the AI Resume Builder to generate ATS-friendly resume drafts in seconds, then refine with role-specific keywords.",
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
