import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteJsonLd } from "@/components/site-json-ld";
import { SiteLinkHub } from "@/components/site-link-hub";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site-config";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "https://www.cbcbs.com",
  ),
  ...buildPageMetadata({
    title: `${SITE_NAME} | AI Resume Builder, Cover Letter Generator & ATS Tips`,
    description: SITE_TAGLINE,
    path: "/",
  }),
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <SiteJsonLd />
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
