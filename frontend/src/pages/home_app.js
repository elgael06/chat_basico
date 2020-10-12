import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarMensajes, crearUsuario } from '../actions';
import { WS_CHAT_ROOM, WS_SALAS } from '../controllers';
import { Button, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, TextField } from '@material-ui/core';
import {  ExitToAppRounded, Send } from '@material-ui/icons';
import CrearSala from '../components/crear_sala';
import { useHistory} from 'react-router-dom';


let chat;
let salas;

const HomeApp = () => {
    const { mensajes=[],usuario=null } = useSelector(state => state);
    const dispatch = useDispatch();
    const [value,setValue] = useState('');
    const [listaSala,setSalas] = useState([]);
    const history = useHistory();

    //eslint-disable-next-line
    useEffect(()=>initApp(),[]);

    const initApp = () => {
        iniciarRoom();
        iniciarSalas();
        return ()=>{
            chat.close();
            salas.close();
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
            setValue('');
        };
        chat.onclose = () => console.log('cerrar conexion...');
        chat.onerror = err => console.log('error...',err);
    }
    const iniciarSalas = () => {
        salas = WS_SALAS();
        salas.onopen = ()=>{
            console.log('conectado...');
        }
        salas.onmessage = e => {
            const datos = JSON.parse( e.data);
            console.log(datos);
            setSalas(datos.salas);
        };
        salas.onclose = () => console.log('cerrar conexion...');
        salas.onerror = err => console.log('error...',err);
    }

    const send = e =>{
        chat.send(JSON.stringify({message:value,user:usuario}));
        e.preventDefault();
    }

    const enviarSala = sala => {
        salas.send(JSON.stringify({
            sala:sala,
            usuario:usuario
        }));
    }

    const salir = () => {
        dispatch(crearUsuario(null));
    }

    return(
        <div>
            <IconButton onClick={salir}>
                <ExitToAppRounded />
            </IconButton>
            <div>
               <b>Salas</b>
               <hr />
               <CrearSala
                event={enviarSala}
               />
                <List >
                {
                    listaSala.map(s=>
                        <ListItem 
                            key={s.pk} 
                            button 
                            onClick={()=>history.push(`/sala/${s.pk}`)}
                        >
                            <ListItemText 
                                primary={s.nombre}
                                secondary={`${s.creador} - ${s.fecha}`}
                            />
                            <ListItemSecondaryAction >
                                <Send />
                            </ListItemSecondaryAction>
                        </ListItem>)
                }
                </List>
            </div>
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
             <Button type='submit' variant='text' disabled={!value} color='secondary' endIcon={<Send />}>enviar</Button>
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