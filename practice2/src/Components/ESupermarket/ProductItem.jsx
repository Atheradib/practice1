import React from "react";
import { Card, Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

export const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Card className="productitem">
      <Row>
        <Form.Label>{item.title}</Form.Label>
      </Row>
      <Row>
        <Form.Label>Rs.{item.Price}</Form.Label>
      </Row>
      <Row>
        <Form.Image src={`${item.image}`} />
      </Row>
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
