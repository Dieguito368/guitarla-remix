
export const formaterfecha = fecha => {
    const fechaNueva = new Date(fecha);

    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return fechaNueva.toLocaleDateString('es-MX', opciones);
}

export const formatearCantidad = cantidad => {
    const cantidadNumero = Number(cantidad);

    return cantidadNumero.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN'
    });
}