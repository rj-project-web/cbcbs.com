import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteLinkHub } from "@/components/site-link-hub";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CV Builder | AI Resume Builder, Cover Letter Generator & ATS Tips",
  description:
    "CV Builder helps job seekers create ATS-friendly resumes, tailored cover letters, and keyword-aligned application content with practical AI workflows.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            {children}
            <SiteLinkHub />
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
