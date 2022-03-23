import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Shop.css";
import Product from "../Shop/Product/Product";
import Cart from "../Shop/Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <Container>
        <Row className="g-2">
          <Col md={9}>
            <div className="product-container">
              <Row xs={1} md={3} className="g-3">
                {products.map((product) => (
                  <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                  ></Product>
                ))}
              </Row>
            </div>
          </Col>
          <Col md={3}>
            <div className="cart-container">
              <Cart cart={cart}></Cart>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
