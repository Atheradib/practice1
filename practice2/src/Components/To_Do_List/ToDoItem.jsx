import React, { useState } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";

export const ToDoItem = ({ item }) => {
  const [check, setCheck] = useState(false);
  return (
    <Card className="todoitem">
      <Row>
        <Col md={2}>
          <Form.Check onClick={() => setCheck(!check)}></Form.Check>
        </Col>
        <Col md={10}>
          <Form.Label>{check ? <del>{item}</del> : item}</Form.Label>
        </Col>
      </Row>
    </Card>
  );
};
