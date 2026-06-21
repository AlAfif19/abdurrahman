import { ExternalLink, Github } from 'lucide-react'
import SectionShell from './SectionShell'

export default function ProjectsSection({ projects }) {
  return (
    <SectionShell id="projects" eyebrow="(02) Project terpilih" title="Project IT">
      <div className="project-bento">
        {projects.map((project) => {
          const content = (
            <>
            {project.image ? <div className="project-thumb">
              <img src={project.image} alt={project.imageAlt} loading="lazy" />
            </div> : null}
            <div className="project-card-topline">
              <Github size={18} aria-hidden="true" />
              <span>{project.github ? 'GitHub' : 'Studi QA'}</span>
              {project.github ? <ExternalLink size={16} aria-hidden="true" /> : null}
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
            </>
          )

          return project.github ? (
            <a
              className="surface-card project-card project-card-link bento-card"
              data-featured={project.featured}
              href={project.github}
              key={project.title}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} di GitHub`}
            >
              {content}
            </a>
          ) : (
            <article className="surface-card project-card bento-card" key={project.title}>
              {content}
            </article>
          )
        })}
      </div>
    </SectionShell>
  )
}
