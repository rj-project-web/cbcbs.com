import { NextResponse } from "next/server";

/** Allow longer LLM calls on Vercel (Pro / higher limits apply). */
export const maxDuration = 60;

type CoverLetterPayload = {
  jobTitle?: string;
  background?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CoverLetterPayload;
    const jobTitle = body.jobTitle?.trim();
    const background = body.background?.trim();

    if (!jobTitle || !background) {
      return NextResponse.json(
        {
          message: "Invalid request body.",
          details: "jobTitle and background are required.",
        },
        { status: 400 },
      );
    }

    const baseUrl = (process.env.OPENAI_BASE_URL ?? "https://api.openai.com/v1").replace(
      /\/$/,
      "",
    );
    const apiKey = process.env.OPENAI_API_KEY;
    const model = process.env.OPENAI_MODEL ?? "gpt-4o-mini";

    if (!apiKey) {
      return NextResponse.json({ message: "Missing OPENAI_API_KEY." }, { status: 500 });
    }

    const prompt = `你是一名专业的求职信优化专家，请根据用户提供的信息生成一封专业、简洁、符合ATS系统偏好的英文求职信。

要求：
- 语言自然、专业，结构清晰
- 突出与目标岗位高度相关的经验和成果
- 使用有说服力的动词和表达（action-oriented）
- 控制在1页以内
- 内容包含：开场动机、匹配亮点、价值主张、结尾行动意愿

用户信息：
- Job Title: ${jobTitle}
- Candidate Background: ${background}

请只返回求职信正文（英文），不要添加任何解释、标题前缀或代码块标记。`;

    const llmResponse = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "system",
            content:
              "You are an expert cover letter writing specialist. Always return polished English cover letter body text only.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
      }),
    });

    if (!llmResponse.ok) {
      const errorText = await llmResponse.text();
      return NextResponse.json(
        {
          message: `LLM request failed with status ${llmResponse.status}.`,
          details: errorText.slice(0, 1000),
        },
        { status: 500 },
      );
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
      return NextResponse.json(
        {
          message:
            "LLM response parsed, but no content found at choices[0].message.content.",
          details: JSON.stringify(data).slice(0, 1000),
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ content });
  } catch (error: unknown) {
    let details = "Unknown server error.";
    if (error instanceof Error) {
      const cause =
        typeof error.cause === "object" && error.cause !== null
          ? JSON.stringify(error.cause)
          : String(error.cause ?? "");
      details = `${error.message}${cause ? ` | cause: ${cause}` : ""}`;
    }

    return NextResponse.json(
      {
        message: "Failed to process /api/generate-cover-letter request.",
        details,
      },
      { status: 500 },
    );
  }
}
