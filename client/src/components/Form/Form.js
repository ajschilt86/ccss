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
            <Input placeholder="Placeholder" s={12} label="30 Second Pitch" id="questionOneAnswer"/>
            <Button waves='light' id="questionOne">button</Button>
        </Row>
        <Row>
            <Input placeholder="Placeholder" s={12} label="My Skills" id="questionTwoAnswer"/>
            <Button waves='light' id="questionTwo">button</Button>
        </Row>
        <Row>
            <Input placeholder="Placeholder" s={12} label="My Passions" id="questionThreeAnswer"/>
            <Button waves='light' id="questionThree">button</Button>
        </Row>
        <Row>
            <Input placeholder="Placeholder" s={12} label="My Values" id="questionFourAnswer"/>
            <Button waves='light' id="questionFour">button</Button>
        </Row>
        <Row>
            <Input placeholder="Placeholder" s={12} label="Help I Need" id="questionFiveAnswer"/>
            <Button waves='light' id="questionFive">button</Button>
        </Row>
    </div>
);

export default Form;
