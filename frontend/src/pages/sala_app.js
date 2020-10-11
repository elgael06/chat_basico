import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarMensajes } from '../actions';
import { WS_SALAS_ID } from '../controllers';
import {useParams} from 'react-router-dom';
import { Button, List, ListItem, ListItemText, TextField } from '@material-ui/core';


let chat;
const SalaApp = () => {
    const { mensajes=[],usuario=null } = useSelector(state => state);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [value,setValue] = useState('');
    const [serie,setSerie] = useState({});

    //eslint-disable-next-line
    useEffect(()=>initApp(),[]);

    const initApp = () => {
        console.log('sala ',id)
        iniciarRoom();
        return ()=>{
            chat.close();
            dispatch(agregarMensajes([]));
        }
    }

    const iniciarRoom = () =>{
        chat = WS_SALAS_ID(id);
        chat.onopen = ()=>{
            console.log('conectado...');
        }
        chat.onmessage = e => {
            const {sala,mensajes} = JSON.parse( e.data);
            console.log(mensajes,sala,mensajes);
            setSerie(sala);
            dispatch(agregarMensajes([...mensajes]));
        };
        chat.onclose = () => console.log('cerrar conexion...');
        chat.onerror = err => console.log('error...',err);
    }

    const send = e => {
        chat.send(JSON.stringify({
            sala:id,
            usuario:usuario,
            mensaje:value
        }));
        console.log('enviar',value);
        setValue('')
        e.preventDefault();
    }

    return(
        <div>
            <h3>sala : {serie.nombre}</h3>
            <b>Creada: {serie.fecha + ' por :' + serie.creador}</b>
            <hr />
            <form onSubmit={send}>
                <TextField 
                    label='nuevo mensaje'
                    size='small'
                    variant='outlined'
                    value={value}
                    onChange={e=>setValue(e.target.value)}
                />
                <Button type='submit' variant='text' color='secondary' >enviar</Button>
            </form>

            <List>
                {
                    mensajes.map(msj=>{
                        return<ListItem key={msj.pk}>
                            <ListItemText 
                                primary={msj.text}
                                secondary={`${msj.usuario} - ${msj.date} ` }
                            />
                        </ListItem>
                    })
                }
            </List>
        </div>
    )
}

export default SalaApp;