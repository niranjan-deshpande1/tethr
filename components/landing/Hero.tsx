'use client'

import GravityButton from './GravityButton'

type GlassCardProps = {
  cardStyle: React.CSSProperties
  label: string
  children: React.ReactNode
}

function GlassCard({ cardStyle, label, children }: GlassCardProps) {
  return (
    <div
      style={{
        position: 'absolute',
        borderRadius: 24,
        overflow: 'hidden',
        boxShadow: '0 6px 24px rgba(0,0,0,0.2)',
        width: 240,
        cursor: 'default',
        ...cardStyle,
      }}
    >
      {/* glass-filter layer */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        filter: 'url(#glass-distortion) saturate(120%) brightness(1.15)',
        zIndex: 1,
      }} />
      {/* glass-content layer */}
      <div style={{ position: 'relative', zIndex: 2, padding: '14px 19px', color: '#ffffff', fontSize: 14 }}>
        <div style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.1em',
          color: '#FF6B35',
          marginBottom: 10,
          textTransform: 'uppercase',
        }}>
          {label}
        </div>
        {children}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      className="hero"
      id="top"
      style={{
        color: '#ffffff',
        position: 'relative',
        height: '100vh',
        minHeight: '100vh',
        maxHeight: '100vh',
        padding: 0,
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      <svg style={{ display: 'none' }}>
        <defs>
          <filter id="glass-distortion">
            <feTurbulence type="turbulence" baseFrequency="0.008" numOctaves={2} result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale={77} />
          </filter>
        </defs>
      </svg>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        position: 'relative',
        zIndex: 1,
      }}>
        <h1 className="hero-h1" style={{ color: '#ffffff', fontSize: 'clamp(24px,3.75vw,44px)' }}>your startup idea<br />deserves more than<br />advice.</h1>
        <p className="hero-sub" style={{ color: '#ffffff', fontSize: '12px', marginBottom: '16px' }}>meet tethr, your ai cofounder<br />it does the work, while you make the decision</p>
        <div className="hero-ctas" style={{ transform: 'scale(0.75)', transformOrigin: 'center' }}>
          <GravityButton label="see how it works" href="#how" color1="#1a1a1a" color2="#2a2a2a" />
          <GravityButton label="start building" href="#waitlist" />
        </div>
      </div>


      {/* Card 1: RESEARCH — top left */}
      <GlassCard
        label="research"
        cardStyle={{ top: '10%', left: '2%', transform: 'rotate(-4deg)' }}
      >
        <p style={{ fontSize: 14, lineHeight: 1.5, margin: '0 0 10px' }}>
          Strong signal. 847 Reddit threads, 12 competitor gaps identified.
        </p>
        <span style={{ fontSize: 19, color: '#FF6B35', fontWeight: 700 }}>✓</span>
      </GlassCard>

      {/* Card 2: tethr_ — top right */}
      <GlassCard
        label="tethr_"
        cardStyle={{ top: '8%', right: '2%', transform: 'rotate(3deg)' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{
            background: 'rgba(20,20,30,0.72)',
            borderRadius: '17px 17px 17px 5px',
            padding: '10px 14px',
            fontSize: 14,
            lineHeight: 1.4,
            alignSelf: 'flex-start',
          }}>
            draft my yc application
          </div>
          <div style={{
            background: '#FF6B35',
            borderRadius: '17px 17px 5px 17px',
            padding: '10px 14px',
            fontSize: 14,
            lineHeight: 1.4,
            alignSelf: 'flex-end',
          }}>
            on it. pulling your research now.
          </div>
        </div>
      </GlassCard>

      {/* Card 3: OUTREACH — bottom left */}
      <GlassCard
        label="outreach"
        cardStyle={{ bottom: '18%', left: '3%', transform: 'rotate(-2deg)' }}
      >
        <p style={{ fontSize: 14, lineHeight: 1.5, margin: '0 0 12px' }}>
          3 founder messages ready to send.
        </p>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{
            background: '#FF6B35',
            border: 'none',
            borderRadius: 10,
            padding: '7px 17px',
            color: '#ffffff',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}>
            confirm
          </button>
          <button style={{
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: 10,
            padding: '7px 17px',
            color: '#ffffff',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}>
            edit
          </button>
        </div>
      </GlassCard>

      {/* Card 4: THIS WEEK — bottom right */}
      <GlassCard
        label="this week"
        cardStyle={{ bottom: '15%', right: '3%', transform: 'rotate(4deg)' }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <div style={{
            width: 22,
            height: 22,
            borderRadius: '50%',
            border: '2px solid rgba(255,255,255,0.5)',
            flexShrink: 0,
            marginTop: 2,
          }} />
          <p style={{ fontSize: 14, lineHeight: 1.5, margin: 0 }}>
            → post in r/startups — question format. est. 15 min.
          </p>
        </div>
      </GlassCard>
    </section>
  )
}
