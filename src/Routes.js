import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import Home from "./components/MainView/Home/Home";
import Node from "./components/MainView/Node/Node";
import Network from "./components/MainView/Network/Network";
import Destinations from "./components/MainView/Destinations/Destinations";
import Country from "./components/MainView/Destinations/Country/Country";

// import Node from "./components/MainView/Node";
// import Network from "./components/MainView/Network";
// import About from "./components/MainView/About";

const Routes = () => {
  return (
    <Switch>
      this is routes page
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/node" component={Node} />
      <Route path="/network" component={Network} />
      <Route exact path="/destinations" component={Destinations} />
      <Route exact path="/destinations/:country" component={Country} />
      {/* <Route path="/node" component={Node} />
      <Route path="/network" component={Network} />
      <Route path="/about" component={About} /> */}
    </Switch>
  );
};

export default Routes;
