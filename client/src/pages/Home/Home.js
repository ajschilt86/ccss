import React, { Component } from "react";
import { Navbar, NavItem, Row, Col, Input, Button } from "react-materialize";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
// import { Spinner } from "@blueprintjs/core";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Login from "../../components/Login";
import Logout from "../../components/Logout";
import { app, base } from "../../base";
import "./Home.css";
// import {} from 'dotenv/config';

// function AuthenticatedRoute({component: Component, authenticated, ...rest}) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => authenticated === true
//           ? <Component {...props} {...rest} />
//           : <Redirect to={{pathname: '/login', state: {from: props.location}}} /> } />
//   )
// }

// function ShowRoute({component: Component, items, param, ...rest}) {
//   return (
//     <Route
//       {...rest}
//       render={({match, ...props}) => {
//         if (rest.requireAuth === true && !rest.authenticated) {
//           return (
//             <Redirect to={{pathname: '/login', state: {from: props.location}}} />
//           )
//         }

//         const item = items[match.params[param]]
//         if (item) {
//           return <Component item={item} {...props} match={match} {...rest}/>
//         } else {
//           return <h1>Not Found</h1>
//         }
//       }}
//     />
//   )
// }

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

        // base.removeBinding(this.songsRef);
      }
    });
  }

  componentWillUnmount() {
    this.removeAuthListener();
    // base.removeBinding(this.songsRef);
  }

  render() {
    // if (this.state.loading === true) {
    //   return (
    //     <div
    //       style={{
    //         textAlign: "center",
    //         position: "absolute",
    //         top: "25%",
    //         left: "50%"
    //       }}
    //     >
    //       <h3>Loading</h3>
    //       <Spinner />
    //     </div>
    //   );
    // }

    return (
      <div className="homeBody">
        <BrowserRouter>
          <div>
            <Header
              addSong={this.addSong}
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
                {/* <AuthenticatedRoute
                  exact
                  path="/songs"
                  authenticated={this.state.authenticated}
                  component={SongList}
                  songs={this.state.songs} />
                <ShowRoute
                  path="/songs/:songId"
                  component={ChordEditor}
                  authenticated={this.state.authenticated}
                  requireAuth={true}
                  param="songId"
                  updateSong={this.updateSong}
                  items={this.state.songs} /> */}
              </div>
            </div>
          </div>
        </BrowserRouter>
        <div className="homeContainer">
          <img
            src="./images/chicago.jpg"
            width="100%"
            // height="500px"
            alt="chicago"
          />
          <a href="/profile"><h1 className="homePageTitle">Skill Share Free Questionnaire</h1></a>
          <div className="container">
            <div className="hero">
              {/* <video width="100vw" height="100vh" controls>
                <source src="movie.mp4" type="video/mp4" />
              </video> */}
              {/* <Row>
                <Input s={6} label="Email" />
                <Input s={6} label="Password (Must be 6 characters or more)" />
                <Button waves="light" id="signUpButton">
                  Sign up
                </Button>
                <Button waves="light" id="signInButton">
                  Sign in
                </Button>
              </Row> */}
            </div>
            {/* <div className="divider" /> */}
            <Row>
              <Col s={6} className="grid-example">
                {/* <img src="./images/all-hands.jpg" width="380px" alt="all hands" /> */}
                {/* <img
                  src="./images/market.jpg"
                  width="380px"
                  height="380px"
                  alt="all hands"
                /> */}
              </Col>
              <Col s={12} className="grid-example">
                <div className="mainPageParagraphOne">
                  <h1>In hand new connections</h1>
                  <h3>Free to use!</h3>
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
                  <h1>Online Speed Networking</h1>
                  <p>
                    Answer 5 quick questions and then browse other people's
                    answers. See what skills people in your area are offering.
                    Post and find help wanted ads. Meet passionate people. Make
                    new connections.
                  </p>
                </div>
              </Col>
              <Col s={6} className="grid-example">
                {/* <img
                  src="./images/market.jpg"
                  width="380"
                  height="380px"
                  alt="market"
                /> */}
              </Col>
            </Row>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import { Navbar, NavItem, Row, Col, Input, Button } from 'react-materialize'

// class Authentication extends Component {
//     // add firebase here
//     // add firebase here
//     // add firebase here

//     render() {
//         return (
//             <div>
//                 <Navbar brand='Chicago Community Skill Share' right>
//                     <NavItem href='#signInButton'>Sign in</NavItem>
//                     <NavItem href='#signUpButton'>Sign up</NavItem>
//                 </Navbar>
//                 <div className="container">
//                     <div className="hero">
//                         <video width="100vw" height="100vh" controls>
//                             <source src="movie.mp4" type="video/mp4"></source>
//                         </video>
//                         <Row>
//                             <Input s={6} label="Email" />
//                             <Input s={6} label="Password (Must be 6 characters or more)" />
//                             <Button waves='light' id="signUpButton">Sign up</Button>
//                             <Button waves='light' id="signInButton">Sign in</Button>
//                         </Row>
//                     </div>
//                     <div className="divider"></div>
//                     <Row>
//                         <Col s={6} className='grid-example'>
//                             <img src="./images/all-hands.jpg" alt="all hands" />
//                         </Col>
//                         <Col s={6} className='grid-example'>
//                             <h1>In hand new connections</h1>
//                             <h3>Free to use!</h3>
//                             <p>We're three friends attending a Northwestern Bootcamp and we were challenged to make an app that has unique utility. To achieve this we created a way to speed network online. Using the Chicago Community Skill Share (CCSS) you can promote yourself and find partners, collaborators, and friends. It's free to use for anyone.</p>
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col s={6} className='grid-example'>
//                             <h1>Online Speed Networking</h1>
//                             <p>Answer 5 quick questions and then browse other people's answers. See what skills people in your area are offering. Post and find help wanted ads. Meet passionate people. Make new connections.</p>
//                         </Col>
//                         <Col s={6} className='grid-example'>
//                             <img src="./pages/Home/images/market.jpg" alt="market" />
//                         </Col>
//                     </Row>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Authentication;
