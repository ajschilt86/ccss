import React, { Component } from "react";
// import Form from "../../components/Form";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import { Input, Row, Button } from "react-materialize";
// import QuestionRow from "../../components/Form/QuestionRow";

class Profile extends Component {
    questions = ["30 Second Pitch", "My Skills", "My Passions", "My Values", "Help Wanted"];


    //these are the dynamic elements on the profile page    
    state = {
        pitch: "",
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
    handleFormSubmitPitch = event => {
        event.preventDefault();
        const eventData = event.target.value
        console.log(eventData);
        if (this.state.questionOneAnswer) {
            API.saveAnswers({
                pitch: this.state.pitch,
                UID: this.state.questionOneAnswer,
                Email: this.state.questionOneAnswer,
                Industry: this.state.questionOneAnswer,
            })
                .then(res => this.loadProfile())
                .catch(err => console.log(err));
        }
    };

    handleFormSubmitSkills = event => {
        event.preventDefault();
        const eventData = event.target.value
        console.log(eventData);
        if (this.state.questionOneAnswer) {
            API.saveAnswers({
                skills: this.state.skills,
                UID: this.state.questionOneAnswer,
                Email: this.state.questionOneAnswer,
                Industry: this.state.questionOneAnswer,
            })
                .then(res => this.loadProfile())
                .catch(err => console.log(err));
        }
    };

    handleFormSubmitPassions = event => {
        event.preventDefault();
        const eventData = event.target.value
        console.log(eventData);
        if (this.state.questionOneAnswer) {
            API.saveAnswers({
                passions: this.state.passions,                
                UID: this.state.questionOneAnswer,
                Email: this.state.questionOneAnswer,
                Industry: this.state.questionOneAnswer,
            })
                .then(res => this.loadProfile())
                .catch(err => console.log(err));
        }
    };

    handleFormSubmitValues = event => {
        event.preventDefault();
        const eventData = event.target.value
        console.log(eventData);
        if (this.state.questionOneAnswer) {
            API.saveAnswers({
                values: this.state.values,
                UID: this.state.questionOneAnswer,
                Email: this.state.questionOneAnswer,
                Industry: this.state.questionOneAnswer,
            })
                .then(res => this.loadProfile())
                .catch(err => console.log(err));
        }
    };

    handleFormSubmitHelp = event => {
        event.preventDefault();
        const eventData = event.target.value
        console.log(eventData);
        if (this.state.questionOneAnswer) {
            API.saveAnswers({
                help: this.state.help,
                UID: this.state.questionOneAnswer,
                Email: this.state.questionOneAnswer,
                Industry: this.state.questionOneAnswer,
            })
                .then(res => this.loadProfile())
                .catch(err => console.log(err));
        }
    };

    //renders our forms
    render() {
        return (
            <div>
                <Nav />
                {/* <Form handleFormSubmit={this.handleFormSubmit} /> */}

                <form>
                    <Row>
            <           Input s={12} type='select' label="Industry" defaultValue='2'>
                            <option value='1'>Music</option>
                            <option value='2'>Art</option>
                            <option value='3'>Entrepreneurship</option>
                        </Input>
                    </Row>
                    <Row>
                        <Input
                            s={12}
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