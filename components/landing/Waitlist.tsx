'use client'

import { useState } from 'react'

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [inputStyle, setInputStyle] = useState<React.CSSProperties>({})

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    if (!valid) {
      setInputStyle({ borderColor: '#ef4444' })
      return
    }
    setSubmitted(true)
  }

  return (
    <section className="waitlist-section above" id="waitlist">
      <div className="wl-card glass reveal">
        <div className="wl-card-label">Join the waitlist</div>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="wl-input"
              placeholder="your@email.com"
              required
              value={email}
              style={inputStyle}
              onChange={(e) => {
                setEmail(e.target.value)
                setInputStyle({})
              }}
            />
            <button type="submit" className="wl-btn">Start building →</button>
            <p className="wl-fine">Free to start. No credit card. Built by founders.</p>
          </form>
        ) : (
          <div className="wl-success" style={{ display: 'flex' }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="19" stroke="#FF6B35" strokeWidth="1.5" />
              <path d="M12 20l6 6L28 14" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="wl-success-p">You&apos;re in.</p>
            <p className="wl-success-sub">We&apos;ll reach out when Tethr is ready for you.</p>
          </div>
        )}
      </div>
    </section>
  )
}
