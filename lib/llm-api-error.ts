type ProviderErrorBody = {
  error?: {
    code?: string;
    message?: string;
    type?: string;
  };
  message?: string;
};

/** Map upstream provider errors to clearer messages for the UI. */
export function formatLlmHttpError(status: number, errorText: string): {
  message: string;
  details: string;
} {
  let providerMessage = errorText.slice(0, 1000);

  try {
    const parsed = JSON.parse(errorText) as ProviderErrorBody;
    const nested = parsed.error?.message ?? parsed.message;
    if (nested) {
      providerMessage = nested;
    }

    const code = parsed.error?.code ?? "";
    if (code === "InvalidSubscription" || /CodingPlan/i.test(providerMessage)) {
      return {
        message: "AI provider subscription is invalid for this website.",
        details:
          "The server is still using Volcengine Coding Plan credentials. Update Vercel environment variables to DeepSeek: OPENAI_BASE_URL=https://api.deepseek.com, OPENAI_MODEL=deepseek-v4-pro, OPENAI_API_KEY=<your DeepSeek sk- key>. Do not use https://ark.cn-beijing.volces.com/api/coding/v3 for public API routes. Redeploy after saving.",
      };
    }

    if (status === 401 || code === "invalid_api_key") {
      return {
        message: "Invalid API key.",
        details:
          "Check OPENAI_API_KEY on your hosting provider matches the provider in OPENAI_BASE_URL (e.g. DeepSeek console key for api.deepseek.com).",
      };
    }
  } catch {
    // keep raw text
  }

  if (/InvalidSubscription|CodingPlan/i.test(errorText)) {
    return {
      message: "AI provider subscription is invalid for this website.",
      details:
        "Switch production env from Volcengine Coding Plan to DeepSeek (see .env.example) and redeploy.",
    };
  }

  return {
    message: `LLM request failed with status ${status}.`,
    details: providerMessage,
  };
}
