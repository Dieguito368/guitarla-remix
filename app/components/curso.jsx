
const Curso = ({ curso }) => {
    const { titulo, contenido, imagen } = curso.attributes;

    return (
        <section className='curso'>
            <style jsx='true'>{`
                .curso {
                    background-image: linear-gradient(to right, rgb(0 0 0 / .8), rgb(0 0 0 / .7)), url(${imagen.data.attributes.url});
                }
            `}</style>

                <div className='contenido'>
                    <h2 className='heading no-margin'>{ titulo }</h2>
                    <p className='texto no-margin'>{ contenido[0].children[0].text }</p>  
                </div>
        </section>
    )
}

export default Curso;