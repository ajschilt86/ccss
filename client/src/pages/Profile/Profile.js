import React, { Component } from "react";
import Form from "../../components/Form";
import API from "../../utils/API";
import Nav from "../../components/Nav";

class Profile extends Component {

    //these are the dynamic elements on the profile page    
    state = {

    };

    handleAnswerUpdate = () => {
        this.setState({})
    }

    //waits for component to mount
    componentDidMount() {
        // this.loadProfile();
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
        event.persist();
        const eventData = event.target.value
        console.log(eventData);
        if (this.state.questionOneAnswer) {
            API.saveAnswers({
                questionResponse: event.target.questionOneAnswer,
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
                <Form handleFormSubmit={this.handleFormSubmit} />
            </div>
        )
    }
}

//exports Profile for use
export default Profile;