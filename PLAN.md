# Implementation Plan

## Phase 1: Project Scaffolding & Quality Setup

### 1.1 Initialize Next.js Project
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

### 1.2 React 19 Patch
Address the async component rendering issue:
```ts
// next.config.ts
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
};
```

If issues persist with third-party libs, fallback:
```bash
npm install react@18 react-dom@18 --legacy-peer-deps
```

### 1.3 Tailwind CSS 4 Setup
```bash
npm install tailwindcss@next @tailwindcss/postcss@next
```

Update `postcss.config.mjs`:
```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

### 1.4 TypeScript Strict Config
```json
// tsconfig.json additions
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
```

### 1.5 ESLint Configuration
Install strict TypeScript rules:
```bash
npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

Create `.eslintrc.json` with:
- `@typescript-eslint/strict` preset
- React hooks rules
- Accessibility rules
- No explicit `any` rule
- Complexity limits

### 1.6 Prettier Setup
```bash
npm install -D prettier eslint-config-prettier
```

Create `.prettierrc`:
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

### 1.7 Pre-commit Hooks
```bash
npm install -D husky lint-staged
npx husky init
```

Configure `lint-staged` in `package.json`:
```json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "prettier --write",
      "eslint --fix",
      "bash -c 'npx tsc --noEmit'"
    ]
  }
}
```

### 1.8 shadcn/ui Setup
```bash
npx shadcn@latest init
```

Install core components:
```bash
npx shadcn@latest add button card navigation-menu
```

---

## Phase 2: Core Layout & Navigation

### 2.1 Create Layout Components
- `src/components/layout/header.tsx` - Navigation bar
- `src/components/layout/footer.tsx` - Site footer
- `src/components/layout/nav.tsx` - Navigation links

### 2.2 Update Root Layout
- Configure fonts (Inter/Geist)
- Add metadata
- Dark mode setup via Tailwind
- Header/Footer integration

### 2.3 Create Base Pages
- `src/app/page.tsx` - Home
- `src/app/about/page.tsx` - About
- `src/app/projects/page.tsx` - Projects list
- `src/app/projects/[slug]/page.tsx` - Project detail
- `src/app/contact/page.tsx` - Contact

---

## Phase 3: Home Page Sections

### 3.1 Hero Section
- Name: **Mike ONeal**
- Title: **AI Augmented Software Engineer**
- Tagline: "I don't hold titles or put time in. I get shit done."
- Value prop: Design, plan, engineer, test, deploy, audit — Systems, Mobile, Web, Desktop, Cloud
- CTA: "Let's talk" / "See what I've built"
- Optional: animated background or 3D element

### 3.2 About Preview
- The hook: 100x developer, mercenary operator
- Track record pills: X.com, YouTube, PayPal, Intel, Twitter, Apple, Microsoft, Amazon
- Key capabilities: Agentic development, ML, DevOps, Security
- Link to full About page

### 3.3 Featured Project Preview
- ClaimHawk card with:
  - Title & description
  - Key tech badges
  - Architecture preview image
  - Link to detail page

### 3.4 The Stack Section
- Not a "tech stack" — an **operation**
- Visual: Home lab diagram or grid showing the fleet
- Key tools: Claude Code, Opus 4.5, Qwen models, Anthropic SDK, Clawdbot, Open Code, Gemini, Perplexity
- Foundation: Unix mastery, networking, tunneling, virtualization
- The punchline: "What used to take months now takes days"

---

## Phase 4: Methodology & Thesis Sections

### 4.1 Methodology Page (`/methodology`)
A long-form page presenting Diffusion Development — how I actually build software:

- **Hero**: "Everyone's still building software the old way. I'm not."
- **Problem Statement**: Why Waterfall/Agile/etc. are slow and wrong for AI-native era
- **The Insight**: Connection to diffusion models in ML
- **Core Principles**: The 5 key tenets with visuals
- **Comparison Table**: Side-by-side with existing methodologies
- **Visual Diagram**: Animated progression showing refinement passes
- **AI-Native Development**: Why this matters now — and why I'm already doing it
- **Results**: Link to ClaimHawk as proof it works

