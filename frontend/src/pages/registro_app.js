import { AppBar, Button, makeStyles, TextField, Tooltip, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { crearUsuario } from '../actions';

const estyles = makeStyles(theme=>({
    root: {
        flexGrow: 1,
        top:0,
        bottom:0,
        left:0,
        right:0,
        position:'absolute',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    toolbar: {
        minHeight: 78,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        alignSelf: 'center',
      },
    form:{
        flexGrow:1,
        padding:10,
        maxWidth:380
    },
    input:{
        flexGrow:1,
        alignSelf:'strech'
    },
    boton:{
        marginLeft:5
    }
}));

const RegistroApp = () => {
    const [value,setValue] = useState('');
    const dispatch = useDispatch();
    const clases = estyles();

    const agregar = e => {
        dispatch(crearUsuario(value));
        setValue('');
        e.preventDefault();
    }

    return(
        <div className={clases.root}>
            <AppBar
                className={clases.toolbar}
                position='sticky' 
                color='primary'
            >
               <Tooltip>
                    <Typography className={clases.title} variant='h5'>App chat</Typography>
               </Tooltip>
           </AppBar>

            <div className={clases.form}>
                <h4>registro</h4>
                <form onSubmit={agregar}>
                    <TextField 
                    className={clases.input}
                        label='Nombre '
                        value={value}
                        onChange={e=>setValue(e.target.value)}
                        variant='outlined'
                        size='small'
                    />
                    <Button 
                        className={clases.boton}
                        disabled={value===''} 
                        color='primary' 
                        variant='contained' 
                        onClick={agregar}
                    >agregar</Button>
                </form>
            </div>
        </div>
    )
}

export default RegistroApp;