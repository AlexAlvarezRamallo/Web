import portada from '../assets/portada.png'
import '../styles/HomePage.css'

function HomePage() {
  return (
    <main>
      <section
        className="portada"
        style={{ backgroundImage: `url(${portada})` }}
      >
        <h1>Kraken</h1>
        <h2>Poteras artesanas</h2>
        <p>Poteras hechas a mano, inspiradas en el Atlántico.</p>
      </section>

      <section className="coleccion">
        <h2>Nuestra colección</h2>
        <p>Descubre nuestras poteras artesanas.</p>
      </section>
    </main>
  )
}

export default HomePage
