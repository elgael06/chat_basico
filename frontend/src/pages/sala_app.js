import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarMensajes } from '../actions';
import { WS_SALAS_ID } from '../controllers';
import {Link, useParams} from 'react-router-dom';
import { Button, Divider, InputAdornment, List, ListItem, ListItemSecondaryAction, ListItemText, TextField } from '@material-ui/core';
import { ArrowBack, People, Send } from '@material-ui/icons';


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
        <div style={{height:'90%',width:'calc(100% - 40px)',position:'absolute'}}>

            <Link to='/'>
                <Button variant='text' color='primary'  startIcon={<ArrowBack />}>
                    salir {usuario}
                </Button>
            </Link>
            <h3>sala : {serie.nombre}</h3>
            <b>Creada: {serie.fecha + ' por :' + serie.creador}</b>
            <hr />

            <List style={{
                height:'calc(100% - 200px)',
                width:'calc(100% - 5px)',
                marginTop:20,
                overflow:'auto'
            }}>
                {
                    mensajes.map(msj=>{
                        return<>
                        <ListItem key={msj.pk}>
                            <ListItemText 
                                primary={msj.text}
                                secondary={`${msj.usuario} - ${msj.date} ` }
                            />
                        </ListItem>
                            <ListItemSecondaryAction>
                                {usuario === msj.usuario && <People />}
                            </ListItemSecondaryAction>
                        <Divider />
                        </>
                    })
                }
            </List>
            <hr />
            <form onSubmit={send}>
                <br/>
                <TextField 
                    fullWidth
                    color='primary'
                    InputProps={{
                        startAdornment:<InputAdornment position='start'><Send color='primary' /></InputAdornment>
                    }}
                    label='nuevo mensaje'
                    size='small'
                    variant='outlined'
                    value={value}
                    onChange={e=>setValue(e.target.value)}
                />
            </form>
        </div>
    )
}

export default SalaApp;