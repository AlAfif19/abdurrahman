import SectionShell from './SectionShell'

export default function AboutSection({ profile, copy, about }) {
  return (
    <SectionShell id="about" eyebrow={`${profile.location} / ${copy.role}`} title="Profil">
      <p className="lead-text">{about}</p>
    </SectionShell>
  )
}
