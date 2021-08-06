import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./Meaning.css";

export const Meaning = ({ m }) => {
  return (
    <div>
      <Card className="meaning">
        <Row>
          <Col>
            <i>
              <b>{m.partOfSpeech}</b>
            </i>
            {m.definitions.map((def, index) => (
              <p>
                <span>
                  <i>
                    {index + 1}.{def.definition}
                  </i>
                </span>
              </p>
            ))}
          </Col>
        </Row>
      </Card>
    </div>
  );
};
