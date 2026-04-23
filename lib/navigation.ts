export type NavItem = {
  label: string;
  href: string;
  /** Highlight nav when pathname starts with this (e.g. /blog for /blog/...). */
  matchPrefix?: string;
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "AI Resume Builder", href: "/ai-resume-builder-tool" },
  { label: "Cover Letter Generator", href: "/cover-letter-generator" },
  { label: "Blog", href: "/blog", matchPrefix: "/blog" },
];
