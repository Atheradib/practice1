import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Card, Row, Col } from "react-bootstrap";
import { ProductItem } from "./ProductItem";

export const Productlist = () => {
  const myProducts = useSelector((state) => state.productReducer.product);

  const [prod, setProd] = useState([]);
  console.log("===>", prod);

  useEffect(() => {
    setProd([...myProducts]);
  }, [myProducts]);
  return (
    <Card className="productlist">
      <Row>
        {prod.map((item) => (
          <Col md={3}>
            <ProductItem item={item} />
          </Col>
        ))}
      </Row>
    </Card>
  );
};
