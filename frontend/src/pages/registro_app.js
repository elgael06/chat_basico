import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { crearUsuario } from '../actions';

const estyles = makeStyles(theme=>({
    container:{
        display:'flex',
        justifyContent:'center'
    },
    form:{
        width:300,
        height:350
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
        <div className={clases.container}>
            <div className={clases.form}>
                <h4>registro</h4>
                <form onSubmit={agregar}>
                    <TextField 
                        label='Nombre '
                        value={value}
                        onChange={e=>setValue(e.target.value)}
                        variant='outlined'
                        fullWidth
                    />
                    <Button 
                        fullWidth 
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