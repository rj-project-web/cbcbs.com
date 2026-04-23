import { NextResponse } from "next/server";

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

    const baseUrl = (process.env.OPENAI_BASE_URL ?? "https://api.openai.com/v1").replace(
      /\/$/,
      "",
    );
    const apiKey = process.env.OPENAI_API_KEY;
    const model = process.env.OPENAI_MODEL ?? "glm-5.1";

    if (!apiKey) {
      return NextResponse.json({ message: "Missing OPENAI_API_KEY." }, { status: 500 });
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
            content: "You are an expert resume optimization specialist.",
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
        message: "Failed to process /api/generate-resume request.",
        details,
      },
      { status: 500 },
    );
  }
}
