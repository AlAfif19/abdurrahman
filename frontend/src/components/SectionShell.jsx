export default function SectionShell({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section-shell">
      <div className="section-heading">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  )
}
