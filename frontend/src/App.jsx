import { useState } from 'react'
import { portfolio } from './data/portfolio'
import AboutSection from './components/AboutSection'
import CertificatesSection from './components/CertificatesSection'
import ContactSection from './components/ContactSection'
import Floating3DAssets from './components/Floating3DAssets'
import GallerySection from './components/GallerySection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import TimelineSection from './components/TimelineSection'

export default function App() {
  const [mode, setMode] = useState('professional')
  const copy = portfolio.modeCopy[mode]
  const nextMode = mode === 'professional' ? 'casual' : 'professional'

  return (
    <div className="app-shell" data-mode={mode} data-testid="portfolio-app">
      <Floating3DAssets />
      <Navbar mode={mode} switchLabel={copy.switchLabel} onToggleMode={() => setMode(nextMode)} />
      <main>
        <HeroSection profile={portfolio.profile} copy={copy} mode={mode} />
        <AboutSection profile={portfolio.profile} copy={copy} />
        <section className="highlight-strip" aria-label="Profile highlights">
          {portfolio.highlights.map((highlight) => (
            <article className="highlight-card" key={highlight.value}>
              <strong>{highlight.value}</strong>
              <span>{highlight.label}</span>
            </article>
          ))}
        </section>
        <SkillsSection skills={portfolio.skills} />
        <ProjectsSection projects={portfolio.projects} />
        <GallerySection />
        <TimelineSection
          id="experience"
          eyebrow="Practice"
          title="Experience"
          items={portfolio.experience}
        />
        <TimelineSection
          id="organization"
          eyebrow="Beyond code"
          title="Organization"
          items={portfolio.organizations}
        />
        <CertificatesSection certificates={portfolio.certificates} />
        <ContactSection contacts={portfolio.contacts} />
      </main>
    </div>
  )
}
