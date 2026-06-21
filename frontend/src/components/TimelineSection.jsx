import { Download } from 'lucide-react'
import SectionShell from './SectionShell'

export default function TimelineSection({ id, title, eyebrow, items }) {
  return (
    <SectionShell id={id} eyebrow={eyebrow} title={title}>
      <div className="timeline-list">
        {items.map((item) => (
          <article className="timeline-item" key={`${title}-${item.title}`}>
            {item.image ? (
              <div className="timeline-media">
                <img src={item.image} alt={item.imageAlt} loading="lazy" />
              </div>
            ) : null}
            <p className="eyebrow">{item.meta}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.actionHref ? (
              <a className="timeline-action" href={item.actionHref} download>
                {item.actionLabel} <Download size={17} aria-hidden="true" />
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
