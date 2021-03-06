import React from 'react';
import{BrowserRouter, Route, Switch} from 'react-router-dom';
import Logon from './pages/Logon/Index';
import Register from './pages/Register/Index';
import Profile from './pages/Profile/Index';
import NewIncident from './pages/NewIncident/Index';
import Detail from './pages/Detail/Index';
//Switch garante que apenas uma rota seja executada/chamada por momento

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact component={Logon}/>
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/detail" component={Detail}/>
                <Route path="/incidents/new" component={NewIncident}/>
            </Switch>
        </BrowserRouter>
    );
}