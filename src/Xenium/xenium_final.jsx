import React from 'react';
import {Switch, Route,BrowserRouter,Link} from "react-router-dom";
import Event from './Events';
import data from '../data/Xenium.json';
import Xenium from './Xenium';

export default function Xenium_final() {
    let dat=data;

    // const event = document.
    return(
    <>
    <Xenium/>
    <BrowserRouter>
    <Event content={dat.coding}/>
    <Switch>
        <Route exact path="/xenium/webdev">
            <Event content={dat.webd}/>
        </Route>
        <Route exact path="/xenium/coding">
            <Event content={dat.coding}/>
        </Route>
        <Route exact path="/xenium/impromptu">
            <Event content={dat.imp}/>
        </Route>
        <Route exact path="/xenium/gd">
            <Event content={dat.gd}/>
        </Route>
        </Switch>
    </BrowserRouter>
    </>
    )
}
