import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { crearUsuario, offLoading, onLoading } from '../actions';
import { WS_SALAS } from '../controllers';
import { AppBar, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import {  ExitToAppRounded, Laptop, Send } from '@material-ui/icons';
import CrearSala from '../components/crear_sala';
import { useHistory} from 'react-router-dom';

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
        border:' 1px solid #eee',
        height:'calc(100% - 250px)',
        marginTop:15,
        overflow:'auto'

      }
}));

let salas;

const HomeApp = () => {
    const { usuario=null } = useSelector(state => state);
    const dispatch = useDispatch();
    const [listaSala,setSalas] = useState([]);
    const history = useHistory();

    const clases = useStyles();
    
    //eslint-disable-next-line
    useEffect(()=>initApp(),[]);

    const initApp = () => {
        dispatch(onLoading());
        iniciarSalas();
        return ()=>{
            salas.close();
        }
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
            dispatch(offLoading())
        };
        salas.onclose = () => console.log('cerrar conexion...');
        salas.onerror = err => console.log('error...',err);
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
        <div className={clases.root}>
            <AppBar position='sticky' color='primary'>
                <Toolbar className={clases.toolbar}>

                    <IconButton 
                        edge='start'
                        aria-label="open drawer"
                        color='inherit'
                        onClick={()=>history.push('/')}
                    >
                        <Laptop color='inherit' />
                    </IconButton>
                    <div className={clases.title}>
                        <Typography  component='b' variant='h5' noWrap>Bienvenido. </Typography>

                        <Typography component='h5' variant='b' noWrap>App Chat. </Typography>

                        <Typography component='u' variant='u' noWrap> hola : {usuario}</Typography>
                    </div>

                    <IconButton onClick={salir} color='inherit' edge='end'>
                        <ExitToAppRounded />
                    </IconButton>

                </Toolbar>
            </AppBar>

                <br/>
                <b>Salas</b>
                <hr />

                <CrearSala
                    event={enviarSala}
                />

                <List  className={clases.lista}>
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
    );
}

export default HomeApp;