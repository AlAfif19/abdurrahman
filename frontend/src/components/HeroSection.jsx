import { ArrowRight, Send } from 'lucide-react'
import { motion } from 'motion/react'
import profileImage from '../assets/profile.jpeg'

export default function HeroSection({ profile, copy }) {
  return (
    <section id="top" className="hero-section">
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
          <a className="primary-action" href="#projects">
            View Projects <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="secondary-action" href="#contact">
            Contact <Send size={18} aria-hidden="true" />
          </a>
        </div>
      </motion.div>
      <motion.div
        className="portrait-frame"
        initial={{ opacity: 0, scale: 0.96, filter: 'blur(6px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <img src={profileImage} alt={`${profile.name} portrait`} />
      </motion.div>
    </section>
  )
}
