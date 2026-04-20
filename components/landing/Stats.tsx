'use client'

import { useEffect } from 'react'

export default function Stats() {
  useEffect(() => {
    let done = false
    const sec = document.getElementById('statsSec')
    if (!sec) return

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !done) {
          done = true
          document.querySelectorAll<HTMLElement>('.cu').forEach((el) => {
            const target = parseFloat(el.dataset['t'] ?? '0')
            const sfx = el.dataset['s'] ?? ''
            if (target === 0 || target === 1) { el.textContent = target + sfx; return }
            let cur = 0
            const iv = setInterval(() => {
              cur = Math.min(cur + target / 80, target)
              el.textContent = Math.floor(cur) + sfx
              if (cur >= target) clearInterval(iv)
            }, 16)
          })
          io.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    io.observe(sec)

    return () => io.disconnect()
  }, [])

  return (
    <section className="stats-section above" id="statsSec">
      <div className="stats-inner">
        <div className="stat-item reveal">
          <div className="stat-n"><span className="cu" data-t="50" data-s="M+">0</span></div>
          <div className="stat-l">new startups launched every year</div>
        </div>
        <div className="stat-item reveal delay-1">
          <div className="stat-n"><span className="cu" data-t="18" data-s="%">0</span></div>
          <div className="stat-l">first-time founder success rate</div>
        </div>
        <div className="stat-item reveal delay-2">
          <div className="stat-n"><span className="cu" data-t="1" data-s="">0</span></div>
          <div className="stat-l">AI cofounder for all of it</div>
        </div>
      </div>
    </section>
  )
}
