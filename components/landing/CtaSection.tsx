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
        const line = LINES[Math.floor(Math.random() * LINES.length)]
        span.textContent = line
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
        <div className="cta-topbar">
        </div>

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
              { id: '1', label: 'What do I do tomorrow' },
              { id: '2', label: 'Is this worth building' },
              { id: '3', label: 'Draft my YC app' },
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
            <div className="cta-lpane">
              <div className={`pc${activeTab === '1' ? ' on' : ''}`}>
                <div className="pc-tag">Action plan</div>
                <h3 className="pc-hed">Wake up knowing exactly what to do.</h3>
                <p className="pc-body">tethr turns your goals into a specific daily plan. Every task ships with a draft already written. No blank docs. No guessing.</p>
                <ul className="pc-list">
                  <li><div className="cta-dot"></div>Post to r/startups. Draft written. Ready to go.</li>
                  <li><div className="cta-dot"></div>Cold DM three potential users. Templates done.</li>
                  <li><div className="cta-dot"></div>Finish your YC app. Why now section drafted.</li>
                  <li><div className="cta-dot"></div>Time estimates for everything.</li>
                </ul>
              </div>

              <div className={`pc${activeTab === '2' ? ' on' : ''}`}>
                <div className="pc-tag">Market research</div>
                <h3 className="pc-hed">Real signal in 40 seconds. Actual data.</h3>
                <p className="pc-body">tethr searches Reddit, forums, and competitor sites for what your customers are frustrated about. Returns signal, gaps, and a clear read on timing.</p>
                <ul className="pc-list">
                  <li><div className="cta-dot"></div>847 Reddit threads analyzed. Strong signal confirmed.</li>
                  <li><div className="cta-dot"></div>12 competitor gaps. Here they are.</li>
                  <li><div className="cta-dot"></div>Pain clusters mapped. Top six listed.</li>
                  <li><div className="cta-dot"></div>Done before you finish your coffee.</li>
                </ul>
              </div>

              <div className={`pc${activeTab === '3' ? ' on' : ''}`}>
                <div className="pc-tag">YC application</div>
                <h3 className="pc-hed">All eight questions answered. Backed by your research.</h3>
                <p className="pc-body">tethr writes the full application using your research, your signal, and your competitive positioning. Ask for a revision. Get it in seconds.</p>
                <ul className="pc-list">
                  <li><div className="cta-dot"></div>8 questions drafted in under a minute.</li>
                  <li><div className="cta-dot"></div>Why now built from your Reddit data.</li>
                  <li><div className="cta-dot"></div>Revise any section. Just ask.</li>
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

            <div className="cta-rpane">
              <div className={`rp rp1${activeTab === '1' ? ' on' : ''}`}>
                <div className="rp-lbl">Tomorrow / your plan</div>
                <div className="pi">
                  <div className="pi-n">01</div>
                  <div className="pi-c">
                    <div className="pi-t">Post to r/startups. Question format.</div>
                    <div className="pi-m">15 min / Draft ready</div>
                  </div>
                  <div className="pi-chk done"></div>
                </div>
                <div className="pi">
                  <div className="pi-n">02</div>
                  <div className="pi-c">
                    <div className="pi-t">Cold DM 3 potential early users.</div>
                    <div className="pi-m">20 min / Templates ready</div>
                  </div>
                  <div className="pi-chk done"></div>
                </div>
                <div className="pi">
                  <div className="pi-n">03</div>
                  <div className="pi-c">
                    <div className="pi-t">Finish YC app. Why now section.</div>
                    <div className="pi-m">45 min / Draft ready</div>
                  </div>
                  <div className="pi-chk"></div>
                </div>
              </div>

              <div className={`rp rp2${activeTab === '2' ? ' on' : ''}`}>
                <div className="rs">
                  <div className="rs-n">90<sup>%</sup></div>
                  <div className="rs-l">say the next step is harder than having the idea</div>
                  <div className="rs-bar"><div className="rs-fill" style={{ width: '90%' }}></div></div>
                </div>
                <div className="rs">
                  <div className="rs-n">72<sup>%</sup></div>
                  <div className="rs-l">stall before building anything in the first six weeks</div>
                  <div className="rs-bar"><div className="rs-fill" style={{ width: '72%' }}></div></div>
                </div>
                <div className="rs">
                  <div className="rs-n">3<sup>x</sup></div>
                  <div className="rs-l">more likely to reach first customers with a thinking partner</div>
                  <div className="rs-bar"><div className="rs-fill" style={{ width: '60%' }}></div></div>
                </div>
              </div>

              <div className={`rp rp3${activeTab === '3' ? ' on' : ''}`}>
                <div className="ch-bar">
                  <div className="ch-dots">
                    <div className="ch-dot" style={{ background: '#ff5f57' }}></div>
                    <div className="ch-dot" style={{ background: '#febc2e' }}></div>
                    <div className="ch-dot" style={{ background: '#28c840' }}></div>
                  </div>
                  <div className="ch-lbl">tethr_ / active session</div>
                </div>
                <div className="msgs">
                  <div className="m u">draft my YC app using everything we know</div>
                  <div className="m t">On it. Back in 40 seconds.</div>
                  <div className="m t">Done. All 8 questions answered. Why now built from your Reddit data. Review here.</div>
                  <div className="m u">make the why now section sharper. use the 847 thread data.</div>
                  <div className="typing-wrap">
                    <div className="dp"></div>
                    <div className="dp"></div>
                    <div className="dp"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
