'use client'

import { useRef, useState, useCallback } from 'react'
import {
  motion,
  useSpring,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from 'framer-motion'

type GravityButtonProps = {
  label: string
  href: string
  color1?: string
  color2?: string
}

export default function GravityButton({
  label,
  href,
  color1 = '#FF6B35',
  color2 = '#ff9a35',
}: GravityButtonProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 })

  // Magnetic spring
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const springX = useSpring(rawX, { stiffness: 150, damping: 15 })
  const springY = useSpring(rawY, { stiffness: 150, damping: 15 })

  // Rotating border
  const rotation = useMotionValue(0)
  useAnimationFrame((t) => {
    rotation.set((t / 30) % 360)
  })
  const borderGradient = useTransform(
    rotation,
    (r) => `conic-gradient(from ${r}deg, ${color1}, ${color2}, ${color1})`
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = wrapRef.current?.getBoundingClientRect()
      if (!rect) return
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      rawX.set((e.clientX - centerX) * 0.25)
      rawY.set((e.clientY - centerY) * 0.25)
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      setCursorPos({ x, y })
    },
    [rawX, rawY]
  )

  const handleMouseLeave = useCallback(() => {
    rawX.set(0)
    rawY.set(0)
    setIsHovered(false)
    setCursorPos({ x: 50, y: 50 })
  }, [rawX, rawY])

  const chars = label.split('')

  return (
    <motion.div
      ref={wrapRef}
      style={{ x: springX, y: springY, display: 'inline-block' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Rotating gradient border wrapper */}
      <motion.div
        style={{
          background: borderGradient,
          padding: 2,
          borderRadius: 14,
          display: 'inline-block',
        }}
      >
        {/* Glow pulse + cursor-follow inner button */}
        <motion.a
          href={href}
          aria-label={label}
          animate={{
            boxShadow: [
              `0 0 16px 0px ${color1}2a`,
              `0 0 36px 8px ${color1}55`,
              `0 0 16px 0px ${color1}2a`,
            ],
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            display: 'block',
            padding: '14px 32px',
            borderRadius: 12,
            background: `radial-gradient(circle at ${cursorPos.x}% ${cursorPos.y}%, rgba(255,107,53,0.16) 0%, transparent 65%), transparent`,
            textDecoration: 'none',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            userSelect: 'none',
            WebkitUserSelect: 'none',
          }}
        >
          {/* Rolling text: overflow container clips both rows */}
          <span
            style={{
              display: 'inline-flex',
              overflow: 'hidden',
              height: '1.2em',
              position: 'relative',
              whiteSpace: 'nowrap',
            }}
          >
            {/* Row 1 — exits upward on hover */}
            <span style={{ display: 'inline-flex' }}>
              {chars.map((char, i) => (
                <motion.span
                  key={`out-${i}`}
                  animate={isHovered ? { y: '-100%' } : { y: 0 }}
                  transition={{
                    duration: 0.22,
                    delay: isHovered ? i * 0.022 : (chars.length - 1 - i) * 0.022,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  style={{
                    display: 'inline-block',
                    color: '#ffffff',
                    fontSize: '15px',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    lineHeight: 1.2,
                  }}
                >
                  {char === ' ' ? '\u00a0' : char}
                </motion.span>
              ))}
            </span>

            {/* Row 2 — enters from below on hover */}
            <span
              style={{
                display: 'inline-flex',
                position: 'absolute',
                top: '100%',
                left: 0,
              }}
            >
              {chars.map((char, i) => (
                <motion.span
                  key={`in-${i}`}
                  animate={isHovered ? { y: '-100%' } : { y: 0 }}
                  transition={{
                    duration: 0.22,
                    delay: isHovered ? i * 0.022 : (chars.length - 1 - i) * 0.022,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  style={{
                    display: 'inline-block',
                    color: color1,
                    fontSize: '15px',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    lineHeight: 1.2,
                  }}
                >
                  {char === ' ' ? '\u00a0' : char}
                </motion.span>
              ))}
            </span>
          </span>
        </motion.a>
      </motion.div>
    </motion.div>
  )
}
