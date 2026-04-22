export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/10 bg-slate-950/40">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-6 py-10 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <p className="text-base font-semibold text-slate-100">CBCBS</p>
          <p className="mt-1">
            Professional AI tools for faster, cleaner, and more confident job applications.
          </p>
        </div>
        <div className="text-left lg:text-right">
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
          <p className="mt-1 text-slate-500">Designed in a modern SaaS style.</p>
        </div>
      </div>
    </footer>
  );
}
