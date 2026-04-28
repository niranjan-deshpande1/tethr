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
            <h1>stop figuring it out alone.</h1>
            <p>every founder who shipped had someone in their corner who already knew the context.</p>
          </div>
          <div className="cta-hero-right">
            <a href="#waitlist" className="btn-white">
              start building
              <svg viewBox="0 0 13 13">
                <path d="M2 6.5h9M8 3l3.5 3.5L8 10" />
              </svg>
            </a>
          </div>
        </div>

        <div className="cta-card">
          <div className="cta-tabs">
            {[
              { id: '1', label: 'the first week' },
              { id: '2', label: 'what actually happens' },
              { id: '3', label: 'what comes next' },
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
                <h3 className="pc-hed">you have eleven tabs open. the doc has four bullet points and nobody has seen it yet.</h3>
                <p className="pc-body">this is where every founder ends up. the idea felt real on day one, but by day seven the doc has four bullet points and nothing has moved. you did not run out of motivation. you ran out of direction, because there was nobody to sit down with you and tell you what to actually do tomorrow morning.</p>
                <ul className="pc-list">
               </ul>
              </div>

              {/* Tab 2 left */}
              <div className={`pc${activeTab === '2' ? ' on' : ''}`}>
                <h3 className="pc-hed">you describe the idea. tethr goes and executes.</h3>
                <p className="pc-body">it does not generate a plan and hand it back to you. tethr pulls Reddit threads where your future customers are already complaining, maps every real competitor with their pricing and gaps, and builds your week one around your specific idea. then it drafts the outreach, writes the copy, and prepares the applications. you review everything before anything goes out. that is the whole model.</p>
                <ul className="pc-list">
                  <li><div className="cta-dot"></div>finds Reddit threads where your future customers are already complaining</li>
                  <li><div className="cta-dot"></div>maps every competitor with pricing, weaknesses, and gaps called out</li>
                  <li><div className="cta-dot"></div>builds a week one plan calibrated to your specific idea</li>
                  <li><div className="cta-dot"></div>drafts the outreach, landing page copy, and YC application answers</li>
                  <li><div className="cta-dot"></div>sends nothing without your explicit approval first</li>
                </ul>
              </div>

              {/* Tab 3 left — "the difference" copy */}
              <div className={`pc${activeTab === '3' ? ' on' : ''}`}>
                <h3 className="pc-hed" style={{ marginBottom: 16 }}>every founder who shipped had someone already in it with them.</h3>
                <p className="pc-body">someone who picked up exactly where the last session ended, who followed up when they went quiet, and who drafted the things that felt too hard to start. tethr builds a compounding picture of how you work, and every session it gets a little sharper.</p>
                <ul className="pc-list" style={{ marginTop: 12 }}>
                  <li><div className="cta-dot"></div>picks up exactly where you left off, every single session</li>
                  <li><div className="cta-dot"></div>follows up when you go quiet, because going quiet is how ideas die</li>
                  <li><div className="cta-dot"></div>drafts the hard things: cold emails, YC applications, landing page copy</li>
                  <li><div className="cta-dot"></div>tells you when a competitor makes a move or Reddit shifts on your market</li>
                </ul>
                <div className="pc-cta" style={{ marginTop: 16 }}>
                 
                </div>
              </div>
            </div>

            {/* ── RIGHT PANE ── */}
            <div className="cta-rpane">

              {/* Tab 1 right — stats */}
              <div className={`rp rp1${activeTab === '1' ? ' on' : ''}`} style={{ display: activeTab === '1' ? 'flex' : 'none', flexDirection: 'column', justifyContent: 'center', padding: '32px 40px', gap: 28, overflowY: 'hidden' }}>
                <div className="rs">
                  <div className="rs-n" style={{ fontSize: 36 }}>90<sup style={{ color: '#F5622D' }}>%</sup></div>
                  <div className="rs-l">of startups fail. the number has not moved in a decade.</div>
                  <div className="rs-bar" style={{ height: 3, background: 'rgba(26,24,21,0.08)' }}><div className="rs-fill" style={{ width: '90%', height: 3 }}></div></div>
                </div>
                <div className="rs">
                  <div className="rs-n" style={{ fontSize: 36 }}>18<sup style={{ color: '#F5622D' }}>%</sup></div>
                  <div className="rs-l">first-time founder success rate. it doubles with the right support.</div>
                  <div className="rs-bar" style={{ height: 3, background: 'rgba(26,24,21,0.08)' }}><div className="rs-fill" style={{ width: '18%', height: 3 }}></div></div>
                </div>
                <div className="rs">
                  <div className="rs-n" style={{ fontSize: 36 }}>42<sup style={{ color: '#F5622D' }}>%</sup></div>
                  <div className="rs-l">built something nobody wanted, because they never talked to a real customer.</div>
                  <div className="rs-bar" style={{ height: 3, background: 'rgba(26,24,21,0.08)' }}><div className="rs-fill" style={{ width: '42%', height: 3 }}></div></div>
                </div>
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
                  <div className="m u">my idea is a tool that helps solo consultants send invoices that clients actually open</div>
                  <div className="m t">on it. give me a minute.</div>
                  <div className="m t" style={{ whiteSpace: 'pre-line', fontSize: 11, lineHeight: 1.65 }}>{`found 23 threads across r/freelance and r/consulting with the same complaint. invoices get ignored because they look like accounting documents rather than conversations. freshbooks, wave, and stripe invoicing all treat it as a billing problem. none of them treat it as a communication problem. the gap is real. here is your week one plan.`}</div>
                  <div className="m u">what do i do tomorrow</div>
                  <div className="m t">talk to five freelancers who have a late payment right now and ask what they sent. do not mention the product yet.</div>
                </div>
              </div>

              {/* Tab 3 right — outcome cards */}
              <div className={`rp rp2${activeTab === '3' ? ' on' : ''}`} style={{ display: activeTab === '3' ? 'flex' : 'none', flexDirection: 'column', padding: '28px 32px', justifyContent: 'center', overflowY: 'auto' }}>
                <div>
                  <div style={{ background: 'white', border: '1px solid rgba(26,24,21,0.08)', borderRadius: 12, padding: '20px 24px', marginBottom: 12, boxShadow: '0 1px 4px rgba(26,24,21,0.05)' }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: '#F5622D', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>week 1</div>
                    <div style={{ fontSize: 13, color: 'rgba(26,24,21,0.65)', lineHeight: 1.7 }}>you have talked to five real people and you know exactly what they hate about what already exists.</div>
                  </div>
                  <div style={{ background: 'white', border: '1px solid rgba(26,24,21,0.08)', borderRadius: 12, padding: '20px 24px', marginBottom: 12, boxShadow: '0 1px 4px rgba(26,24,21,0.05)' }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: '#F5622D', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>week 4</div>
                    <div style={{ fontSize: 13, color: 'rgba(26,24,21,0.65)', lineHeight: 1.7 }}>you have a waitlist and tethr drafted every piece of outreach. you never stared at a blank document.</div>
                  </div>
                  <div style={{ background: 'white', border: '1px solid rgba(26,24,21,0.08)', borderRadius: 12, padding: '20px 24px', marginBottom: 12, boxShadow: '0 1px 4px rgba(26,24,21,0.05)' }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: '#F5622D', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Month 3</div>
                    <div style={{ fontSize: 13, color: 'rgba(26,24,21,0.65)', lineHeight: 1.7 }}>you are iterating on real feedback, your YC application is drafted, and every answer in it came from your actual research sessions with tethr.</div>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: 'rgba(26,24,21,0.4)', marginTop: 8, fontStyle: 'italic' }}>this is what building without stalling looks like.</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
