import portada from '../assets/portada.png'
import rallas from '../assets/rallas.png'
import naranja from '../assets/naranja.png'
import azul from '../assets/azul.png'
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
    <section className="tercerset">
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
    <section>
      <h3>Sobre nosotros</h3>
      <p>
        Somos un Artesano de poteras por afición, que busca ofrecer productos de calidad 
        y con acabados artesanales. Nos inspiramos en el mar y en la pesca de cefalópodos 
        para crear poteras únicas y funcionales.
      </p>
    </section>

    </main>
  )
}

export default HomePage
