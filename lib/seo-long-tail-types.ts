export type LongTailFaqItem = {
  question: string;
  answer: string;
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
  sections: {
    h2: string;
    paragraphs: string[];
  }[];
  steps: {
    h2: string;
    items: string[];
  };
  faq: [LongTailFaqItem, LongTailFaqItem, LongTailFaqItem];
  ctaTitle: string;
  ctaDescription: string;
};
