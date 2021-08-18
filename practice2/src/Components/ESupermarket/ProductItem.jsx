import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

export const ProductItem = () => {
  const dispatch = useDispatch();
  return (
    <Card className="productitem">
      <Row>
        <Col>
          <Button
            onClick={() =>
              dispatch({
                type: "ADD_PRODUCT",
                data: ["Soap", "Namak"],
              })
            }
          >
            +
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() =>
              dispatch({
                type: "REMOVE_PRODUCT",
                data: "Soap",
              })
            }
          >
            -
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
