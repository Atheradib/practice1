import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./Synonyms.css";

export const Antonyms = ({ aData }) => {
  return (
    <div>
      <Card className="synonyms">
        <Row>
          <Col>
            <h4>Antonyms:</h4>
            {aData.antonyms.map((ant, index) => (
              <> {index + 1 + "." + "" + ant}</>
            ))}
          </Col>
        </Row>
      </Card>
    </div>
  );
};
