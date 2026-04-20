import '../components/landing/landing.css'
import GradientBg from '../components/landing/GradientBg'
import Nav from '../components/landing/Nav'
import Hero from '../components/landing/Hero'
import HowItWorks from '../components/landing/HowItWorks'
import FeatureCards from '../components/landing/FeatureCards'
import Stats from '../components/landing/Stats'
import Quotes from '../components/landing/Quotes'
import GapReveal from '../components/landing/GapReveal'
import Waitlist from '../components/landing/Waitlist'
import Footer from '../components/landing/Footer'
import RevealObserver from '../components/landing/RevealObserver'

export default function LandingPage() {
  return (
    <div
      className="landing-root"
      style={{
        background: '#eef4ff',
        color: '#0f172a',
        overflowX: 'hidden',
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      <GradientBg />
      <Nav />
      <Hero />
      <HowItWorks />
      <FeatureCards />
      <Stats />
      <Quotes />
      <GapReveal />
      <Waitlist />
      <Footer />
      <RevealObserver />
    </div>
  )
}
