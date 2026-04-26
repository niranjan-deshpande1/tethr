'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Feature = {
  label: string
  short: string
  description: string
  mockup: React.ReactNode
}

const FEATURES: Feature[] = [
  {
    label: 'Validate',
    short: 'Is this worth building?',
    description:
      "Tethr searches Reddit, scans competitor positioning, and comes back with a real verdict on whether there's an opening in your market. If there is, you'll know exactly why. If there isn't, you'll know exactly where to look. Every call is backed by patterns from thousands of companies that went through YC, a16z, and the programs that built the defining startups of the last decade.",
    mockup: (
      <div style={{ fontFamily: 'Inter, sans-serif' }}>
        <div style={{ color: '#6b7280', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>Market Signal</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
          <span style={{ color: '#ffffff', fontSize: '15px', fontWeight: 600 }}>Opening confirmed</span>
        </div>
        {[
          { label: 'Reddit threads analyzed', value: '847' },
          { label: 'Competitors mapped', value: '12' },
          { label: 'Gap identified', value: 'Yes' },
        ].map((row) => (
          <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{ color: '#9ca3af', fontSize: '13px' }}>{row.label}</span>
            <span style={{ color: '#ffffff', fontSize: '13px', fontWeight: 500 }}>{row.value}</span>
          </div>
        ))}
        <div style={{ marginTop: '18px', background: 'rgba(255,107,53,0.1)', border: '1px solid rgba(255,107,53,0.2)', borderRadius: '10px', padding: '12px 14px' }}>
          <div style={{ color: '#FF6B35', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Verdict</div>
          <div style={{ color: '#e5e7eb', fontSize: '13px', lineHeight: 1.5 }}>There&apos;s a real gap in async team communication for remote-first companies under 50 people.</div>
        </div>
      </div>
    ),
  },
  {
    label: 'Plan',
    short: 'Your week, ready to execute.',
    description:
      'The moment research returns a signal, tethr builds your first week from the ground up, every task specific to your idea, every item with a clear finish line and a time estimate. Push back on anything and the plan adjusts around you.',
    mockup: (
      <div style={{ fontFamily: 'Inter, sans-serif' }}>
        <div style={{ color: '#6b7280', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>Week 1 Plan</div>
        {[
          { day: 'Mon', task: 'Interview 3 potential users from Reddit thread', time: '2h', done: true },
          { day: 'Tue', task: 'Set up landing page with core value prop', time: '3h', done: true },
          { day: 'Wed', task: 'Draft outreach to 10 Slack community leads', time: '1.5h', done: false },
          { day: 'Thu', task: 'Run first demo call, record feedback', time: '2h', done: false },
          { day: 'Fri', task: 'Synthesize week — what to cut, what to double down', time: '1h', done: false },
        ].map((item) => (
          <div key={item.day} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ width: '28px', flexShrink: 0, color: '#6b7280', fontSize: '11px', fontWeight: 600, paddingTop: '1px' }}>{item.day}</div>
            <div style={{ flex: 1 }}>
              <div style={{ color: item.done ? '#6b7280' : '#e5e7eb', fontSize: '13px', textDecoration: item.done ? 'line-through' : 'none' }}>{item.task}</div>
            </div>
            <div style={{ color: '#6b7280', fontSize: '11px', flexShrink: 0 }}>{item.time}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Build',
    short: 'The work gets done.',
    description:
      'Tethr designs the experiments, writes the outreach, drafts the applications, and builds the materials. You review everything before it goes anywhere, but by the time it reaches you, the hard part is already done.',
    mockup: (
      <div style={{ fontFamily: 'Inter, sans-serif' }}>
        <div style={{ color: '#6b7280', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>Deliverables ready</div>
        {[
          { name: 'Landing page copy', status: 'Ready to review', color: '#22c55e' },
          { name: 'YC application draft', status: 'Ready to review', color: '#22c55e' },
          { name: 'Outreach sequence (10)', status: 'Ready to review', color: '#22c55e' },
          { name: 'Pitch deck outline', status: 'In progress', color: '#f59e0b' },
        ].map((item) => (
          <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{ color: '#e5e7eb', fontSize: '13px' }}>{item.name}</span>
            <span style={{ color: item.color, fontSize: '12px', fontWeight: 500 }}>{item.status}</span>
          </div>
        ))}
        <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
          <div style={{ flex: 1, background: 'rgba(255,107,53,0.12)', border: '1px solid rgba(255,107,53,0.25)', borderRadius: '8px', padding: '10px 12px', textAlign: 'center', cursor: 'pointer' }}>
            <div style={{ color: '#FF6B35', fontSize: '13px', fontWeight: 600 }}>Review all</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Launch',
    short: 'First customers, found and reached.',
    description:
      "Tethr identifies who's most likely to care about what you're building, finds where they actually spend time, and writes messages calibrated to each one. You approve what goes out.",
    mockup: (
      <div style={{ fontFamily: 'Inter, sans-serif' }}>
        <div style={{ color: '#6b7280', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>Outreach pipeline</div>
        {[
          { name: 'Sarah K.', role: 'Head of Ops @ Loom', status: 'Sent', replied: true },
          { name: 'Marcus T.', role: 'Founder @ Linear clone', status: 'Sent', replied: false },
          { name: 'Priya M.', role: 'PM @ Notion', status: 'Pending approval', replied: false },
          { name: 'James R.', role: 'CTO @ 12-person startup', status: 'Pending approval', replied: false },
        ].map((person) => (
          <div key={person.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div>
              <div style={{ color: '#ffffff', fontSize: '13px', fontWeight: 500 }}>{person.name}</div>
              <div style={{ color: '#6b7280', fontSize: '11px', marginTop: '2px' }}>{person.role}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {person.replied && <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />}
              <span style={{ color: person.replied ? '#22c55e' : person.status === 'Sent' ? '#9ca3af' : '#FF6B35', fontSize: '12px' }}>{person.replied ? 'Replied' : person.status}</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Run',
    short: 'It never stops.',
    description:
      'Competitor moves, pricing changes, what your early users are saying in public, what to fix and what to ignore. Tethr monitors all of it and tells you exactly what to act on, every single week.',
    mockup: (
      <div style={{ fontFamily: 'Inter, sans-serif' }}>
        <div style={{ color: '#6b7280', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>Weekly digest</div>
        {[
          { tag: 'Competitor', text: 'Linear dropped pricing by 20%. Your positioning still holds on async-first teams.', urgent: false },
          { tag: 'Users', text: '3 users mentioned "too many notifications" in public tweets. Worth a UX pass.', urgent: true },
          { tag: 'Market', text: 'New Reddit thread: 340 upvotes on exactly the problem you solve.', urgent: false },
        ].map((item, i) => (
          <div key={i} style={{ marginBottom: '12px', background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '12px 14px', border: item.urgent ? '1px solid rgba(255,107,53,0.2)' : '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ color: item.urgent ? '#FF6B35' : '#9ca3af', fontSize: '11px', fontWeight: 600, marginBottom: '5px', letterSpacing: '0.05em' }}>{item.tag}</div>
            <div style={{ color: '#e5e7eb', fontSize: '13px', lineHeight: 1.5 }}>{item.text}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Stay with you',
    short: 'Build from your phone.',
    description:
      'Text tethr what you need and get real executed work back in seconds, from anywhere. Describe your idea and get a full research run. Ask for a landing page and it gets built. Need your YC application drafted, your pitch deck revised, your competitor landscape updated, your outreach sent, your investor pipeline tracked? All of it, over iMessage or WhatsApp, from your bed, from class, from wherever you are. Your entire company travels with you.',
    mockup: (
      <div style={{ fontFamily: 'Inter, sans-serif' }}>
        <div style={{ color: '#6b7280', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>iMessage · tethr_</div>
        {[
          { from: 'you', text: 'draft my YC app based on everything we know' },
          { from: 'tethr', text: 'On it. Give me 40 seconds.' },
          { from: 'tethr', text: 'Done. 8 questions answered, backed by your research. Review it here →' },
          { from: 'you', text: 'tweak the "why now" section, add the Reddit data' },
          { from: 'tethr', text: 'Updated. The stat about 340 upvotes is now in Q3.' },
        ].map((msg, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: msg.from === 'you' ? 'flex-end' : 'flex-start', marginBottom: '8px' }}>
            <div style={{
              maxWidth: '80%',
              background: msg.from === 'you' ? '#3b82f6' : 'rgba(255,255,255,0.08)',
              borderRadius: msg.from === 'you' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
              padding: '8px 12px',
              color: '#ffffff',
              fontSize: '13px',
              lineHeight: 1.45,
            }}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
    ),
  },
]

export default function FeatureSwitcher() {
  const [active, setActive] = useState(0)

  return (
    <section id="features" style={{ background: '#ffffff', padding: '100px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FF6B35', marginBottom: '12px' }}>What tethr does</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#0f172a', lineHeight: 1.15, margin: 0 }}>Everything it takes to build.</h2>
        </div>

        <div style={{ display: 'flex', gap: '48px', alignItems: 'flex-start' }}>
          {/* Left column */}
          <div style={{ maxWidth: '420px', width: '100%', flexShrink: 0 }}>
            {FEATURES.map((feature, i) => (
              <div key={feature.label}>
                <button
                  onClick={() => setActive(i)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <div style={{
                    padding: '14px 0',
                    borderBottom: i < FEATURES.length - 1 ? '1px solid rgba(15,23,42,0.08)' : 'none',
                  }}>
                    {active === i ? (
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        style={{
                          background: 'rgba(255,255,255,0.15)',
                          backdropFilter: 'blur(28px) saturate(200%)',
                          WebkitBackdropFilter: 'blur(28px) saturate(200%)',
                          border: '1px solid rgba(255,255,255,0.5)',
                          borderLeft: '2px solid #FF6B35',
                          borderRadius: '16px',
                          padding: '28px',
                        }}
                      >
                        <div style={{ fontSize: '16px', fontWeight: 700, color: '#FF6B35', marginBottom: '4px' }}>{feature.label}</div>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a', marginBottom: '12px' }}>{feature.short}</div>
                        <div style={{ fontSize: '14px', color: '#475569', lineHeight: 1.65 }}>{feature.description}</div>
                      </motion.div>
                    ) : (
                      <div style={{ padding: '4px 0' }}>
                        <span style={{ fontSize: '15px', fontWeight: 600, color: '#94a3b8' }}>{feature.label}</span>
                        <span style={{ fontSize: '13px', color: '#cbd5e1', marginLeft: '10px' }}>{feature.short}</span>
                      </div>
                    )}
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Right column — dark glass card */}
          <div style={{ flex: 1, position: 'sticky', top: '100px' }}>
            <div style={{
              background: 'rgba(14,18,40,0.88)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              minHeight: '420px',
              padding: '32px',
              overflow: 'hidden',
            }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                >
                  {FEATURES[active].mockup}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
