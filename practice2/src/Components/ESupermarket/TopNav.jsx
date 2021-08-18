import React from "react";
import { useSelector } from "react-redux";
import { Card, Col, Row } from "react-bootstrap";

export const TopNav = () => {
  const products = useSelector((state) => state.productReducer.product);
  console.log(products);
  return (
    <Card className="topnav">
      <Row>
        <Col md={10}></Col>
        <Col md={2}>
          <h1>cart:{products.length}</h1>
        </Col>
      </Row>
    </Card>
  );
};
