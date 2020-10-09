
export const initialUsuario =null 

export default (state=initialUsuario,action) => {
    switch (action.type) {
        case "USER_ADD":
            localStorage.setItem('chat_user',action.value);
            return action.value;
    
        default:
            const user = localStorage.getItem('chat_user');
            return state || user;
    }
}