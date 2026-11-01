import { useState } from 'react'
import { Download, FileText } from 'lucide-react'
import SectionShell from './SectionShell'

function CertificatePlaceholder({ title }) {
  return (
    <div className="certificate-placeholder" aria-hidden="true">
      <FileText size={40} strokeWidth={1.25} />
      <strong>{title}</strong>
    </div>
  )
}

function CertificateMedia({ certificate }) {
  const [imageFailed, setImageFailed] = useState(false)

  if (certificate.previewType === 'pdf') {
    return (
      <div className="certificate-image certificate-pdf">
        <iframe
          src={`${certificate.href}#page=1&view=FitH&toolbar=0`}
          title={`Pratinjau sertifikat ${certificate.title}`}
          loading="lazy"
        />
      </div>
    )
  }

  if (certificate.image && !imageFailed) {
    return (
      <div className="certificate-image">
        <img
          src={certificate.image}
          alt={`Sertifikat ${certificate.title}`}
          loading="lazy"
          decoding="async"
          onError={() => setImageFailed(true)}
        />
      </div>
    )
  }

  return <CertificatePlaceholder title={certificate.title} />
}

export default function CertificatesSection({ certificates }) {
  return (
    <SectionShell id="certificates" eyebrow="(04) Bukti perjalanan" title="Sertifikat">
      <div className="certificate-bento">
        {certificates.map((certificate) => (
          <article className="certificate-card" key={certificate.title}>
            <CertificateMedia certificate={certificate} />
            <p className="eyebrow">{certificate.meta}</p>
            <h3>{certificate.title}</h3>
            {certificate.href ? (
              <a className="certificate-download" href={certificate.href} download>
                Unduh Sertifikat <Download size={17} aria-hidden="true" />
              </a>
            ) : (
              <span className="certificate-note">Tercantum pada CV</span>
            )}
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
