type ToolFaqItem = {
  question: string;
  answer: string;
};

type ToolPageSeoContentProps = {
  howItWorksTitle?: string;
  howItWorks: Array<{ title: string; body: string }>;
  featuresTitle?: string;
  features: Array<{ title: string; body: string }>;
  whoTitle?: string;
  whoIntro: string;
  whoItems: string[];
  faqTitle?: string;
  faq: ToolFaqItem[];
};

export function ToolPageSeoContent({
  howItWorksTitle = "How it works",
  howItWorks,
  featuresTitle = "Key features",
  features,
  whoTitle = "Who it's for",
  whoIntro,
  whoItems,
  faqTitle = "Frequently asked questions",
  faq,
}: ToolPageSeoContentProps) {
  return (
    <div className="mt-14 space-y-14 border-t border-white/10 pt-14">
      <section aria-labelledby="tool-how-heading">
        <h2 id="tool-how-heading" className="text-2xl font-semibold tracking-tight text-white">
          {howItWorksTitle}
        </h2>
        <ol className="mt-5 list-decimal space-y-4 pl-5 text-base leading-7 text-slate-300">
          {howItWorks.map((step) => (
            <li key={step.title}>
              <strong className="font-semibold text-white">{step.title}</strong>
              {" — "}
              {step.body}
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="tool-features-heading">
        <h2 id="tool-features-heading" className="text-2xl font-semibold tracking-tight text-white">
          {featuresTitle}
        </h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg shadow-slate-950/20"
            >
              <p className="text-sm font-semibold text-white">{feature.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{feature.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="tool-who-heading">
        <h2 id="tool-who-heading" className="text-2xl font-semibold tracking-tight text-white">
          {whoTitle}
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-300">{whoIntro}</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-slate-300">
          {whoItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="tool-faq-heading">
        <h2 id="tool-faq-heading" className="text-2xl font-semibold tracking-tight text-white">
          {faqTitle}
        </h2>
        <div className="mt-6 space-y-8">
          {faq.map((item) => (
            <div key={item.question}>
              <h3 className="text-lg font-semibold text-white">{item.question}</h3>
              <p className="mt-2 text-base leading-7 text-slate-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
