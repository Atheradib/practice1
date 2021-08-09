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
              <p>{index + 1 + "." + " " + syno}</p>
            ))}

            {console.log(sData.synonyms[5])}
            <p>
              {/* {sData[0].synonyms.map((syn, index) => (
                <>
                  {index + 1}.{syn.synonyms}
                </>
              ))} */}
            </p>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
