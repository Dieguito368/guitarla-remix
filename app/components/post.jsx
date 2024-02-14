import { Link } from "@remix-run/react";
import { formaterfecha } from "~/utils/helpers";

const Post = ({ post }) => {
    const { titulo, contenido, imagen, publishedAt, url } = post.attributes;
    
    return (
        <article className="post">
            <img src={ imagen.data.attributes.formats.small.url } alt={ `Imagen Blog ${titulo}` } />
            
            <div className="contenido">
                <h3>{ titulo }</h3>
                <p className="fecha">{ formaterfecha(publishedAt) }</p>
                <p className="resumen">{ contenido }</p>
                <Link to={ `/posts/${url}` } className="enlace">Leer entrada</Link>
            </div>
        </article>
    )
}

export default Post;