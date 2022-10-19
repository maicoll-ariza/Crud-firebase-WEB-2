
export const getImage = async () => {

    const urlSolicitud = 'https://picsum.photos/200'
    const { url } = await fetch( urlSolicitud )
    // const data = await respuesta.json()

    return url
}
