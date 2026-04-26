'use client'

import { useEffect, useRef, useState } from 'react'

const SECTION_THEMES: Record<string, '#ffffff' | '#0f172a'> = {
  top: '#ffffff',
  how: '#0f172a',
  features: '#ffffff',
}

export default function Nav() {
  const navRef = useRef<HTMLElement>(null)
  const [textColor, setTextColor] = useState<'#ffffff' | '#0f172a'>('#ffffff')
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    function onScroll() {
      if (!nav) return
      nav.classList.toggle('scrolled', window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const observers: IntersectionObserver[] = []

    Object.entries(SECTION_THEMES).forEach(([id, color]) => {
      const el = document.getElementById(id)
      if (!el) return
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setTextColor(color)
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      )
      io.observe(el)
      observers.push(io)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      observers.forEach((io) => io.disconnect())
    }
  }, [])

  return (
    <nav
      className="navbar"
      id="navbar"
      ref={navRef}
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        color: textColor,
        padding: '6px 12px',
        gap: '16px',
      }}
    >
      <a href="#" className="nav-logo" style={{ color: '#ffffff', fontSize: '11px' }}>
        tethr<span className="underscore" style={{ color: '#ffffff' }}>_</span>
      </a>
      <ul className="nav-links" style={{ gap: '16px' }}>
        <li>
          <a
            href="#how"
            onMouseEnter={() => setHovered('how')}
            onMouseLeave={() => setHovered(null)}
            style={{
              color: '#ffffff',
              fontSize: '11px',
              textDecoration: 'none',
              position: 'relative',
              display: 'inline-block',
              paddingBottom: '3px',
              pointerEvents: 'auto',
              zIndex: 10,
            }}
          >
            how it works
            <svg
              style={{
                position: 'absolute',
                bottom: '-4px',
                left: 0,
                width: '100%',
                height: '8px',
                overflow: 'visible',
                pointerEvents: 'none',
              }}
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
            >
              <path
                d="M0,4 Q25,1 50,4 Q75,7 100,4"
                stroke="#ffffff"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                style={{
                  strokeDasharray: 110,
                  strokeDashoffset: hovered === 'how' ? 0 : 110,
                  transition: 'stroke-dashoffset 0.4s ease',
                }}
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#features"
            onMouseEnter={() => setHovered('built')}
            onMouseLeave={() => setHovered(null)}
            style={{
              color: '#ffffff',
              fontSize: '11px',
              textDecoration: 'none',
              position: 'relative',
              display: 'inline-block',
              paddingBottom: '3px',
              pointerEvents: 'auto',
              zIndex: 10,
            }}
          >
            built different
            <svg
              style={{
                position: 'absolute',
                bottom: '-4px',
                left: 0,
                width: '100%',
                height: '8px',
                overflow: 'visible',
                pointerEvents: 'none',
              }}
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
            >
              <path
                d="M0,4 Q25,1 50,4 Q75,7 100,4"
                stroke="#ffffff"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                style={{
                  strokeDasharray: 110,
                  strokeDashoffset: hovered === 'built' ? 0 : 110,
                  transition: 'stroke-dashoffset 0.4s ease',
                }}
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#waitlist"
            onMouseEnter={() => setHovered('founders')}
            onMouseLeave={() => setHovered(null)}
            style={{
              color: '#ffffff',
              fontSize: '11px',
              textDecoration: 'none',
              position: 'relative',
              display: 'inline-block',
              paddingBottom: '3px',
              pointerEvents: 'auto',
              zIndex: 10,
            }}
          >
            for founders
            <svg
              style={{
                position: 'absolute',
                bottom: '-4px',
                left: 0,
                width: '100%',
                height: '8px',
                overflow: 'visible',
                pointerEvents: 'none',
              }}
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
            >
              <path
                d="M0,4 Q25,1 50,4 Q75,7 100,4"
                stroke="#ffffff"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                style={{
                  strokeDasharray: 110,
                  strokeDashoffset: hovered === 'founders' ? 0 : 110,
                  transition: 'stroke-dashoffset 0.4s ease',
                }}
              />
            </svg>
          </a>
        </li>
      </ul>
      <a href="#waitlist" style={{
        background: '#FF6B35',
        color: '#000000',
        borderRadius: '100px',
        padding: '5px 12px',
        fontSize: '10px',
        fontWeight: 600,
        textDecoration: 'none',
        whiteSpace: 'nowrap',
      }}>join waitlist</a>
    </nav>
  )
}
