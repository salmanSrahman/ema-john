import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import Rating from "react-rating";
import "./Product.css";
import { HiShoppingCart } from "react-icons/hi";

const Product = ({ product, handleAddToCart }) => {
  const { img, name, price, seller, ratings, ratingsCount, stock } = product;
  return (
    <div>
      <Col>
        <Card>
          <div className="product-card">
            <img src={img} alt="" className="img-fluid" />
            <div className="p-3">
              <h5>{name.slice(0, 20)}</h5>
              <h6>By: {seller}</h6>
              <h5>Price: ${price}</h5>
              <div>
                <Rating
                  className="main-color rating-style"
                  initialRating={ratings}
                  emptySymbol="fa fa-star-o fa-2x"
                  fullSymbol="fa fa-star fa-2x"
                  readonly
                />
                <span className="text-secondary">({ratingsCount} review)</span>
              </div>
              <h6 className="mt-2 mb-3">
                Only {stock} left in stock -{" "}
                <span className="text-danger">order soon</span>
              </h6>
              <Button
                className="btn-regular"
                variant="warning text-dark"
                onClick={() => handleAddToCart(product)}
              >
                Add To Cart <HiShoppingCart className="fs-5 fw-bold mb-1" />
              </Button>
            </div>
          </div>
        </Card>
      </Col>
    </div>
  );
};

export default Product;
