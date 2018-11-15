import React, { Component } from "react";
import { Row, Input, Button } from 'react-materialize';
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";
import Cards from "../../components/Card";
import "./Question2.css"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"




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

        API.getAnswersByQuest("skills")
            .then(res => {
                this.setState({
                    answers: res.data
                })
            })

    }

    render() {
        return (
            <div className="question2Background">
                <div className="question2Header">
                    <h1 className="question2Title">What are your skills?</h1>
                    <Nav style={{color: "red"}}/>
                </div>
                <div className="container question2Container">

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
