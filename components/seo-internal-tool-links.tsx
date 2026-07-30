import Link from "next/link";

type SeoInternalToolLinksProps = {
  /** Long-tail slug, or `blog`, or landing keys: `ai-resume-builder`, `resume-generator-free`, `ats-resume-checker` */
  variant: string;
};

const LEAD_BY_VARIANT: Record<string, string> = {
  "ai-resume-builder-for-students":
    "When you are ready to move from class projects to a professional one-pager, CV Builder gives you a simple next step:",
  "ai-resume-builder-for-freshers":
    "Once your notes reflect what you truly shipped, the fastest next step is to draft and iterate inside CV Builder:",
  "ai-resume-builder-for-developers":
    "After you tighten your technical fact sheet, ship a first-pass resume and supporting letter directly in CV Builder:",
  "free-resume-generator-online":
    "If you already know what you want to say, CV Builder helps you turn it into structured resume text—then refine before you export:",
  "ats-resume-checker-free":
    "When your wording is stable, validate your end-to-end application package with CV Builder tools before you hit submit:",
  "ats-resume-checker":
    "Use this page as your checklist, then move straight into CV Builder drafting tools when your content is ready to test:",
  blog: "When you are ready to move from reading to doing, CV Builder connects this guide to your actual application materials:",
  "ai-resume-builder":
    "If you want to turn this overview into a working draft today, CV Builder links strategy to execution through three core tools:",
  "resume-generator-free":
    "After you pick your target roles, CV Builder helps you generate and refine the documents recruiters actually read:",
  "ai-resume-builder-for-nurses":
    "When your clinical fact sheet is ready, turn it into nursing resume bullets with CV Builder:",
  "ai-resume-builder-for-teachers":
    "After you capture classroom outcomes, draft and refine your teaching resume in CV Builder:",
  "ai-resume-builder-for-marketers":
    "Turn campaign metrics into resume proof—start your marketing draft in CV Builder:",
  "ai-resume-builder-for-project-managers":
    "Ship a delivery-focused PM resume draft with scope and outcomes in CV Builder:",
  "ai-resume-builder-for-sales":
    "Convert quota wins into tight sales bullets with CV Builder:",
  "resume-bullet-point-generator":
    "Generate outcome-first bullets from your notes, then edit in CV Builder:",
  "resume-summary-generator":
    "Draft a full resume—including a strong summary—in CV Builder:",
  "professional-summary-for-resume-examples":
    "Adapt these patterns into your own summary using a CV Builder draft:",
  "ai-resume-builder-vs-chatgpt":
    "Try the structured resume workflow in CV Builder, then edit like you would any first draft:",
  "action-verbs-for-resume":
    "Upgrade weak bullets with stronger verbs using a CV Builder draft as your starting point:",
  "how-to-write-a-cover-letter":
    "When your outline is ready, draft a tailored letter in minutes with CV Builder:",
  "ai-cover-letter-generator-vs-manual":
    "Ready to test an AI-assisted workflow? Start a draft in CV Builder:",
  "cover-letter-examples-for-career-changers":
    "Turn your transferable-skills map into a letter draft with CV Builder:",
  "short-cover-letter-samples":
    "Generate a full draft, then trim it to hook–value–ask with CV Builder:",
};

export function SeoInternalToolLinks({ variant }: SeoInternalToolLinksProps) {
  const lead =
    LEAD_BY_VARIANT[variant] ??
    "When you are ready to apply what you just read, CV Builder connects guidance to execution through three core tools:";

  const coverLetterFirst = variant.includes("cover-letter") || variant.startsWith("short-cover-letter");

  const resumeLink = (
    <Link
      href="/ai-resume-builder-tool"
      className="font-semibold text-cyan-200 underline-offset-4 hover:underline"
    >
      AI resume generator
    </Link>
  );
  const coverLink = (
    <Link
      href="/cover-letter-generator"
      className="font-semibold text-cyan-200 underline-offset-4 hover:underline"
    >
      AI cover letter generator
    </Link>
  );
  const atsLink = (
    <Link
      href="/ats-resume-checker"
      className="font-semibold text-cyan-200 underline-offset-4 hover:underline"
    >
      ATS resume checker
    </Link>
  );

  return (
    <div className="mt-8 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.06] px-5 py-5">
      <p className="text-base leading-7 text-slate-200">
        {lead}{" "}
        {coverLetterFirst ? (
          <>
            start with the {coverLink} for a tailored narrative, pair it with the {resumeLink} for
            matching proof points, and use the {atsLink} guide before you finalize formatting.
          </>
        ) : (
          <>
            start with the {resumeLink} to produce structured resume text, follow with the {coverLink}{" "}
            when you need a narrative complement, and use the {atsLink} guide to sanity-check
            readability and keyword alignment before you finalize formatting.
          </>
        )}
      </p>
    </div>
  );
}
