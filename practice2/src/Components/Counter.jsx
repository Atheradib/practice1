import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import axios from "axios";

export const Counter = () => {
  const [cntr, setCntr] = useState(0);
  const handleApi = () => {
    axios.get("http://localhost:5000").then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div>
      <Row>
        <Col>
          <Button
            variant="primary"
            onClick={() => cntr > 0 && setCntr(cntr - 1)}
          >
            -
          </Button>
        </Col>
        <Col>
          <h3>{cntr}</h3>
        </Col>
        <Col>
          <Button
            variant="primary"
            onClick={() => cntr < 10 && setCntr(cntr + 1)}
          >
            +
          </Button>
        </Col>
        <Row>
          <Col>
            <Button onClick={handleApi}>Call API</Button>
          </Col>
        </Row>
      </Row>
    </div>
  );
};
