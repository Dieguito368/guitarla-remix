const API = process.env.API_URL;

export const obtenerGuitarras = async () => {
    const url = `${API}/guitarras?populate=*`;

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    return resultado;
}

export const obtenerGuitarra = async (guitarraURL) => {
    const url = `${API}/guitarras?filters[url]=${guitarraURL}&populate=imagen`;

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    return resultado;
}