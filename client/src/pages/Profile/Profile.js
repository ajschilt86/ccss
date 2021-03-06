import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import { Input, Row, Button } from "react-materialize";
import "./Profile.css"
import Footer from "../../components/Footer"
import * as firebase from 'firebase';
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

class Profile extends Component {
    //these are the dynamic elements on the profile page    
    state = {
        pitch: "",
        skills: "",
        passions: "",
        values: "",
        help: "",
        UID: "",
        email: "",
        industry: ""
    };

    toastId = null;

    notify = () => this.toastId = toast("We've collected your submission!", { type: toast.TYPE.INFO, autoClose: 2000 });

    handleAnswerUpdate = () => {
        this.setState({})
    }

    //waits for component to mount
    componentDidMount() {
        // this.loadProfile();
        this.getUID();
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    //function to load existing profile information
    loadProfile = () => {
        API.getAnswersByUID()
            .then(res =>
                console.log(res.data)
                // this.setState({ Answers: res.data, pitch: "" })
            )
            .catch(err => console.log(err));
    };

    //records data when questionOneAnswer button is pressed
    handleFormSubmitPitch = event => {
        event.preventDefault();
        if (this.state.pitch) {
            API.saveAnswers({
                answer: this.state.pitch,
                UID: this.state.uid,
                email: this.state.email,
                industry: this.state.industry,
                question: document.getElementById("pitch").name,
            })
                .then(this.notify)
                .catch(err => console.log(err));
        }
    };

    handleFormSubmitSkills = event => {
        event.preventDefault();
        if (this.state.skills) {
            API.saveAnswers({
                answer: this.state.skills,
                UID: this.state.uid,
                email: this.state.email,
                industry: this.state.industry,
                question: document.getElementById("skills").name,
            })
                .then(this.notify)
                .catch(err => console.log(err));
        }
    };

    handleFormSubmitPassions = event => {
        event.preventDefault();
        if (this.state.passions) {
            API.saveAnswers({
                answer: this.state.passions,
                UID: this.state.uid,
                email: this.state.email,
                industry: this.state.industry,
                question: document.getElementById("passions").name,
            })
                .then(this.notify)
                .catch(err => console.log(err));
        }
    };

    handleFormSubmitValues = event => {
        event.preventDefault();
        if (this.state.values) {
            API.saveAnswers({
                answer: this.state.values,
                UID: this.state.uid,
                email: this.state.email,
                industry: this.state.industry,
                question: document.getElementById("values").name,
            })
                .then(this.notify)
                .catch(err => console.log(err));
        }
    };

    handleFormSubmitHelp = event => {
        event.preventDefault();
        if (this.state.help) {
            API.saveAnswers({
                answer: this.state.help,
                UID: this.state.uid,
                email: this.state.email,
                industry: this.state.industry,
                question: document.getElementById("help").name,
            })
                .then(this.notify)
                .catch(err => console.log(err));
        }

    };

    getUID = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {                
                this.setState({ ...user })                
            } else {
                // No user is signed in.
                console.log('There is no logged in user');
                return ("unknown")
            }
        });
    }

    //renders our forms
    render() {     
        return (
            <div className="profileBackground">
                <div className="container profileContainer">
                    <Row>
                        <img src="./images/logo2.jpg" className="profileTitle" alt="ccss logo"></img>
                        <h1>Questionnaire</h1>
                    </Row>
                    <Nav />

                    <form>
                        <Row>
                            <Input
                                s={12}
                                type='select'
                                name="industry"
                                onChange={this.handleInputChange}
                                label="Industry"
                                defaultValue='2'>
                                <option value='All'>All Industries</option>
                                <option value='Music'>Music</option>
                                <option value='Art'>Art</option>
                                <option value='Entrepreneurship'>Entrepreneurship</option>
                            </Input>
                        </Row>
                        <Row>
                            <Input
                                s={12}
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="email"
                                label="E-Mail"
                                placeholder="name@domain.com"
                            />
                        </Row>
                        <Row>
                            <Input
                                s={12}
                                id="pitch"
                                value={this.state.pitch}
                                onChange={this.handleInputChange}
                                name="pitch"
                                label="30 Second Pitch"
                                placeholder="Describe yourself"
                            />
                            <Button
                                disabled={!this.state.pitch} onClick={this.handleFormSubmitPitch}>
                                Save
                                <ToastContainer />
                            </Button>
                        </Row>
                        <Row>
                            <Input
                                s={12}
                                id="skills"
                                value={this.state.skills}
                                onChange={this.handleInputChange}
                                name="skills"
                                label="My Skills"
                                placeholder="My skills include..."
                            />
                            <Button
                                disabled={!this.state.skills} onClick={this.handleFormSubmitSkills}>
                                Save
                                <ToastContainer />
                        </Button>
                        </Row>
                        <Row>
                            <Input
                                s={12}
                                id="passions"
                                value={this.state.passions}
                                onChange={this.handleInputChange}
                                name="passions"
                                label="My Passions"
                                placeholder="My passions are..."
                            />
                            <Button
                                disabled={!this.state.passions} onClick={this.handleFormSubmitPassions}>
                                Save
                                <ToastContainer />
                            </Button>
                        </Row>
                        <Row>
                            <Input
                                s={12}
                                id="values"
                                value={this.state.values}
                                onChange={this.handleInputChange}
                                name="values"
                                label="My values are..."
                            />
                            <Button
                                disabled={!this.state.values} onClick={this.handleFormSubmitValues}>
                                Save
                                <ToastContainer />
                        </Button>
                        </Row>
                        <Row>
                            <Input
                                s={12}
                                id="help"
                                value={this.state.help}
                                onChange={this.handleInputChange}
                                name="help"
                                label="I am looking for..."
                            />
                            <Button
                                disabled={!this.state.help} onClick={this.handleFormSubmitHelp}>
                                Save
                                <ToastContainer />
                        </Button>
                        </Row>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}

//exports Profile for use
export default Profile;