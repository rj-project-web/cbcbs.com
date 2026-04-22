"use client";

import { useState } from "react";

import {
  getFreeUsageRemaining,
  hasReachedFreeLimit,
  incrementFreeUsage,
} from "@/lib/free-limit";

type CoverLetterForm = {
  jobTitle: string;
  background: string;
};

const defaultValues: CoverLetterForm = {
  jobTitle: "",
  background: "",
};

export function CoverLetterGenerator() {
  const [values, setValues] = useState(defaultValues);
  const [coverLetterContent, setCoverLetterContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [remaining, setRemaining] = useState(getFreeUsageRemaining);

  const updateField = <K extends keyof CoverLetterForm>(key: K, value: CoverLetterForm[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  const handleGenerateCoverLetter = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    if (hasReachedFreeLimit()) {
      setError("You’ve reached the free limit. Please upgrade to continue.");
      return;
    }

    setLoading(true);
    setError("");
    setCopied(false);

    try {
      const response = await fetch("/api/generate-cover-letter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as {
        content?: string;
        message?: string;
        details?: string;
      };

      if (!response.ok || !data.content) {
        throw new Error(data.details || data.message || "Failed to generate cover letter.");
      }

      setCoverLetterContent(data.content);
      incrementFreeUsage();
      setRemaining(getFreeUsageRemaining());
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Failed to generate cover letter.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!coverLetterContent) return;
    await navigator.clipboard.writeText(coverLetterContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <section className="card-lift rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-slate-950/20 sm:p-8">
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          AI Cover Letter Generator
        </h1>
        <p className="mt-3 text-sm text-slate-300">
          Enter the job title and your background to generate a tailored cover letter.
        </p>
        <p className="mt-2 text-xs text-slate-400">
          Free uses remaining: {remaining}/3
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleGenerateCoverLetter}>
          <label className="block space-y-2" htmlFor="jobTitle">
            <span className="text-sm font-medium text-slate-100">Job Title</span>
            <input
              id="jobTitle"
              value={values.jobTitle}
              onChange={(event) => updateField("jobTitle", event.target.value)}
              placeholder="Senior Product Designer"
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
              required
            />
          </label>

          <label className="block space-y-2" htmlFor="background">
            <span className="text-sm font-medium text-slate-100">Your Background</span>
            <textarea
              id="background"
              value={values.background}
              onChange={(event) => updateField("background", event.target.value)}
              placeholder="Summarize your relevant experience, impact, and strengths"
              rows={7}
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
              required
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="btn-lift rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Generating..." : "Generate Cover Letter"}
          </button>
        </form>
      </section>

      <aside className="card-lift rounded-[1.75rem] border border-cyan-400/20 bg-slate-900/85 p-6 shadow-2xl shadow-cyan-950/10 sm:p-8">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-5">
          <h2 className="text-2xl font-semibold text-white">Generated Cover Letter</h2>
          <button
            type="button"
            onClick={handleCopy}
            disabled={!coverLetterContent}
            className="btn-lift rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-100 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {copied ? "Copied" : "Copy Content"}
          </button>
        </div>

        <div className="mt-6">
          {error ? <p className="text-sm text-rose-300">{error}</p> : null}
          <pre className="min-h-72 whitespace-pre-wrap rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm leading-7 text-slate-100">
            {coverLetterContent || 'Click "Generate Cover Letter" to see output here.'}
          </pre>
        </div>
      </aside>
    </div>
  );
}
