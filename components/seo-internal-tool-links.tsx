import Link from "next/link";

type SeoInternalToolLinksProps = {
  /** Long-tail slug, or `blog`, or landing keys: `ai-resume-builder`, `resume-generator-free`, `ats-resume-checker` */
  variant: string;
};

const LEAD_BY_VARIANT: Record<string, string> = {
  "ai-resume-builder-for-students":
    "When you are ready to move from class projects to a professional one-pager, CBCBS gives you a simple next step:",
  "ai-resume-builder-for-freshers":
    "Once your notes reflect what you truly shipped, the fastest next step is to draft and iterate inside CBCBS:",
  "ai-resume-builder-for-developers":
    "After you tighten your technical fact sheet, ship a first-pass resume and supporting letter directly in CBCBS:",
  "free-resume-generator-online":
    "If you already know what you want to say, CBCBS helps you turn it into structured resume text—then refine before you export:",
  "ats-resume-checker-free":
    "When your wording is stable, validate your end-to-end application package with CBCBS tools before you hit submit:",
  "ats-resume-checker":
    "Use this page as your checklist, then move straight into CBCBS drafting tools when your content is ready to test:",
  blog: "When you are ready to move from reading to doing, CBCBS connects this guide to your actual application materials:",
  "ai-resume-builder":
    "If you want to turn this overview into a working draft today, CBCBS links strategy to execution through three core tools:",
  "resume-generator-free":
    "After you pick your target roles, CBCBS helps you generate and refine the documents recruiters actually read:",
};

export function SeoInternalToolLinks({ variant }: SeoInternalToolLinksProps) {
  const lead =
    LEAD_BY_VARIANT[variant] ??
    "When you are ready to apply what you just read, CBCBS connects guidance to execution through three core tools:";

  return (
    <div className="mt-8 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.06] px-5 py-5">
      <p className="text-base leading-7 text-slate-200">
        {lead} start with the{" "}
        <Link
          href="/resume-generator"
          className="font-semibold text-cyan-200 underline-offset-4 hover:underline"
        >
          AI resume generator
        </Link>{" "}
        to produce structured resume text, follow with the{" "}
        <Link
          href="/cover-letter-generator"
          className="font-semibold text-cyan-200 underline-offset-4 hover:underline"
        >
          cover letter generator
        </Link>{" "}
        when you need a narrative complement, and use the{" "}
        <Link
          href="/ats-resume-checker"
          className="font-semibold text-cyan-200 underline-offset-4 hover:underline"
        >
          ATS resume checker
        </Link>{" "}
        guide to sanity-check readability and keyword alignment before you finalize formatting.
      </p>
    </div>
  );
}
