import React from "react";
import { Card } from "react-bootstrap";
import { Meaning } from "./Meaning";
import "./Meaning.css";

export const MeaningList = ({ item }) => {
  return (
    <div>
      <Card className="meaning">
        <h4>{item.word}</h4>
        {item.meanings.map((m) => (
          <Meaning m={m} />
        ))}
      </Card>
    </div>
  );
};
