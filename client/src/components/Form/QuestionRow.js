import React from "react";
import { Row, Input, Button } from 'react-materialize';


const QuestionRow = (props) => {
    console.log(props)
    return <form onSubmit={(event) =>  {
        console.log("question row ", event);
        props.handleFormSubmit(event)}}>
        
        <Row>
            <Input s={12} label={props.questionText} id="questionOneAnswer" name="questionOneAnswer" />
            <Button waves='light' id="questionOne" type="submit">save</Button>
        </Row>
    </form>
}

export default QuestionRow;