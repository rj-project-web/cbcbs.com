import type { Metadata } from "next";

import { absoluteOgImage, absoluteUrl, SITE_NAME, SITE_TAGLINE } from "@/lib/site-config";

type BuildPageMetadataOptions = {
  title: string;
  description: string;
  /** Path only, e.g. `/blog/foo` */
  path: string;
  openGraphType?: "website" | "article";
  /** Override default logo OG image */
  ogImagePath?: string;
  /** Accessible alt text for OG/Twitter image */
  ogImageAlt?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  openGraphType = "website",
  ogImagePath,
  ogImageAlt,
}: BuildPageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const ogImage = absoluteOgImage(ogImagePath);
  const imageAlt = ogImageAlt ?? `${SITE_NAME} — ${SITE_TAGLINE}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: openGraphType,
      locale: "en_US",
      images: [
        {
          url: ogImage,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
