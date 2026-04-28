'use client'

import { useEffect, useRef, useState } from 'react'

export default function Nav() {
  const navRef = useRef<HTMLElement>(null)
  const [isDark, setIsDark] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    function onScroll() {
      if (!nav) return
      nav.classList.toggle('scrolled', window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const howEl = document.getElementById('how')
    let observer: IntersectionObserver | null = null

    if (howEl) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsDark(entry.isIntersecting)
        },
        { rootMargin: '-56px 0px 0px 0px', threshold: 0 }
      )
      observer.observe(howEl)
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer?.disconnect()
    }
  }, [])

  const linkColor = isDark ? '#0f172a' : 'rgba(255,255,255,0.9)'
  const linkHoverColor = isDark ? '#0f172a' : '#ffffff'
  const underlineColor = isDark ? '#0f172a' : '#ffffff'

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
        padding: '6px 12px',
        gap: '16px',
        background: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(0.5px) saturate(180%)',
        WebkitBackdropFilter: 'blur(0.5px) saturate(180%)',
        border: isDark ? '1px solid rgba(0,0,0,0.12)' : '1px solid rgba(255,255,255,0.45)',
        transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <a
        href="#"
        className="nav-logo"
        style={{ fontSize: '11px', color: isDark ? '#0f172a' : '#ffffff' }}
      >
        tethr<span className="underscore" style={{ color: '#FF6B35' }}>_</span>
      </a>
      <ul className="nav-links" style={{ gap: '16px' }}>
        <li>
          <a
            href="#how"
            onMouseEnter={() => setHovered('how')}
            onMouseLeave={() => setHovered(null)}
            style={{
              color: hovered === 'how' ? linkHoverColor : linkColor,
              fontSize: '11px',
              fontWeight: 500,
              textDecoration: 'none',
              position: 'relative',
              display: 'inline-block',
              paddingBottom: '3px',
              pointerEvents: 'auto',
              zIndex: 10,
              transition: 'color 0.3s ease',
            }}
          >
            the product
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
                stroke={underlineColor}
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
            href="/story"
            onMouseEnter={() => setHovered('built')}
            onMouseLeave={() => setHovered(null)}
            style={{
              color: hovered === 'built' ? linkHoverColor : linkColor,
              fontSize: '11px',
              fontWeight: 500,
              textDecoration: 'none',
              position: 'relative',
              display: 'inline-block',
              paddingBottom: '3px',
              pointerEvents: 'auto',
              zIndex: 10,
              transition: 'color 0.3s ease',
            }}
          >
            the story
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
                stroke={underlineColor}
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
