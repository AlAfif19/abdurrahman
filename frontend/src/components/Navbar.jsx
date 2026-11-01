import { useEffect, useState } from 'react'

export default function Navbar({ mode, navItems, switchLabel, onToggleMode }) {
  const [activeHref, setActiveHref] = useState('#top')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Scroll-spy sederhana: section yang melewati garis tengah layar menjadi aktif.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined

    const targets = navItems
      .map(([, href]) => document.querySelector(href))
      .filter(Boolean)
    if (targets.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveHref(`#${visible.target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [navItems])

  // Setelah melewati hero, background header mengikuti --bg.
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  // Menu overlay (layar kecil): kunci scroll dan tutup dengan Escape.
  useEffect(() => {
    if (!menuOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const handleNavClick = (event, href) => {
    setMenuOpen(false)

    const target = document.querySelector(href)
    if (!target) return

    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <a className="brand" href="#top" aria-label="Kembali ke atas">
        AF
      </a>
      <nav
        id="site-nav"
        className="site-nav"
        data-open={menuOpen}
        aria-label="Navigasi utama"
      >
        {navItems.map(([label, href]) => (
          <a
            key={href}
            href={href}
            data-active={activeHref === href}
            aria-current={activeHref === href ? 'location' : undefined}
            onClick={(event) => handleNavClick(event, href)}
          >
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
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
        aria-expanded={menuOpen}
        aria-controls="site-nav"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </header>
  )
}
