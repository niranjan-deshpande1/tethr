'use client'

import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    )

    document
      .querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-label')
      .forEach((el) => io.observe(el))

    return () => io.disconnect()
  }, [])

  return null
}
