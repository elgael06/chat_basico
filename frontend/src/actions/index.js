
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

export const onLoading = () => {
    return dispatch=> dispatch({type:"UI_LOADING_ON"});
}

export const offLoading = () => {
    return dispatch=> setTimeout(()=> dispatch({type:"UI_LOADING_OFF"}),500);
}