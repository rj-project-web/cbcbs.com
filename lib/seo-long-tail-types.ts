export type LongTailFaqItem = {
  question: string;
  answer: string;
};

export type LongTailSubsection = {
  h3: string;
  paragraphs: string[];
  /** Optional monospaced template/example block under the H3 */
  codeBlock?: string;
};

export type LongTailSection = {
  h2: string;
  paragraphs: string[];
  subsections?: LongTailSubsection[];
  codeBlock?: string;
};

export type LongTailImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type LongTailPageData = {
  slug: string;
  /** Short label for nav/footer links */
  shortLabel: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intro: string[];
  /** Optional hero/cover image under the H1 */
  coverImage?: LongTailImage;
  /** Optional in-article images (rendered after intro / before tools callout) */
  images?: LongTailImage[];
  sections: LongTailSection[];
  steps: {
    h2: string;
    items: string[];
  };
  /** 3–5 FAQ items (FAQPage JSON-LD + on-page H3 answers) */
  faq: LongTailFaqItem[];
  ctaTitle: string;
  ctaDescription: string;
  /** Override primary CTA button (defaults to free AI resume builder) */
  ctaPrimaryHref?: string;
  ctaPrimaryLabel?: string;
};
