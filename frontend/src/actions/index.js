
export const agregarMensajes = value => {
    console.log('mensajes => ',value);
    return dispatch =>{
        dispatch({
            type:'MENSAJES_ADD',
            value
        })
    }
}

export const crearUsuario = value => {
    return dispatch =>{
        dispatch({
            type:'USER_ADD',
            value
        })
    }
}