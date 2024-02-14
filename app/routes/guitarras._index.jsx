import { useLoaderData } from '@remix-run/react';
import ListadoGuitarras from '~/components/listado-guitarras';
import { obtenerGuitarras } from '~/models/guitarras.server';

export function meta() {
    return [
        { title: 'GuitarLA - Tienda' }
    ];
}

export async  function loader() {
    const guitarras = await obtenerGuitarras();

    return guitarras.data;
}

const Tienda = () => {
    const guitarras = useLoaderData();

    return (
        <>
            <h2 className="heading">{ guitarras.length ? 'Nuestra colección' : 'No hay guitarras' }</h2>

            <ListadoGuitarras guitarras={ guitarras }/>
        </>
    )
}

export default Tienda;