export default function Footer() {
  return (
    <footer className="ft-root">
      <div className="ft-top">
        <div className="ft-col">
          <p className="ft-col-header">Company</p>
          <a className="ft-link" href="#">About</a>
          <a className="ft-link" href="#">Careers</a>
          <a className="ft-link" href="#">Blog</a>
        </div>
        <div className="ft-col">
          <p className="ft-col-header">Product</p>
          <a className="ft-link" href="#">How it works</a>
          <a className="ft-link" href="#">Research</a>
          <a className="ft-link" href="#">Outreach</a>
        </div>
        <div className="ft-col">
          <p className="ft-col-header">Resources</p>
          <a className="ft-link" href="#">Docs</a>
          <a className="ft-link" href="#">Privacy</a>
          <a className="ft-link" href="#">Terms</a>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(26,24,21,0.1)', margin: '36px 0 24px' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <span className="ft-copy">© tethr_ 2026&nbsp;&nbsp;·&nbsp;&nbsp;Terms&nbsp;&nbsp;·&nbsp;&nbsp;Privacy</span>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a className="ft-icon-link" href="https://x.com/tethr.ai" aria-label="X">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4l16 16M20 4L4 20" />
            </svg>
          </a>
          <a className="ft-icon-link" href="https://instagram.com/tethr.ai" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a className="ft-icon-link" href="https://linkedin.com/company/tethr-ai" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="2" />
              <line x1="8" y1="11" x2="8" y2="16" />
              <line x1="8" y1="8" x2="8" y2="8.01" />
              <line x1="12" y1="16" x2="12" y2="11" />
              <path d="M12 13a3 3 0 0 1 6 0v3" />
            </svg>
          </a>
          <a className="ft-icon-link" href="https://tiktok.com/@tethr.ai" aria-label="TikTok">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