### 4.2 Interactive Visualizations
- **Refinement Animation**: Show system evolving from rough to refined
- **Methodology Comparison**: Interactive timeline/flow diagrams
- **Abstraction Layers**: Expandable view of code → project → system → PM levels

### 4.3 Content Structure
```ts
// src/content/methodology/diffusion-development.ts
export const diffusionDevelopment = {
  title: 'Diffusion Development',
  subtitle: 'How I Actually Build Software',
  tagline: "Everyone's still building software the old way. I'm not.",
  sections: [
    { id: 'problem', title: 'Why Agile/Waterfall Are Slow', ... },
    { id: 'insight', title: 'Learning from Generative Models', ... },
    { id: 'principles', title: 'Core Principles', ... },
    { id: 'comparison', title: 'How It Differs', ... },
    { id: 'ai-native', title: 'Why This Matters Now', ... },
    { id: 'proof', title: 'ClaimHawk: The Proof It Works', ... },
  ],
};
```

### 4.4 Design Elements
- Dark gradient background with subtle "noise to clarity" effect
- Monospace/technical typography for credibility
- Animated SVG diagrams
- Code-style callouts for technical details

### 4.5 Thesis Page (`/thesis`)

**The Abundance Cascade** — where this is all going:

#### Content Structure
```ts
// src/content/thesis/abundance-cascade.ts
export const abundanceCascade = {
  title: 'The Abundance Cascade',
  subtitle: 'Where This Is All Going',
  tagline: "I'm living proof: the first stage of true abundance is happening right fucking now.",
  sections: [
    { id: 'bifurcation', title: 'The 100x Bifurcation', ... },
    { id: 'moving-up', title: 'Moving Up the Stack', ... },
    { id: 'cascade', title: 'Software → Chemical → Biological → Physical', ... },
    { id: 'economics', title: 'Post-Scarcity Economics', ... },
    { id: 'replicator', title: 'The Software Replicator', ... },
    { id: 'timeline', title: 'What Comes Next', ... },
  ],
};
```

#### Interactive Visualizations
- **Cascade Timeline**: Animated visualization showing domains falling like dominoes
- **Stack Diagram**: Interactive "moving up the stack" progression
- **Bifurcation Chart**: Developer landscape before/after AI
- **Replicator Comparison**: Side-by-side Star Trek vs. Software replicator

#### Key Visual Elements
- **Domino cascade animation**: Software → Digital → Chemical → Bio → Physical
- **Developer bifurcation graph**: Shows 100x vs displacement curves
- **Stack ladder**: Human role ascending from code → meta → intent → desire

---

## Phase 5: Project Detail Page (ClaimHawk)

### 5.1 Content Structure
```ts
// src/content/projects/claimhawk.ts
export const claimhawk = {
  title: 'ClaimHawk',
  subtitle: 'Autonomous Dental Revenue Cycle Management',
  description: '...',
  technologies: ['Qwen3-VL', 'LoRA', 'Python', 'Modal', ...],
  sections: [
    { title: 'Problem', content: '...' },
    { title: 'Solution', content: '...' },
    { title: 'Architecture', content: '...' },
    { title: 'Results', content: '...' },
  ],
  diagrams: ['architecture.png', 'diagram.png'],
};
```

### 5.2 Architecture Visualization
- Display existing `docs/diagram.png`
- Render Mermaid diagram from `docs/architecture.md`
- Interactive elements (hover states, tooltips)

### 5.3 Code Highlights
- Syntax-highlighted code samples
- Key algorithm explanations

---

## Phase 6: About & Contact Pages

