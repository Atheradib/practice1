import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./Synonyms.css";

export const Synonyms = () => {
  return (
    <div>
      <Card className="synonyms">
        <Row>
          <Col>
            <h4>Synonyms:</h4>
            <br />
            <p>
              attitude · medicine · therapy · behaviorism · mental make-up ·
              mental processes · personality study · psych.
            </p>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
