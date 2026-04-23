import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/10 bg-slate-950/40">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 text-sm text-slate-400 lg:flex-row lg:items-start lg:justify-between lg:px-10">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.jpg"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 shrink-0 rounded-md object-contain ring-1 ring-white/10"
              aria-hidden
              unoptimized
            />
            <p className="text-base font-semibold text-slate-100">CV Builder</p>
          </div>
          <p className="mt-1 max-w-md">
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
