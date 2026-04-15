@AGENTS.md
# tethr_ — AI Cofounder App

## What It Is
Agentic AI cofounder for first-time founders (18-30). Guides idea → launched company.
Positioning: "Where starting a real company is as easy as playing a video game."

## Stack
Next.js 16 App Router · TypeScript · Tailwind CSS v4 · Lucide React
Supabase (PostgreSQL + pgvector + auth) · OpenAI GPT-4o · Twilio · Resend
Serper.dev + Reddit API · Vercel · PostHog · Sentry

## Hard Rules
- Edit ONLY files explicitly named in the prompt. Never touch others.
- NEVER add unrequested features or refactor beyond what was asked.
- NEVER use purple. Accent is #909090, max 3 uses per view, never decorative.
- type over interface. No enum. No any without approval.
- After every mistake: add a rule here. End response with "Updated CLAUDE.md."
- Run typecheck + lint before every commit.
- Start each and every task in plan mode (Shift+Tab).
- One feature at a time. Always.

## Commands
npm run dev · npm run build · npm run typecheck · npm run lint

## Color System (dark default)
--bg: #0a0a0a · --bg-elevated: #111111 · --bg-card: #161616
--border: #1f1f1f · --text: #ffffff · --text-muted: #6b6b6b
--text-faint: #2a2a2a · --accent: #909090 · --accent-light: #2a2a2a

[data-theme="light"]
--bg: #f5f4f1 · --bg-elevated: #f0eeea · --bg-card: #ffffff
--border: #e9e9e7 · --text: #0a0a0a · --text-muted: #9b9a97
--accent: hsl(0, 0.00%, 56.50%) · --accent-light: #ede9eb

## Typography
Font: Inter (next/font/google) · var(--font-inter)
Antialiased. No Geist. No system fonts.

## Brand
Logo: "t_" — lowercase t white (#ffffff), underscore gray (#909090)
Render as two separate spans. Never as a single string.

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

Hover: floating card RIGHT — page name, last action, one key stat (200ms ease)
tethr_ ai pill: bottom-right, always visible, 48px, separate from spine.

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

## File Structure
app/layout.tsx · app/page.tsx (→ /app redirect)
app/app/layout.tsx (shell) · app/app/page.tsx (Home)
app/app/research · plan · validation · outreach · journey · settings
components/layout/Spine.tsx · Topbar.tsx
components/ai/AIPanel.tsx · AIMessage.tsx · ConfirmCard.tsx
components/onboarding/OnboardingModal.tsx
lib/supabase.ts · openai.ts · twilio.ts · serper.ts · memory.ts
types/index.ts

## Env Vars
NEXT_PUBLIC_SUPABASE_URL · NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY (never expose client-side)
OPENAI_API_KEY · TWILIO_ACCOUNT_SID · TWILIO_AUTH_TOKEN · SERPER_API_KEY
