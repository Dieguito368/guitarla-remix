const API = process.env.API_URL;

export const obtenerPosts = async () => {
    const url = `${API}/posts?populate=*`;

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    return resultado;
}

export const obtenerPost = async (postURL) => {
    const url = `${API}/posts?filters[url]=${postURL}&populate=imagen`;

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    return resultado;
} 