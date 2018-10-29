import React from "react";
import { Row, Input } from 'react-materialize'

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
            <Input placeholder="Placeholder" s={12} label="30 Second Pitch" />
            <Input placeholder="Placeholder" s={12} label="My Skills" />
            <Input placeholder="Placeholder" s={12} label="My Passions" />
            <Input placeholder="Placeholder" s={12} label="My Values" />
            <Input placeholder="Placeholder" s={12} label="Help I Need" />
        </Row>
    </div>
);

export default Form;
