import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Profile from "./pages/Profile";
import Home from "./pages/Home";


const App = () => (
  <Router>
    <div className="App">
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
  </Router>
);

export default App;
