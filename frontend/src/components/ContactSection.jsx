import { Github, Linkedin, Mail } from 'lucide-react'
import SectionShell from './SectionShell'

const icons = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github,
}

export default function ContactSection({ contacts }) {
  return (
    <SectionShell id="contact" eyebrow="Let us connect" title="Contact">
      <div className="contact-list">
        {contacts.map((contact) => {
          const Icon = icons[contact.label]
          return (
            <a className="contact-link" href={contact.href} key={contact.label}>
              {Icon ? <Icon size={18} aria-hidden="true" /> : null}
              {contact.label}
            </a>
          )
        })}
      </div>
    </SectionShell>
  )
}
