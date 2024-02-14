import { Outlet, useOutletContext } from '@remix-run/react';
import tienda from '~/styles/tienda.css'; 
import animate from '~/styles/animate.css';

export function links() {
    return [
        { rel: 'stylesheet', href: tienda },
        { rel: 'stylesheet', href: animate }
    ]
}

const Tienda = () => {
    return (
        <main className='contenedor'>
            <Outlet  
                context={ useOutletContext() }
            />
        </main>
    )
}

export default Tienda;