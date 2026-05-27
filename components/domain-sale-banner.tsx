const CONTACT_EMAIL = "echoyang7887@gmail.com";

export function DomainSaleBanner() {
  return (
    <div
      role="status"
      className="border-b border-amber-400/25 bg-gradient-to-r from-amber-950/90 via-slate-900/95 to-amber-950/90"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-2 text-center text-xs sm:text-sm lg:px-10">
        <span className="font-medium text-amber-100">
          本域名 <span className="text-amber-50">cbcbs.com</span> 出售中
        </span>
        <span className="hidden text-slate-500 sm:inline" aria-hidden>
          ·
        </span>
        <span className="text-slate-300">
          Domain for sale — interested parties please contact{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-cyan-300 underline decoration-cyan-400/40 underline-offset-2 transition hover:text-cyan-200"
          >
            {CONTACT_EMAIL}
          </a>
        </span>
      </div>
    </div>
  );
}
