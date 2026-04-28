'use client'

import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import {
  siStripe,
  siGooglesheets,
  siNotion,
  siGmail,
  siReddit,
} from 'simple-icons'

type Point = { x: number; y: number }

type ToolNode = {
  name: string
  logo: ReactNode
}

type CapabilityBadgeProps = {
  label: string
  style: CSSProperties
}

function ellipsePoints(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  count: number,
  offsetDeg = 0,
): Point[] {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i * 2 * Math.PI) / count + (offsetDeg * Math.PI) / 180
    return {
      x: cx + rx * Math.cos(angle),
      y: cy + ry * Math.sin(angle),
    }
  })
}

function CapabilityBadge({ label, style }: CapabilityBadgeProps) {
  return (
    <div
      style={{
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
        borderRadius: '100px',
        overflow: 'hidden',
        padding: '5px 12px',
        background: 'rgba(255,107,53,0.1)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,107,53,0.25)',
        boxShadow: 'inset 0 1px 0 rgba(255,107,53,0.15)',
        color: '#FF6B35',
        fontSize: '10px',
        fontWeight: 600,
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {label}
    </div>
  )
}

type GlassNodeProps = {
  style: CSSProperties
  children: ReactNode
}

function GlassNode({ style, children }: GlassNodeProps) {
  return (
    <div
      style={{
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
        borderRadius: '100px',
        overflow: 'hidden',
        padding: '10px 18px',
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(255,255,255,0.07)',
        backdropFilter: 'blur(20px) saturate(160%)',
        WebkitBackdropFilter: 'blur(20px) saturate(160%)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderTop: '1px solid rgba(255,255,255,0.22)',
        boxShadow:
          'inset 0 1px 0 rgba(255,255,255,0.15), 0 4px 16px rgba(0,0,0,0.4)',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

const TOOL_NODES: ToolNode[] = [
  {
    name: 'community signal',
    logo: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#ffffff">
        <path d={siReddit.path} />
      </svg>
    ),
  },
  {
    name: 'knowledge base',
    logo: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#ffffff">
        <path d={siNotion.path} />
      </svg>
    ),
  },
  {
    name: 'outreach emails',
    logo: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#ffffff">
        <path d={siGmail.path} />
      </svg>
    ),
  },
  {
    name: 'team updates',
    logo: (
      <svg viewBox="0 0 24 24" width="22" height="22">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ffffff"/>
      </svg>
    ),
  },
  {
    name: 'ai research',
    logo: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#ffffff">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.843-3.38 2.019-1.164a.076.076 0 0 1 .071 0l4.83 2.786a4.494 4.494 0 0 1-.676 8.105v-5.677a.79.79 0 0 0-.4-.67zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
      </svg>
    ),
  },
  {
    name: 'tracking',
    logo: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#ffffff">
        <path d={siGooglesheets.path} />
      </svg>
    ),
  },
  {
    name: 'payments',
    logo: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#ffffff">
        <path d={siStripe.path} />
      </svg>
    ),
  },
  {
    name: 'founder network',
    logo: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#ffffff">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
]

const CAPABILITIES = [
  'validate ideas',
  'deploy agents',
  'build your plan',
  'send outreach',
  'track finances',
  'draft emails',
  'run research',
  'find investors',
]

const CH = 580

export default function Ecosystem() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [cw, setCw] = useState(720)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width
      if (w) setCw(w)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const cx = cw / 2
  const cy = CH / 2

  const outerPts = ellipsePoints(cx, cy, 310, 205, 8)
  const innerPts = ellipsePoints(cx, cy, 175, 108, 8, 22.5)

  return (
    <section
      style={{
        background: '#08090f',
        minHeight: '100vh',
        padding: '80px 80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 60px rgba(255,107,53,0.25), 0 0 120px rgba(255,107,53,0.08), inset 0 1px 0 rgba(255,255,255,0.25);
          }
          50% {
            box-shadow: 0 0 80px rgba(255,107,53,0.45), 0 0 160px rgba(255,107,53,0.15), inset 0 1px 0 rgba(255,255,255,0.25);
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          gap: 60,
          alignItems: 'center',
        }}
      >
        {/* Left column — text */}
        <div style={{ flex: '0 0 38%' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 3vw, 42px)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
              margin: '0 0 20px',
            }}
          >
            from your first idea to your first customer, and everything after.
          </h2>
          <p
            style={{
              fontSize: 15,
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            tethr connects to the tools you already use and runs the work across all of them.
          </p>
        </div>

        {/* Right column — diagram floats on dark bg */}
        <div style={{ flex: 1 }}>
          <div
            ref={containerRef}
            style={{
              width: '100%',
              height: CH,
              position: 'relative',
              overflow: 'visible',
            }}
          >
            {/* SVG: static lines + animated traveling dots */}
            <svg
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                overflow: 'visible',
                zIndex: 0,
              }}
              viewBox={`0 0 ${cw} ${CH}`}
              preserveAspectRatio="none"
            >
              {outerPts.map((pt, i) => (
                <g key={TOOL_NODES[i].name}>
                  <line
                    x1={pt.x}
                    y1={pt.y}
                    x2={cx}
                    y2={cy}
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <circle r="2.5" fill="rgba(255,255,255,0.7)">
                    <animateMotion
                      path={`M ${pt.x} ${pt.y} L ${cx} ${cy}`}
                      dur="2s"
                      repeatCount="indefinite"
                      begin={`${i * 0.25}s`}
                    />
                  </circle>
                </g>
              ))}
            </svg>

            {/* Outer tool nodes */}
            {TOOL_NODES.map((tool, i) => (
              <GlassNode
                key={tool.name}
                style={{ left: outerPts[i].x, top: outerPts[i].y }}
              >
                <div style={{ flexShrink: 0, display: 'flex' }}>
                  {tool.logo}
                </div>
              </GlassNode>
            ))}

            {/* Inner capability badges */}
            {CAPABILITIES.map((cap, i) => (
              <CapabilityBadge
                key={cap}
                label={cap}
                style={{ left: innerPts[i].x, top: innerPts[i].y }}
              />
            ))}

            {/* Center node */}
            <div
              style={{
                position: 'absolute',
                left: cx,
                top: cy,
                transform: 'translate(-50%, -50%)',
                width: 150,
                borderRadius: '20px',
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(24px) saturate(180%)',
                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderTop: '1px solid rgba(255,255,255,0.3)',
                animation: 'pulse-glow 2.5s ease-in-out infinite',
                zIndex: 3,
              }}
            >
              <div
                style={{
                  padding: '20px 16px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                >
                  <span style={{ color: '#ffffff' }}>t</span>
                  <span style={{ color: '#FF6B35' }}>_</span>
                </div>
                <div
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    marginTop: 6,
                  }}
                >
                  tethr_
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
