import { NextResponse } from "next/server";

import { requestLlmChatCompletion } from "@/lib/llm-chat";

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

    const result = await requestLlmChatCompletion([
      {
        role: "system",
        content:
          "You are an expert cover letter writing specialist. Always return polished English cover letter body text only.",
      },
      {
        role: "user",
        content: prompt,
      },
    ]);

    if (!result.ok) {
      return NextResponse.json(
        { message: result.message, details: result.details },
        { status: result.status },
      );
    }

    return NextResponse.json({ content: result.content });
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
