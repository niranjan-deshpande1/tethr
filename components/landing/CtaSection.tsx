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
              { id: '1', label: 'The first week' },
              { id: '2', label: 'What actually happens' },
              { id: '3', label: 'What comes next' },
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
                <div className="pc-tag">THE REAL PROBLEM</div>
                <h3 className="pc-hed">Most founders quit before they talk to a single customer.</h3>
                <p className="pc-body">This isn't because they gave up, it's because they hit the first week and had no clue what to actually do. So they researched, made lists, and watched videos. But one day they just lost the motivation to keep putting in the work.<br /><br />That is not a discipline problem. It is a direction problem.</p>
                <ul className="pc-list">
                  <li><div className="cta-dot"></div>Most founders never talk to a customer in their first month</li>
                  <li><div className="cta-dot"></div>The idea is not usually what fails. The next step is.</li>
                  <li><div className="cta-dot"></div>Having a thinking partner triples your odds of reaching first users</li>
                </ul>
              </div>

              {/* Tab 2 left */}
              <div className={`pc${activeTab === '2' ? ' on' : ''}`}>
                <div className="pc-tag">WHEN YOU START</div>
                <h3 className="pc-hed">You tell tethr your idea. It goes and does the work.</h3>
                <p className="pc-body">An agent that actually goes, finds reddit threads where your future customers are already complaining. It maps every real competitor and where they fall short, and builds your weekly plans around your specific idea. It's your cofounder, that remembers every detail no matter how many sessions you open.</p>
                <ul className="pc-list">
                  <li><div className="cta-dot"></div>Reddit threads with real customer frustration, found and summarized</li>
                  <li><div className="cta-dot"></div>Competitors mapped with pricing, weaknesses, and gaps called out</li>
                  <li><div className="cta-dot"></div>A Week 1 plan that is specific to your idea, not generic advice</li>
                  <li><div className="cta-dot"></div>Every session builds on the last one</li>
                </ul>
              </div>

              {/* Tab 3 left — outcome cards (swapped) */}
              <div className={`pc${activeTab === '3' ? ' on' : ''}`} style={{ justifyContent: 'center' }}>
                <div className="oc-list">
                  <div className="oc-card">
                    <div className="oc-week">Week 1</div>
                    <div className="oc-text">you have talked to real people who want what you are building. you know exactly what they hate about what exists.</div>
                  </div>
                  <div className="oc-card">
                    <div className="oc-week">Week 4</div>
                    <div className="oc-text">you have a landing page and a waitlist. tethr wrote the outreach. you did not stall on the blank doc.</div>
                  </div>
                  <div className="oc-card">
                    <div className="oc-week">Month 3</div>
                    <div className="oc-text">you are iterating on real feedback. you applied to YC. tethr drafted every answer from your actual research.</div>
                  </div>
                </div>
                <div className="oc-footer">This is what it looks like when you are not navigating alone.</div>
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
                      <div className="tl-day">Day 1</div>
                      <div className="tl-text">The idea hits. You know it is real. You open a doc and start writing.</div>
                    </div>
                  </div>
                  <div className="tl-node">
                    <div className="tl-left">
                      <div className="tl-dot half"></div>
                      <div className="tl-line"></div>
                    </div>
                    <div className="tl-right">
                      <div className="tl-day">Day 3</div>
                      <div className="tl-text">You have 11 tabs open. You have not talked to anyone. The doc has four bullet points.</div>
                    </div>
                  </div>
                  <div className="tl-node last">
                    <div className="tl-left">
                      <div className="tl-dot empty"></div>
                    </div>
                    <div className="tl-right">
                      <div className="tl-day faded">Day 7</div>
                      <div className="tl-text faded">You tell yourself you will start fresh next week.</div>
                    </div>
                  </div>
                </div>
                <div className="tl-footer">tethr exists for this exact window.</div>
              </div>

              {/* Tab 2 right — chat mockup */}
              <div className={`rp rp3${activeTab === '2' ? ' on' : ''}`}>
                <div className="ch-bar">
                  <div className="ch-dots">
                    <div className="ch-dot" style={{ background: '#ff5f56' }}></div>
                    <div className="ch-dot" style={{ background: '#ffbd2e' }}></div>
                    <div className="ch-dot" style={{ background: '#27c93f' }}></div>
                  </div>
                  <div className="ch-lbl">tethr_ / active session</div>
                  <div style={{ width: 40 }}></div>
                </div>
                <div className="msgs">
                  <div className="m u">i want to build a B2B invoicing tool for freelancers</div>
                  <div className="m t">on it. back in a minute.</div>
                  <div className="m t" style={{ whiteSpace: 'pre-line', fontSize: 11, lineHeight: 1.65 }}>{`found 18 reddit threads in r/freelance and r/smallbusiness. your exact customer keeps saying the same thing: they get paid late because invoicing feels too formal and clients ignore it.

competitors: stripe invoicing, freshbooks, wave. all of them treat invoicing like accounting. none of them treat it like communication.

your gap: invoicing that feels like a conversation, not a bill.

week 1:
→ talk to 5 freelancers who have a late payment right now. ask what they sent.
→ one landing page. one line: invoices clients actually open.
→ post in r/freelance, ask how they follow up on late payments. do not mention the product.`}</div>
                </div>
              </div>

              {/* Tab 3 right — copy (swapped) */}
              <div className={`rp rp2${activeTab === '3' ? ' on' : ''}`} style={{ padding: '36px 40px', justifyContent: 'center', gap: 0, display: activeTab === '3' ? 'flex' : 'none', flexDirection: 'column' }}>
                <div className="pc-tag" style={{ marginBottom: 16 }}>THE DIFFERENCE</div>
                <h3 className="pc-hed" style={{ fontSize: 22, marginBottom: 16 }}>Every founder who shipped had someone who already knew the context.</h3>
                <p className="pc-body" style={{ fontSize: 14 }}>not a random dude on instagram they dm&apos;ed a month ago. Someone actually in it with them, remembering what they say, and actually keeping them accountable and asking why they haven&apos;t done the things they&apos;d say they would do.</p>
                <ul className="pc-list" style={{ marginTop: 20 }}>
                  <li><div className="cta-dot"></div>Picks up exactly where you left off every session</li>
                  <li><div className="cta-dot"></div>Sends you alerts when a competitor makes a move or Reddit shifts on your market</li>
                  <li><div className="cta-dot"></div>Follows up when you go quiet, because going quiet is how ideas die</li>
                  <li><div className="cta-dot"></div>Drafts the things that feel hard to start: cold emails, YC apps, landing page copy</li>
                </ul>
                <div className="pc-cta" style={{ marginTop: 28 }}>
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
          </div>
        </div>
      </div>
    </section>
  )
}
