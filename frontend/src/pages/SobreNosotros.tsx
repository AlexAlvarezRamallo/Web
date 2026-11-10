import logo from '../assets/logo.png'
import portada from '../assets/nosotrosportada.png'
import '../styles/SobreNosotros.css'



function SobreNosotros() {
    return (
        <main id="contenido" className="nosotros-page" tabIndex={-1}>
             <section
        className="nosotros-portada"
        id="inicio">
        <div className="nosotros-portada__marco">
          <img className="nosotros-portada__imagen" src={portada} alt="Pescador mostrando una potera en la mano junto al mar" />
        </div>
        <div className="nosotros-portada__contenido">
         <h1>
          <img className="nosotros-portada__logo" src={logo} alt="Kraken" />
         </h1>
        <p>Inspiradas en el Atlántico.</p>
        </div>
      </section>
      <section className="nosotros-contenido">
        <div className="nosotros-contenido__texto">
          <h2>Del mar al taller.
Y del taller, al mar.</h2>
          <p>Hechas con afición, una a una.</p>

        </div>
         <div className="nosotros-contenido__texto2">
          
          <h3>Soy un artesano de poteras por afición. Kraken nace de mi pasión por el mar y de las ganas de compartir algo hecho con mis propias manos.</h3>
          <p>Me inspira la pesca de cefalópodos: sus colores, sus movimientos y todo lo que rodea a una jornada junto al agua. Esa afición es el punto de partida de cada potera que creo.</p>
          <p>Mi propósito es ofrecer poteras de calidad, con acabados cuidados y un carácter propio. Piezas únicas y funcionales en las que el trabajo artesanal se aprecia en los pequeños detalles.</p>
          <p>Detrás de cada modelo está la misma ilusión: seguir creando y compartir esta forma de vivir la pesca con quienes disfrutan tanto del mar como yo.</p>
        </div>
      </section>
      <section className="nosotros-contenido2">
        <div className="nosotros-contenido2__texto">
          <h3>La esencia de Kraken</h3>
          <h1>«Crear con las manos algo que empieza
con la mirada puesta en el mar.»</h1>
        </div>
      </section>
      <section className="nosotros-contenido3">
        <div className="nosotros-contenido3__texto">
          <h3>Nuestra forma de hacer</h3>
          <h2>El valor está en los detalles.</h2>
        </div>
        <div className="nosotros-contenido3__texto2">
          <p>La inspiración marina y el trabajo manual dan personalidad a cada creación.</p>
        </div>
      </section>
      <section className="nosotros-valor">
        <div className="nosotros-valor__texto1">
          <span>01 / Inspiración</span>
          <h3>El Atlántico como origen</h3>
          <p>El mar y la pesca de cefalópodos inspiran las formas y las combinaciones de colores de nuestras poteras.</p>
        </div>
                <div className="nosotros-valor__texto2">
          <span>02 / Artesanía</span>
          <h3>Cuidado en cada acabado</h3>
          <p>Crear de forma artesanal significa dedicar atención a cada pieza y a esos detalles que la hacen diferente.</p>
        </div>
                <div className="nosotros-valor__texto3">
          <span>03 / Propósito</span>
          <h3>Creadas para pescar</h3>
          <p>Buscamos unir el atractivo de una pieza artesanal con la funcionalidad de una potera pensada para acompañarte junto al agua.</p>
        </div>
      </section>
      <section className="nosotros-contenido4">
        <div className="nosotros-contenido4__texto">
          <h3>Cada potera, su equilibrio</h3>
          <h2>Un pequeño vistazo a Kraken.</h2>
          <p>Todos los modelos pueden realizarse en los tamaños disponibles, con pequeños ajustes para mantener una flotabilidad adecuada.</p>
        </div>
        <div className="nosotros-contenido4__texto2">
          <button className="nosotros-modelos-boton">Descubre los modelos ➔</button>
        </div>
      </section>
    </main>

    )
    }
export default SobreNosotros
