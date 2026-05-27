import { Agent } from "undici";

/**
 * Server-side fetch for LLM APIs. When OPENAI_ALLOW_INSECURE_TLS=true (local dev only),
 * skips TLS certificate verification — fixes UNABLE_TO_GET_ISSUER_CERT_LOCALLY on some machines.
 * Never enable this in production.
 */
const insecureDispatcher =
  process.env.OPENAI_ALLOW_INSECURE_TLS === "true"
    ? new Agent({
        connect: {
          rejectUnauthorized: false,
        },
      })
    : undefined;

export function llmFetch(url: string, init?: RequestInit): Promise<Response> {
  if (!insecureDispatcher) {
    return fetch(url, init);
  }

  return fetch(url, {
    ...init,
    dispatcher: insecureDispatcher,
  } as RequestInit);
}
