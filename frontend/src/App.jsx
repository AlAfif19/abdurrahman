import { useState } from 'react'
import { portfolio } from './data/portfolio'
import AboutSection from './components/AboutSection'
import CertificatesSection from './components/CertificatesSection'
import ContactSection from './components/ContactSection'
import Floating3DAssets from './components/Floating3DAssets'
import Footer from './components/Footer'
import GallerySection from './components/GallerySection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import TimelineSection from './components/TimelineSection'

export default function App() {
  const [mode, setMode] = useState('professional')
  const copy = portfolio.modeCopy[mode]
  const content = portfolio.content[mode]
  const nextMode = mode === 'professional' ? 'casual' : 'professional'

  return (
    <div className="app-shell" data-mode={mode} data-testid="portfolio-app">
      <Floating3DAssets />
      <Navbar
        mode={mode}
        navItems={copy.nav}
        switchLabel={copy.switchLabel}
        switchText={copy.switchText}
        onToggleMode={() => setMode(nextMode)}
      />
      <main>
        <HeroSection profile={portfolio.profile} copy={copy} mode={mode} />
        <AboutSection profile={portfolio.profile} copy={copy} about={content.about} />
        <section className="highlight-strip" aria-label="Profile highlights">
          {content.highlights.map((highlight) => (
            <article className="highlight-card" key={highlight.value}>
              <strong>{highlight.value}</strong>
              <span>{highlight.label}</span>
            </article>
          ))}
        </section>
        {mode === 'professional' ? (
          <>
            <SkillsSection skills={content.skills} />
            <ProjectsSection projects={content.projects} />
            <TimelineSection
              id="experience"
              eyebrow="Praktik profesional"
              title="Pengalaman IT"
              items={content.experience}
            />
          </>
        ) : (
          <>
            <TimelineSection
              id="organization"
              eyebrow="Di luar teknis"
              title="Organisasi"
              items={content.organizations}
            />
            <GallerySection />
          </>
        )}
        <CertificatesSection certificates={content.certificates} />
        <ContactSection contacts={portfolio.contacts} />
      </main>
      <Footer
        profile={portfolio.profile}
        mode={mode}
        onToggleMode={() => setMode(nextMode)}
      />
    </div>
  )
}
