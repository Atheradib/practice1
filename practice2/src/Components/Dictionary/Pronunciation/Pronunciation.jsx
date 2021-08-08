import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import "./Pronunciation.css";

export const Pronunciation = ({ pData }) => {
  const audio = new Audio(`${pData[0].audio}`);
  const handleAudioPlay = () => {
    audio.play();
  };

  return (
    <Card className="">
      <Row>
        <Col md={1}></Col>
        <Col className="p" md={5}>
          <p>{pData[0].text}</p>
        </Col>
        <Col md={1}>
          <Button onClick={handleAudioPlay}>Pron.</Button>
        </Col>
        <Col md={1}></Col>
      </Row>
    </Card>
  );
};
