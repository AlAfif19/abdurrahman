import { ArrowRight, Download, Mouse } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import casualCutout from '../assets/hero-casual-cutout.png'
import professionalCutout from '../assets/hero-professional-cutout.png'

const ease = [0.2, 0.8, 0.2, 1]

function Asterisk({ side }) {
  return (
    <svg
      className="hero-asterisk"
      data-side={side}
      viewBox="-30 -30 60 60"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="currentColor">
        {[0, 45, 90, 135].map((angle) => (
          <rect key={angle} x="-5" y="-28" width="10" height="56" rx="1" transform={`rotate(${angle})`} />
        ))}
      </g>
    </svg>
  )
}

export default function HeroSection({ profile, copy, mode }) {
  const reduceMotion = useReducedMotion()
  const photo =
    mode === 'professional'
      ? { src: professionalCutout, alt: `${profile.name} potret profesional` }
      : { src: casualCutout, alt: `${profile.name} potret casual` }

  // fade + translateY kecil; dimatikan bila pengguna meminta gerak dikurangi
  const rise = (delay) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease },
  })

  return (
    <section id="top" className="hero-section" data-mode={mode}>
      {/* 1. Foto (paling bawah di urutan lukis) */}
      <div className="hero-photo" data-testid="hero-photo">
        <motion.div
          className="hero-photo-clip"
          initial={reduceMotion ? false : { clipPath: 'inset(100% 0% 0% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ duration: 0.9, delay: 0.25, ease }}
        >
          <AnimatePresence initial={false}>
            <motion.img
              key={mode}
              src={photo.src}
              alt={photo.alt}
              decoding="async"
              fetchPriority="high"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.25 }}
            />
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 2. Ornamen dekoratif */}
      <svg
        className="hero-orbit"
        viewBox="0 0 760 400"
        aria-hidden="true"
        focusable="false"
      >
        <g className="hero-orbit-body">
          <ellipse
            className="hero-orbit-ellipse"
            cx="380"
            cy="200"
            rx="365"
            ry="160"
            transform="rotate(-21 380 200)"
          />
          <circle className="hero-orbit-dot" cx="40" cy="331" r="9" />
          <path
            className="hero-orbit-star"
            transform="translate(612 62)"
            d="M0 -24 Q3 -3 24 0 Q3 3 0 24 Q-3 3 -24 0 Q-3 -3 0 -24 Z"
          />
        </g>
      </svg>
      <Asterisk side="left" />
      <Asterisk side="right" />

      <motion.p className="eyebrow hero-eyebrow" {...rise(0.35)}>
        {copy.role}
      </motion.p>

      {/* 3. Nama — mix-blend-mode: difference, tanpa stacking context pada pembungkusnya */}
      <div className="hero-name-wrap">
        <svg
          className="hero-swash"
          viewBox="0 0 160 100"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M37 0 C14 18 20 52 52 66 C74 76 100 74 124 60" />
        </svg>
        <h1 className="hero-name">
          <motion.span className="hero-name-line" {...rise(0.1)}>
            Al Afif
          </motion.span>{' '}
          <motion.span className="hero-name-line hero-name-accent" {...rise(0.18)}>
            Abdurrahman
          </motion.span>
        </h1>
      </div>

      <motion.p className="hero-summary" {...rise(0.45)}>
        {copy.summary}
      </motion.p>

      <motion.div className="hero-actions" {...rise(0.55)}>
        <a className="primary-action" href={profile.cvHref} download>
          {copy.primaryLabel} <Download size={20} aria-hidden="true" />
        </a>
        <a className="secondary-action" href={mode === 'professional' ? '#projects' : '#gallery'}>
          {copy.secondaryLabel} <ArrowRight size={20} aria-hidden="true" />
        </a>
      </motion.div>

      <div className="hero-scroll-hint">
        <Mouse size={20} aria-hidden="true" />
        <span>Scroll untuk menjelajahi</span>
      </div>
    </section>
  )
}
