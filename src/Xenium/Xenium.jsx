import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Event from './Xenium_Events';
import data from '../data/Xenium.json';
import XeniumEventCards from './Xenium_Event_Cards';

export default function Xenium() {
    let dat = data;

    return (
        <>
            <XeniumEventCards />
            <BrowserRouter>
            {/* <Event content={dat.coding} /> */}
                <Switch>
                    <Route exact path="/xenium">
                        <Event content={dat.coding} />
                    </Route>
                    <Route exact path="/xenium/webdev">
                        <Event content={dat.webd} />
                    </Route>
                    <Route exact path="/xenium/coding">
                        <Event content={dat.coding} />
                    </Route>
                    <Route exact path="/xenium/impromptu">
                        <Event content={dat.imp} />
                    </Route>
                    <Route exact path="/xenium/gd">
                        <Event content={dat.gd} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

