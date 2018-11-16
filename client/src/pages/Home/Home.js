import React, { Component } from "react";
import { Navbar, NavItem, Row, Col, Input, Button } from "react-materialize";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Login from "../../components/Login";
import Logout from "../../components/Logout";
import { app, base } from "../../base";
import "./Home.css";

class App extends Component {
  constructor() {
    super();
    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: true
    };
  }

  setCurrentUser(user) {
    if (user) {
      this.setState({
        currentUser: user,
        authenticated: true
      });
      console.log(this.state.currentUser);
    } else {
      this.setState({
        currentUser: null,
        authenticated: false
      });
    }
  }

  componentWillMount() {
    this.removeAuthListener = app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeAuthListener();
  }

  render() {
    return (
      <div className="homeBody">
        <BrowserRouter>
          <div id="homeHeader">
            <Header 
              authenticated={this.state.authenticated}
            />
            <div className="main-content" style={{ padding: "1em" }}>
              <div className="workspace">
                <Route
                  exact
                  path="/login"
                  render={props => {
                    return (
                      <Login setCurrentUser={this.setCurrentUser} {...props} />
                    );
                  }}
                />
                <Route exact path="/logout" component={Logout} />
              </div>
            </div>
          </div>
        </BrowserRouter>
        <div className="homeContainer">
          <img
            src="./images/chicagoBackground.jpg"
            width="100%"
            alt="chicago"
          />
          <a href="#homeHeader"><h1 className="homePageTitle">Skill Share Free Questionnaire</h1></a>
          <div className="container">
            <div className="hero">
            </div>
            <Row>
              <Col s={12} className="grid-example">
                <div className="mainPageParagraphOne">
                  <img src="./images/high-five.jpg" height="250px"></img>
                  <h1>In hand new connections</h1>
                  <p>
                    We're three friends attending a Northwestern Bootcamp and we
                    were challenged to make an app that has unique utility. To
                    achieve this we created a way to speed network online. Using
                    the Chicago Community Skill Share (CCSS) you can promote
                    yourself and find partners, collaborators, and friends. It's
                    free to use for anyone.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={12} className="grid-example">
                <div className="mainPageParagraphTwo">
                  <img src="./images/networking.jpg" height="250px"></img>
                  <h1>Online Speed Networking</h1>
                  <p>
                    Networking can be time consuming and demanding. In order to make things easier and faster we've brought professional networking online to help people connect with each other. You don't need to show up after work or go to any events hoping to meet someone new. Our system is designed with the principals of speed networking in mind. You can quickly browse a list of responses to questions like "what are your skills" or "help wanted". This is a great way to get to know your local Chicago community!
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={12} className="grid-example">
                <div className="mainPageParagraphThree">
                  <img src="./images/chicagoBridge.jpg" height="250px"></img>
                  <h1>Free Questionnaire</h1>
                  <p>
                    Answer 5 quick questions and then browse other people's
                    answers. See what skills people in your area are offering.
                    Post and find help wanted ads. Meet passionate people. Make
                    new connections.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <a href="#homeHeader"><h6 className="homePageSignin-Out">Sign-Up/Sign-In</h6></a>
          <h3 className="homePageTitle2">Thank you for enriching your community</h3>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;