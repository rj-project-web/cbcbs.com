import type { LongTailPageData } from "@/lib/seo-long-tail-types";

/** Phase 1.1 — Cover letter series supporting /cover-letter-generator */
export const COVER_LETTER_LONG_TAIL_SLUGS = [
  "how-to-write-a-cover-letter",
  "ai-cover-letter-generator-vs-manual",
  "cover-letter-examples-for-career-changers",
  "short-cover-letter-samples",
] as const;

export type CoverLetterLongTailSlug = (typeof COVER_LETTER_LONG_TAIL_SLUGS)[number];

const CTA = {
  ctaPrimaryHref: "/cover-letter-generator",
  ctaPrimaryLabel: "Open AI Cover Letter Generator",
} as const;

export const COVER_LETTER_LONG_TAIL_PAGES: Record<CoverLetterLongTailSlug, LongTailPageData> = {
  "how-to-write-a-cover-letter": {
    slug: "how-to-write-a-cover-letter",
    shortLabel: "How to write a cover letter",
    metaTitle: "How to Write a Cover Letter (2026) | CV Builder",
    metaDescription:
      "Learn how to write a cover letter that gets read: structure, format, templates, mistakes to avoid, and a fast AI drafting workflow.",
    eyebrow: "CV Builder · Cover letters",
    h1: "How to Write a Cover Letter That Gets Read (2026 Guide)",
    coverImage: {
      src: "/blog/how-to-write-a-cover-letter-cover.svg",
      alt: "How to write a cover letter guide cover for job seekers in 2026",
      caption: "A practical cover letter format and structure guide for modern applications.",
    },
    images: [
      {
        src: "/blog/cover-letter-structure-diagram.svg",
        alt: "Diagram of cover letter structure with seven parts",
        caption: "Use this cover letter structure when you need a full letter.",
      },
      {
        src: "/blog/cover-letter-template-preview.svg",
        alt: "Cover letter format template preview for job applications",
        caption: "Copy the template below, then tailor names, proof, and company details.",
      },
    ],
    intro: [
      "If you searched for **how to write a cover letter** in 2026, you are not alone. Many job seekers skip the letter because resumes feel faster—then wonder why they blend into a stack of near-identical applications. A strong letter does not repeat your resume. It earns attention in the first lines, proves fit for one role, and invites a conversation.",
      "This guide walks through cover letter format and cover letter structure that hiring teams still respond to: a clear header, a human greeting, a hook, company-specific why, two or three quantified achievements, and a soft close. You will also get a copy-paste template, rejection mistakes, and when email beats a formal letter attachment.",
      "When you want speed without losing control, draft with CV Builder’s [AI cover letter generator](/cover-letter-generator), then edit for voice and truth—the same discipline you should use with any [AI resume builder](/blog/ai-resume-builder) workflow.",
    ],
    sections: [
      {
        h2: "Why cover letters still matter in 2026",
        paragraphs: [
          "Applicant tracking systems and recruiter dashboards changed how resumes are screened, but they did not erase narrative. Many roles still request a letter; others mark it optional. Optional does not mean ignored. When two candidates look similar on paper, a focused letter can be the difference between a pass and an interview invite.",
          "Cover letters also solve problems resumes cannot: career pivots, employment gaps, relocation, or why this company specifically. Keep the letter short enough to skim on a phone. Recruiters rarely want a second autobiography—they want clarity and proof.",
          "If your resume already tells a crisp story, the letter should add motivation and selection: why this team, why now, and which two wins matter most for the posting. Pair letter drafting with a clean resume from the [free AI resume generator](/ai-resume-builder-tool) so both documents stay consistent.",
        ],
      },
      {
        h2: "The 7-part cover letter structure",
        paragraphs: [
          "Think of cover letter structure as a funnel: contact clarity first, then a hook, then proof, then a request. Skip clever fonts and graphics. Plain text that pastes cleanly into portals beats decorative layouts that break parsing.",
        ],
        subsections: [
          {
            h3: "Header & contact info",
            paragraphs: [
              "Match your resume header: name, city (or metro), phone, email, and optional LinkedIn or portfolio. If the letter is an email body, put contact details in your signature instead of a second header block.",
            ],
          },
          {
            h3: "Personalized greeting (avoid “To Whom It May Concern”)",
            paragraphs: [
              "Use a real name when you can find a hiring manager or recruiter. “Dear Hiring Team,” works when names are hidden. “To Whom It May Concern” signals you did not try. Five minutes of LinkedIn or the company site is usually enough.",
            ],
          },
          {
            h3: "The opening hook (one line that earns the next 10)",
            paragraphs: [
              "Open with role + proof + interest—not “I am writing to apply.” Example: “I’m a product analyst who cut onboarding drop-off 18% last quarter, and I’m excited about your growth role focused on activation.” That line earns the skim.",
            ],
          },
          {
            h3: "Why this company specifically",
            paragraphs: [
              "Name a product, customer segment, recent launch, or mission detail that connects to your background. Generic praise (“your innovative culture”) wastes space. Specificity shows research and reduces the “mass apply” smell.",
            ],
          },
          {
            h3: "Your 2–3 most relevant achievements (with numbers)",
            paragraphs: [
              "Pick wins that map to the job description. Use numbers when honest: revenue, time saved, quality improved, users served, cost reduced. Two tight examples beat five vague duties. Mirror language from the posting only where it matches real experience.",
            ],
          },
          {
            h3: "Soft close that invites an interview",
            paragraphs: [
              "Close with availability and a clear ask: “I’d welcome a conversation about how I can help [team goal].” Thank them, sign with your name, and stop. No pressure lines, no attachment lectures, no “I am the perfect candidate.”",
            ],
          },
        ],
      },
      {
        h2: "The copy-paste cover letter template",
        paragraphs: [
          "Use this cover letter format as a starting point. Replace brackets with specifics. Then run a draft through the [AI cover letter generator](/cover-letter-generator) if you want a faster first pass—always edit before you send.",
        ],
        codeBlock: `Dear [Hiring Manager Name],

I’m a [role identity] who [one quantified win], and I’m applying for the [Job Title] role at [Company].

I’m drawn to [Company] because [specific product, customer, or mission detail]. In my recent work at [Company/Project], I [achievement #1 with metric] and [achievement #2 with metric], which maps closely to your need for [requirement from the posting].

I’d welcome the chance to discuss how I can help [team goal]. Thank you for your time.

Best regards,
[Your Name]
[Phone] · [Email] · [LinkedIn or portfolio]`,
      },
      {
        h2: "5 mistakes that get cover letters rejected",
        paragraphs: [
          "**Repeating the resume line by line.** The letter should select and frame—not dump. Point to proof, then let the resume carry detail.",
          "**Buzzword stuffing without evidence.** “Synergy,” “rockstar,” and “passionate” without outcomes read empty. Prefer verbs and results.",
          "**One letter for every job.** Even small tailoring—company name, role title, one matched win—beats a generic blast.",
          "**Over-length.** If you need a second page, cut. Most strong letters fit half a page to three-quarters.",
          "**Unverified claims.** If you cannot defend a metric in an interview, remove it. Credibility compounds across resume, letter, and screen.",
        ],
      },
      {
        h2: "Cover letter vs email: when to use which",
        paragraphs: [
          "Use a formal letter (attachment or portal text box) when the application asks for a cover letter file. Use a short email body when a recruiter asks you to “send a note with your resume,” after a referral, or for warm intros.",
          "Email cover notes should be shorter: three tight paragraphs max. For samples of brief outreach, see [short cover letter samples](/blog/short-cover-letter-samples). For pivots, see [cover letter examples for career changers](/blog/cover-letter-examples-for-career-changers).",
          "Whatever the channel, keep formatting plain. Fancy templates that look great in Word can arrive as broken PDF text in a portal. When in doubt, paste plain text and attach a clean PDF only if requested.",
        ],
      },
    ],
    steps: {
      h2: "Step-by-step: write a cover letter with CV Builder",
      items: [
        "Highlight the job description for repeated skills, outcomes, and tools.",
        "List 2–3 achievements that match those needs, with honest metrics.",
        "Draft with the [AI cover letter generator](/cover-letter-generator) using role context and your background notes.",
        "Edit the opening hook and company-specific paragraph until they sound like you.",
        "Align the letter with your resume draft from the [AI resume generator](/ai-resume-builder-tool).",
        "Proofread names, titles, and links—then submit.",
      ],
    },
    faq: [
      {
        question: "How long should a cover letter be?",
        answer:
          "Aim for 250–400 words, or about half a page to three-quarters. If a role asks for a short note, use 120–200 words. Clarity beats length.",
      },
      {
        question: "Do I need a cover letter if the job says optional?",
        answer:
          "Often yes for competitive roles. Optional letters still get read when they add fit and motivation. Skip only when the posting explicitly says not to include one.",
      },
      {
        question: "Should I repeat my resume in the letter?",
        answer:
          "No. Select two or three relevant wins and explain why this company. Let the resume hold the full timeline.",
      },
      {
        question: "Can AI help me learn how to write a cover letter?",
        answer:
          "Yes—as a drafting aid. Tools like CV Builder’s AI cover letter generator speed structure and phrasing. You still verify facts, add company specifics, and edit for voice.",
      },
      {
        question: "What cover letter format do ATS systems prefer?",
        answer:
          "Plain text with standard paragraphs, no text boxes, and no icons-as-text. Fancy columns help humans less than they hurt parsing.",
      },
    ],
    ctaTitle: "Draft your cover letter in minutes",
    ctaDescription:
      "Use CV Builder’s AI cover letter generator to create a tailored first draft, then refine the hook and proof points before you apply.",
    ...CTA,
  },

  "ai-cover-letter-generator-vs-manual": {
    slug: "ai-cover-letter-generator-vs-manual",
    shortLabel: "AI cover letter generator vs manual",
    metaTitle: "AI Cover Letter Generator vs Manual | CV Builder",
    metaDescription:
      "Compare an AI cover letter generator vs writing manually: speed, personalization, ATS fit, cost, and when each approach wins more interviews.",
    eyebrow: "CV Builder · Comparisons",
    h1: "AI Cover Letter Generator vs Writing Manually: Which Gets More Interviews",
    coverImage: {
      src: "/blog/ai-cover-letter-generator-vs-manual-cover.svg",
      alt: "AI cover letter generator versus writing a cover letter manually comparison",
    },
    images: [
      {
        src: "/blog/ai-vs-manual-comparison.svg",
        alt: "Side-by-side comparison of AI cover letter builder and manual writing",
        caption: "Speed favors AI; judgment and company research still require you.",
      },
    ],
    intro: [
      "An **AI cover letter generator** promises a usable draft in seconds. Manual writing promises control. In practice, the candidates who interview more often combine both: AI for structure and speed, humans for truth, specificity, and voice.",
      "This comparison covers how cover letter builders work, side-by-side tradeoffs (speed, personalization, ATS, cost), when to lean on AI, when to write yourself, and how to get strong results from CV Builder without sounding generic—similar to the judgment you need when comparing an [AI resume builder vs ChatGPT](/blog/ai-resume-builder-vs-chatgpt).",
      "If you already know you want a fast draft, open the [AI cover letter generator](/cover-letter-generator) after you read the workflow section below.",
    ],
    sections: [
      {
        h2: "How AI cover letter generators actually work",
        paragraphs: [
          "Most AI cover letter tools take structured inputs—target role, background notes, tone—and return a letter-shaped draft. Under the hood, a language model predicts fluent text. It does not magically know your metrics, your manager’s name, or whether a claim is interview-safe.",
          "That is why input quality dominates output quality. “Experienced marketer seeking growth roles” produces fluff. “Built lifecycle email program that lifted retained revenue 12% in two quarters” produces usable proof. The generator organizes; you supply evidence.",
          "CV Builder’s [cover letter generator](/cover-letter-generator) is designed as a drafting accelerator: you enter role context and background, copy the result, then edit. It is not a substitute for research on the company or for aligning the letter with your resume.",
        ],
      },
      {
        h2: "AI vs manual — side by side",
        paragraphs: [
          "Neither approach wins for every candidate. Use the comparisons below to choose based on timeline, stakes, and how strong your source material already is.",
        ],
        subsections: [
          {
            h3: "Speed & effort",
            paragraphs: [
              "AI wins on raw speed: minutes instead of an evening. Manual writing is slower but can feel clearer if you already know your story. High-volume applicants usually cannot write every letter from scratch without burning out.",
            ],
          },
          {
            h3: "Personalization depth",
            paragraphs: [
              "Manual writing can go deep if you research carefully. AI can sound personalized while being generic if your inputs are thin. The best AI-assisted letters still include one company-specific paragraph you wrote or heavily edited yourself.",
            ],
          },
          {
            h3: "ATS optimization",
            paragraphs: [
              "ATS cares more about resume parseability than letter poetry, but portals that store letter text still benefit from plain structure and truthful keyword alignment. AI drafts are often clean; they can also invent skills. Manual writers invent fewer facts but may use messy formatting. Either way, verify keywords against real experience—same rule as [ATS-friendly resume](/blog/ats-friendly-resume-template) work.",
            ],
          },
          {
            h3: "Cost",
            paragraphs: [
              "Manual writing costs time. AI tools may be free with limits or paid at scale. CV Builder offers a free path to generate drafts quickly so you can spend paid time on interviews—not formatting.",
            ],
          },
        ],
      },
      {
        h2: "When an AI generator is the right call",
        paragraphs: [
          "Use an AI cover letter builder when you are applying to several similar roles, returning to the market after a gap, or stuck on the first paragraph. It is also useful when English is not your first language and you need a cleaner baseline to edit.",
          "AI helps most when you already have a fact sheet: wins, metrics, tools, and a short note on why the company matters. Without that, both AI and manual writing produce fog.",
        ],
      },
      {
        h2: "When you should still write it yourself",
        paragraphs: [
          "Write manually (or rewrite heavily) for dream-company applications, executive roles, or sensitive narratives—layoffs, pivots, visa constraints—where tone and precision matter more than speed.",
          "Also write yourself when the posting asks for a creative sample or a highly specific prompt. Generators excel at standard professional letters, not unique storytelling assignments.",
        ],
      },
      {
        h2: "How to get the best results from an AI tool",
        paragraphs: [
          "Start with the job description and highlight must-have skills. List two achievements that prove those skills. Add one sentence about the company that is specific enough to Google-check.",
          "Paste those notes into CV Builder’s [AI cover letter generator](/cover-letter-generator). Generate, then cut anything you cannot defend. Rewrite the opening line until it sounds like something you would say out loud.",
          "Finally, align the letter with your resume. If bullets and letter claims disagree, recruiters notice. Use the [AI resume generator](/ai-resume-builder-tool) to keep proof points consistent across documents.",
        ],
      },
    ],
    steps: {
      h2: "Step-by-step: AI-assisted cover letter workflow",
      items: [
        "Collect role requirements, two proof points, and one company-specific detail.",
        "Generate a draft with the [AI cover letter generator](/cover-letter-generator).",
        "Edit for voice: remove buzzwords, keep metrics, fix names.",
        "Cross-check claims against your resume.",
        "Send a short version for email intros; keep a fuller version for portal uploads.",
      ],
    },
    faq: [
      {
        question: "Can AI cover letters pass ATS?",
        answer:
          "ATS mainly evaluates resumes, but letter text should stay plain and truthful. AI can help with clean wording; it cannot guarantee a portal score. Focus on relevance and parseable formatting.",
      },
      {
        question: "Will recruiters know it’s AI-written?",
        answer:
          "They notice generic tone more than “AI.” Specific metrics, company research, and natural voice matter. Edit until it sounds like you.",
      },
      {
        question: "Is an AI cover letter generator better than ChatGPT alone?",
        answer:
          "A dedicated cover letter builder with structured inputs often produces more consistent letter shape. General chat tools can work if you prompt carefully—similar tradeoffs to resume drafting comparisons.",
      },
      {
        question: "Should I disclose that I used AI?",
        answer:
          "Usually unnecessary if you authored the final facts and edits. Treat AI like grammar tools: helpful, not a substitute for ownership.",
      },
    ],
    ctaTitle: "Try the AI cover letter generator",
    ctaDescription:
      "Generate a structured draft in CV Builder, then personalize the company paragraph and proof points before you hit send.",
    ...CTA,
  },

  "cover-letter-examples-for-career-changers": {
    slug: "cover-letter-examples-for-career-changers",
    shortLabel: "Career change cover letter examples",
    metaTitle: "Career Change Cover Letter Examples | CV Builder",
    metaDescription:
      "Cover letter for career change examples and templates: frame transferable skills, avoid “no experience” language, and draft faster with AI.",
    eyebrow: "CV Builder · Career change",
    h1: "Cover Letter Examples for Career Changers (With Templates)",
    coverImage: {
      src: "/blog/cover-letter-career-change-cover.svg",
      alt: "Cover letter for career change examples and templates for job seekers",
    },
    images: [
      {
        src: "/blog/career-change-skills-map.svg",
        alt: "Career change cover letter template showing transferable skills mapping",
        caption: "Map old-job skills to new-job outcomes before you write.",
      },
    ],
    intro: [
      "A **cover letter for career change** has one job: make the leap feel logical. Hiring managers worry you will need too much ramp-up. Your letter should translate past wins into the language of the new role—without apologizing for what you have not done yet.",
      "Below you will find three ready-to-adapt career change cover letter templates, a transferable-skills framing method, and what to leave out. For the general structure behind these samples, see [how to write a cover letter](/blog/how-to-write-a-cover-letter).",
      "Speed up your first draft with the [AI cover letter generator](/cover-letter-generator), then rewrite the transferable-skills paragraph until a skeptic would nod.",
    ],
    sections: [
      {
        h2: "The career-change cover letter challenge",
        paragraphs: [
          "Career-change letters fail when they lead with what you lack (“I’ve never worked in X”) or when they narrate your entire life story. Lead with the destination role and the bridge: skills, domains, and outcomes that transfer.",
          "Your resume may still show the old title. The letter is where you control interpretation. Make the first six seconds answer: “Why this person could succeed here soon.”",
        ],
      },
      {
        h2: "3 ready-to-use templates",
        paragraphs: [
          "Adapt names, metrics, and tools. Keep the skeleton: hook → bridge skills → one proof → ask.",
        ],
        subsections: [
          {
            h3: "Software → Product Manager",
            paragraphs: [
              "Bridge: shipping, customer feedback loops, prioritization under constraints.",
            ],
            codeBlock: `Dear [Name],

I’m a software engineer moving into product management after leading discovery and delivery for a B2B workflow tool used by 40+ enterprise teams.

At [Company], I partnered with design and support to cut onboarding time 25% by simplifying permissions—work that sits at the center of your PM role focused on activation. I’ve also run weekly customer interviews and translated feedback into a prioritized backlog with engineering tradeoffs documented.

I’d welcome a conversation about contributing to [Product]’s roadmap.

Best regards,
[Name]`,
          },
          {
            h3: "Teacher → Corporate Trainer",
            paragraphs: [
              "Bridge: curriculum design, facilitation, measurement of learning outcomes.",
            ],
            codeBlock: `Dear [Name],

I’m an educator transitioning into corporate training, with eight years designing curriculum and coaching adults to measurable skill gains.

In my last role, I rebuilt a 6-week literacy module that improved assessment pass rates 14% and reduced prep time for new instructors. I also facilitated workshops for 120+ staff on classroom tech adoption—experience I can bring to your L&D team’s enablement goals.

I’d be glad to discuss how I can support [Company]’s training roadmap.

Sincerely,
[Name]`,
          },
          {
            h3: "Retail → Healthcare Admin",
            paragraphs: [
              "Bridge: operations under pressure, compliance habits, patient/customer service systems.",
            ],
            codeBlock: `Dear [Name],

I’m moving from retail operations into healthcare administration, bringing experience coordinating high-volume schedules, privacy-sensitive records handling, and calm service in stressful moments.

As an assistant store lead, I managed shift coverage for 25 employees and reduced scheduling conflicts 30% by introducing a shared coverage board. I’m now completing [certification/course] and am eager to apply the same operational discipline to clinic workflows at [Organization].

Thank you for considering my application.

Best,
[Name]`,
          },
        ],
      },
      {
        h2: "How to frame transferable skills (CAR / STAR)",
        paragraphs: [
          "Use a compact CAR or STAR beat: Context → Action → Result. In letters, you often only have room for Action → Result with a hint of Context. Example: “Coordinated 12-person student project under a 3-week deadline → delivered a demo used by 200 campus users.”",
          "Translate titles carefully. “Teacher” becomes “designed learning experiences and coached adults.” “Retail lead” becomes “ran daily operations and trained staff on process compliance.” Then connect that translation to a requirement in the posting.",
          "After you map skills, generate a draft in the [AI cover letter generator](/cover-letter-generator) and replace any fuzzy phrases with your CAR lines.",
        ],
      },
      {
        h2: "What to leave out",
        paragraphs: [
          "Do not open with “I know I don’t have experience in…” Recruiters already see the gap; your job is to reduce risk, not highlight it.",
          "Avoid dumping every past role. Two transferable proofs beat a timeline tour. Skip salary history, family stories, and negativity about previous employers.",
          "Do not invent credentials. If you are studying for a cert, say so accurately. Overclaiming on a career-change letter destroys trust fast.",
        ],
      },
    ],
    steps: {
      h2: "Step-by-step: career-change letter with CV Builder",
      items: [
        "List target role requirements and match each to a transferable proof.",
        "Write 2 CAR bullets that will appear in the letter.",
        "Draft with the [AI cover letter generator](/cover-letter-generator) using those notes.",
        "Edit out apology language; strengthen the bridge paragraph.",
        "Update your resume narrative with the [AI resume generator](/ai-resume-builder-tool) so titles and claims stay consistent.",
      ],
    },
    faq: [
      {
        question: "How do I write a cover letter for career change without sounding desperate?",
        answer:
          "Lead with destination value and transferable proof. Stay factual, forward-looking, and specific about why this company—not why you need an escape.",
      },
      {
        question: "Should my resume and letter tell different stories?",
        answer:
          "They should tell the same story with different emphasis. The letter frames the leap; the resume provides evidence. Contradictions hurt.",
      },
      {
        question: "Can AI write a career change cover letter template for me?",
        answer:
          "AI can draft structure quickly. You must supply the bridge skills and edit for accuracy. CV Builder’s generator is a starting point, not a final submit button.",
      },
      {
        question: "How long should a career change cover letter be?",
        answer:
          "Keep it to one page and preferably shorter—enough to explain the bridge and two proofs, not a memoir.",
      },
    ],
    ctaTitle: "Draft your career-change cover letter",
    ctaDescription:
      "Generate a first pass with CV Builder, then tighten the transferable-skills bridge before you apply.",
    ...CTA,
  },

  "short-cover-letter-samples": {
    slug: "short-cover-letter-samples",
    shortLabel: "Short cover letter samples",
    metaTitle: "Short Cover Letter Samples & Templates | CV Builder",
    metaDescription:
      "Short cover letter examples and templates hiring managers actually read: email apps, referrals, career fair follow-ups, and LinkedIn outreach.",
    eyebrow: "CV Builder · Short letters",
    h1: "Short Cover Letter Samples That Hiring Managers Actually Read",
    coverImage: {
      src: "/blog/short-cover-letter-samples-cover.svg",
      alt: "Short cover letter examples and templates for email and outreach",
    },
    images: [
      {
        src: "/blog/short-cover-letter-formula.svg",
        alt: "Short cover letter template formula: hook, value, call to action",
        caption: "Hook + value + ask. That is the short cover letter template.",
      },
    ],
    intro: [
      "**Short cover letter examples** win when the channel is email, a referral intro, or a follow-up—not when a portal demands a full narrative. Hiring managers skim on phones. Three tight paragraphs beat a page of soft claims.",
      "This guide shows when short works, four adaptable samples, a simple formula, and pitfalls to avoid. For full-length structure, use [how to write a cover letter](/blog/how-to-write-a-cover-letter). For pivots, see [career change cover letter examples](/blog/cover-letter-examples-for-career-changers).",
      "Need a draft fast? Start in the [AI cover letter generator](/cover-letter-generator), then cut ruthlessly until only hook, value, and ask remain.",
    ],
    sections: [
      {
        h2: "When a short cover letter works best",
        paragraphs: [
          "Use a short note when a recruiter asks for a quick intro, when you have a referral, after a career fair chat, or when applying by email with the resume attached. Also use short form when the posting says “brief cover letter” or “letter of interest.”",
          "Choose a longer letter when the application explicitly requests a formal cover letter file, or when you must explain a complex transition. Short is a strategy—not a way to skip substance.",
        ],
      },
      {
        h2: "4 short samples you can adapt",
        paragraphs: [
          "Copy the shape, not the fake metrics. Replace details with your own proof.",
        ],
        subsections: [
          {
            h3: "Email application (3 short paragraphs)",
            codeBlock: `Subject: Application — [Job Title] — [Your Name]

Hi [Name],

I’m a [role] who [one win with number], and I’m applying for [Job Title] at [Company].

At [Current/Recent Company], I [relevant achievement]. I’m especially interested in [Company]’s work on [specific detail].

Resume attached. Happy to share more in a conversation this week.

Best,
[Name]
[Phone]`,
            paragraphs: [
              "Keep the subject line searchable. Attach the resume as PDF unless they ask for something else.",
            ],
          },
          {
            h3: "Referral intro",
            codeBlock: `Hi [Name],

[Referrer] suggested I reach out about the [Job Title] opening. I’m a [role] with experience in [skill area], most recently [one-line win].

I’d value 15 minutes to learn what success looks like on your team. Resume attached.

Thank you,
[Name]`,
            paragraphs: [
              "Name the referrer early. Keep the ask small and respectful of time.",
            ],
          },
          {
            h3: "Career fair follow-up",
            codeBlock: `Hi [Name],

Thanks for speaking with me at [Fair] about [Team/Role]. I enjoyed hearing how you’re tackling [topic you discussed].

As a quick reminder, I [one relevant proof]. I’ve attached my resume and would welcome next steps if helpful.

Best,
[Name]`,
            paragraphs: [
              "Send within 24–48 hours while the conversation is fresh.",
            ],
          },
          {
            h3: "LinkedIn cold outreach",
            codeBlock: `Hi [Name] — I’m exploring [Job Title] roles and admired [Company]’s recent [launch/news]. I’ve [one proof relevant to their work].

If you’re open to it, I’d appreciate any advice on what your team looks for in candidates. Happy to share a resume.

Thanks for considering,
[Name]`,
            paragraphs: [
              "Do not paste a full letter into LinkedIn. Keep it shorter than email.",
            ],
          },
        ],
      },
      {
        h2: "The short cover letter formula",
        paragraphs: [
          "**Hook:** who you are + the role. **Value:** one proof aligned to their need. **Ask:** a clear next step. That is the entire short cover letter template.",
          "If you draft with the [AI cover letter generator](/cover-letter-generator), generate a full letter first, then delete everything that is not hook, value, or ask. Shortening is an editing skill.",
        ],
      },
      {
        h2: "Common pitfalls when going short",
        paragraphs: [
          "Cutting so hard that you remove all proof. Short still needs one concrete win.",
          "Forgetting the ask. End with availability or a polite request for a conversation.",
          "Using the same short blurb for every company. Swap the company detail every time.",
          "Sending a short email with a messy resume attachment. Align both documents—use the [AI resume generator](/ai-resume-builder-tool) if your resume still reads unfinished.",
        ],
      },
    ],
    steps: {
      h2: "Step-by-step: write a short cover letter fast",
      items: [
        "Pick the channel (email, referral, fair follow-up, LinkedIn).",
        "Write one hook line and one proof line before you open any tool.",
        "Optionally draft fuller text with the [AI cover letter generator](/cover-letter-generator), then cut to three paragraphs.",
        "Add a specific company detail and a clear ask.",
        "Send with a clean resume attachment when appropriate.",
      ],
    },
    faq: [
      {
        question: "How short is too short for a cover letter?",
        answer:
          "If you only say “please see my resume,” you skipped the letter. Aim for at least three short paragraphs or ~120 words with one proof point.",
      },
      {
        question: "Are short cover letter examples okay for formal portals?",
        answer:
          "Only if the employer asks for brief interest. Otherwise follow the posting. A portal that requests a cover letter usually expects a fuller page.",
      },
      {
        question: "Can I use AI to write short cover letter templates?",
        answer:
          "Yes. Generate, then cut. AI often overwrites; your job is ruthless editing and accurate proof.",
      },
      {
        question: "Should a short letter still include a greeting and sign-off?",
        answer:
          "Yes. “Hi [Name]” and a simple “Best,” keep it professional without wasting space.",
      },
    ],
    ctaTitle: "Generate a short cover letter draft",
    ctaDescription:
      "Create a first draft with CV Builder’s AI cover letter generator, then trim it to hook, value, and ask.",
    ...CTA,
  },
};
