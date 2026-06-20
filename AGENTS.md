<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio AI Agent Rules

When assisting with this portfolio project, you must adhere strictly to the following rules:

## 1. Content Management Architecture (CRITICAL)
- **Single Source of Truth**: Absolutely **ALL** textual content, links, project details, and experience bullet points MUST be managed in `src/data/portfolio.json`.
- **No Hardcoding**: NEVER hardcode text directly into React components (`src/components/*` or `src/app/*`). Always map data from the JSON file.
- **Resume URL Formatting**: When updating the `resumeUrl` in the JSON file, ALWAYS format Google Docs URLs using the `/export?format=pdf` endpoint (e.g., `https://docs.google.com/document/d/DOC_ID/export?format=pdf`). Do NOT use `/edit` or `/view`, as this breaks the one-click PDF download functionality in the Hero section.
- **Avatar Photo**: The "Behind the Code" (About) section relies on a user photo. The `avatarUrl` field in `portfolio.json` specifies its path (usually `/avatar.png`). The user must place their photo in the `/public` directory.

## 2. UI / UX Design System
- **Tailwind & shadcn/ui**: Rely on Tailwind CSS utilities and `shadcn/ui` components.
- **Color Variables**: Use CSS variable-based colors (`bg-background`, `text-primary`, `bg-muted`, etc.). Do not use hardcoded hex values or standard tailwind colors (like `bg-blue-500`) to ensure dark mode remains flawless.
- **Glassmorphism**: When adding new cards or sections, adhere to the established glassmorphic aesthetic (`bg-gradient-to-br from-card to-card/30 backdrop-blur-xl border border-border/50`).

## 3. Icons and Media
- **Brand Icons**: `lucide-react` no longer supports brand icons (e.g., GitHub, LinkedIn, Twitter). For social links, **MUST use raw inline SVGs** with `fill-current`. Do not attempt to import them from `lucide-react`.

## 4. Next.js App Router
- **Server vs Client**: Default to Server Components. Only add `"use client"` when explicitly using React hooks (`useState`, `useEffect`), interactive events, or `framer-motion`.

## 5. Build Verification
- Always run `yarn lint && yarn build` before concluding your task to verify Type-Safe JSON mapping.
