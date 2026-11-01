import { ArrowUpRight, Download, Github, Mail } from 'lucide-react'

export default function Footer({ profile, mode, onToggleMode }) {
  const nextMode = mode === 'professional' ? 'casual' : 'profesional'

  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <p className="eyebrow">Siap untuk kesempatan berikutnya</p>
        <h2>Mari membuat sesuatu yang berdampak.</h2>
        <a className="primary-action" href={profile.cvHref} download>
          Unduh CV <Download size={18} aria-hidden="true" />
        </a>
      </div>
      <div className="footer-grid">
        <div>
          <strong>{profile.name}</strong>
          <p>{mode === 'professional' ? 'Portfolio profesional bidang IT.' : 'Cerita organisasi dan kepemimpinan.'}</p>
        </div>
        <div className="footer-links">
          <a href={`mailto:${profile.email}`}><Mail size={17} aria-hidden="true" /> Email</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17} aria-hidden="true" /> GitHub</a>
        </div>
        <button
          className="footer-mode"
          type="button"
          onClick={onToggleMode}
          aria-label={`Lihat mode ${nextMode}`}
        >
          Lihat mode {nextMode} <ArrowUpRight size={17} aria-hidden="true" />
        </button>
      </div>
      <p className="footer-note">Dirancang untuk memperlihatkan kemampuan, pengalaman, dan karakter Al Afif Abdurrahman.</p>
    </footer>
  )
}
