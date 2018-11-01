import React from "react";
import { Row, Input, Button } from 'react-materialize';


const QuestionRow = (props) => (

    <Row>
        <Input value={""} s={12} label="30 Second Pitch" id="questionOneAnswer" name="questionOneAnswer"  />
        <Button waves='light' id="questionOne" onClick={(event) => props.handleFormSubmit(event)}>save</Button>
    </Row>
)

export default QuestionRow;