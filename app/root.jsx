import { useEffect, useState } from 'react';
import { 
    Meta, Links, Outlet, Scripts, LiveReload, useRouteError, isRouteErrorResponse, Link 
} from '@remix-run/react';
import Header from '~/components/header';
import Footer from '~/components/footer';
import styles from '~/styles/index.css';
import normalize from '~/styles/normalize.css';

export function meta({ error }) { 
    if(error?.statusText === 'Guitarra no encontrada') {
        return [{ title: 'GuitarLA - Guitarra no encontrada'}];
    } else if(error?.statusText === 'Not Found') {
        return [{ title: 'GuitarLA - Página no encontrada'}];
    } else if(error?.statusText === 'Entrada no encontrada') {
        return [{ title: 'GuitarLA - Entrada no encontrada'}];
    }

    return [
        { charset: 'UTF-8' },
        { title: 'GuitarLA - Inicio' },
        { viewport: 'width=device-width, initial-scale=1.0' }
    ];
}

export function links() {
    return [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'true' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap' },
        { rel: 'stylesheet', href: styles },
        { rel: 'stylesheet', href: normalize }
    ];
}

export default function App() {
    const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null; 
    const [ carrito, setCarrito ] = useState(carritoLS);
    
    useEffect( () => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    const agregarCarrito = guitarra => {
        if(carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
            // Ya existe un registro
            const carritoActualizado = carrito.map(guitarraState => {
                if(guitarraState.id === guitarra.id) {
                    guitarraState.cantidad = guitarra.cantidad;
                }

                return guitarraState;
            });  

            setCarrito(carritoActualizado);
        } else {
            // Nuevo registro
            setCarrito([...carrito, guitarra]);
        }
    }

    const actualizarCantidad = guitarra  => {
        const carritoActualizado = carrito.map( guitarraState => {
            if(guitarraState.id === guitarra.id) {
                guitarraState.cantidad = guitarra.cantidad;
            }

            return guitarraState;
        });

        setCarrito(carritoActualizado);
    }

    const eliminarGuitarra = id => setCarrito(carrito.filter(guitarraState => guitarraState.id !== id));
    
    return (
        <Document>
            <Outlet 
                context={ 
                    {
                        carrito,
                        agregarCarrito, 
                        actualizarCantidad,
                        eliminarGuitarra
                    }
                }
            />
        </Document>
    )
}

function Document({ children }) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>

            <body>
                <Header />

                { children }

                <Footer />

                <Scripts />

                <LiveReload />
            </body>
        </html>
    );
}

export function ErrorBoundary() {
    const error = useRouteError();

    if(isRouteErrorResponse(error)) {
        return (
            <Document>
                <p className='error'>{ error.status } <span>{ error.statusText }</span></p>
                <Link to='/' className='enlace-regresar'>Regresar a página principal</Link>
            </Document>
        );
    } else {
        return (
            <Document>  
                <p className='error'>{ error.status } <span>{ error.statusText }</span></p>
                <Link to='/' className='enlace-regresar'>Regresar a página principal</Link>
            </Document>
        );
    }
}