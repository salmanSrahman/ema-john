import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Product.css";

const Product = ({ product }) => {
  console.log(product);
  const { img, name, price, seller, ratings, ratingsCount, stock } = product;
  return (
    <div>
      <Col>
        <Card>
          <img src={img} alt="" className="img-fluid" />
          <h5>{name.slice(0, 26)}</h5>
          <h6>By: {seller}</h6>
          <h5>Price: ${price}</h5>
          <h6>
            Only {stock} left in stock -{" "}
            <span className="text-danger">order soon</span>
          </h6>
        </Card>
      </Col>
    </div>
  );
};

export default Product;
