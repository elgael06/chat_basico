
export const initialSalas = [];

export default  (state=initialSalas,action) => {
    switch (action.type) {
        case "SALAS_ADD":
            return action.value;
        default:
            return state;
    }
}
