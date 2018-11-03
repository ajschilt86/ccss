import React from "react";
import { Row, Input, Button } from 'react-materialize';


const QuestionRow = (props) => {
    return <Row>
        <form
            onSubmit={e => {
                props.handleFormSubmit(e, props.inputName)
            }}>
            <Input
                s={12}
                label={props.questionText}
                name={props.inputName} />
            <Button waves='light' type="submit">
                Save
                </Button>
        </form>
    </Row>

}

export default QuestionRow;