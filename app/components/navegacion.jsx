import { useLocation, Link } from "@remix-run/react";
import imagenCarrito from '../../public/img/carrito.png';

const Navegacion = () => {
    const location = useLocation();

    return (
        <div>
            <nav className='navegacion'>
                <Link to='/' className={ location.pathname === '/' ? 'active' : '' } >Inicio</Link>
                <Link to='/guitarras' className={ location.pathname === '/guitarras' ? 'active' : '' }>Tienda</Link>
                <Link to='/posts' className={ location.pathname === '/posts' ? 'active' : '' }>Blog</Link>
                <Link to='/nosotros' className={ location.pathname === '/nosotros' ? 'active' : '' }>Nosotros</Link>
                <Link to='/carrito'>
                    <img src={ imagenCarrito } alt="Carrito de compras" />
                </Link>
            </nav>
        </div>
    )
}

export default Navegacion;