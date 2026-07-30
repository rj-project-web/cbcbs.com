import type { ReactNode } from "react";

/**
 * Renders plain paragraphs with optional Markdown-style links: [label](/path)
 * and **bold** markers. Keeps long-tail content as strings while enabling SEO anchors.
 */
export function RichParagraph({
  text,
  className = "text-base leading-7 text-slate-300",
}: {
  text: string;
  className?: string;
}) {
  const nodes = parseInline(text);
  return <p className={className}>{nodes}</p>;
}

function parseInline(text: string): ReactNode[] {
  const tokens = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g).filter(Boolean);

  return tokens.map((token, index) => {
    const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <a
          key={`link-${index}`}
          href={link[2]}
          className="font-semibold text-cyan-200 underline-offset-4 hover:underline"
        >
          {link[1]}
        </a>
      );
    }

    const bold = token.match(/^\*\*([^*]+)\*\*$/);
    if (bold) {
      return (
        <strong key={`bold-${index}`} className="font-semibold text-white">
          {bold[1]}
        </strong>
      );
    }

    return <span key={`text-${index}`}>{token}</span>;
  });
}
