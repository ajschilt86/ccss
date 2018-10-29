import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Profile from "./pages/Profile";

const App = () => (
  <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Profile} />
      </Switch>
    </div>
  </Router>
);

export default App;
