import SectionShell from './SectionShell'

export default function ProjectsSection({ projects }) {
  return (
    <SectionShell id="projects" eyebrow="Selected work" title="Projects">
      <div className="card-grid">
        {projects.map((project) => (
          <article className="surface-card project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="badge-list">
              {project.tags.map((tag) => (
                <span className="badge" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
