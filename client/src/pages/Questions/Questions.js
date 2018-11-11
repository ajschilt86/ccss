import React, { Component } from "react";
import { Row, Input, Button } from 'react-materialize';
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";
import Cards from "../../components/Card";
import "./Questions.css"




class AnswerFeed extends Component {
    state = {
        answersIndustry: [],
        answers: ["test1", "test2"],
        email: "",
        industry: ""
    };

    componentDidMount() {
        this.loadAnswers()
    }

    loadAnswers() {
        API.getAnswersByIndustry(this.state.industry)
            .then(res => {
                this.setState({
                    answersIndustry: res.data
                })
                console.log(this.state.answersIndustry)
                    for(let i in this.state.answersIndustry) {
                        if(this.state.answersIndustry[i].pitch === "pitch") {
                            this.state.answers.push(this.state.answersIndustry)
                        }
                    }


                // API.getAnswersByQuest("pitch")
                //     .then(res => {
                //         this.setState({
                //             answers: res.data
                //         })
                //     })
            })
    }

    render() {
        return (
            <div>
                <h1>Share your 30 second pitch!</h1>

                <div className="container">
                    <Row>
                        <Input
                            s={12}
                            type='select'
                            name="industry"
                            onChange={this.handleInputChange}
                            label="Industry"
                            defaultValue='2'
                            placeholder="Choose Industry">
                            <option value='All'>All Industries</option>
                            <option value='Music'>Music</option>
                            <option value='Art'>Art</option>
                            <option value='Entrepreneurship'>Entrepreneurship</option>
                        </Input>
                    </Row>
                    {this.state.answers.map((answer) =>
                        <Cards>
                            <ListItem key={answer._id}>
                                <h2>{answer.answer}</h2>
                                <h4>by {answer.email}</h4>
                                <h4>Industry: {answer.industry}</h4>
                            </ListItem>
                        </Cards>
                    )}
                </div>

            </div>
        )
    }
}


export default AnswerFeed;
