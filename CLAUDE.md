# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a portfolio website for **Mike ONeal** — an **AI Augmented Software Engineer**. Not a typical portfolio. This is positioning for a mercenary operator who works too fast for normal jobs, automates entire workforces, and has contracted for X.com, YouTube, PayPal, Intel, Twitter, Apple, Microsoft, and Amazon.

Built with Next.js 15, React 19, and Tailwind CSS 4. Features ClaimHawk (autonomous dental RCM system) as the flagship project demonstrating 100x developer capabilities.

**Voice**: Direct, confident, no bullshit. Light profanity is authentic to the brand. C-level executives are the target audience.

## Tech Stack

| Technology    | Choice                  | Why                                                                 |
| ------------- | ----------------------- | ------------------------------------------------------------------- |
| Framework     | Next.js 15 (App Router) | Server Components, file-based routing, Vercel deployment            |
| Language      | TypeScript (strict)     | Catch errors at compile time, self-documenting code                 |
| Styling       | Tailwind CSS 4          | Utility-first, no CSS files to manage, consistent design tokens     |
| UI Components | shadcn/ui               | Accessible Radix primitives, copy-paste ownership, not a dependency |
| Animations    | Framer Motion           | Declarative, performant, works with React 19                        |
| Icons         | Lucide React            | Tree-shakeable, consistent style                                    |
| Validation    | Zod                     | Runtime validation with TypeScript inference                        |

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

1. **Server Components by Default** - Use `'use client'` only when needed (interactivity, hooks, browser APIs)
2. **Composition over Props** - Break down into smaller components rather than passing many props
3. **Immutable State** - No direct mutations, use spread operators
4. **Pure Functions** - Side effects only at boundaries (hooks, handlers)
5. **Colocation** - Keep related code together (component + types + tests in same area)

### Component Guidelines

**When to use Server Components:**

- Data fetching
- Static content
- SEO-critical content
- No user interaction needed

**When to use Client Components:**

- Event handlers (onClick, onChange)
- useState, useEffect, useRef
- Browser APIs (localStorage, window)
- Third-party libs that need browser

**Component Structure:**

```tsx
// 1. Imports
// 2. Types/Interfaces
// 3. Component (export default)
// 4. Helper functions (if any, prefer extracting to lib/)
```

### State Management

Keep it simple. In order of preference:

1. **Server Components** - No state needed, data flows from server
2. **URL State** - useSearchParams for filters, pagination, tabs
3. **Local State** - useState for component-specific UI state
4. **Context** - Only for truly global state (theme, user session)

Avoid: Redux, Zustand, or other state libraries unless absolutely necessary.

### Styling Conventions

**Tailwind Patterns:**

- Use design tokens: `text-zinc-50` not `text-white`
- Dark mode first: `dark:bg-black bg-white`
- Responsive: mobile-first with `sm:`, `md:`, `lg:` breakpoints
- Extract repeated patterns to components, not @apply

**Color Palette:**

- Background: `zinc-950` (dark), `zinc-50` (light)
- Text: `zinc-50` (dark), `zinc-900` (light)
- Accent: `cyan-400` / `blue-500` for CTAs and highlights
- Muted: `zinc-400` for secondary text

### Error Handling

1. **API Boundaries** - Validate with Zod at the edge
2. **Components** - Use Error Boundaries for React errors
3. **Async Operations** - Handle loading/error states explicitly
4. **Never Swallow Errors** - Log or display, don't ignore

```tsx
// Good: Explicit error state
const [data, setData] = useState<Data | null>(null);
const [error, setError] = useState<Error | null>(null);

// Bad: Silent failure
try { ... } catch { /* ignored */ }
```

### Testing Strategy

**What to Test:**

- Business logic (utility functions, data transformations)
- User interactions (click handlers, form submissions)
- Integration points (API calls, external services)

**What Not to Test:**

- Implementation details (internal state, private methods)
- Third-party libraries (they have their own tests)
- Styling (unless critical to functionality)

**Test Files:**

- Colocate with source: `component.tsx` + `component.test.tsx`
- Or in `__tests__/` directory adjacent to source

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
