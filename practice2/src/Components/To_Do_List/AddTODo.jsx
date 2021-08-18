import React, { useState } from "react";
import { Button, Card, Form, Col, Row } from "react-bootstrap";

export const AddToDo = ({ handleAdd }) => {
  const [newTodo, setnewTodo] = useState("");
  return (
    <Card className="addtodo">
      <Row>
        <Col md={10}>
          <Form.Control
            type="text"
            value={newTodo}
            onChange={(e) => setnewTodo(e.target.value)}
          ></Form.Control>
        </Col>
        <Col>
          <Button
            onClick={() => {
              setnewTodo("");
              handleAdd(newTodo);
            }}
            disabled={newTodo === ""}
          >
            Add
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
