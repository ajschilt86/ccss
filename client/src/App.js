import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
// import Nav from "./components/Nav";
import Profile from "./pages/Profile";
import Question from "./pages/Questions";
import Question2 from "./pages/Question2";
import Question3 from "./pages/Question3";
import Question4 from "./pages/Question4";
import Question5 from "./pages/Question5";
import Home from "./pages/Home";


const App = () => (
  <Router>
    <div className="App">
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/questions" component={Question} />
        <Route exact path="/question2" component={Question2} />
        <Route exact path="/question3" component={Question3} />
        <Route exact path="/question4" component={Question4} />
        <Route exact path="/question5" component={Question5} />
      </Switch>
    </div>
  </Router>
);

export default App;
