import React from "react";
import { Card } from "react-bootstrap";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = ({ todoitems }) => {
  return (
    <Card className="todolist">
      {todoitems.map((item) => (
        <ToDoItem item={item} />
      ))}
    </Card>
  );
};
