'use client'

import { useEffect, useRef } from 'react'

export default function GapReveal() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const quoteRef = useRef<HTMLParagraphElement>(null)
  const logoWrapRef = useRef<HTMLDivElement>(null)
  const subLineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const quote = quoteRef.current
    const logoWrap = logoWrapRef.current
    const subLine = subLineRef.current
    if (!section || !quote || !logoWrap || !subLine) return

    function ease(t: number) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    }

    function tick() {
      if (!section || !quote || !logoWrap || !subLine) return
      const top = section.offsetTop
      const scrollable = section.offsetHeight - window.innerHeight
      const raw = (window.scrollY - top) / scrollable
      const prog = Math.max(0, Math.min(1, raw))

      if (prog <= 0.38) {
        const t = ease(prog / 0.38)
        quote.style.opacity = String(t)
        quote.style.transform = `scale(${0.88 + 0.12 * t})`
        logoWrap.style.opacity = '0'
        logoWrap.style.transform = 'scale(1.5)'
        subLine.style.opacity = '0'
      } else if (prog <= 0.65) {
        const t = ease((prog - 0.38) / 0.27)
        quote.style.opacity = String(Math.max(0, 1 - t * 1.6))
        quote.style.transform = `scale(${1 - t * 0.18})`
        const lt = Math.max(0, (prog - 0.48) / 0.17)
        logoWrap.style.opacity = String(ease(Math.min(1, lt)))
        logoWrap.style.transform = `scale(${1.5 - 0.5 * ease(Math.min(1, lt))})`
        subLine.style.opacity = '0'
      } else {
        quote.style.opacity = '0'
        logoWrap.style.opacity = '1'
        logoWrap.style.transform = 'scale(1)'
        const st = ease(Math.min(1, (prog - 0.65) / 0.2))
        subLine.style.opacity = String(st)
      }
    }

    window.addEventListener('scroll', tick, { passive: true })
    tick()

    return () => window.removeEventListener('scroll', tick)
  }, [])

  return (
    <div className="gap-section" id="gapSection" ref={sectionRef}>
      <div className="gap-sticky">
        <p className="gap-quote" id="gapQuote" ref={quoteRef}>
          The gap between idea<br />and launched is where<br />most founders give up.
        </p>
        <div className="gap-logo-wrap" id="gapLogo" ref={logoWrapRef}>
          <div className="gap-logo-text">tethr<span className="underscore">_</span></div>
          <div className="gap-sub-line" id="gapSubLine" ref={subLineRef}>your ai cofounder</div>
        </div>
      </div>
    </div>
  )
}
