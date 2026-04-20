'use client'

import { useEffect } from 'react'

export default function FeatureCards() {
  useEffect(() => {
    const grid = document.getElementById('capGrid')
    if (!grid) return
    let done = false

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !done) {
          done = true
          grid.querySelectorAll<HTMLElement>('.cap-item').forEach((item, i) => {
            setTimeout(() => item.classList.add('ci-on'), i * 70)
          })
          io.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    io.observe(grid)

    return () => io.disconnect()
  }, [])

  return (
    <section className="features-section above" id="features">
      <div className="features-inner">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label reveal-label">How it&apos;s different</div>
          <h2 className="section-h2 reveal" style={{ marginTop: '8px' }}>Built different.</h2>
        </div>
        <div className="features-grid">
          <div className="feat-card glass reveal delay-1">
            <svg className="feat-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="14" cy="14" r="8" /><path d="M20 20l8 8" />
            </svg>
            <div className="feat-label">Research</div>
            <h3 className="feat-h3">Finds what you can&apos;t</h3>
            <p className="feat-p">Tethr searches Reddit, forums, and competitor sites for exactly what your target customers are frustrated about — before you even ask.</p>
          </div>
          <div className="feat-card glass reveal delay-2">
            <svg className="feat-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M16 4a12 12 0 0 1 0 24" /><path d="M16 4a12 12 0 0 0 0 24" /><path d="M4 16h24" />
            </svg>
            <div className="feat-label">Memory</div>
            <h3 className="feat-h3">Knows you better every session</h3>
            <p className="feat-p">Every conversation compounds. Tethr builds a model of how you think, what you avoid, and what actually moves you to act.</p>
          </div>
          <div className="feat-card glass reveal delay-3">
            <svg className="feat-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 3L4 17h10l-1 12 15-18H18l1-8z" />
            </svg>
            <div className="feat-label">Execution</div>
            <h3 className="feat-h3">Builds the work, not the advice</h3>
            <p className="feat-p">Competitor breakdowns, execution plans, outreach drafts, accelerator applications — done, not suggested.</p>
          </div>
        </div>

        <div className="cap-wrap">
          <div className="cap-grid" id="capGrid">
            <div className="cap-item">
              <div className="cap-icon-line"><svg viewBox="0 0 28 28"><circle cx="12" cy="12" r="7" /><path d="M17 17l7 7" /></svg></div>
              <div className="cap-name">Reddit research</div>
              <div className="cap-desc">Surfaces the exact threads where your target customer is already frustrated — before you even know they exist.</div>
            </div>
            <div className="cap-item">
              <div className="cap-icon-line"><svg viewBox="0 0 28 28"><path d="M4 7h20M4 14h14M4 21h9" /></svg></div>
              <div className="cap-name">Competitor intel</div>
              <div className="cap-desc">Maps pricing, positioning, and gaps across every meaningful competitor in your space.</div>
            </div>
            <div className="cap-item">
              <div className="cap-icon-line"><svg viewBox="0 0 28 28"><rect x="3" y="3" width="9" height="9" rx="1.5" /><rect x="16" y="3" width="9" height="9" rx="1.5" /><rect x="3" y="16" width="9" height="9" rx="1.5" /><rect x="16" y="16" width="9" height="9" rx="1.5" /></svg></div>
              <div className="cap-name">Execution plan</div>
              <div className="cap-desc">A prioritized Week 1 action plan — specific to your idea, your market, and your constraints.</div>
            </div>
            <div className="cap-item">
              <div className="cap-icon-line"><svg viewBox="0 0 28 28"><path d="M4 14h20M20 8l6 6-6 6" /></svg></div>
              <div className="cap-name">Customer outreach</div>
              <div className="cap-desc">Drafts personalized outreach for your first 10 potential customers, ready to send.</div>
            </div>
            <div className="cap-item">
              <div className="cap-icon-line"><svg viewBox="0 0 28 28"><circle cx="14" cy="9" r="4" /><path d="M4 24c0-5.5 4.5-10 10-10s10 4.5 10 10" /></svg></div>
              <div className="cap-name">Accelerator applications</div>
              <div className="cap-desc">Writes and refines your YC, Techstars, or other accelerator applications end-to-end.</div>
            </div>
            <div className="cap-item">
              <div className="cap-icon-line"><svg viewBox="0 0 28 28"><path d="M14 4v4M14 20v4M4 14h4M20 14h4" /><circle cx="14" cy="14" r="4" /></svg></div>
              <div className="cap-name">Compounding memory</div>
              <div className="cap-desc">Every conversation is remembered. Tethr builds a model of how you think and what moves you to act.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
