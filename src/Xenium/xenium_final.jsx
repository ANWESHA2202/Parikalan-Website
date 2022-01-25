import React from 'react';
import {Switch, Route,useLocation} from "react-router-dom";
import Event from './Events';
import data from '../data/Xenium.json';
import Xenium from './Xenium';

export default function Xenium_final() {
    const location = useLocation();
    return(
    <>
    {/* <Xenium/> */}
    <Switch location={location} key={location.key}>
            
        <Route path="/WebD">
            <Event content={data.webd}/>
        </Route>
        <Route path="/">
            <Event/>
        </Route>
    </Switch>  
    </>
    )
}
