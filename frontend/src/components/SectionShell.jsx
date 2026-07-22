import { motion } from 'motion/react'

export default function SectionShell({ id, eyebrow, title, children }) {
  return (
    <motion.section
      id={id}
      className="section-shell"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      <motion.div
        className="section-heading"
        variants={{
          hidden: { opacity: 0, y: 18, filter: 'blur(5px)' },
          visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
        }}
        transition={{ duration: 0.36, ease: 'easeOut' }}
      >
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
      </motion.div>
      <motion.div
        className="section-content"
        variants={{
          hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
          visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
        }}
        transition={{ duration: 0.42, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </motion.section>
  )
}
