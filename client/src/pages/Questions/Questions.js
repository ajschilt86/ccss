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
        this.loadAnswers();
    };

    loadAnswers = () => {
        API.getAnswersByQuest("pitch")
            .then (res =>
                this.state.answers.push(res.data),
                console.log(this.state.answers)
            )
            .catch(err => 
                console.log(err)
            );
            
    };

    render() {
        return (
            <div>
                <h1>Share your 30 second pitch!</h1>
                    <List>
                        {this.state.answers.map(answers => (
                            
                            <h1>{answers}</h1>
                            
                        ))}
                    </List>
            
            </div>
        )
    }


}

export default AnswerFeed;
