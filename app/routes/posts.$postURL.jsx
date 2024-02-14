import { useLoaderData } from "@remix-run/react";
import { formaterfecha } from "~/utils/helpers";
import { obtenerPost } from "~/models/posts.server";

export const meta = ({ data }) => {
    const { titulo } = data[0].attributes;

    return [
        { title: `GuitarLA - ${titulo}` }
    ];
}

export const loader = async ({ params }) => {
    const { postURL } = params;

    const post = await obtenerPost(postURL);

    if(post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Entrada no encontrada'
        });
    }

    return post.data;
} 

const PostURL = () => {
    const post = useLoaderData();

    const { titulo, contenido, imagen, publishedAt } = post[0].attributes;
    
    return (
        <article className='post'>
            <img className="imagen" src={ imagen.data.attributes.url } alt={ `Imagen Blog ${titulo}` } />
            
            <div className="contenido">
                <h3>{ titulo }</h3>
                <p className="fecha">{ formaterfecha(publishedAt) }</p>
                <p className="texto">{ contenido }</p>
            </div>
        </article>    
    )
}

export default PostURL;