import React from "react";
import { Row, Input, Button } from 'react-materialize';

const answerArray = ["z", "x", "y"];

const AnswerFeed = () => (

    answerArray.map((answer) =>
        <Row>
            <h1>{answer}</h1>
        </Row>
    )


)

export default AnswerFeed;