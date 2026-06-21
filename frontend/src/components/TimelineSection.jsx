import SectionShell from './SectionShell'

export default function TimelineSection({ id, title, eyebrow, items }) {
  return (
    <SectionShell id={id} eyebrow={eyebrow} title={title}>
      <div className="timeline-list">
        {items.map((item) => (
          <article className="timeline-item" key={`${title}-${item.title}`}>
            <p className="eyebrow">{item.meta}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
