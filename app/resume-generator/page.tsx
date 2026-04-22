import type { Metadata } from "next";

import { ResumeGenerator } from "@/components/resume-generator";

export const metadata: Metadata = {
  title: "Resume Generator | ResumeAI",
  description: "Generate polished, ATS-friendly resume drafts in seconds.",
};

export default function ResumeGeneratorPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
      <ResumeGenerator />
    </section>
  );
}
