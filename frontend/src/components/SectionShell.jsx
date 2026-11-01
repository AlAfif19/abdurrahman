import { motion, useReducedMotion } from 'motion/react'

export default function SectionShell({ id, eyebrow, title, children }) {
  const reduceMotion = useReducedMotion()
  const offset = reduceMotion ? 0 : 24

  // fade + translateY kecil, tanpa filter/blur supaya tidak membuat stacking context
  // yang menimpa section lain; animasi hanya sekali (once) per section.
  const item = {
    hidden: { opacity: 0, y: offset },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.5, ease: [0.2, 0.8, 0.2, 1] },
    },
  }

  return (
    <motion.section
      id={id}
      className="section-shell"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } },
      }}
    >
      <motion.div className="section-heading" variants={item}>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
      </motion.div>
      <motion.div className="section-content" variants={item}>
        {children}
      </motion.div>
    </motion.section>
  )
}
