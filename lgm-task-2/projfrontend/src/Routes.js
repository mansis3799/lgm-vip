import React from 'react';
import { BrowserRouter,Switch,Route} from "react-router-dom";
import Base from './core/Base';


export default function Routes(){
    return(
        <BrowserRouter> 
            <Switch>
                <Route path="/" exact component={Base}></Route>
            </Switch>
        </BrowserRouter>
    )
}