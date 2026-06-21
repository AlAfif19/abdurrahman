import { ExternalLink, Github } from 'lucide-react'
import SectionShell from './SectionShell'

export default function ProjectsSection({ projects }) {
  return (
    <SectionShell id="projects" eyebrow="Selected work" title="Projects">
      <div className="card-grid">
        {projects.map((project) => (
          <a
            className="surface-card project-card project-card-link"
            href={project.github}
            key={project.title}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} on GitHub`}
          >
            <div className="project-card-topline">
              <Github size={18} aria-hidden="true" />
              <span>GitHub</span>
              <ExternalLink size={16} aria-hidden="true" />
            </div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="badge-list">
              {project.tags.map((tag) => (
                <span className="badge" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </SectionShell>
  )
}
