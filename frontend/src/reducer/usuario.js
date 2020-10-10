
export const initialUsuario =null 

export default (state=initialUsuario,action) => {
    switch (action.type) {
        case "USER_ADD":
            localStorage.setItem('chat_user',action.value);
            return action.value;
        case "USER_REMOVE":
            localStorage.removeItem('chat_user');
            return action.value;
        default:
            const data = localStorage.getItem('chat_user');
            console.log(data)
            const user = data !== "null" ? data : null;
            return state || user;
    }
}