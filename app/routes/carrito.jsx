import { useState, useEffect } from 'react';
import { useOutletContext } from '@remix-run/react';
import stylesCarrito from '~/styles/carrito.css';
import { formatearCantidad } from '~/utils/helpers';
import { ClientOnly } from 'remix-utils/client-only';

export const meta = () => {
    return [
        { title: 'GuitarLA - Carrito de compras'}
    ];
}

export const links = () => {
    return [
        { rel: 'stylesheet', href: stylesCarrito }
    ];
} 

const Carrito = () => {
    const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext();
    const [ total, setTotal ] = useState(0);

    useEffect( () => {
        const calculoTotal = carrito.reduce( (total, guitarra) => total + (guitarra.cantidad * guitarra.precio), 0);

        setTotal(calculoTotal);
    }, [carrito]);

    return (
        <ClientOnly fallback='Cargando'>
            {() => (
                <main className='contenedor'>
                    <h1 className='heading'>Carrito de compras</h1>
                    
                    <div className='contenido'>
                        <div className='carrito'>
                            <h3>{ carrito?.length > 0 ? 'Articulos' : 'No hay articulos agregados' }</h3>

                            { 
                                carrito?.length > 0 && (
                                    carrito.map(guitarra => (
                                        <div key={ guitarra.id } className='producto'>
                                            <img src={ guitarra.imagen } alt={ guitarra.nombre} />

                                            <div>
                                                <p className='nombre'>{ guitarra.nombre }</p>
                                                <p className='cantidad'>Cantidad:</p>
                                                <select 
                                                    defaultValue={ guitarra.cantidad }
                                                    name='cantidad'
                                                    onChange={ e => actualizarCantidad({ id: guitarra.id, cantidad: Number(e.target.value) }) }
                                                >
                                                    <option value='' disabled>-- Seleccione una cantidad --</option>
                                                    <option value='1'>1</option>    
                                                    <option value='2'>2</option>    
                                                    <option value='3'>3</option>    
                                                    <option value='4'>4</option>    
                                                    <option value='5'>5</option>    
                                                </select>

                                                <p className='precio'><span>{ formatearCantidad(guitarra.precio) } MXN</span></p>
                                                <p className='subtotal'>Subtotal: <span>{ formatearCantidad(guitarra.cantidad * guitarra.precio) } MXN</span></p>
                                                
                                                <button type="button" className='btn-eliminar'onClick={ () => eliminarGuitarra(guitarra.id) }>X</button>
                                            </div>

                                        </div>
                                    ))
                                )
                            }
                        </div>

                        {
                            carrito?.length > 0 && (
                                <aside className='resumen'>
                                    <h3>Resumen del pedido</h3>
                                    <p>Total a pagar: <span>{ formatearCantidad(total) } MXN</span></p>
                                </aside>

                            )
                        }
                    </div>
                </main>
            )}
        </ClientOnly>
    )
}

export default Carrito;