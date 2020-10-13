
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mensajes,{initialMensajes} from './reducer/mensajes';
import salas, { initialSalas } from './reducer/salas';
import ui, { initialUI } from './reducer/ui';
import usuario, { initialUsuario } from './reducer/usuario';

const reducers = combineReducers({
    mensajes:mensajes,
    salas:salas,
    usuario:usuario,
    ui
});

export default createStore(
    reducers,
    {
        mensajes:initialMensajes,
        salas:initialSalas,
        usuario:initialUsuario,
        ui:initialUI,
    },
    applyMiddleware(thunk)
);
