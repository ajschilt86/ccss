import React, { Component } from "react";
import Form from "../../components/Form";
import API from "../../utils/API";

class Profile extends Component {

    //these are the dynamic elements on the profile page    
    state = {
        questionOneAnswer: "",
        questionTwoAnswer: "",
        questionThreeAnswer: "",
        questionFourAnswer: "",
        questionFiveAnswer: "",
    };

    //waits for component to mount
    componentDidMount() {
        this.loadProfile();
    }

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
        if (this.state.questionOneAnswer) {
            API.saveAnswers({
                questionOneAnswer: this.state.questionOneAnswer,
                UID: this.state.questionOneAnswer,
                Email: this.state.questionOneAnswer,
                Industry: this.state.questionOneAnswer,
            })
                .then(res => this.loadProfile())
                .catch(err => console.log(err));
        }
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.questionOneAnswer) {
            API.saveAnswers({
                questionTwoAnswer: this.state.questionTwoAnswer,
                UID: this.state.questionTwoAnswer,
                Email: this.state.questionTwoAnswer,
                Industry: this.state.questionTwoAnswer,
            })
                .then(res => this.loadProfile())
                .catch(err => console.log(err));
        }
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.questionOneAnswer) {
            API.saveAnswers({
                questionThreeAnswer: this.state.questionThreeAnswer,
                UID: this.state.questionThreeAnswer,
                Email: this.state.questionThreeAnswer,
                Industry: this.state.questionThreeAnswer,
            })
                .then(res => this.loadProfile())
                .catch(err => console.log(err));
        }
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.questionOneAnswer) {
            API.saveAnswers({
                questionFourAnswer: this.state.questionFourAnswer,
                UID: this.state.questionFourAnswer,
                Email: this.state.questionFourAnswer,
                Industry: this.state.questionFourAnswer,
            })
                .then(res => this.loadProfile())
                .catch(err => console.log(err));
        }
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.questionOneAnswer) {
            API.saveAnswers({
                questionFiveAnswer: this.state.questionFiveAnswer,
                UID: this.state.questionFiveAnswer,
                Email: this.state.questionFiveAnswer,
                Industry: this.state.questionFiveAnswer,
            })
                .then(res => this.loadProfile())
                .catch(err => console.log(err));
        }
    };

    //renders our forms
    render() {
        return (
            <Form />
        )
    }
}

//exports Profile for use
export default Profile;