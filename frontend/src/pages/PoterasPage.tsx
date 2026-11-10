import logo from '../assets/Logo.png'
import '../styles/PoterasPage.css'
import portada from '../assets/portadapagepoteras.png'
import rallas from '../assets/rallas.png'
import naranja from '../assets/naranja.png'
import azul from '../assets/azul.png'


function PoterasPage() {
 return (
    <main id="contenido" className="poteras-page" tabIndex={-1}>
      <section
        className="poteras-portada"
        id="inicio">
        <div className="poteras-portada__marco">
          <img className="poteras-portada__imagen" src={portada} alt="Pescador mostrando una potera en la mano junto al mar" />
        </div>
        <div className="poteras-portada__contenido">
         <h1>
          <img className="poteras-portada__logo" src={logo} alt="Kraken" />
         </h1>
        <p>Inspiradas en el Atlántico.</p>
        </div>
      </section>
      
      <section className="poteras-tipos">
        <p>Todas nuestras poteras pueden fabricarse en cualquiera de los tamaños disponibles, con pequeños ajustes para garantizar una flotabilidad adecuada.</p>
      </section>
      <section className="poteras-tipos">
        <h3>Tipos de poteras</h3>
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
            <section className="poteras-tipos2">
        
      </section>
      <section className="poteras-tipos">
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
            <section className="poteras-tipo3">
        
      </section>
      <section className="poteras-tipos">
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
    </main>
  )

}
export default PoterasPage
