export const initialUI = {
    loading:true,

}

const ui = (state=initialUI,action) => {
    switch (action.type) {
        case "UI_LOADING_ON":
            return {...state,loading:true};
        case "UI_LOADING_OFF":
            return {...state,loading:false};
        default:
            return state;
    }
}
export default ui;