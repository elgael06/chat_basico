import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

const CrearSala = ({
    event=e=>e
}) => {
    const [value,setValue] = useState('');

    const enviar = e => {
        e.preventDefault();
        event(value);
        setValue('');
    }
   
   return(<form onSubmit={enviar}>
    <TextField 
        value={value}
        onChange={e=>setValue(e.target.value)}
        label='Nueva sala'
        size='small'
        variant='outlined' 
    />
    <Button onClick={enviar} disabled={!value}>
        crear
    </Button>
</form>);
}
export default CrearSala;