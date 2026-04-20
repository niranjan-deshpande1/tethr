'use client'

import { useEffect, useRef } from 'react'

export default function Nav() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    function onScroll() {
      if (!nav) return
      nav.classList.toggle('scrolled', window.scrollY > 60)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="navbar" id="navbar" ref={navRef} style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)' }}>
      <a href="#" className="nav-logo">tethr<span className="underscore">_</span></a>
      <ul className="nav-links">
        <li><a href="#how">how it works</a></li>
        <li><a href="#features">built different</a></li>
        <li><a href="#waitlist">for founders</a></li>
      </ul>
      <a href="#waitlist" className="nav-cta">join waitlist</a>
    </nav>
  )
}
