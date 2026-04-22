# ResumeAI

A modern AI resume generator website built with Next.js App Router, TypeScript, and Tailwind CSS.

## Pages

- `/` landing page
- `/resume-generator` resume generator
- `/cover-letter-generator` cover letter generator

## Run locally

```bash
npm install
npm run dev
```

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
