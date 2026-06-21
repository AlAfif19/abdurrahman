import { BriefcaseBusiness, Sparkles } from 'lucide-react'

export default function Navbar({ mode, navItems, switchLabel, switchText, onToggleMode }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Kembali ke atas">
        A3
      </a>
      <nav aria-label="Navigasi utama">
        {navItems.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <button className="mode-toggle" type="button" onClick={onToggleMode} aria-label={switchLabel}>
        {mode === 'professional' ? <BriefcaseBusiness size={16} /> : <Sparkles size={16} />}
        <span>{switchText}</span>
      </button>
    </header>
  )
}
