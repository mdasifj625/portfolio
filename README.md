# Md Asif Jawed - Software Engineer Portfolio

A premium, minimal, and highly professional developer portfolio built for speed, SEO, and maintainability. Engineered with a strict separation of concerns, all content is driven by a single JSON source of truth.

## ✨ Features

- **Single Source of Truth**: All text, experience, projects, and skills are managed centrally in `src/data/portfolio.json` for zero-friction content updates.
- **Modern Tech Stack**: Built on Next.js 16 (App Router) and React 19.
- **Premium Styling**: Uses Tailwind CSS v4 and `shadcn/ui` with highly refined glassmorphic UI elements, smooth gradients, and custom themes.
- **Micro-Animations**: Powered by Framer Motion, featuring interactive SaaS architecture diagrams with live animated data flows.
- **Global Command Menu**: Integrated `cmdk` search bar (`⌘K` / `Ctrl+K`) for lightning-fast site navigation.
- **SEO Optimized**: Fully equipped with dynamic `sitemap.xml`, `robots.txt`, OpenGraph metadata, and structured JSON-LD schema.
- **Dark Mode**: Flawless light/dark mode support via `next-themes`.
- **Type-Safe**: 100% written in TypeScript with strict linting and type checking.

## 🚀 Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS, `shadcn/ui`
- **Animations**: Framer Motion
- **Icons**: Lucide React (embedded SVGs for brand icons)
- **Search**: `cmdk`
- **Deployment**: Vercel (Recommended)

## 📂 Project Structure

```text
├── src/
│   ├── app/                # Next.js App Router (pages, layout, SEO)
│   ├── components/         # Reusable UI components (Experience, Projects, Navbar, etc.)
│   ├── components/ui/      # shadcn/ui base components
│   ├── data/               # ⚠️ portfolio.json (Content source of truth)
│   └── lib/                # Utility functions
├── package.json
└── tailwind.config.ts      # Tailwind configuration and theme tokens
```

## 📝 Editing Content

To update your portfolio, you **do not need to touch the React code**. 
Simply open `src/data/portfolio.json` and update your details:

```json
{
  "personal": {
    "name": "Md Asif Jawed",
    "role": "Senior Backend Engineer",
    "resumeUrl": "https://docs.google.com/..."
  },
  "experience": [...],
  "projects": [...]
}
```
*Note: Ensure your `resumeUrl` uses the Google Docs `/export?format=pdf` format for direct downloads!*

## 🛠️ Local Development

First, clone the repository:
```bash
git clone https://github.com/mdasifj625/portfolio.git
cd portfolio
```

Install dependencies:
```bash
yarn install
```

Run the development server:
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ✅ Build & Validation

Before committing, it's recommended to run the build pipeline to ensure type-safety:

```bash
yarn lint
yarn typecheck
yarn build
```

## 📄 License

This project is licensed under the MIT License.
