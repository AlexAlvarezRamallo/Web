import '../styles/FaqPage.css'

const questions = [
  { title: '¿Puedo comprar en esta web?', answer: 'No. Kraken es un proyecto de portfolio que muestra cómo podría ser una tienda de poteras artesanas. No se tramitan pedidos ni pagos.' },
  { title: '¿Cómo serían los envíos?', answer: 'En una tienda real, al introducir el destino se mostrarían los métodos de envío disponibles y sus plazos antes de confirmar el pedido. Esta demostración no realiza envíos.' },
  { title: '¿Cuánto costarían los portes?', answer: 'El coste se indicaría en el carrito según el destino y el método de envío, antes del pago. En esta muestra no hay tarifas comerciales establecidas.' },
  { title: '¿Necesitaría crear una cuenta?', answer: 'Una tienda podría ofrecer la compra como invitado o con una cuenta para consultar el historial de pedidos. En esta demostración no se crean perfiles ni se recogen datos de compra.' },
]

export default function FaqPage() {
  return (
    <main id="contenido" className="faq-page" tabIndex={-1}>
      <h1>Preguntas frecuentes</h1>
      <p>Conoce cómo sería la experiencia de compra en Kraken.</p>
      <p className="faq-page__notice">Web de demostración: la información es ilustrativa. No admite pedidos.</p>
      <div className="faq-page__questions">
        {questions.map(({ title, answer }) => (
          <details key={title}>
            <summary>{title}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </main>
  )
}
