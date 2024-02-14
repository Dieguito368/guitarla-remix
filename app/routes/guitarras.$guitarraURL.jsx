import { useState } from 'react'; 
import { useLoaderData, useOutletContext } from '@remix-run/react';
import { obtenerGuitarra } from '~/models/guitarras.server';
import { formatearCantidad } from '~/utils/helpers';
import { Toaster, toast } from 'react-hot-toast';

export const meta = ({ data }) => {
    return [
        { title: `GuitarLA - ${data[0].attributes.nombre}` }
    ];
}

export const loader = async ({ params }) => {
    const { guitarraURL } = params;

    const guitarra = await obtenerGuitarra(guitarraURL);
    
    if(guitarra.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra no encontrada', 
        });
    }

    return guitarra.data;
}

const GuitarraURL = () => {
    const { agregarCarrito } = useOutletContext();

    const [cantidad, setCantidad ] = useState(0);
    const [ error, setError ] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        if(cantidad < 1) {
            setError(true);
            return;
        }

        setError(false);

        const guitarraSeleccionada = {
            id: guitarra[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }

        agregarCarrito(guitarraSeleccionada);

        toast.success('!Guitarra agregada al carrito!');
    }

    const guitarra = useLoaderData();

    const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;

    return (
        <div className='guitarra'>
            <Toaster 
                position="top-right"
                reverseOrder={false}
            />

            <img src={ imagen.data.attributes.url } alt={ `Imagen ${ nombre }` } />

            <div className='contenido'>
                <h3>{ nombre }</h3>
                <p className='desc'>{ descripcion[0].children[0].text }</p>
                <p className='precio'>{ formatearCantidad(precio) } MXN</p>
                
                <form className='formulario' onSubmit={ handleSubmit }>
                    <label htmlFor='cantidad'>Cantidad</label>

                    <select 
                        name='cantidad' 
                        id='cantidad' 
                        onChange={ e => setCantidad(Number(e.target.value)) }
                        defaultValue=''
                    >
                        <option value='' disabled>-- Seleccione una cantidad --</option>
                        <option value='1'>1</option>    
                        <option value='2'>2</option>    
                        <option value='3'>3</option>    
                        <option value='4'>4</option>    
                        <option value='5'>5</option>    
                    </select>  

                    { 
                        error && ( 
                            <div className='error-validacion animate__animated animate__fadeIn'>
                                Debes de seleccionar una cantidad
                            </div> 
                        ) 
                    }

                    <input type='submit' value='Agregar al carrito' className='enlace' />
                </form>
            </div> { /*.contenido */ }

        </div>
    )
}

export default GuitarraURL;
