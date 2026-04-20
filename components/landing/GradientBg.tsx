'use client'

import { useEffect } from 'react'

export default function GradientBg() {
  useEffect(() => {
    const blobs = Array.from(document.querySelectorAll<HTMLElement>('.gradient-bg .blob'))
    let mounted = true

    function rand(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    function moveBlob(blob: HTMLElement) {
      if (!mounted) return
      const x = rand(-window.innerWidth * 0.25, window.innerWidth * 0.25)
      const y = rand(-window.innerHeight * 0.25, window.innerHeight * 0.25)
      const s = rand(0.88, 1.12)
      const duration = rand(12, 34)
      blob.style.transition = `transform ${duration}s cubic-bezier(0.45, 0.05, 0.55, 0.95)`
      blob.style.transform = `translate(${x}px, ${y}px) scale(${s})`
      const next = rand(duration * 0.5, duration * 0.9) * 1000
      setTimeout(() => moveBlob(blob), next)
    }

    blobs.forEach((blob, i) => {
      setTimeout(() => moveBlob(blob), i * rand(400, 1200))
    })

    return () => { mounted = false }
  }, [])

  return (
    <div className="gradient-bg" aria-hidden="true">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="blob blob-4" />
      <div className="blob blob-5" />
    </div>
  )
}
