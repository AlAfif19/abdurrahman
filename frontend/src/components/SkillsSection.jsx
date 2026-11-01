import SectionShell from './SectionShell'

const labels = {
  tech: 'Tech Stack',
  ai: 'AI dan Data',
  tools: 'Tools dan Workflow',
  soft: 'Soft Skill',
  languages: 'Bahasa',
}

export default function SkillsSection({ skills }) {
  return (
    <SectionShell id="skills" eyebrow="(01) Kemampuan teknis" title="Tech Stack">
      <div className="skill-grid">
        {Object.entries(skills).map(([group, items]) => (
          <article className="skill-row" key={group}>
            <h3>{labels[group] ?? group}</h3>
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
