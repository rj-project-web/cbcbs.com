# ResumeAI

A modern AI resume generator website built with Next.js App Router, TypeScript, and Tailwind CSS.

## Pages

- `/` landing page
- `/resume-generator` resume generator
- `/cover-letter-generator` cover letter generator

## Run locally

```bash
npm install
cp .env.example .env.local
# Edit .env.local — add your DeepSeek API key
npm run dev
```

## Production (Vercel) environment variables

The site calls an OpenAI-compatible chat API on the **server only**. Use **DeepSeek** (or another public API)—**not** Volcengine Ark **Coding Plan** (`/api/coding/v3`), which is for IDE tools and returns `InvalidSubscription` on a public website.

In Vercel → Project → **Settings** → **Environment Variables**, set for **Production** (and Preview if needed):

| Variable | Value |
|----------|--------|
| `OPENAI_API_KEY` | Your DeepSeek key (`sk-…`) from [DeepSeek API keys](https://platform.deepseek.com/api_keys) |
| `OPENAI_BASE_URL` | `https://api.deepseek.com` |
| `OPENAI_MODEL` | `deepseek-v4-pro` |
| `NEXT_PUBLIC_SITE_URL` | `https://www.cbcbs.com` |

Do **not** set `OPENAI_ALLOW_INSECURE_TLS` on Vercel. After saving, **Redeploy** the latest deployment so functions pick up new env values.

## Project structure

```text
app/
  cover-letter-generator/page.tsx
  resume-generator/page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  cover-letter-generator.tsx
  feature-card.tsx
  generator-field.tsx
  resume-generator.tsx
  section-heading.tsx
  site-footer.tsx
  site-header.tsx
lib/
  generators.ts
  navigation.ts
eslint.config.mjs
next.config.ts
package.json
postcss.config.mjs
tsconfig.json
```
