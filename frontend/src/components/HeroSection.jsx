import { ArrowRight, Download } from 'lucide-react'
import { motion } from 'motion/react'
import casualPortrait from '../assets/casual-portrait.jpeg'
import professionalPortrait from '../assets/professional-portrait.jpeg'

export default function HeroSection({ profile, copy, mode }) {
  const portrait =
    mode === 'professional'
      ? {
          src: professionalPortrait,
          alt: `${profile.name} potret profesional`,
        }
      : {
          src: casualPortrait,
          alt: `${profile.name} potret casual`,
        }

  return (
    <section id="top" className="hero-section">
      <motion.div
        className="hero-background"
        data-testid="hero-background"
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <img src={portrait.src} alt={portrait.alt} />
      </motion.div>
      <motion.div
        className="hero-copy"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.p
          className="eyebrow"
          variants={{
            hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
        >
          {copy.role}
        </motion.p>
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
        >
          {profile.name}
        </motion.h1>
        <motion.p
          className="hero-summary"
          variants={{
            hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
        >
          {copy.summary}
        </motion.p>
        <div className="hero-actions">
          <a className="primary-action" href={profile.cvHref} download>
            {copy.primaryLabel} <Download size={18} aria-hidden="true" />
          </a>
          <a className="secondary-action" href={mode === 'professional' ? '#projects' : '#gallery'}>
            {copy.secondaryLabel} <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
