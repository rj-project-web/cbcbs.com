export type ResumeFormValues = {
  fullName: string;
  targetRole: string;
  yearsOfExperience: string;
  topSkills: string;
  biggestAchievement: string;
  tone: string;
};

export type ResumePreview = {
  name: string;
  title: string;
  summary: string;
  achievements: string[];
  skills: string[];
};

export type CoverLetterFormValues = {
  fullName: string;
  company: string;
  role: string;
  experience: string;
  highlights: string;
  motivation: string;
};

export type CoverLetterPreview = {
  heading: string;
  greeting: string;
  paragraphs: string[];
  signature: string;
};

const splitList = (value: string) =>
  value
    .split(/[\n,]/)
    .map((item) => item.trim())
    .filter(Boolean);

export const buildResumePreview = (
  values: ResumeFormValues,
): ResumePreview => {
  const skills = splitList(values.topSkills);
  const achievements = splitList(values.biggestAchievement);
  const experienceLabel = values.yearsOfExperience || "several years";
  const targetRole = values.targetRole || "AI Product Specialist";
  const tone = values.tone || "clear and confident";

  const summary = `${values.fullName || "Candidate"} is a ${tone} ${targetRole} candidate with ${experienceLabel} of experience. They combine strong execution, measurable outcomes, and practical AI workflows to deliver polished job application materials fast.`;

  return {
    name: values.fullName || "Your Name",
    title: targetRole,
    summary,
    achievements:
      achievements.length > 0
        ? achievements
        : [
            "Built high-impact projects with measurable business outcomes.",
            "Improved workflows using automation, AI, and sharper communication.",
            "Delivered cross-functional results in fast-moving environments.",
          ],
    skills:
      skills.length > 0
        ? skills
        : [
            "Resume strategy",
            "AI-assisted writing",
            "Achievement storytelling",
            "ATS optimization",
          ],
  };
};

export const buildCoverLetterPreview = (
  values: CoverLetterFormValues,
): CoverLetterPreview => {
  const role = values.role || "the role";
  const company = values.company || "your company";
  const greeting = `Dear Hiring Team at ${company},`;
  const highlights = splitList(values.highlights);
  const experience = values.experience || "hands-on experience driving meaningful outcomes";
  const motivation =
    values.motivation ||
    `I am excited by the opportunity to contribute to ${company} with a blend of strategy, execution, and strong written communication.`;

  return {
    heading: `${values.fullName || "Your Name"} | ${role} application`,
    greeting,
    paragraphs: [
      `I am writing to express my interest in ${role} at ${company}. With ${experience}, I focus on turning ambiguity into clear execution, user value, and results that teams can measure.`,
      highlights.length > 0
        ? `Some of the strengths I would bring to this role include ${highlights.join(", ")}. These experiences have helped me build momentum quickly while maintaining a high bar for quality.`
        : "My background includes building polished deliverables, collaborating across teams, and adapting quickly to new priorities. I bring structure, ownership, and a strong sense of what great candidate materials should communicate.",
      motivation,
    ],
    signature: values.fullName || "Your Name",
  };
};
