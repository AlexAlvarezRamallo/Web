import { useRef, useState } from 'react'
import logo from '../assets/Logo.png'
import './Header.css'

const links = [
  { href: '/#inicio', label: 'Inicio' },
  { href: '/poteras', label: 'Poteras' },
  { href: '/#sobre-nosotros', label: 'Sobre nosotros' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }}>
      <a className="site-header__skip" href="#contenido">Saltar al contenido</a>
      <a className="site-header__brand" href="/#inicio" aria-label="Kraken, inicio" onClick={() => setMenuOpen(false)}>
        <img className="site-header__logo" src={logo} alt="Kraken · Poteras artesanas de Galicia" />
      </a>
      <button
        ref={toggleRef}
        className="site-header__toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="navegacion-principal"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? 'Cerrar' : 'Menú'}
        <span aria-hidden="true">{menuOpen ? ' ×' : ' ☰'}</span>
      </button>
      <nav id="navegacion-principal" className={`site-header__nav${menuOpen ? ' site-header__nav--open' : ''}`} aria-label="Navegación principal">
        <ul className="site-header__links">
          {links.map(({ href, label }) => (
            <li key={href}><a href={href} onClick={() => setMenuOpen(false)}>{label}</a></li>
          ))}
        </ul>
        <a className="site-header__cta" href="/poteras" onClick={() => setMenuOpen(false)}>Ver poteras <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  )
}
