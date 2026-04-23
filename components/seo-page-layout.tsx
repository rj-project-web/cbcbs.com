import type { ReactNode } from "react";

type SeoPageLayoutProps = {
  children: ReactNode;
};

export function SeoPageLayout({ children }: SeoPageLayoutProps) {
  return (
    <div className="surface-grid border-b border-white/10">
      <article className="mx-auto max-w-3xl px-6 py-16 text-slate-200 lg:px-8 lg:py-24">
        {children}
      </article>
    </div>
  );
}
