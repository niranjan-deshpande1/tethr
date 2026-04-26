'use client'

import { useState, useEffect, useRef } from 'react'

const LINES = [
  'opened chatgpt again', 'the notion doc is empty', 'watched three yc videos',
  "still don't know what to do tomorrow", 'everyone has an opinion',
  'none of them are going to help me build it', 'maybe the idea is stupid',
  'or maybe i just need the right room', 'what do i do tomorrow morning',
  'stared at figma for two hours', 'sent a cold email to nobody',
  "made a landing page for something that doesn't exist",
  'validated nothing', 'built nothing', 'started the yc app again',
  'the problem is real. i know it is.', "847 reddit threads say it's real",
  'why is nobody building this', "i'm going to build this",
  "my friends think it's a phase", "i don't tell people what i'm working on anymore",
  'the embarrassment is the hardest part', 'week 3 and nothing has shipped',
  'this is the part nobody warns you about', 'i just need one person who gets it',
  'opened chatgpt again', 'asked it what to do', 'it gave me a framework',
  'i closed it', 'opened it again',
]

export default function CtaSection() {
  const [activeTab, setActiveTab] = useState('1')
  const atmoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const atmo = atmoRef.current
    if (!atmo) return
    const vw = window.innerWidth
    const colW = 160
    const numCols = Math.ceil(vw / colW) + 1
    for (let c = 0; c < numCols; c++) {
      const col = document.createElement('div')
      col.className = 'col'
      col.style.width = colW + 'px'
      const numLines = Math.ceil(window.innerHeight / 20) + 2
      for (let r = 0; r < numLines; r++) {
        const span = document.createElement('span')
        span.textContent = LINES[Math.floor(Math.random() * LINES.length)]
        if (Math.random() > 0.75) span.classList.add('hi')
        col.appendChild(span)
      }
      atmo.appendChild(col)
    }
  }, [])

  return (
    <section className="cta-root">
      <div className="cta-atmo" ref={atmoRef}></div>
      <div className="cta-bloom"></div>
      <div className="cta-shadow"></div>

      <div className="cta-page">
        <div className="cta-topbar"></div>

        <div className="cta-hero">
          <div className="cta-hero-left">
            <h1>Stop trying to<br />figure it out alone.</h1>
            <p>Every founder who shipped had someone in their corner who already knew the context.</p>
          </div>
          <div className="cta-hero-right">
            <a href="#waitlist" className="btn-white">
              Start building
              <svg viewBox="0 0 13 13">
                <path d="M2 6.5h9M8 3l3.5 3.5L8 10" />
              </svg>
            </a>
          </div>
        </div>

        <div className="cta-card">
          <div className="cta-tabs">
            {[
              { id: '1', label: 'The first 72 hours' },
              { id: '2', label: 'What Tethr actually does' },
              { id: '3', label: 'Where you end up' },
            ].map(t => (
              <div
                key={t.id}
                className={`cta-tab${activeTab === t.id ? ' on' : ''}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </div>
            ))}
          </div>

          <div className="cta-card-body">

            {/* ── LEFT PANE ── */}
            <div className="cta-lpane">

              {/* Tab 1 left */}
              <div className={`pc${activeTab === '1' ? ' on' : ''}`}>
                <div className="pc-tag">The pattern</div>
                <h3 className="pc-hed">Most ideas die in the gap between excitement and execution.</h3>
                <p className="pc-body">You have the idea on a Monday. You're genuinely excited. By Thursday you've opened 14 tabs, watched three YouTube videos about market sizing, and haven't talked to a single person who might actually want it.<br /><br />That's not a you problem. That's what happens when you're navigating without a map.</p>
                <ul className="pc-list">
                  <li><div className="cta-dot"></div>72 hours — average time before momentum stalls</li>
                  <li><div className="cta-dot"></div>0 customers talked to — for most founders in week one</li>
                  <li><div className="cta-dot"></div>Not because the idea was bad. Because nobody told them what to do next.</li>
                </ul>
              </div>

              {/* Tab 2 left */}
              <div className={`pc${activeTab === '2' ? ' on' : ''}`}>
                <div className="pc-tag">What happens when you start</div>
                <h3 className="pc-hed">You describe the idea. Tethr goes to work.</h3>
                <p className="pc-body">Not a chatbot. Not a generator. An agent that actually does the research, maps the competitive landscape, finds where your future customers are already talking, and returns with a real Week 1 plan — specific to your idea. Then remembers it all the next time you open a session.</p>
                <ul className="pc-list">
                  <li><div className="cta-dot"></div>Reddit threads where your future customers are frustrated — found</li>
                  <li><div className="cta-dot"></div>Every real competitor, what they charge, where they fail — mapped</li>
                  <li><div className="cta-dot"></div>Your first week, task by task, draft by draft — built</li>
                  <li><div className="cta-dot"></div>And next week. And the week after.</li>
                </ul>
              </div>

              {/* Tab 3 left */}
              <div className={`pc${activeTab === '3' ? ' on' : ''}`}>
                <div className="pc-tag">The other side</div>
                <h3 className="pc-hed">Founders who ship have one thing in common.</h3>
                <p className="pc-body">They didn't figure it out alone. Every founder who got funded, got users, or just actually launched — had someone in their corner who already knew the context. Who remembered what they said last week. Who pushed back when they were spiraling.<br /><br />That's what Tethr is.</p>
                <ul className="pc-list">
                  <li><div className="cta-dot"></div>Remembers every session — picks up where you left off</li>
                  <li><div className="cta-dot"></div>Alerts you when competitors move or your plan needs updating</li>
                  <li><div className="cta-dot"></div>Follows up when you go quiet — because that's what a real cofounder does</li>
                </ul>
                <div className="pc-cta">
                  <a href="#waitlist" className="btn-dark">
                    Start building
                    <svg viewBox="0 0 13 13">
                      <path d="M2 6.5h9M8 3l3.5 3.5L8 10" />
                    </svg>
                  </a>
                  <span className="pc-fine">Free to start. No credit card.</span>
                </div>
              </div>
            </div>

            {/* ── RIGHT PANE ── */}
            <div className="cta-rpane">

              {/* Tab 1 right — timeline */}
              <div className={`rp rp1${activeTab === '1' ? ' on' : ''}`} style={{ padding: '32px 36px', justifyContent: 'center', gap: 0 }}>
                <div className="tl">
                  <div className="tl-node">
                    <div className="tl-left">
                      <div className="tl-dot filled"></div>
                      <div className="tl-line"></div>
                    </div>
                    <div className="tl-right">
                      <div className="tl-day">Monday</div>
                      <div className="tl-text">The idea hits. You're convinced it's real.</div>
                    </div>
                  </div>
                  <div className="tl-node">
                    <div className="tl-left">
                      <div className="tl-dot half"></div>
                      <div className="tl-line"></div>
                    </div>
                    <div className="tl-right">
                      <div className="tl-day">Wednesday</div>
                      <div className="tl-text">You start researching. The tabs multiply.</div>
                    </div>
                  </div>
                  <div className="tl-node last">
                    <div className="tl-left">
                      <div className="tl-dot empty"></div>
                    </div>
                    <div className="tl-right">
                      <div className="tl-day faded">Friday</div>
                      <div className="tl-text faded">You haven't built anything. Momentum is gone.</div>
                    </div>
                  </div>
                </div>
                <div className="tl-footer">Tethr exists for this exact gap.</div>
              </div>

              {/* Tab 2 right — chat mockup */}
              <div className={`rp rp3${activeTab === '2' ? ' on' : ''}`}>
                <div className="ch-bar">
                  <div className="ch-dots">
                    <div className="ch-dot" style={{ background: '#ff5f57' }}></div>
                    <div className="ch-dot" style={{ background: '#febc2e' }}></div>
                    <div className="ch-dot" style={{ background: '#28c840' }}></div>
                  </div>
                  <div className="ch-lbl">tethr_ · active session</div>
                  <div style={{ width: 40 }}></div>
                </div>
                <div className="msgs">
                  <div className="m u">I want to build a habit tracker but actually make it work for ADHD</div>
                  <div className="m t">On it. Back in a minute.</div>
                  <div className="m t" style={{ whiteSpace: 'pre-line', fontSize: 11, lineHeight: 1.65 }}>{`Found 23 Reddit threads in r/ADHD and r/productivity where your exact user says existing apps feel punishing, not helpful.

Top gap: Habitica, Streaks, and Done all use streak mechanics that destroy motivation on bad days.

Your angle: progress that resets without shame.

Week 1:
→ Talk to 5 people who quit Habitica. Ask what broke first.
→ One landing page. One line.
→ Post in r/ADHD — not a pitch, a question.`}</div>
                </div>
              </div>

              {/* Tab 3 right — outcome cards */}
              <div className={`rp rp2${activeTab === '3' ? ' on' : ''}`} style={{ padding: '28px 32px', justifyContent: 'center', gap: 0 }}>
                <div className="oc-list">
                  <div className="oc-card">
                    <div className="oc-week">Week 1</div>
                    <div className="oc-text">You've talked to real potential customers. You know exactly what they hate about what exists.</div>
                  </div>
                  <div className="oc-card">
                    <div className="oc-week">Week 4</div>
                    <div className="oc-text">You have a landing page, a waitlist, and your first 50 signups. Tethr built the outreach templates.</div>
                  </div>
                  <div className="oc-card">
                    <div className="oc-week">Month 3</div>
                    <div className="oc-text">You're iterating on feedback from real users. You applied to YC. Tethr drafted the application.</div>
                  </div>
                </div>
                <div className="oc-footer">This is what momentum looks like when you're not figuring it out alone.</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
