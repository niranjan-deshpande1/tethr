import '../components/landing/landing.css'
import GradientBackground from '../components/landing/GradientBackground'
import Nav from '../components/landing/Nav'
import Hero from '../components/landing/Hero'
import HowItWorks from '../components/landing/HowItWorks'
import Ecosystem from '../components/landing/Ecosystem'
import CtaSection from '../components/landing/CtaSection'
import Waitlist from '../components/landing/Waitlist'
import Footer from '../components/landing/Footer'

export default function LandingPage() {
  return (
    <div
      className="landing-root"
      style={{
        background: 'transparent',
        color: '#0f172a',
        overflowX: 'hidden',
        position: 'relative',
        minHeight: '100vh',
        scrollSnapType: 'y proximity',
      }}
    >
      <GradientBackground />
      <Nav />
      <Hero />
      <HowItWorks />
      <Ecosystem />
      <CtaSection />
      <div style={{ scrollSnapAlign: 'start', scrollSnapStop: 'normal' }}><Waitlist /></div>
      <Footer />
    </div>
  )
}
