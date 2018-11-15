import React, { Component } from "react";
import { Row, Input, Button } from 'react-materialize';
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";
import Cards from "../../components/Card";
import "./Question5.css"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"




class AnswerFeed extends Component {
    state = {
        answersIndustry: [],
        answers: [],
        email: "",
        industry: ""
    };

    componentDidMount() {
        this.loadAnswers()
    }

    loadAnswers() {

        API.getAnswersByQuest("help")
            .then(res => {
                this.setState({
                    answers: res.data
                })
            })

    }

    render() {
        return (
            <div className="question5Background">
                <div className="question5Header">
                    <h1 className="question5Title">Post a help wanted ad!</h1>
                    <div className="questionNav">
                        <Nav />
                    </div>
                </div>
                <div className="container question5Container">

                    {/* <Row>
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
                    </Row> */}
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
                <Footer />
            </div>
        )
    }
}


export default AnswerFeed;
