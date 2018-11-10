import React, { Component } from "react";
import { Row, Input, Button } from 'react-materialize';
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";
import Cards from "../../components/Card";





class AnswerFeed extends Component {
    state = {
        answers: ["test1", "test2"],
        email: "",
        industry: ""
    };

    componentDidMount() {
        this.loadAnswers()
    }

    loadAnswers() {
        API.getAnswersByQuest("pitch")
            .then(res => {
                this.setState({
                    answers: res.data
                })
            })
    }

    // // this.loadAnswers();
    // loadAnswers = () => {
    //     API.getAnswersByQuest("pitch")
    //         .then(function (res) { 
    //             // const dat = res.data[0]
    //             // this.state.answers.push(dat)
    //             // this.state.answers.push(res.data)
    //             console.log(this.state)
    //             console.log(res)
    //             // console.log(res.data)
    //             // console.log(typeof(res.data))
    //         })
    //         .catch(err => 
    //             console.log(err)
    //         );

    // };




render() {
    return (
        <div>
            <h1>Share your 30 second pitch!</h1>
            <List>
                {this.state.answers.map((answer) => 
                    <h1>{answer.answer}</h1>
                )}
            </List>
        </div>
    )
}
}


export default AnswerFeed;
