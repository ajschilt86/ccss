import React, { Component } from "react";
import Form from "../../components/Form";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import { Input, Row, Button } from "react-materialize";
import QuestionRow from "../../components/Form/QuestionRow";

class Profile extends Component {
    questions = ["30 Second Pitch", "My Skills", "My Passions", "My Values", "Help Wanted"];


    //these are the dynamic elements on the profile page    
    state = {
        questionResponse: "",
        skills: "",
        passions: "",
        values: "",
        help: "",
        UID: "",
        Email: "",
        Industry: ""
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
                this.setState({ Answers: res.data, title: "", author: "", synopsis: "" })
            )
            .catch(err => console.log(err));
    };


    //records data when questionOneAnswer button is pressed
    handleFormSubmit = event => {
        event.preventDefault();
        const eventData = event.target.value
        console.log(eventData);
        if (this.state.questionOneAnswer) {
            API.saveAnswers({
                questionResponse: this.state.questionResponse,
                skills: this.state.skills,
                passions: this.state.passions,
                values: this.state.values,
                help: this.state.help,
                UID: this.state.questionOneAnswer,
                Email: this.state.questionOneAnswer,
                Industry: this.state.questionOneAnswer,
            })
                .then(res => this.loadProfile())
                .catch(err => console.log(err));
        }
    };

    // handleFormSubmit = (e, inputName) => {
    //     const inputField = e.target[inputName];
    //     console.log(inputField.name, inputField.value)
    //     e.preventDefault();
    // }

    //renders our forms
    render() {
        return (
            <div>
                <Nav />
                {/* <Form handleFormSubmit={this.handleFormSubmit} /> */}

                <form>
                    <Row>
                        <Input
                            s={12}
                            value={this.state.questionResponse}
                            onChange={this.handleInputChange}
                            name="questionResponse"
                            label="30 Second Pitch"
                            placeholder="Describe yourself"
                        />
                        <Button
                            disabled={!this.state.questionResponse}
                        >Save</Button>
                    </Row>
                    <Row>
                        <Input
                            s={12}
                            value={this.state.skills}
                            onChange={this.handleInputChange}
                            name="skills"
                            label="My Skills"
                            placeholder="My skills include..."
                        />
                        <Button>Save</Button>
                    </Row>
                    <Row>
                        <Input
                            s={12}
                            value={this.state.passions}
                            onChange={this.handleInputChange}
                            name="passions"
                            label="My Passions"
                            placeholder="My passions are..."
                        />
                        <Button>Save</Button>
                    </Row>
                    <Row>
                        <Input
                            s={12}
                            value={this.state.values}
                            onChange={this.handleInputChange}
                            name="values"
                            label="My values are..."
                        />
                        <Button>Save</Button>
                    </Row>
                    <Row>
                        <Input
                            s={12}
                            value={this.state.help}
                            onChange={this.handleInputChange}
                            name="help"
                            label="I am looking for..."
                        />
                        <Button>Save</Button>
                    </Row>
                </form>
            </div >
        )
    }
}

//exports Profile for use
export default Profile;