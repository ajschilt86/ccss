import React, { Component } from "react";
import { Navbar, NavItem, Row, Col, Input, Button } from 'react-materialize'


class Authentication extends Component {
    // add firebase here
    // add firebase here
    // add firebase here
       
    
    render() {
        return (
            <div>
                <Navbar brand='Chicago Community Skill Share' right>
                    <NavItem href='#signInButton'>Sign in</NavItem>
                    <NavItem href='#signUpButton'>Sign up</NavItem>
                </Navbar>
                <div className="container">
                    <div className="hero">
                        <video width="100vw" height="100vh" controls>
                            <source src="movie.mp4" type="video/mp4"></source>
                        </video>
                        <Row>
                            <Input s={6} label="Email" />
                            <Input s={6} label="Password (Must be 6 characters or more)" />
                            <Button waves='light' id="signUpButton">Sign up</Button>
                            <Button waves='light' id="signInButton">Sign in</Button>
                        </Row>
                    </div>
                    <div className="divider"></div>
                    <Row>
                        <Col s={6} className='grid-example'>
                            <img src="/images/all-hands.jpg" alt="all hands" />
                        </Col>
                        <Col s={6} className='grid-example'>
                            <h1>In hand new connections</h1>
                            <h3>Free to use!</h3>
                            <p>We're three friends attending a Northwestern Bootcamp and we were challenged to make an app that has unique utility. To achieve this we created a way to speed network online. Using the Chicago Community Skill Share (CCSS) you can promote yourself and find partners, collaborators, and friends. It's free to use for anyone.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col s={6} className='grid-example'>
                            <h1>Online Speed Networking</h1>
                            <p>Answer 5 quick questions and then browse other people's answers. See what skills people in your area are offering. Post and find help wanted ads. Meet passionate people. Make new connections.</p>
                        </Col>
                        <Col s={6} className='grid-example'>
                            <img src="./pages/Home/images/market.jpg" alt="market" />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Authentication;
