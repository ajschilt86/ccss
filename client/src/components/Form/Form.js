import React from "react";
import { Row, Input, Button } from 'react-materialize'

const Form = props => (
    <div>
        <Row>
            <Input s={12} type='select' label="Industry" defaultValue='2'>
                <option value='1'>Music</option>
                <option value='2'>Art</option>
                <option value='3'>Entrepreneurship</option>
            </Input>
        </Row>
        <Row>
            <Input value={this.state.questionOneAnswer} s={12} label="30 Second Pitch" id="questionOneAnswer" name="questionOneAnswer" onChange={this.handleInputChange}/>
            <Button waves='light' id="questionOne" onClick={this.handleFormSubmit}>save</Button>
        </Row>
        <Row>
            <Input value={this.state.questionTwoAnswer} s={12} label="My Skills" id="questionTwoAnswer"/>
            <Button waves='light' id="questionTwo">save</Button>
        </Row>
        <Row>
            <Input value={this.state.questionThreeAnswer} s={12} label="My Passions" id="questionThreeAnswer"/>
            <Button waves='light' id="questionThree">save</Button>
        </Row>
        <Row>
            <Input value={this.state.questionFourAnswer} s={12} label="My Values" id="questionFourAnswer"/>
            <Button waves='light' id="questionFour">save</Button>
        </Row>
        <Row>
            <Input value={this.state.questionFiveAnswer} s={12} label="Help I Need" id="questionFiveAnswer"/>
            <Button waves='light' id="questionFive">save</Button>
        </Row>
    </div>
);

export default Form;
