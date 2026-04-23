import Link from "next/link";

type SeoCtaBlockProps = {
  title?: string;
  description?: string;
};

export function SeoCtaBlock({
  title = "Ready to build your next draft?",
  description = "Jump into the CBCBS generators and ship a stronger application today.",
}: SeoCtaBlockProps) {
  return (
    <div className="card-lift mt-12 rounded-3xl border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-slate-950/30">
      <h2 className="text-xl font-semibold tracking-tight text-white">{title}</h2>
      <p className="mt-2 text-sm leading-7 text-slate-300">{description}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link
          href="/resume-generator"
          className="btn-lift inline-flex items-center justify-center rounded-full border border-blue-300/50 bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/40 transition hover:bg-blue-500"
        >
          Open AI Resume Generator
        </Link>
        <Link
          href="/cover-letter-generator"
          className="btn-lift inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Open Cover Letter Generator
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full px-4 py-3 text-sm font-medium text-slate-300 underline-offset-4 transition hover:text-white hover:underline"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
