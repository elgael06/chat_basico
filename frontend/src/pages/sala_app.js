import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarMensajes } from '../actions';
import { WS_CHAT_ROOM } from '../controllers';


let chat;
const SalaApp = () => {
    const { mensajes=[],usuario=null } = useSelector(state => state);
    const dispatch = useDispatch();

    //eslint-disable-next-line
    useEffect(()=>initApp(),[]);

    const initApp = () => {
        iniciarRoom();
        return ()=>{
            chat.close();
        }
    }

    const iniciarRoom = () =>{
        chat = WS_CHAT_ROOM('home',usuario);
        chat.onopen = ()=>{
            console.log('conectado...');
        }
        chat.onmessage = e => {
            const datos = JSON.parse( e.data);
            console.log(mensajes,datos);
            dispatch(agregarMensajes([...datos.mensajes]));
        };
        chat.onclose = () => console.log('cerrar conexion...');
        chat.onerror = err => console.log('error...',err);
    }

    return(
        <div>
            <h3>sala</h3>
        </div>
    )
}

export default SalaApp;