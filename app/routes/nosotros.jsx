import nosotros from '../styles/nosotros.css';
import imagen from "../../public/img/nosotros.jpg";

export function meta() {
    return [
        { title: 'GuitarLA - Nosotros' }
    ]
}

export function links() {
    return [
        { rel: 'stylesheet', href: nosotros }
    ]
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
        <h2 className="heading">Nosotros</h2>

        <div className="contenido">
            <img src={imagen} alt="imagen nosotros" />

            <div>
                <p>
                    Sumergirnos en el mundo de las guitarras es más que una afición; es
                    una conexión profunda con la expresión artística y la melodía. En
                    cada acorde y rasgueo, descubrimos un universo de emociones que se
                    traduce en música. Desde el Estado de México, México, exploramos las
                    cuerdas y trastes con la misma pasión que dedicamos al desarrollo
                    web. La guitarra se convierte en nuestro refugio creativo, donde las
                    notas se entrelazan como líneas de código, creando composiciones
                    únicas que son testimonio de nuestro viaje musical. 
                </p>

                <p>
                    En este emocionante viaje, buscamos ampliar nuestro repertorio musical,
                    experimentando con diversos géneros y estilos. Cada sesión de
                    práctica es un paso más hacia la maestría, aspirando a un día ser
                    virtuosos no solo en el código, sino también en el arte de las seis
                    cuerdas. Así como construimos proyectos en el desarrollo web,
                    construimos melodías que resuenan con nuestra propia narrativa
                    musical. Con cada nota, estamos escribiendo nuestra propia partitura
                    en el pentagrama de la vida.
                </p>
            </div>
        </div>
    </main>
    );
};

export default Nosotros;
