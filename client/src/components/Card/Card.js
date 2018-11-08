import React from "react";
import { Row, Input, Col, Card } from "react-materialize";

const Cards = props => {
  return (
    <Col m={6} s={12}>
      <Card
        className=""
        textClassName="black-text"
        title="Card title"
        actions={[<a href="#">{this.answers.email}</a>]}
      >
        {this.answers.answer}
      </Card>
    </Col>
  );
};

export default Cards;