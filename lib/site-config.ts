/** Canonical site URL (no trailing slash). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "https://www.cbcbs.com";

export const SITE_NAME = "CV Builder";

export const SITE_TAGLINE =
  "Free AI resume builder, cover letter generator, and ATS-friendly career guides for job seekers.";

/** Default Open Graph / Twitter image (absolute path on site). */
export const DEFAULT_OG_IMAGE_PATH = "/logo.jpg";

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function absoluteOgImage(path: string = DEFAULT_OG_IMAGE_PATH): string {
  return absoluteUrl(path);
}
