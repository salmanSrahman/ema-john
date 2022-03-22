import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Shop.css";
import Product from "../Shop/Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });
  return (
    <div>
      <Container>
        <Row className="g-2">
          <Col md={9}>
            <div className="product-container">
              <Row xs={1} md={3} className="g-3">
                {products.map((product) => (
                  <Product key={product.id} product={product}></Product>
                ))}
              </Row>
            </div>
          </Col>
          <Col md={3}>
            <h1>Here Is Cart</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
