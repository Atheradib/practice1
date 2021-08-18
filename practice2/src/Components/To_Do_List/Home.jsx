import React, { useState } from "react";
import { ToDoList } from "./ToDoList";
import { AddToDo } from "./AddTODo";
import { Row, Col, Card } from "react-bootstrap";
import "./ToDo.css";

export const Home = () => {
  const [todoitems, setTodoitems] = useState([]);
  const handleAdd = (newtodo) => {
    setTodoitems([...todoitems, newtodo]);
  };
  return (
    <Card className="home">
      <Row>
        <Col md={1}></Col>
        <Col md={5}>
          <AddToDo handleAdd={handleAdd} />
        </Col>
        <Col md={5}>
          {todoitems.length > 0 ? (
            <ToDoList todoitems={todoitems} />
          ) : (
            <span> There is no task</span>
          )}
        </Col>
        <Col md={1}></Col>
      </Row>
    </Card>
  );
};
