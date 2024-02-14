import { useLoaderData } from '@remix-run/react';
import ListadoGuitarras from '~/components/listado-guitarras';
import Curso from '~/components/curso';
import ListadoPosts from '~/components/listado-posts';
import tienda from '~/styles/tienda.css';
import blog from '~/styles/blog.css';
import { obtenerGuitarras } from '~/models/guitarras.server';
import { obtenerCurso } from '~/models/curso.server';
import { obtenerPosts } from '~/models/posts.server';

export const links = () => {
    return [
        { rel: 'stylesheet', href: tienda },
        { rel: 'stylesheet', href: blog }
    ];
}

export const loader = async () => {
    const [ guitarras, posts, curso ] = await Promise.all([
        obtenerGuitarras(),
        obtenerPosts(),
        obtenerCurso()
    ]);

    const data = {
        guitarras: guitarras.data,
        posts: posts.data,
        curso: curso.data
    }

    return data;
}

const Index = () => {
    const datos = useLoaderData();

    const { guitarras, posts, curso } = datos;

    return (
        <>
            <main className='contenedor'>
                <h2 className="heading">{ guitarras.length && 'Nuestra colección' }</h2>

                <ListadoGuitarras guitarras={ guitarras }/>
            </main>

            <Curso curso={ curso } />

            <section className='contenedor'>
                <h2 className="heading">Blog</h2>

                <ListadoPosts posts={ posts } />
            </section>
        </>
    )
}

export default Index;