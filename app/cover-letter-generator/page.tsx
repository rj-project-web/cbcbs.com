import type { Metadata } from "next";

import { CoverLetterGenerator } from "@/components/cover-letter-generator";

export const metadata: Metadata = {
  title: "Cover Letter Generator | ResumeAI",
  description: "Create tailored cover letter drafts with a clean AI-powered workflow.",
};

export default function CoverLetterGeneratorPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
      <CoverLetterGenerator />
    </section>
  );
}
