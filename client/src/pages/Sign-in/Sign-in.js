import React, { Component } from "react";
import Form from "../../components/Form";
import { Row, Input, Button } from 'react-materialize';

class Profile extends Component {
    render() {
        return (
            <div className="container">

                <Row>
                    <Input s={12} label="Email" id="userEmail" name="userEmail" />
                    <Input s={12} label="Password (Must be 6 characters or more)" id="userPassword" name="userPassword" />
                    <Button waves='light' id="createProfile" type="submit">Create Profile</Button>
                    <Button waves='light' id="login" type="submit">Login</Button>
                </Row>

            </div>
        )

    }

}