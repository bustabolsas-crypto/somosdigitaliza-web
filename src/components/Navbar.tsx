import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: scrolled ? 12 : 0,
      left: scrolled ? 24 : 0,
      right: scrolled ? 24 : 0,
      zIndex: 50,
      background: scrolled ? '#ffffff' : '#0b1120',
      borderRadius: scrolled ? 16 : 0,
      boxShadow: scrolled ? '0 4px 24px rgba(15,23,42,0.10)' : '0 0 0 transparent',
      border: scrolled ? '1px solid rgba(15,23,42,0.08)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: scrolled ? '0 28px' : '0 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: scrolled ? 60 : 68 }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <img src="/logo.png" alt="Digitaliza"
            style={{ height: scrolled ? 24 : 28, width: 'auto', transition: 'height 0.4s ease' }}
            onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
          <span style={{ color: scrolled ? '#0f172a' : '#ffffff', fontWeight: 800, fontSize: scrolled ? 15 : 17, letterSpacing: '-0.03em', transition: 'color 0.4s ease, font-size 0.4s ease' }}>
            Digitaliza
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex" style={{ gap: 32, alignItems: 'center' }}>
          {['Nosotros', 'Servicios', 'Demo', 'Contacto'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="nav-link"
              style={{ color: scrolled ? '#64748b' : 'rgba(255,255,255,0.75)', fontSize: scrolled ? 13 : 14, fontWeight: 500, transition: 'color 0.2s, font-size 0.4s' }}
              onMouseEnter={e => (e.currentTarget.style.color = scrolled ? '#0f172a' : '#ffffff')}
              onMouseLeave={e => (e.currentTarget.style.color = scrolled ? '#64748b' : 'rgba(255,255,255,0.75)')}>
              {l}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="https://wa.me/5219992697401" target="_blank" rel="noreferrer"
            style={{ display: 'inline-block', background: '#2563eb', color: '#ffffff', borderRadius: 9999, padding: '10px 22px', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#1d4ed8')}
            onMouseLeave={e => (e.currentTarget.style.background = '#2563eb')}>
            Hablar ahora →
          </a>
          <button className="md:hidden" onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', color: scrolled ? '#0f172a' : '#ffffff', cursor: 'pointer', padding: 4 }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: scrolled ? '#ffffff' : '#0b1120', borderTop: '1px solid rgba(15,23,42,0.1)', padding: '12px 28px 20px' }}>
          {['Nosotros', 'Servicios', 'Demo', 'Contacto'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              style={{ display: 'block', color: scrolled ? '#0f172a' : '#ffffff', textDecoration: 'none', fontSize: 15, fontWeight: 500, padding: '12px 0', borderBottom: '1px solid rgba(15,23,42,0.07)' }}>
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
