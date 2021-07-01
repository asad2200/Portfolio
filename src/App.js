import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Contact from "./components/Contact";
import MouseParticles from 'react-mouse-particles'

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <MouseParticles g={1} num={6} color="random" cull="stats,image-wrapper" level={6} />      
    </React.Fragment>
  );
}

export default App;
