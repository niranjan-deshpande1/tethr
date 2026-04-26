@AGENTS.md
# tethr_ — AI Cofounder App

## What It Is
Agentic AI cofounder for first-time founders (18-30). Guides idea → launched company.
Positioning: "Where starting a real company is as easy as playing a video game."

## Stack
Next.js 16 App Router · TypeScript · Tailwind CSS v4 · Lucide React · Framer Motion
Supabase (PostgreSQL + pgvector + auth) · OpenAI GPT-4o · Twilio · Resend
Serper.dev + Reddit API · Vercel · PostHog · Sentry

## Hard Rules
- Edit ONLY files explicitly named in the prompt. Never touch others.
- NEVER add unrequested features or refactor beyond what was asked.
- NEVER use purple.
- type over interface. No enum. No any without approval.
- After every mistake: add a rule here. End response with "Updated CLAUDE.md."
- After completing any task, update CLAUDE.md if any new pattern, decision, or constraint was established.
- Run typecheck + lint before every commit.
- Start each and every task in plan mode (Shift+Tab).
- One feature at a time. Always.

## Commands
npm run dev · npm run build · npm run typecheck · npm run lint

## Color System — App (dark default)
--bg: #0a0a0a · --bg-elevated: #111111 · --bg-card: #161616
--border: #1f1f1f · --text: #ffffff · --text-muted: #6b6b6b
--text-faint: #2a2a2a · --accent: #909090 · --accent-light: #2a2a2a

[data-theme="light"]
--bg: #f5f4f1 · --bg-elevated: #f0eeea · --bg-card: #ffffff
--border: #e9e9e7 · --text: #0a0a0a · --text-muted: #9b9a97
--accent: #909090 · --accent-light: #ede9eb

## Color System — Landing Page
Background: #eef4ff · Accent: #FF6B35 (orange) · Text: #0f172a
Never use #909090 or purple on landing page.
All glass effects via inline styles only, never Tailwind.

## Typography
Font: Inter (next/font/google) · var(--font-inter)
Antialiased. No Geist. No system fonts.

## Brand — App
Logo: "t_" — t = #ffffff, _ = #909090. Two spans. Never a single string.

## Brand — Landing
Logo: "tethr_" — "tethr" = #0a0a0a, "_" = #FF6B35 + blink animation (steps(1), 1.2s).
Two spans. Never a single string.

## Navigation — The Spine (LOCKED)
Fixed 56px left rail. NEVER expands. NEVER collapses.
Background: #111111. Border-right: 1px solid #1f1f1f.

Nodes top→bottom:
  t_ logo → Home (House) → [journey line] →
  Research (Search) · Plan (Calendar) · Validation (FlaskConical) ·
  Outreach (MessageSquare) · Journey (Map) →
  [/journey line] → Settings (Settings, pinned bottom)

Journey line:
  Completed: #ffffff · Active: #909090 + blinking _ cursor (500ms)
  Upcoming: #2a2a2a line, icons at 30% opacity

Icon defaults: size={20}, inactive color #6b6b6b, active #909090, hover #ffffff
Settings MUST be pinned to bottom via marginTop: "auto".

## Pages
1. Onboarding Modal — full-screen black, first login only, one question at a time
2. Home — single most important next action, quick stats, 3 quick action buttons
3. Research (Build 2) — idea stress-test → competitor landscape → market verdict
4. Plan (Build 3) — 7-day task list, definition of done, pushback flow, circle bullets ○
5. Validation (Build 4) — one assumption, one experiment, zero ambiguity
6. Outreach (Build 5) — ICP drafts, 80/20 confirm cards, response tracking
7. Journey — full vertical timeline Idea→Research→Plan→Validation→Outreach→Launch
8. Settings — account, AI prefs, SMS/WhatsApp, theme toggle
9. tethr_ ai Panel — 380px slides from right (250ms), Ctrl+K, persistent all pages

## Memory — Compounding Memory Engine
Layer 1: Factual state (Supabase DB)
Layer 2: Behavioral profile doc (regenerated)
Layer 3: Vector store (pgvector)

## AI Model Tiers
Tier 1: Fast/search tasks · Tier 2: High-judgment output · Tier 3: Sequences

## Build Order
1. App shell + Spine ← current
2. Onboarding + Messaging (Twilio)
3. Research Pipeline
4. Week 1 Action Plan
5. Validation Experiment
6. Customer Outreach
7. Landing/waitlist (later)

## File Structure — App
app/layout.tsx · app/page.tsx (→ /app redirect)
app/app/layout.tsx (shell) · app/app/page.tsx (Home)
app/app/research · plan · validation · outreach · journey · settings
components/layout/Spine.tsx · Topbar.tsx
components/ai/AIPanel.tsx · AIMessage.tsx · ConfirmCard.tsx
components/onboarding/OnboardingModal.tsx
lib/supabase.ts · openai.ts · twilio.ts · serper.ts · memory.ts
types/index.ts

## File Structure — Landing
app/page.tsx — imports all landing components in order
components/landing/Nav.tsx · Hero.tsx · HowItWorks.tsx · FeatureCards.tsx
components/landing/Stats.tsx · Quotes.tsx · GapReveal.tsx · Waitlist.tsx · Footer.tsx

## Env Vars
NEXT_PUBLIC_SUPABASE_URL · NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY (never expose client-side)
OPENAI_API_KEY · TWILIO_ACCOUNT_SID · TWILIO_AUTH_TOKEN · SERPER_API_KEY
## Skill routing

When the user's request matches an available skill, ALWAYS invoke it using the Skill
tool as your FIRST action. Do NOT answer directly, do NOT use other tools first.
The skill has specialized workflows that produce better results than ad-hoc answers.

Key routing rules:
- Product ideas, "is this worth building", brainstorming → invoke office-hours
- Bugs, errors, "why is this broken", 500 errors → invoke investigate
- Ship, deploy, push, create PR → invoke ship
- QA, test the site, find bugs → invoke qa
- Code review, check my diff → invoke review
- Update docs after shipping → invoke document-release
- Weekly retro → invoke retro
- Design system, brand → invoke design-consultation
- Visual audit, design polish → invoke design-review
- Architecture review → invoke plan-eng-review
- Save progress, checkpoint, resume → invoke checkpoint
- Code quality, health check → invoke health
