import portada from '../assets/portada.png'
import logo from '../assets/Logo.png'
import rallas from '../assets/rallas.png'
import naranja from '../assets/naranja.png'
import azul from '../assets/azul.png'
import '../styles/HomePage.css'

function HomePage() {
  return (
    <main id="contenido" tabIndex={-1}>
      <section
        className="portada"
        id="inicio"
        style={{ backgroundImage: `url(${portada})` }}
      >
        <h1><img className="portada__logo" src={logo} alt="Kraken" /></h1>
        
        <p>-  Inspiradas en el Atlántico.</p>
      </section>

          <section className="benefits" aria-label="Características">
      <div className="benefits__item">
        <span className="benefits__icon" aria-hidden="true">✦</span>
        <span>Acabados artesanales</span>
      </div>

      <div className="benefits__item">
        <span className="benefits__icon" aria-hidden="true">◈</span>
        <span>Colores de inspiración marina</span>
      </div>

      <div className="benefits__item">
        <span className="benefits__icon" aria-hidden="true">≈</span>
        <span>Pesca de cefalópodos</span>
      </div>
    </section>
    <section className="tercerset" id="poteras">
  <h3>Acabados artesanales</h3>

  <div className="tercerset__grid">
    <article className="acabado">
      <div className="acabado__imagen">
        <img src={rallas} alt="Potera Cobre Atlántico" />
      </div>
      <h4>Cobre Atlántico</h4>
    </article>

    <article className="acabado">
      <div className="acabado__imagen">
        <img src={naranja} alt="Potera Perla de Ría" />
      </div>
      <h4>Perla de Ría</h4>
    </article>

    <article className="acabado">
      <div className="acabado__imagen">
        <img src={azul} alt="Potera Azul Príncipe" />
      </div>
      <h4>Azul Príncipe</h4>
    </article>
  </div>
</section>
    <section className="cuartoset" id="sobre-nosotros" aria-label="Sobre nosotros">
      <div>
      <span>Sobre nosotros</span>
      <p>
        Soy un Artesano de poteras por afición, que busca ofrecer productos de calidad 
        y con acabados artesanales. Nos inspiramos en el mar y en la pesca de cefalópodos 
        para crear poteras únicas y funcionales.
      </p>
      </div>
    </section>
    <section className="resenas" aria-labelledby="resenas-titulo">
      <h2 id="resenas-titulo">Opiniones de nuestros clientes</h2>
      <div className="resenas__vacio">
        <p className="resenas__mensaje">Aún no hay reseñas.</p>
        <p>Estamos empezando. Nos encantará conocer tu experiencia con nuestras poteras.</p>
      </div>
    </section>
    </main>
  )
}

export default HomePage
