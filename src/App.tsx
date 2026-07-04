import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MarqueeStrip } from './components/MarqueeStrip'
import { ValueStrip } from './components/ValueStrip'
import { Services } from './components/Services'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { useTheme } from './hooks/useTheme'

function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header isDark={isDark} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <MarqueeStrip />
        <ValueStrip />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
