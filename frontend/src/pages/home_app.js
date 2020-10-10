import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarMensajes, crearUsuario } from '../actions';
import { WS_CHAT_ROOM } from '../controllers';
import { Button, IconButton, TextField } from '@material-ui/core';
import {  ExitToAppRounded, Send } from '@material-ui/icons';


let chat;

const HomeApp = () => {
    const { mensajes=[],usuario=null } = useSelector(state => state);
    const dispatch = useDispatch();
    const [value,setValue] = useState('');

    //eslint-disable-next-line
    useEffect(()=>initApp(),[]);

    const initApp = () => {
        chat = WS_CHAT_ROOM('home',usuario);
        chat.onopen = ()=>{
            console.log('conectado...');
        }
        chat.onmessage = e => {
            const datos = JSON.parse( e.data);
            console.log(mensajes,datos);

            dispatch(agregarMensajes([...datos.mensajes]));
            setValue('');
        };
        chat.onclose = () => console.log('cerrar conexion...');
        chat.onerror = err => console.log('error...',err);

        return ()=>chat.close()
    }
    const send = e =>{
        chat.send(JSON.stringify({message:value,user:usuario}));
        e.preventDefault();
    }
    const salir = () => {
        dispatch(crearUsuario(null));
    }

    return(
        <div>
            <IconButton onClick={salir}>
                <ExitToAppRounded />
            </IconButton>
            <h3>Home</h3>
             <h4>{usuario}</h4>
             <form onSubmit={send}>
             <TextField 
                value={value} 
                onChange={e=>setValue(e.target.value)} 
                variant='outlined' 
                size='small'
                focused={true}
            />
             <Button type='submit' variant='text' color='secondary' endIcon={<Send />}>enviar</Button>
             </form>
             <hr />
             {
                 mensajes.map((ms,id)=>{
                     return(
                         <section key={ms.usuario+'_'+id}>
                             <b>{ms.usuario}</b>
                            <p>{ms.message}</p>
                         </section>
                     );
                 })
             }
        </div>


    );
}

export default HomeApp;