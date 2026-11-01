import { ArrowUpRight } from 'lucide-react'
import SectionShell from './SectionShell'

export default function ContactSection({ contacts }) {
  return (
    <SectionShell id="contact" eyebrow="(05) Mari terhubung" title="Kontak">
      <div className="contact-list">
        {contacts.map((contact) => {
          const opensNewTab = contact.href.startsWith('https://')

          return (
            <a
              className="contact-link"
              href={contact.href}
              key={contact.label}
              target={opensNewTab ? '_blank' : undefined}
              rel={opensNewTab ? 'noopener noreferrer' : undefined}
            >
              {contact.label}
              <ArrowUpRight size={32} strokeWidth={1.25} aria-hidden="true" />
            </a>
          )
        })}
      </div>
    </SectionShell>
  )
}
