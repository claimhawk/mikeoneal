# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a portfolio website for **Mike ONeal** — an **AI Augmented Software Engineer**. Not a typical portfolio. This is positioning for a mercenary operator who works too fast for normal jobs, automates entire workforces, and has contracted for X.com, YouTube, PayPal, Intel, Twitter, Apple, Microsoft, and Amazon.

Built with Next.js 15, React 19, and Tailwind CSS 4. Features ClaimHawk (autonomous dental RCM system) as the flagship project demonstrating 100x developer capabilities.

**Voice**: Direct, confident, no bullshit. Light profanity is authentic to the brand. C-level executives are the target audience.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Radix primitives)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Validation**: Zod

## Commands

### Development
```bash
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Run Prettier
npm run typecheck    # Run TypeScript compiler check
```

### Quality Checks
```bash
npm run lint         # ESLint with strict TypeScript rules
npm run format:check # Check formatting without writing
npm run typecheck    # tsc --noEmit
```

## Architecture

### File Organization
```
src/
├── app/                 # Next.js App Router pages
├── components/
│   ├── ui/             # shadcn primitives
│   ├── layout/         # Header, Footer, Nav
│   ├── sections/       # Page sections (Hero, etc.)
│   └── features/       # Feature components
├── lib/                # Utilities and helpers
├── types/              # Shared TypeScript types
└── content/            # Project data and content
```

### Key Patterns

1. **Server Components by Default** - Use `'use client'` only when needed
2. **Composition over Props** - Break down into smaller components
3. **Immutable State** - No direct mutations, use spread operators
4. **Pure Functions** - Side effects only at boundaries (hooks, handlers)

## Code Quality

This project enforces strict quality standards from [CODE_QUALITY.md](./CODE_QUALITY.md):

### TypeScript
- Strict mode with all flags enabled
- No `any`, use `unknown` with type guards
- No `as` assertions, refine types properly
- Explicit return types on functions

### Complexity Limits
- Max cyclomatic complexity: 10
- Max nesting depth: 3 levels
- Max function length: 40-50 lines
- Max parameters: 4

### Component Limits
- Max hooks per component: 5
- Max props: 7
- Max JSX depth: 4 levels

### Immutability
- Use `readonly` on interface properties
- Spread operators over mutation
- `map`, `filter`, `reduce` over imperative loops

## Development Notes

- Node.js 18+ required
- Use `npm` for package management
- Pre-commit hooks run Prettier, ESLint, and TypeScript checks
- Dark mode is primary theme

## Project Content

The featured project (ClaimHawk) documentation is in `docs/`:
- `docs/architecture.md` - Technical architecture document
- `docs/diagram.png` - Architecture visualization

## Git Commits

**DO NOT CO-AUTHOR COMMITS** - only use the GitHub user's name when committing. Do not add co-author trailers or attribute commits to AI assistants.
