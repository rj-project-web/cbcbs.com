"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/lib/navigation";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/10 bg-slate-950/70 backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold text-white">
          <Image
            src="/logo.jpg"
            alt="CV Builder"
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 rounded-lg object-contain ring-1 ring-white/15"
            priority
            unoptimized
          />
          <span className="text-base tracking-tight">CV Builder</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.matchPrefix ? pathname.startsWith(item.matchPrefix) : false);
            return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                isActive
                  ? "border border-cyan-300/30 bg-cyan-300/10 text-cyan-100"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
          })}
        </nav>

        <Link
          href="/resume-generator"
          className="btn-lift rounded-full border border-blue-300/50 bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-950/40 transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/70"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
