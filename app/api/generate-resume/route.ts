import { NextResponse } from "next/server";

import { requestLlmChatCompletion } from "@/lib/llm-chat";

/** Allow longer LLM calls on Vercel (Pro / higher limits apply). */
export const maxDuration = 60;

type ResumePayload = {
  name?: string;
  experience?: string;
  skills?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ResumePayload;
    const name = body.name?.trim();
    const experience = body.experience?.trim();
    const skills = body.skills?.trim();

    if (!name || !experience || !skills) {
      return NextResponse.json(
        {
          message: "Invalid request body.",
          details: "name, experience, and skills are required.",
        },
        { status: 400 },
      );
    }

    const prompt = `你是一名专业的简历优化专家，请根据用户提供的信息生成一份专业、简洁、符合ATS系统的英文简历。

要求：
- 使用 bullet points
- 使用强动词（action verbs）
- 内容专业、有逻辑
- 控制在1页以内

用户信息：
- Name: ${name}
- Experience: ${experience}
- Skills: ${skills}

请只返回简历正文（英文），不要添加额外解释。`;

    const result = await requestLlmChatCompletion([
      {
        role: "system",
        content: "You are an expert resume optimization specialist.",
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
        message: "Failed to process /api/generate-resume request.",
        details,
      },
      { status: 500 },
    );
  }
}
