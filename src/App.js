import React from "react";
import Club from "./MyComponents/Club";
import Xenium from "./Xenium/Xenium";
import Xenium_final from "./Xenium/Xenium_final";
import Nav from "./Home/navbar";
// import Form from "./Form/Form";
// import "./App.css";
import Home from "./Home/Home";
import {Route} from "react-router-dom";
import {Switch, useLocation} from "react-router-dom";
// import data from "./MyComponents/data.json";

function App() {
  return (
    <div>
      {/* <Nav/> */}
      {/* <Xenium />  */}
      <Xenium_final/>
      {/* <Club/>  */}
      {/* <Form />; */}
      {/* <Home />   */}
      {/* <Navbar /> */}
          {/* <Switch location={location} key={location.key}>
            <Route exact path="/">
              <HomeComponent />
            </Route>
          </Switch>   */}
    </div>
  );
}

export default App;
