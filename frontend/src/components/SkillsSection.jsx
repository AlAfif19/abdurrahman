import SectionShell from './SectionShell'

const labels = {
  tech: 'Tech Stack',
  ai: 'AI Stack',
  soft: 'Soft Skills',
}

export default function SkillsSection({ skills }) {
  return (
    <SectionShell id="skills" eyebrow="Capabilities" title="Skills">
      <div className="skill-grid">
        {Object.entries(skills).map(([group, items]) => (
          <article className="surface-card" key={group}>
            <h3>{labels[group]}</h3>
            <div className="badge-list">
              {items.map((item) => (
                <span className="badge" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
