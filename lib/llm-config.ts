/** Volcengine Ark *Coding Plan* endpoints are for IDE tools only—not public site APIs. */
export function isVolcengineCodingPlanEndpoint(baseUrl: string): boolean {
  return /volces\.com/i.test(baseUrl) && /\/api\/coding/i.test(baseUrl);
}

export type LlmConfig = {
  baseUrl: string;
  apiKey: string;
  model: string;
  chatCompletionsUrl: string;
};

export type LlmConfigResult =
  | { ok: true; config: LlmConfig }
  | { ok: false; message: string; details: string };

/**
 * Resolves LLM settings from environment variables.
 * Defaults match DeepSeek OpenAI-compatible API (see .env.example).
 */
export function resolveLlmConfig(): LlmConfigResult {
  const baseUrl = (
    process.env.OPENAI_BASE_URL ??
    process.env.DEEPSEEK_BASE_URL ??
    "https://api.deepseek.com"
  ).replace(/\/$/, "");

  const apiKey = process.env.OPENAI_API_KEY ?? process.env.DEEPSEEK_API_KEY;
  const model =
    process.env.OPENAI_MODEL ?? process.env.DEEPSEEK_MODEL ?? "deepseek-v4-pro";

  if (!apiKey?.trim()) {
    return {
      ok: false,
      message: "Missing OPENAI_API_KEY.",
      details:
        "Set OPENAI_API_KEY (or DEEPSEEK_API_KEY) in your hosting provider environment variables.",
    };
  }

  if (isVolcengineCodingPlanEndpoint(baseUrl)) {
    return {
      ok: false,
      message: "Invalid LLM endpoint for this website.",
      details:
        "OPENAI_BASE_URL points to Volcengine Coding Plan (/api/coding), which is only for Cursor-style IDE tools and requires a separate subscription. For production, set OPENAI_BASE_URL=https://api.deepseek.com, OPENAI_MODEL=deepseek-v4-pro, and a valid DeepSeek API key in Vercel → Project → Settings → Environment Variables, then redeploy.",
    };
  }

  if (apiKey.startsWith("ark-") && !/deepseek/i.test(baseUrl)) {
    return {
      ok: false,
      message: "API key does not match the configured endpoint.",
      details:
        "An Ark (volces) API key was detected with a non-Ark base URL—or the reverse. Use a DeepSeek key (sk-…) with OPENAI_BASE_URL=https://api.deepseek.com, or configure a supported OpenAI-compatible provider consistently.",
    };
  }

  return {
    ok: true,
    config: {
      baseUrl,
      apiKey: apiKey.trim(),
      model,
      chatCompletionsUrl: `${baseUrl}/chat/completions`,
    },
  };
}
