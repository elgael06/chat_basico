import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarMensajes } from '../actions';
import { WS_SALAS_ID } from '../controllers';
import {useHistory, useParams} from 'react-router-dom';
import { AppBar, Badge, Divider, IconButton, InputAdornment, List, ListItem, ListItemSecondaryAction, ListItemText, makeStyles, TextField, Toolbar, Typography } from '@material-ui/core';
import { ArrowBack, Chat, People, Person, Send } from '@material-ui/icons';

const useStyles = makeStyles(theme=>({
    root: {
        flexGrow: 1,
        top:0,
        bottom:0,
        left:0,
        right:0,
        position:'absolute'
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      toolbar: {
        minHeight: 78,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
      },
    title: {
        flexGrow: 1,
        alignSelf: 'flex-end',
      },
      lista:{
        height:'calc(100% - 200px)',
        width:'calc(100% - 5px)',
        marginTop:15,
        overflow:'auto'
      }
}));

let chat;
const SalaApp = () => {
    const { mensajes=[],usuario=null } = useSelector(state => state);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [value,setValue] = useState('');
    const [serie,setSerie] = useState({});
    const history = useHistory();

    const clases = useStyles();

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
            const objDiv = document.querySelector(".msg-container");
            objDiv.scrollTop = objDiv.scrollHeight;
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
        <div className={clases.root} style={{}}>
            <AppBar position='sticky' color='primary'>
                <Toolbar className={clases.toolbar}>

                    <IconButton 
                        edge='start'
                        aria-label="open drawer"
                        color='inherit'
                        onClick={()=>history.push('/')}
                    >
                        <ArrowBack color='inherit' />
                    </IconButton>
                    <div className={clases.title}>
                        <Typography  component='b' variant='h5' noWrap>Sala : {serie.nombre}</Typography>

                        <Typography component='h5' variant='b' noWrap>Creada: {serie.fecha}</Typography>

                        <Typography component='u' variant='u' noWrap> por : {serie.creador}</Typography>
                    </div>

                    <IconButton 
                        edge='end'
                    >
                        <Badge badgeContent='2' color='secondary'>
                            <People />
                        </Badge>
                    </IconButton>

                </Toolbar>
            </AppBar>

            <List className={'msg-container ' + clases.lista}>
                {
                    mensajes.map(msj=>{
                        return<Fragment key={msj.pk}>
                        <ListItem style={{background:usuario === msj.usuario ?'#eeeeee':'white'}} >
                            <ListItemText 
                                primary={msj.text}
                                secondary={`${msj.usuario} - ${msj.date} ` }
                            />
                            <ListItemSecondaryAction>
                                {usuario === msj.usuario ? <Person /> : <Chat />}
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider />
                        </Fragment>
                    })
                }
            </List>
            <form onSubmit={send}>
                <br/>
                <TextField 
                    fullWidth
                    color='primary'
                    InputProps={{
                        startAdornment:<InputAdornment position='start'><Send color='primary' /></InputAdornment>
                    }}
                    placeholder='mensaje..'
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