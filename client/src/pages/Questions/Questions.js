import React, { Component } from "react";
import { Row, Input, Button } from 'react-materialize';
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";





class AnswerFeed extends Component {

    state = {
        answers: [],
        email: "",
        industry: ""
    };

    componentDidMount() {
        this.loadAnswers();
    };

    loadAnswers = () => {
        API.getAnswersByQuest("pitch")
            .then(res =>
                this.setState({ answers: res.data, answer: "", email: "", industry: "" })
            ).then (res =>
                this.state.answers.push({answers: res.data}),
                console.log(this.state.answers),
                
            ).then (res =>
                console.log("test: " + res.data)
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
            {
                this.state.answers.length ? (
                    <List>
                        {this.state.answers.map(answers => (
                            <ListItem key={this.state._id}>
                                <Link to={"/answers/" + this.state._id}>
                                    <strong>
                                        {this.state.answer} by {this.state.email} in {this.state.industry}
                                    </strong>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3>Try again!</h3>
                    )
            }
            </div>
        )
    }


}

export default AnswerFeed;
