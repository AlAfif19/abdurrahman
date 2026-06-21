import { BriefcaseBusiness, Sparkles } from 'lucide-react'

const navItems = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Gallery', '#gallery'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
]

export default function Navbar({ mode, switchLabel, onToggleMode }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Go to top">
        A3
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <button className="mode-toggle" type="button" onClick={onToggleMode} aria-label={switchLabel}>
        {mode === 'professional' ? <BriefcaseBusiness size={16} /> : <Sparkles size={16} />}
        <span>{mode === 'professional' ? 'Professional' : 'Casual'}</span>
      </button>
    </header>
  )
}
