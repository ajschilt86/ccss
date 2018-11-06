import React, { Component } from "react";
// import Form from "../../components/Form";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import { Input, Row, Button } from "react-materialize";
// import QuestionRow from "../../components/Form/QuestionRow";

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

    handleAnswerUpdate = () => {
        this.setState({})
    }

    //waits for component to mount
    componentDidMount() {
        // this.loadProfile();
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
                this.setState({ Answers: res.data, pitch: "" })
            )
            .catch(err => console.log(err));
    };


    //records data when questionOneAnswer button is pressed
    handleFormSubmitPitch = event => {
        event.preventDefault();
        console.log(event);
        if (this.state.pitch) {
            API.saveAnswers({
                answer: this.state.pitch,
                UID: this.state.questionOneAnswer,
                email: this.state.email,
                industry: this.state.industry,
                question: document.getElementById("pitch").name,
            })
                .catch(err => console.log(err));
        }
    };

    handleFormSubmitSkills = event => {
        event.preventDefault();
        console.log(event);
        if (this.state.skills) {
            API.saveAnswers({
                answer: this.state.skills,
                UID: this.state.questionOneAnswer,
                email: this.state.email,
                industry: this.state.industry,
                question: document.getElementById("skills").name,
            })
                .catch(err => console.log(err));
        }
    };

    handleFormSubmitPassions = event => {
        event.preventDefault();
        console.log(event);
        if (this.state.passions) {
            API.saveAnswers({
                answer: this.state.passions,
                UID: this.state.questionOneAnswer,
                email: this.state.email,
                industry: this.state.industry,
                question: document.getElementById("passions").name,
            })
                .catch(err => console.log(err));
        }
    };

    handleFormSubmitValues = event => {
        event.preventDefault();
        console.log(event);
        if (this.state.values) {
            API.saveAnswers({
                answer: this.state.values,
                UID: this.state.questionOneAnswer,
                email: this.state.email,
                industry: this.state.industry,
                question: document.getElementById("values").name,
            })
                .catch(err => console.log(err));
        }
    };

    handleFormSubmitHelp = event => {
        event.preventDefault();
        console.log(event);
        if (this.state.help) {
            API.saveAnswers({
                answer: this.state.help,
                UID: this.state.questionOneAnswer,
                email: this.state.email,
                industry: this.state.industry,
                question: document.getElementById("help").name,
            })
                .catch(err => console.log(err));
        }
    };

    //renders our forms
    render() {
        return (
            <div>
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
                            <option value='Default'>Choose Industry</option>
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
                        </Button>
                    </Row>
                </form>
            </div >
        )
    }
}

//exports Profile for use
export default Profile;