import React from "react";
import { Row, Input, Col, Card } from "react-materialize";
import "./Card.css"


const Cards = props => {
  return (
    <div className="card">
      <Col m={6} s={12}>
        <Card
          className=""
          textClassName="black-text"
        >
          {props.children}
        </Card>
      </Col>
    </div>
  );
};

export default Cards;