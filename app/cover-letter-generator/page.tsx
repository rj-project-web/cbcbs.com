import type { Metadata } from "next";

import { CoverLetterGenerator } from "@/components/cover-letter-generator";

export const metadata: Metadata = {
  title: "AI Cover Letter Generator for Job Applications | CV Builder",
  description:
    "Create tailored AI cover letters for each job application, align your narrative with resume keywords, and speed up application-ready drafts.",
};

export default function CoverLetterGeneratorPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
      <CoverLetterGenerator />
    </section>
  );
}
