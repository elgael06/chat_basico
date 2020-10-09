
export const initialMensajes = [];

export default (state=initialMensajes,action)=> {
    switch (action.type) {
        case 'MENSAJES_ADD':
            return action.value;
        default:
            return state;
    }
}