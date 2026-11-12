import { useRef, useState } from 'react'
import logo from '../assets/Logo.png'
import './Header.css'

const links = [
  { href: '/#inicio', label: 'Inicio' },
  { href: '/poteras', label: 'Poteras' },
  { href: '/SobreNosotros', label: 'Sobre nosotros' },
  { href: '/preguntas-frecuentes', label: 'Preguntas frecuentes' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDialogElement>(null)
  const [panel, setPanel] = useState<'cuenta' | 'carrito'>('cuenta')

  const openPanel = (nextPanel: 'cuenta' | 'carrito') => {
    setPanel(nextPanel)
    panelRef.current?.showModal()
  }

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
        <div className="site-header__actions">
          <button type="button" className="site-header__action" onClick={() => openPanel('cuenta')}>Mi cuenta</button>
          <button type="button" className="site-header__action" onClick={() => openPanel('carrito')}>Carrito (0)</button>
        </div>
      </nav>
      <dialog ref={panelRef} className="shop-preview" aria-labelledby="shop-preview-title">
        <p className="shop-preview__label">Web de demostración</p>
        <h2 id="shop-preview-title">{panel === 'cuenta' ? 'Tu cuenta en Kraken' : 'Tu carrito está vacío'}</h2>
        {panel === 'cuenta' ? (
          <p>En una tienda real podrías iniciar sesión o crear un perfil para consultar tus pedidos. También podrías comprar como invitado, sin crear una cuenta. Esta demostración no registra usuarios ni admite compras.</p>
        ) : (
          <p>Este es un ejemplo del acceso al carrito. Todavía no se pueden añadir artículos y esta web no admite pedidos ni pagos.</p>
        )}
        <form method="dialog">
          <button className="site-header__action" type="submit">Seguir explorando</button>
        </form>
      </dialog>
    </header>
  )
}
