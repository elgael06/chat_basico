import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

import { useSelector } from 'react-redux';

import HomeApp from '../pages/home_app';
import RegistroApp from '../pages/registro_app';
import SalaApp from '../pages/sala_app';


const Routes = () => {
    const {usuario=null} = useSelector(state => state)

    useEffect(()=>initApp());

    const initApp = () => {
        console.log('rutas',usuario);
    }

    return(
        <Router>
            {usuario!==null ?
            <Switch>
                <Route path='/' component={HomeApp} exact/>
                <Route path='/sala/:id' component={SalaApp} exact/>

                <Route path='' component={()=><Redirect to='/' />} />
            </Switch>:
            <Switch>
                <Route path='/registro' component={RegistroApp} exact/>
                <Route path='' component={()=><Redirect to='/registro' />} />
            </Switch>}
        </Router>
    );
}

export default Routes;
