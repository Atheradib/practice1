import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./Synonyms.css";

export const Synonyms = ({ sData }) => {
  return (
    <div>
      <Card className="synonyms">
        <Row>
          <Col>
            <h4>Synonyms:</h4>

            {sData.synonyms.map((syno, index) => (
              <>{index + 1 + ". " + syno}</>
            ))}
          </Col>
        </Row>
      </Card>
    </div>
  );
};
