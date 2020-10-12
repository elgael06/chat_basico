import React, { useState } from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    form:{
        display:'flex',
    },
    input:{
    flexGrow:1,
    alignSelf:'strech'
    }
}));

const CrearSala = ({
    event=e=>e
}) => {
    const [value,setValue] = useState('');

    const enviar = e => {
        e.preventDefault();
        event(value);
        setValue('');
    }

    const clases = useStyles();
   
   return(<form onSubmit={enviar} className={clases.form}>
    <TextField 
        className={clases.input}
        value={value}
        onChange={e=>setValue(e.target.value)}
        label='Nueva sala'
        size='small'
        variant='outlined' 
    />
    <Button onClick={enviar} disabled={!value} variant='text' color='secondary'>
        crear
    </Button>
</form>);
}
export default CrearSala;