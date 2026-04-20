'use client'

import { useCallback, useEffect, useRef } from 'react'

const HIW_DURATION = 4000
const HIW_TEXT = 'I want to build a B2B invoicing tool for freelancers'

export default function HowItWorks() {
  const hiwIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const hiwActivate = useCallback((step: number) => {
    if (hiwIntervalRef.current) {
      clearInterval(hiwIntervalRef.current)
      hiwIntervalRef.current = null
    }

    for (let i = 1; i <= 3; i++) {
      const s = document.getElementById(`hiw-step-${i}`)
      if (s) s.classList.toggle('active', i === step)
      const fill = document.getElementById(`hiw-fill-${i}`) as HTMLElement | null
      if (fill) { fill.style.transition = 'none'; fill.style.width = '0%' }
    }

    for (let i = 1; i <= 3; i++) {
      const st = document.getElementById(`hiw-state-${i}`) as HTMLElement | null
      if (st) st.style.display = i === step ? 'block' : 'none'
    }

    if (step === 1) {
      const el = document.getElementById('hiw-typewriter')
      if (el) {
        el.textContent = ''
        let idx = 0
        const t = setInterval(() => {
          el.textContent = HIW_TEXT.slice(0, ++idx)
          if (idx >= HIW_TEXT.length) clearInterval(t)
        }, 40)
      }
    }

    const fill = document.getElementById(`hiw-fill-${step}`) as HTMLElement | null
    if (!fill) return
    fill.style.transition = 'none'
    fill.style.width = '0%'
    let progress = 0
    hiwIntervalRef.current = setInterval(() => {
      progress += 100 / (HIW_DURATION / 80)
      fill.style.width = Math.min(progress, 100) + '%'
      if (progress >= 100) {
        if (hiwIntervalRef.current) {
          clearInterval(hiwIntervalRef.current)
          hiwIntervalRef.current = null
        }
        setTimeout(() => hiwActivate(step === 3 ? 1 : step + 1), 200)
      }
    }, 80)
  }, [])

  useEffect(() => {
    hiwActivate(1)
    ;(window as Window & { hiwJump?: (s: number) => void }).hiwJump = (step: number) => {
      hiwActivate(step)
    }
    return () => {
      if (hiwIntervalRef.current) clearInterval(hiwIntervalRef.current)
      delete (window as Window & { hiwJump?: (s: number) => void }).hiwJump
    }
  }, [hiwActivate])

  function handleStepClick(step: number) {
    hiwActivate(step)
  }

  return (
    <section id="how" className="above" style={{ position: 'relative', padding: '100px 20px 120px', background: '#f4f6f9', overflow: 'hidden' }}>
      <div className="hiw-inner">
        <div style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ height: '1px', width: '24px', background: 'rgba(255,107,53,0.6)' }} />
            <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '.18em', color: '#FF6B35', textTransform: 'uppercase' }}>How it works</span>
          </div>
          <h2 style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>From idea to momentum.</h2>
          <p style={{ fontSize: '15px', color: '#52525b', maxWidth: '440px', lineHeight: 1.6 }}>Write a sentence. Tethr does the research. You get a real first week.</p>
        </div>

        <div className="hiw-grid">
          <div className="hiw-mockup">
            <div className="hiw-chrome">
              <div className="hiw-dots">
                <span style={{ background: '#ff5f56' }} />
                <span style={{ background: '#ffbd2e' }} />
                <span style={{ background: '#27c93f' }} />
              </div>
              <span className="hiw-chrome-title">tethr_ · active session</span>
            </div>
            <div className="hiw-mockup-body">
              <div className="hiw-state" id="hiw-state-1">
                <div className="hiw-state-label">YOUR IDEA</div>
                <div className="hiw-input-wrap">
                  <span id="hiw-typewriter" /><span className="hiw-cursor">|</span>
                </div>
                <p className="hiw-hint">One sentence is all you need.</p>
              </div>
              <div className="hiw-state" id="hiw-state-2" style={{ display: 'none' }}>
                <div className="hiw-state-label">TETHR IS WORKING</div>
                <div>
                  <div className="hiw-work-item done"><span className="hiw-dot orange" />Scanned Reddit — found 9 customer pain threads</div>
                  <div className="hiw-work-item done"><span className="hiw-dot orange" />Mapped 7 direct competitors</div>
                  <div className="hiw-work-item active"><span className="hiw-dot blue" />Building your Week 1 plan...</div>
                  <div className="hiw-work-item"><span className="hiw-dot grey" />Generating outreach templates</div>
                </div>
              </div>
              <div className="hiw-state" id="hiw-state-3" style={{ display: 'none' }}>
                <div className="hiw-state-label">WEEK 1 PLAN — READY</div>
                <div>
                  <div className="hiw-output-item"><span className="hiw-arrow">→</span>Talk to 5 people who quit a competitor product. Ask why.</div>
                  <div className="hiw-output-item"><span className="hiw-arrow">→</span>Build one landing page with a single question</div>
                  <div className="hiw-output-item"><span className="hiw-arrow">→</span>Post in the right subreddit — question, not pitch</div>
                  <div className="hiw-output-item"><span className="hiw-arrow">→</span>DM 3 people from the Reddit pain threads directly</div>
                </div>
                <p className="hiw-session-note">Session saved. Tethr will follow up on Friday.</p>
              </div>
            </div>
          </div>

          <div className="hiw-steps-col">
            <button className="hiw-step active" id="hiw-step-1" onClick={() => handleStepClick(1)}>
              <span className="hiw-badge">1</span>
              <p className="hiw-step-title">Describe your idea</p>
              <p className="hiw-step-desc">Type anything. A rough thought, a problem you noticed, a market you&apos;ve been watching. Tethr starts working immediately.</p>
              <div className="hiw-progress-track"><div className="hiw-progress-fill" id="hiw-fill-1" /></div>
            </button>
            <button className="hiw-step" id="hiw-step-2" onClick={() => handleStepClick(2)}>
              <span className="hiw-badge">2</span>
              <p className="hiw-step-title">Tethr does the research</p>
              <p className="hiw-step-desc">Finds where your customers are already complaining online. Maps every competitor. Identifies the gap nobody else is filling.</p>
              <div className="hiw-progress-track"><div className="hiw-progress-fill" id="hiw-fill-2" /></div>
            </button>
            <button className="hiw-step" id="hiw-step-3" onClick={() => handleStepClick(3)}>
              <span className="hiw-badge">3</span>
              <p className="hiw-step-title">Get your real first week</p>
              <p className="hiw-step-desc">A specific executable plan built around your idea — not a template. Tethr remembers everything so next session picks up exactly where you left off.</p>
              <div className="hiw-progress-track"><div className="hiw-progress-fill" id="hiw-fill-3" /></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