### 6.1 About Page
- Full bio: The journey from BBS systems to autonomous agents
- Track record: Contract work for big names, patents, LLCs, board seats
- Why no "job"?: Works too fast, makes normal humans angry, C-levels love it
- **The Stack**: Home lab with multiple machines (Windows/Mac/Linux), networked agentic software, multiple Claude Pro Max licenses, fleet of autonomous agents
- **The Tools**: Opus 4.5, Claude Code, Qwen models, Anthropic SDK, Clawdbot, Open Code, Gemini, Perplexity, OpenAI
- **The Workflow**: Discord + agents, Kanban + GitHub issues, 60% code / 40% docs
- **Ahead of the Curve**: Context engineering a year ago, solutions before the "experts" publish them
- **How I Stay Ahead**: Decompose → Find prior art → Synthesize → Adopt early, verify fast
- Technical domains: DevOps, Security, ML, Agentic development
- Languages timeline: C → Lisp → TypeScript
- What drives me: Not money (scorecard), not prestige — solving hard problems and moving the world forward

### 6.2 Contact Page
- For C-level types who want results
- Contact links (email, LinkedIn, GitHub)
- Clear value prop: "I'm always looking for high-level tasks to aim at like a guided, hypersonic missile"

---

## Phase 7: Polish & Optimization

### 7.1 Animations
- Page transitions
- Scroll-triggered animations
- Micro-interactions

### 7.2 SEO & Metadata
- OpenGraph images
- Meta descriptions
- Structured data

### 7.3 Performance
- Image optimization
- Font subsetting
- Bundle analysis

### 7.4 Accessibility
- Keyboard navigation
- Screen reader testing
- Color contrast verification

---

## File Structure (Final)

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── methodology/
│   │   └── page.tsx        # Diffusion Development
│   ├── thesis/
│   │   └── page.tsx        # Abundance Cascade
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── ui/                      # shadcn components
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── nav.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── about-preview.tsx
│   │   ├── featured-project.tsx
│   │   ├── featured-thesis.tsx
│   │   └── tech-stack.tsx
│   └── features/
│       ├── project-card.tsx
│       ├── architecture-diagram.tsx
│       ├── diffusion-visualizer.tsx
│       ├── methodology-comparison.tsx
│       ├── cascade-timeline.tsx
│       ├── bifurcation-chart.tsx
│       ├── stack-ladder.tsx
│       ├── code-block.tsx
│       └── contact-form.tsx
├── lib/
│   ├── utils.ts
│   └── constants.ts
├── types/
│   └── index.ts
└── content/
    ├── profile.ts                    # Bio, track record, positioning
    ├── projects/
    │   └── claimhawk.ts
    ├── methodology/
    │   └── diffusion-development.ts
    └── thesis/
        └── abundance-cascade.ts
```

---

## Dependencies Summary

### Production
- `next` (15.x)
- `react`, `react-dom` (19.x or 18.x if patching)
- `tailwindcss` (4.x)
- `framer-motion`
- `lucide-react` (icons)
- `zod` (validation)
- `@radix-ui/*` (via shadcn)

### Development
- `typescript`
- `@types/react`, `@types/node`
- `eslint`, `@typescript-eslint/*`
- `prettier`
- `husky`, `lint-staged`

---

## Estimated Deliverables by Phase

| Phase | Deliverable |
|-------|-------------|
| 1 | Fully configured project with quality tooling |
| 2 | Working navigation and page shells |
| 3 | Complete home page with all sections |
| 4 | Diffusion Development thesis page with visualizations |
| 5 | Rich ClaimHawk project detail page |
| 6 | About and Contact pages |
| 7 | Polished, production-ready site |

---

## Positioning Decisions (Resolved)

1. **Name**: Mike ONeal
2. **Title**: AI Augmented Software Engineer
3. **Voice**: Direct, confident, no bullshit, light profanity — authentic to the brand
4. **Target Audience**: C-level executives looking for results
5. **Theme**: Dark-only (operator aesthetic, not corporate)
6. **Track Record**: X.com, YouTube, PayPal, Intel, Twitter, Apple, Microsoft, Amazon
7. **Contact**: For C-level types who want results — links + optional form
