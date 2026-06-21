import SectionShell from './SectionShell'

export default function AboutSection({ profile, copy }) {
  return (
    <SectionShell id="about" eyebrow={profile.location} title="About">
      <p className="lead-text">{copy.summary}</p>
    </SectionShell>
  )
}
