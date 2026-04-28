'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const HIW_DURATION = 5000

type Feature = {
  label: string
  short: string
  description: string
  mockup: React.ReactNode
}

const FEATURES: Feature[] = [
  {
    label: 'validate',
    short: 'is this worth building?',
    description:
      "tethr searches Reddit, scans competitor positioning, and comes back with a real verdict on whether there's an opening in your market. if there is, you'll know exactly why. if there isn't, you'll know exactly where to look. every call is backed by patterns from thousands of companies that went through YC, a16z, and the programs that built the defining startups of the last decade.",
    mockup: (
      <div style={{ fontFamily: 'Inter, sans-serif' }}>
        <div style={{ color: '#6b7280', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>market signal</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
          <span style={{ color: '#ffffff', fontSize: '15px', fontWeight: 600 }}>opening confirmed</span>
        </div>
        {[
          { label: 'Reddit threads analyzed', value: '847' },
          { label: 'competitors mapped', value: '12' },
          { label: 'gap identified', value: 'yes' },
        ].map((row) => (
          <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{ color: '#9ca3af', fontSize: '13px' }}>{row.label}</span>
            <span style={{ color: '#ffffff', fontSize: '13px', fontWeight: 500 }}>{row.value}</span>
          </div>
        ))}
        <div style={{ marginTop: '18px', background: 'rgba(255,107,53,0.1)', border: '1px solid rgba(255,107,53,0.2)', borderRadius: '10px', padding: '12px 14px' }}>
          <div style={{ color: '#FF6B35', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>verdict</div>
          <div style={{ color: '#e5e7eb', fontSize: '13px', lineHeight: 1.5 }}>There&apos;s a real gap in async team communication for remote-first companies under 50 people.</div>
        </div>
      </div>
    ),
  },
  {
    label: 'plan',
    short: 'your week, ready to execute.',
    description:
      'the moment research returns a signal, tethr builds your first week from the ground up, every task specific to your idea, every item with a clear finish line and a time estimate. push back on anything and the plan adjusts around you.',
    mockup: (
      <div style={{ fontFamily: 'Inter, sans-serif' }}>
        <div style={{ color: '#6b7280', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>week 1 plan</div>
        {[
          { day: 'Mon', task: 'interview 3 potential users from Reddit thread', time: '2h', done: true },
          { day: 'Tue', task: 'set up landing page with core value prop', time: '3h', done: true },
          { day: 'Wed', task: 'draft outreach to 10 Slack community leads', time: '1.5h', done: false },
          { day: 'Thu', task: 'run first demo call, record feedback', time: '2h', done: false },
          { day: 'Fri', task: 'synthesize week — what to cut, what to double down', time: '1h', done: false },
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
    label: 'build',
    short: 'the work gets done.',
    description:
      'tethr designs the experiments, writes the outreach, drafts the applications, and builds the materials. you review everything before it goes anywhere, but by the time it reaches you, the hard part is already done.',
    mockup: (
      <div style={{ fontFamily: 'Inter, sans-serif' }}>
        <div style={{ color: '#6b7280', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>deliverables ready</div>
        {[
          { name: 'landing page copy', status: 'ready to review', color: '#22c55e' },
          { name: 'YC application draft', status: 'ready to review', color: '#22c55e' },
          { name: 'outreach sequence (10)', status: 'ready to review', color: '#22c55e' },
          { name: 'pitch deck outline', status: 'in progress', color: '#f59e0b' },
        ].map((item) => (
          <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{ color: '#e5e7eb', fontSize: '13px' }}>{item.name}</span>
            <span style={{ color: item.color, fontSize: '12px', fontWeight: 500 }}>{item.status}</span>
          </div>
        ))}
        <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
          <div style={{ flex: 1, background: 'rgba(255,107,53,0.12)', border: '1px solid rgba(255,107,53,0.25)', borderRadius: '8px', padding: '10px 12px', textAlign: 'center', cursor: 'pointer' }}>
            <div style={{ color: '#FF6B35', fontSize: '13px', fontWeight: 600 }}>review all</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'launch',
    short: 'first customers, found and reached.',
    description:
      "tethr identifies who's most likely to care about what you're building, finds where they actually spend time, and writes messages calibrated to each one. you approve what goes out.",
    mockup: (
      <div style={{ fontFamily: 'Inter, sans-serif' }}>
        <div style={{ color: '#6b7280', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>outreach pipeline</div>
        {[
          { name: 'sarah k.', role: 'head of ops @ loom', status: 'sent', replied: true },
          { name: 'marcus t.', role: 'founder @ linear clone', status: 'sent', replied: false },
          { name: 'priya m.', role: 'pm @ Notion', status: 'pending approval', replied: false },
          { name: 'james r.', role: 'cto @ 12-person startup', status: 'pending approval', replied: false },
        ].map((person) => (
          <div key={person.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div>
              <div style={{ color: '#ffffff', fontSize: '13px', fontWeight: 500 }}>{person.name}</div>
              <div style={{ color: '#6b7280', fontSize: '11px', marginTop: '2px' }}>{person.role}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {person.replied && <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />}
              <span style={{ color: person.replied ? '#22c55e' : person.status === 'sent' ? '#9ca3af' : '#FF6B35', fontSize: '12px' }}>{person.replied ? 'replied' : person.status}</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'run',
    short: 'it never stops.',
    description:
      'competitor moves, pricing changes, what your early users are saying in public, what to fix and what to ignore. tethr monitors all of it and tells you exactly what to act on, every single week.',
    mockup: (
      <div style={{ fontFamily: 'Inter, sans-serif' }}>
        <div style={{ color: '#6b7280', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>weekly digest</div>
        {[
          { tag: 'competitor', text: 'Linear dropped pricing by 20%. your positioning still holds on async-first teams.', urgent: false },
          { tag: 'users', text: '3 users mentioned "too many notifications" in public tweets. worth a UX pass.', urgent: true },
          { tag: 'market', text: 'new Reddit thread: 340 upvotes on exactly the problem you solve.', urgent: false },
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
    label: 'stay with you',
    short: 'build from your phone.',
    description:
      'text tethr what you need and get real executed work back in seconds, from anywhere. research run, landing page, YC app, pitch deck, outreach. all of it over iMessage or WhatsApp. from your bed, from class, or from wherever. your entire company travels with you.',
    mockup: (
      <div style={{ fontFamily: 'Inter, sans-serif' }}>
        <div style={{ color: '#6b7280', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>iMessage · tethr_</div>
        {[
          { from: 'you', text: 'draft my YC app based on everything we know' },
          { from: 'tethr', text: 'on it. give me 40 seconds.' },
          { from: 'tethr', text: 'done. 8 questions answered, backed by your research. review it here →' },
          { from: 'you', text: 'tweak the "why now" section, add the Reddit data' },
          { from: 'tethr', text: 'updated. the stat about 340 upvotes is now in q3.' },
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

export default function HowItWorks() {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const stepsColRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const step = stepRefs.current[active]
    const col = stepsColRef.current
    if (!step || !col) return
    const stepTop = step.offsetTop - col.offsetTop
    col.scrollTo({ top: stepTop - 16, behavior: 'smooth' })
  }, [active])

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % FEATURES.length)
    }, HIW_DURATION)
  }, [])

  useEffect(() => {
    startInterval()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [startInterval])

  const handleFeatureClick = (i: number) => {
    setActive(i)
    startInterval()
  }

  return (
    <section id="how" className="above hiw-section" style={{
      position: 'relative',
      padding: '20px 8px',
    }}>
      <div className="hiw-inner" style={{
        background: '#ffffff',
        borderRadius: '20px',
        padding: '60px 48px',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 800, color: '#0f172a', marginBottom: 0 }}>everything it takes to build.</h2>
        </div>

        <div className="hiw-grid" style={{ display: 'flex', flexDirection: 'row', gap: '48px', alignItems: 'stretch' }}>
          {/* LEFT: terminal mockup synced to active feature */}
          <div className="hiw-mockup" style={{ flex: '1', minWidth: 0, position: 'relative', height: '480px' }}>
            <div className="hiw-chrome">
              <div className="hiw-dots">
                <span style={{ background: '#ff5f56' }} />
                <span style={{ background: '#ffbd2e' }} />
                <span style={{ background: '#27c93f' }} />
              </div>
              <span className="hiw-chrome-title">tethr_ · active session</span>
            </div>
            <div className="hiw-mockup-body" style={{ height: '360px', overflowY: 'auto', overflowX: 'hidden' }}>
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

            {/* Progress pill */}
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(20,20,25,0.85)',
              backdropFilter: 'blur(12px)',
              borderRadius: '100px',
              padding: '8px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              border: '1px solid rgba(255,255,255,0.1)',
            }}>
              <span style={{ color: '#ffffff', fontSize: '13px', fontWeight: 500, whiteSpace: 'nowrap' }}>
                {FEATURES[active].label}
              </span>
              <div style={{ width: '120px', height: '3px', borderRadius: '100px', background: 'rgba(255,255,255,0.15)', overflow: 'hidden' }}>
                <motion.div
                  key={active}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: HIW_DURATION / 1000, ease: 'linear' }}
                  style={{ height: '100%', background: '#FF6B35', borderRadius: '100px' }}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {FEATURES.map((_, i) => (
                  <div key={i} style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: i === active ? '#ffffff' : 'rgba(255,255,255,0.25)',
                  }} />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: feature list only */}
          <div ref={stepsColRef} className="hiw-steps-col" style={{ width: '380px', flexShrink: 0, maxHeight: '480px', overflowY: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}>
            {FEATURES.map((feature, i) => (
              <div key={feature.label} ref={(el) => { stepRefs.current[i] = el }}>
                <button
                  onClick={() => handleFeatureClick(i)}
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
        </div>
      </div>
    </section>
  )
}
