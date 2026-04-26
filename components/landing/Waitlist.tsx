'use client'

import { useState, useEffect, useRef } from 'react'
import { supabase } from '@/lib/supabase'

type Phase = 'idle' | 'forward' | 'done' | 'reversing'

export default function Waitlist() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const phaseRef = useRef<Phase>('idle')
  const rafRef = useRef<number | null>(null)
  const ivRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const lastScrollY = useRef(0)
  const typedRef = useRef('')

  const [heroOpacity, setHeroOpacity] = useState(1)
  const [wordmarkOpacity, setWordmarkOpacity] = useState(0)
  const [formVisible, setFormVisible] = useState(false)
  const [typed, setTyped] = useState('')
  const [showCursor, setShowCursor] = useState(false)
  const [placeholder, setPlaceholder] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [successTyped, setSuccessTyped] = useState('')

  useEffect(() => {
    if (!submitted) return
    const message = "you're in. we'll be in touch."
    let i = 0
    const iv = setInterval(() => {
      i++
      setSuccessTyped(message.slice(0, i))
      if (i === message.length) clearInterval(iv)
    }, 55)
  }, [submitted])

  async function handleSubmit() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('please enter a valid email')
      return
    }
    if (!supabase) { setDone(true); return }
    const { error: sbError } = await supabase
      .from('waitlist')
      .insert([{ email }])
    if (sbError) {
      if (sbError.code === '23505') {
        setError("you're already on the list!")
      } else {
        setError('something went wrong, try again')
      }
      return
    }
    setSubmitted(true)
    setError('')
  }

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const cancelInFlight = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
      if (ivRef.current !== null) {
        clearInterval(ivRef.current)
        ivRef.current = null
      }
    }

    const animateHero = (from: number, to: number, duration: number, cb?: () => void) => {
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1)
        const val = from + (to - from) * t
        setHeroOpacity(val)
        if (t < 1) {
          rafRef.current = requestAnimationFrame(tick)
        } else {
          rafRef.current = null
          cb?.()
        }
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    const startForward = () => {
      if (phaseRef.current !== 'idle') return
      phaseRef.current = 'forward'

      setTimeout(() => {
        if (phaseRef.current !== 'forward') return

        animateHero(1, 0, 1000, () => {
          if (phaseRef.current !== 'forward') return
          setWordmarkOpacity(1)

          const word = 'tethr'
          let i = 0
          ivRef.current = setInterval(() => {
            if (phaseRef.current !== 'forward') {
              clearInterval(ivRef.current!)
              ivRef.current = null
              return
            }
            i++
            const slice = word.slice(0, i)
            setTyped(slice)
            typedRef.current = slice
            if (i === word.length) {
              clearInterval(ivRef.current!)
              ivRef.current = null
              setShowCursor(true)
              setTimeout(() => {
                if (phaseRef.current === 'forward') {
                  phaseRef.current = 'done'
                  setFormVisible(true)
                }
              }, 400)
            }
          }, 160)
        })
      }, 1500)
    }

    const startReverse = () => {
      if (phaseRef.current === 'idle') return
      const prevPhase = phaseRef.current
      phaseRef.current = 'reversing'
      cancelInFlight()
      setFormVisible(false)

      const currentTyped = typedRef.current
      if (prevPhase === 'done' || currentTyped.length > 0) {
        let i = currentTyped.length
        ivRef.current = setInterval(() => {
          if (phaseRef.current !== 'reversing') {
            clearInterval(ivRef.current!)
            ivRef.current = null
            return
          }
          i--
          const slice = currentTyped.slice(0, i)
          setTyped(slice)
          typedRef.current = slice
          if (i <= 0) {
            clearInterval(ivRef.current!)
            ivRef.current = null
            setShowCursor(false)
            setWordmarkOpacity(0)
            animateHero(0, 1, 800, () => {
              if (phaseRef.current === 'reversing') {
                phaseRef.current = 'idle'
              }
            })
          }
        }, 80)
      } else {
        setShowCursor(false)
        setWordmarkOpacity(0)
        animateHero(0, 1, 800, () => {
          if (phaseRef.current === 'reversing') {
            phaseRef.current = 'idle'
          }
        })
      }
    }

    const handleScroll = () => {
      const currentY = window.scrollY
      const scrollingDown = currentY > lastScrollY.current
      lastScrollY.current = currentY

      if (!section) return
      const rect = section.getBoundingClientRect()
      const inView = rect.top < window.innerHeight && rect.bottom > 0

      if (inView && scrollingDown && phaseRef.current === 'idle') {
        startForward()
      } else if (!inView && !scrollingDown && phaseRef.current !== 'idle') {
        startReverse()
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    lastScrollY.current = window.scrollY

    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelInFlight()
    }
  }, [])

  useEffect(() => {
    const phrases = [
      'enter your email to get early access',
      'your@email.com',
      'be first to know when we launch',
      'drop your email. no spam, ever',
    ]
    let phraseIndex = 0
    let charIndex = 0
    let direction: 'typing' | 'deleting' = 'typing'
    let timerId: ReturnType<typeof setTimeout> | null = null

    const tick = () => {
      const phrase = phrases[phraseIndex]

      if (direction === 'typing') {
        charIndex++
        setPlaceholder(phrase.slice(0, charIndex))
        if (charIndex === phrase.length) {
          direction = 'deleting'
          timerId = setTimeout(tick, 1800)
        } else {
          timerId = setTimeout(tick, 55)
        }
      } else {
        charIndex--
        setPlaceholder(phrase.slice(0, charIndex))
        if (charIndex === 0) {
          direction = 'typing'
          phraseIndex = (phraseIndex + 1) % phrases.length
          timerId = setTimeout(tick, 400)
        } else {
          timerId = setTimeout(tick, 30)
        }
      }
    }

    timerId = setTimeout(tick, 55)
    return () => { if (timerId !== null) clearTimeout(timerId) }
  }, [])

  return (
    <div id="waitlist" ref={sectionRef} style={{ height: '100vh', position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>

        {/* LAYER 1: BIG HERO — fades out */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          width: '100%',
          padding: '0 60px',
          opacity: heroOpacity,
          pointerEvents: heroOpacity < 0.05 ? 'none' : 'auto',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-inter), Inter, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(52px, 8vw, 96px)',
            color: '#ffffff',
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            margin: 0,
          }}>
            The best founders<br />didn&apos;t figure it<br />out alone.
          </h2>
        </div>

        {/* LAYER 2: WORDMARK + FORM — fades in at same position */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          width: '100%',
          padding: '0 60px',
          opacity: wordmarkOpacity,
          transition: 'opacity 0.3s ease',
          pointerEvents: wordmarkOpacity < 0.05 ? 'none' : 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '48px',
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
            <span className="wl-wordmark">{typed}</span>
            {showCursor && <span className="wl-cursor">_</span>}
          </div>
          <div className="wl-form-wrap" style={{ opacity: formVisible ? 1 : 0, transition: 'opacity 0.8s ease' }}>
            {submitted ? (
              <p style={{
                color: '#ffffff',
                fontSize: '18px',
                fontWeight: 500,
                letterSpacing: '-0.01em',
              }}>
                {successTyped}
                <span style={{
                  opacity: successTyped.length < 29 ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                }}>|</span>
              </p>
            ) : (
              <>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'stretch',
                  gap: '8px',
                }}>
                  <input
                    style={{
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      fontSize: '14px',
                      color: '#ffffff',
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '100px',
                      padding: '0 24px',
                      width: '340px',
                      outline: 'none',
                      height: 'auto',
                    }}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleSubmit() }}
                    placeholder={placeholder}
                  />
                  <button
                    type="button"
                    onClick={handleSubmit}
                    style={{
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '14px',
                      color: '#ffffff',
                      background: 'rgba(255,107,53,0.75)',
                      backdropFilter: 'blur(20px) saturate(180%) brightness(1.1)',
                      WebkitBackdropFilter: 'blur(20px) saturate(180%) brightness(1.1)',
                      border: '1px solid rgba(255,140,80,0.6)',
                      borderTop: '1px solid rgba(255,180,120,0.8)',
                      boxShadow: 'inset 0 1px 0 rgba(255,200,150,0.4), 0 4px 20px rgba(255,107,53,0.3)',
                      borderRadius: '100px',
                      padding: '14px 28px',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    join waitlist
                  </button>
                </div>
                {error && (
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginTop: '8px', textAlign: 'center' }}>
                    {error}
                  </p>
                )}
              </>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
