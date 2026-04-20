export default function Quotes() {
  return (
    <section className="quotes-section above">
      <div className="quotes-inner">
        <div className="section-label reveal-label" style={{ textAlign: 'center', marginBottom: '12px' }}>Early builders</div>
        <h2 className="quotes-h reveal">Built for the ones who are actually building.</h2>
        <div className="quotes-grid">
          <div className="quote-card glass reveal delay-1">
            <div className="quote-mark">&quot;</div>
            <p className="quote-text">Tethr found three Reddit threads where my exact customer was already complaining — in 4 minutes. I&apos;d been trying to figure that out for weeks.</p>
            <div className="quote-attr">— Early beta user, fintech founder</div>
          </div>
          <div className="quote-card glass reveal delay-2">
            <div className="quote-mark">&quot;</div>
            <p className="quote-text">It&apos;s the first tool that actually did something instead of telling me what to do.</p>
            <div className="quote-attr">— Beta user, SaaS founder</div>
          </div>
        </div>
      </div>
    </section>
  )
}
