import SectionShell from './SectionShell'

export default function ContactSection({ contacts }) {
  return (
    <SectionShell id="contact" eyebrow="Let us connect" title="Contact">
      <div className="contact-list">
        {contacts.map((contact) => (
          <a className="contact-link" href={contact.href} key={contact.label}>
            {contact.label}
          </a>
        ))}
      </div>
    </SectionShell>
  )
}
