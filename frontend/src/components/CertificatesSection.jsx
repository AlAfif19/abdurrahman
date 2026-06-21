import { Download } from 'lucide-react'
import SectionShell from './SectionShell'

export default function CertificatesSection({ certificates }) {
  return (
    <SectionShell id="certificates" eyebrow="(04) Bukti perjalanan" title="Sertifikat">
      <div className="certificate-bento">
        {certificates.map((certificate) => (
          <article className="surface-card certificate-card" key={certificate.title}>
            {certificate.previewType === 'pdf' ? (
              <div className="certificate-image certificate-pdf">
                <iframe
                  src={`${certificate.href}#page=1&view=FitH&toolbar=0`}
                  title={`Pratinjau sertifikat ${certificate.title}`}
                  loading="lazy"
                />
              </div>
            ) : certificate.image ? <div className="certificate-image">
              <img src={certificate.image} alt={`Sertifikat ${certificate.title}`} loading="lazy" />
            </div> : <div className="certificate-placeholder" aria-hidden="true">
              <span>Sertifikat</span>
              <strong>{certificate.title}</strong>
            </div>}
            <p className="eyebrow">{certificate.meta}</p>
            <h3>{certificate.title}</h3>
            {certificate.href ? <a className="certificate-download" href={certificate.href} download>
              Unduh Sertifikat <Download size={17} aria-hidden="true" />
            </a> : <span className="certificate-note">Tercantum pada CV</span>}
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
