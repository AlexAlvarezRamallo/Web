import { useEffect, useRef } from 'react'
import './DemoWelcome.css'

// Nombre con el que guardamos que el visitante ya ha cerrado el aviso.
// sessionStorage conserva este dato al navegar o recargar en la misma pestaña.
const SESSION_KEY = 'kraken-demo-welcome-dismissed'

// Componente que presenta la web como un proyecto de demostración.
export default function DemoWelcome() {
  // Permite acceder al elemento HTML <dialog> para abrirlo y cerrarlo.
  const dialogRef = useRef<HTMLDialogElement>(null)

  // Se ejecuta al montar el componente. El array vacío evita repetirlo
  // en cada renderizado; React puede comprobar su limpieza en desarrollo.
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    try {
      // Si ya se cerró durante esta sesión, no volvemos a mostrarlo.
      if (sessionStorage.getItem(SESSION_KEY) === 'true') return
    } catch {
      // Si el navegador bloquea el almacenamiento, mostramos el aviso igualmente.
    }

    // showModal bloquea la interacción con el contenido de detrás y mantiene
    // el foco dentro del diálogo. También impedimos desplazar la página de fondo.
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'

    // Limpieza al desmontar: cerramos el diálogo y restauramos el desplazamiento.
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
    }
  }, [])

  // Se utiliza tanto al pulsar el botón como al presionar Escape.
  const dismiss = () => {
    try {
      sessionStorage.setItem(SESSION_KEY, 'true')
    } catch {
      // Aunque no se pueda guardar el dato, permitimos entrar en la web.
    }
    dialogRef.current?.close()
    // Tras cerrar, el teclado pasa al contenido principal sin mover la página.
    document.getElementById('contenido')?.focus({ preventScroll: true })
  }

  return (
    // Los atributos aria relacionan el diálogo con su título y descripción
    // para que los lectores de pantalla puedan anunciar el aviso.
    <dialog
      ref={dialogRef}
      className="demo-welcome"
      aria-labelledby="demo-welcome-title"
      aria-describedby="demo-welcome-description"
      onCancel={(event) => {
        // Escape pasa por nuestra función para guardar también que se cerró.
        event.preventDefault()
        dismiss()
      }}
      // Al cerrar el aviso, la página vuelve a poder desplazarse.
      onClose={() => { document.body.style.overflow = '' }}
    >
      <span className="demo-welcome__label">PROYECTO DE PORTFOLIO</span>
      <h2 id="demo-welcome-title">Una muestra de lo que puedo crear para tu negocio.</h2>
      <p id="demo-welcome-description">
        Kraken es una web de demostración de mi portfolio como desarrollador web.
        No es una tienda real y no admite pedidos.
      </p>
      {/* El botón recibe el foco inicial; la flecha es solo decorativa. */}
      <button className="demo-welcome__button" type="button" onClick={dismiss} autoFocus>
        Explorar la demostración <span aria-hidden="true">→</span>
      </button>
      <p className="demo-welcome__note">
        Un proyecto para mostrar mi trabajo y conectar con clientes y equipos que buscan un desarrollador web.
      </p>
    </dialog>
  )
}
