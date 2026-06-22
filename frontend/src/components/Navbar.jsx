export default function Navbar({ mode, navItems, switchLabel, onToggleMode }) {
  const handleNavClick = (event, href) => {
    const target = document.querySelector(href)
    if (!target) return

    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Kembali ke atas">
        AF
      </a>
      <nav aria-label="Navigasi utama">
        {navItems.map(([label, href]) => (
          <a key={href} href={href} onClick={(event) => handleNavClick(event, href)}>
            {label}
          </a>
        ))}
      </nav>
      <button className="mode-toggle" type="button" onClick={onToggleMode} aria-label={switchLabel}>
        <span className="mode-option" data-active={mode === 'professional'}>Profesional</span>
        <span className="mode-switch-track" aria-hidden="true">
          <span
            className="mode-switch-knob"
            data-position={mode === 'professional' ? 'left' : 'right'}
            data-testid="mode-switch-knob"
          />
        </span>
        <span className="mode-option" data-active={mode === 'casual'}>Casual</span>
      </button>
    </header>
  )
}
