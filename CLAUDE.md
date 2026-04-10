@AGENTS.md
# tethr_ — Claude Code Instructions

## Self-Improvement Rule
After every correction or mistake, update this CLAUDE.md with a rule 
to prevent repeating it.
End every correction with: "Now update CLAUDE.md so you don't make 
that mistake again."

## What We're Building
A fully agentic AI cofounder web app. Desktop-first (1280px+).
Dark mode default, light mode toggle.
The founder answers questions — tethr_ decides what to do and does it.

## Build Philosophy
- One feature at a time. Always.
- Never attempt to build multiple features in a single prompt.
- Get each piece working, tested, and confirmed before moving to next.
- If a task feels too big, break it into smaller pieces before starting.
- Small working increments > big broken builds.

## Development Workflow
Every task follows this loop:
1. Start in plan mode (Shift+Tab) for any complex task
2. Pour energy into the plan before touching code
3. Make changes
4. Run typecheck
5. Run tests
6. Lint before committing
7. If something goes sideways — switch back to plan mode, re-plan,
   don't keep pushing

## Commands
npm run dev          # Start dev server
npm run typecheck    # Type checking
npm run test         # Run tests
npm run lint         # Lint all files
npm run format       # Format code
git status           # Check state
git diff             # Review before commit

## Tech Stack
- Next.js (App Router), TypeScript, Tailwind CSS
- Supabase (PostgreSQL + pgvector + auth)
- OpenAI GPT-4o (reasoning), standard model (synthesis/Q&A)
- Twilio (SMS/WhatsApp), Resend (email)
- Serper.dev (Google search), Reddit API
- Vercel (hosting), PostHog (analytics), Sentry (errors)
- Lucide React (icons), Inter (font)

## Code Style
- Use `type` over `interface` — always
- Never use `enum` — use string literal unions instead
- Never use `any` type without explicit approval
- Descriptive variable names
- Small, focused functions
- Handle errors explicitly, never swallow them
- Write tests for new functionality
- Never commit without running tests first

## Color System

### Dark mode (default)
--bg: #0a0a0a
--bg-elevated: #111111
--bg-card: #161616
--border: #1f1f1f
--text: #ffffff
--text-muted: #6b6b6b
--text-faint: #2a2a2a
--accent: #909090
--accent-light: #2a2a2a

### Light mode
--bg: #f5f4f1
--bg-elevated: #f0eeea
--bg-card: #ffffff
--border: #e9e9e7
--text: #0a0a0a
--text-muted: #9b9a97
--text-faint: #c7c6c4
--accent: #909090
--accent-light: #ede9eb

Accent #909090 used MAX 3 times per view. Never decoratively.
Never use purple anywhere. Ever.

## Typography
- Font: Inter throughout
- Headlines: bold, lowercase preferred, generous spacing
- Short headlines with a period. Rhythm over explanation.
- One italic accent word inline in headlines to disrupt rhythm
- Body: never more than 2-3 sentences per block

## Navigation: The Spine
Fixed 56px left rail. Never expands. Never collapses.

Top to bottom:
- t_ logo
- Home node (house icon) — above journey line
- [journey line starts]
- Research node (search icon)
- Plan node (calendar icon)
- Validation node (flask icon)
- Outreach node (message icon)
- Journey node (map icon)
- [journey line ends]
- Settings node (gear icon)

Journey line states:
- Completed: white #ffffff connecting line
- Active: #909090 pulse + blinking _ cursor next to icon (500ms blink)
- Upcoming: #2a2a2a line, icons at 30% opacity

Hover over node: floating card appears to the RIGHT showing page name,
last action, one key stat. 200ms ease appear, disappears on mouse leave.

tethr_ ai pill: bottom-right corner, always visible, 48px pill,
completely separate from spine.

## Pages

### Onboarding Modal (first login only, never shown again)
- Full-screen black takeover
- One question at a time, large type, feels like conversation not form
- Extracts: idea, founder background, situation, goals,
  SMS/WhatsApp preference
- Seeds factual state layer + behavioral understanding layer
- Ends with handoff animation into Home

### Home
- Single most important next action (large, prominent)
- Re-entry experience: where they left off, zero re-explanation
- Quick stats, recent activity feed, 3 quick action buttons

### Research (Build 2)
- 3 sequential steps, each unlocks after previous completes:
  1. Idea stress-test
  2. Competitor landscape
  3. Market verdict (strong / weak / pivot)
- Results stored permanently, never need to re-run

