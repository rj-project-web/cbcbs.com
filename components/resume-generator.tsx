"use client";

import { useState } from "react";
import Link from "next/link";

import {
  getFreeUsageRemaining,
  hasReachedFreeLimit,
  incrementFreeUsage,
} from "@/lib/free-limit";

type ResumeForm = {
  name: string;
  experience: string;
  skills: string;
};

const defaultValues: ResumeForm = {
  name: "",
  experience: "",
  skills: "",
};

export function ResumeGenerator() {
  const [values, setValues] = useState(defaultValues);
  const [resumeContent, setResumeContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [remaining, setRemaining] = useState(getFreeUsageRemaining);

  const updateField = <K extends keyof ResumeForm>(key: K, value: ResumeForm[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  const handleGenerateResume = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (hasReachedFreeLimit()) {
      setError("You’ve reached the free limit. Please upgrade to continue.");
      return;
    }

    setLoading(true);
    setError("");
    setCopied(false);

    try {
      const response = await fetch("/api/generate-resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const rawText = await response.text();
      let data: { content?: string; message?: string; details?: string };
      try {
        data = rawText ? (JSON.parse(rawText) as typeof data) : {};
      } catch {
        throw new Error(
          !response.ok
            ? `Request failed (${response.status}). ${rawText.slice(0, 240)}`
            : "Invalid JSON response from server.",
        );
      }

      if (!response.ok || !data.content) {
        throw new Error(
          data.details || data.message || "Failed to generate resume.",
        );
      }

      setResumeContent(data.content);
      incrementFreeUsage();
      setRemaining(getFreeUsageRemaining());
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Failed to generate resume. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!resumeContent) return;
    await navigator.clipboard.writeText(resumeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <section className="card-lift rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-slate-950/20 sm:p-8">
        <h1 className="text-3xl font-semibold tracking-tight text-white">AI Resume Builder</h1>
        <p className="mt-3 text-sm text-slate-300">
          This <strong className="font-semibold text-white">AI Resume Builder</strong> helps you
          turn raw experience into structured, ATS-ready resume content in seconds.
        </p>
        <p className="mt-3 text-xs text-slate-400">
          Build a complete application package with the{" "}
          <Link
            href="/cover-letter-generator"
            className="font-semibold text-cyan-200 underline-offset-4 hover:underline"
          >
            Cover Letter Generator
          </Link>{" "}
          and validate targeting via the{" "}
          <Link
            href="/ats-resume-checker"
            className="font-semibold text-cyan-200 underline-offset-4 hover:underline"
          >
            ATS Resume Checker
          </Link>
          .
        </p>
        <p className="mt-2 text-xs text-slate-400">
          Free uses remaining: {remaining}/3
        </p>

        <form
          className="mt-8 space-y-5"
          onSubmit={handleGenerateResume}
        >
          <label className="block space-y-2" htmlFor="name">
            <span className="text-sm font-medium text-slate-100">Name</span>
            <input
              id="name"
              value={values.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder="John Carter"
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
              required
            />
          </label>

          <label className="block space-y-2" htmlFor="experience">
            <span className="text-sm font-medium text-slate-100">Work Experience</span>
            <textarea
              id="experience"
              value={values.experience}
              onChange={(event) => updateField("experience", event.target.value)}
              placeholder="Describe your key work experience and achievements"
              rows={6}
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
              required
            />
          </label>

          <label className="block space-y-2" htmlFor="skills">
            <span className="text-sm font-medium text-slate-100">
              Skills (comma separated)
            </span>
            <input
              id="skills"
              value={values.skills}
              onChange={(event) => updateField("skills", event.target.value)}
              placeholder="React, TypeScript, Node.js"
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
              required
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="btn-lift rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Generating..." : "Generate with AI Resume Builder"}
          </button>
        </form>
      </section>

      <aside className="card-lift rounded-[1.75rem] border border-cyan-400/20 bg-slate-900/85 p-6 shadow-2xl shadow-cyan-950/10 sm:p-8">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-5">
          <h2 className="text-2xl font-semibold text-white">AI Resume Builder Output</h2>
          <button
            type="button"
            onClick={handleCopy}
            disabled={!resumeContent}
            className="btn-lift rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-100 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {copied ? "Copied" : "Copy Content"}
          </button>
        </div>

        <div className="mt-6">
          {error ? <p className="text-sm text-rose-300">{error}</p> : null}
          <pre className="min-h-72 whitespace-pre-wrap rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm leading-7 text-slate-100">
            {resumeContent || 'Click "Generate with AI Resume Builder" to see output here.'}
          </pre>
        </div>
      </aside>
    </div>
  );
}
