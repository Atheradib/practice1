import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, Col, Row, Form } from "react-bootstrap";

export const TopNav = () => {
  const [searchText, setSearchText] = useState("");
  const products = useSelector((state) => state.productReducer.product);
  useEffect(() => {
    console.log("search======>", searchText);
  }, [searchText]);
  return (
    <Card className="topnav">
      <Row>
        <Col md={7}></Col>
        <Col md={3}>
          <Form.Control
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <h1>cart:{products.length}</h1>
        </Col>
      </Row>
    </Card>
  );
};
