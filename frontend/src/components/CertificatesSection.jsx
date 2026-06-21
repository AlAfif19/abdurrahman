import SectionShell from './SectionShell'

export default function CertificatesSection({ certificates }) {
  return (
    <SectionShell id="certificates" eyebrow="Proof of learning" title="Certificates">
      <div className="certificate-list">
        {certificates.map((certificate) => (
          <article className="surface-card compact-card" key={certificate}>
            <h3>{certificate}</h3>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