### Plan (Build 3)
- 7-day task list, each with definition of done + time estimate
- Founder pushback flow — plan adjusts
- Circle bullets (○) not filled dots

### Validation (Build 4)
- Single assumption displayed prominently
- Experiment: where, what to say, yes signal, no signal, duration
- Zero ambiguity

### Outreach (Build 5)
- Customer identification + draft messages
- 80/20 confirmation card before every send
- Response tracking: sent / replied / cold / converted

### Journey
- Full vertical timeline: Idea → Research → Plan →
  Validation → Outreach → Launch
- Each stage: status dot + all stored outputs

### Settings
- Account, AI preferences, SMS/WhatsApp, theme toggle

## tethr_ ai Panel
- Trigger: t_ pill bottom-right or Ctrl+K
- Close: Esc or click outside
- Width: 380px, slides from right (250ms ease)
- Backdrop: 20% dark overlay on content, not spine
- Header: tethr_ ai + green status dot + close ×
- Context chip shows current page
- Message thread: user right, AI left, quiet log style
- 80/20 confirmation cards render inline in thread
- Persistent across all pages

## Memory Architecture
Named internally: Compounding Memory Engine

1. Factual state layer — structured Supabase DB records
   (idea, decisions, tasks, milestones, contacts)
2. Behavioral understanding layer — periodically regenerated
   founder profile document stored in Supabase
3. Vector store — Supabase pgvector for semantic retrieval

## AI Model Tiers
- Tier 1: Q&A, synthesis, summarization (standard model)
- Tier 2: Action plans, experiment design, verdict (GPT-4o reasoner)
- Tier 3: Multi-step execution (full agentic, triggered only when needed)

## Animations
- Spine cursor blink: 500ms interval
- Page transitions: fade + slight upward translate 150ms ease
- Cards: fadeIn + slideUp 200ms
- AI panel: translateX + opacity 250ms ease
- Task completion: strikethrough 300ms → fade delay 300ms →
  slideUp delay 600ms
- All transitions: 150-300ms ease, never jarring
- Hover states: smooth 150ms, subtle bg fill change
- Theme toggle: 150ms ease on all color properties

## File Structure
tethr/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (redirects to /app)
│   └── app/
│       ├── layout.tsx (app shell — spine + ai panel)
│       ├── page.tsx (Home)
│       ├── research/page.tsx
│       ├── plan/page.tsx
│       ├── validation/page.tsx
│       ├── outreach/page.tsx
│       ├── journey/page.tsx
│       └── settings/page.tsx
├── components/
│   ├── layout/
│   │   ├── Spine.tsx
│   │   └── Topbar.tsx
│   ├── ai/
│   │   ├── AIPanel.tsx
│   │   ├── AIMessage.tsx
│   │   └── ConfirmCard.tsx
│   ├── onboarding/
│   │   └── OnboardingModal.tsx
│   ├── research/
│   ├── plan/
│   ├── validation/
│   ├── outreach/
│   └── journey/
├── lib/
│   ├── supabase.ts
│   ├── openai.ts
│   ├── twilio.ts
│   ├── serper.ts
│   └── memory.ts
├── types/
│   └── index.ts
├── styles/
│   └── globals.css
├── public/
│   └── logo.svg
├── tailwind.config.ts
└── .env.local

## Environment Variables
NEXT_PUBLIC_SUPABASE_URL=https://ftlvjpvgrufbvirqejzd.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[in .env.local]
SUPABASE_SERVICE_ROLE_KEY=[in .env.local]
OPENAI_API_KEY=[in .env.local]
TWILIO_ACCOUNT_SID=[in .env.local]
TWILIO_AUTH_TOKEN=[in .env.local]
SERPER_API_KEY=[in .env.local]

## Things Claude Should NOT Do
- Never use purple as accent color. Ever.
- Never use `any` in TypeScript
- Never skip error handling
- Never commit without running tests
- Never use enum — use string literal unions
- Never use `interface` — use `type`
- Never make the spine expand or collapse
- Never add decorative elements — every UI element must have purpose
- Never exceed 3 uses of #909090 accent per view
- Never build multiple features at once
- Never start the next feature before the current one is confirmed working
- Never make breaking API changes without discussion
- Never build without asking clarifying questions on complex tasks
- Never push to main without full lint + test suite passing

## Parallel Work
- Use subagents for tasks needing more compute
- Only one agent edits a given file at a time
- For parallel workstreams:
  git worktree add .claude/worktrees/<name> origin/main

## Project-Specific Patterns
Update this file continuously.
Every mistake Claude makes is a learning opportunity.
Every correction becomes a rule.