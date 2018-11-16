import React from "react";
import { Col, Card } from "react-materialize";
import "./Card.css"

const Cards = props => {
  return (
      <Col m={6} s={12}>
        <Card
          className=""
          textClassName="black-text"
        >
          {props.children}
        </Card>
      </Col>
  );
};

export default Cards;