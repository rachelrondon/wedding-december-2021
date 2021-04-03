import React, { Component } from 'react';
import './App.css';
import LandingPage from './landingpage';
import Schedule from './schedule';
import NavBar from './navbar.js';
import Travel from './travel';
import ThingsToDo from './thingsToDo';
import Registry from './registry';
import Photos from './photos';
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div className="App">
      <NavBar />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/schedule" component={Schedule} exact />
            <Route path="/travel" component={Travel} exact />
            <Route path="/things-to-do" component={ThingsToDo} exact />
            <Route path="/registry" component={Registry} exact />
            <Route path="/photos" component={Photos} exact />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
