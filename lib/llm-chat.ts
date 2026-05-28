import { formatLlmHttpError } from "@/lib/llm-api-error";
import { resolveLlmConfig } from "@/lib/llm-config";
import { llmFetch } from "@/lib/llm-fetch";

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

type LlmChatResult =
  | { ok: true; content: string }
  | { ok: false; status: number; message: string; details: string };

export async function requestLlmChatCompletion(messages: ChatMessage[]): Promise<LlmChatResult> {
  const resolved = resolveLlmConfig();
  if (!resolved.ok) {
    return {
      ok: false,
      status: 500,
      message: resolved.message,
      details: resolved.details,
    };
  }

  const { config } = resolved;

  const llmResponse = await llmFetch(config.chatCompletionsUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model: config.model,
      messages,
      temperature: 0.7,
    }),
  });

  if (!llmResponse.ok) {
    const errorText = await llmResponse.text();
    const formatted = formatLlmHttpError(llmResponse.status, errorText);
    return {
      ok: false,
      status: 500,
      message: formatted.message,
      details: formatted.details,
    };
  }

  const data = (await llmResponse.json()) as {
    choices?: Array<{
      message?: {
        content?: string;
      };
    }>;
  };

  const content = data.choices?.[0]?.message?.content?.trim();

  if (!content) {
    return {
      ok: false,
      status: 500,
      message: "LLM response parsed, but no content found at choices[0].message.content.",
      details: JSON.stringify(data).slice(0, 1000),
    };
  }

  return { ok: true, content };
}
