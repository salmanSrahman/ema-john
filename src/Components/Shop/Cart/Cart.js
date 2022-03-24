import React from "react";
import { Button } from "react-bootstrap";
import "./Cart.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa";

const Cart = ({ cart }) => {
  let subPrice = 0;
  let shipping = 0;
  for (const product of cart) {
    subPrice = subPrice + product.price;
    shipping = shipping + product.shipping;
  }
  const totalBeforeTax = subPrice + shipping;
  const tax = totalBeforeTax > 1000 ? 114.0 : 0;
  const total = totalBeforeTax + tax;

  return (
    <div className="d-flex justify-content-center" sticky="top">
      <div>
        <div className="cart-heading mb-4">
          <h3>Order Summary</h3>
          <h4>Selected Items: {cart.length}</h4>
        </div>
        <h5>Sub Price: ${subPrice.toFixed(2)}</h5>
        <h5>Total Shipping: ${shipping.toFixed(2)}</h5>
        <h5>Tax: ${tax.toFixed(2)}</h5>
        <h4>Total: ${total.toFixed(2)}</h4>
        <Button variant="danger" className="d-block w-100 mb-2 mt-4">
          Clear Cart <RiDeleteBin6Line className="fs-5 fw-bold mb-1" />
        </Button>
        <Button variant="warning" className="d-block w-100 text-light">
          Review Order <FaLongArrowAltRight className="fs-5 fw-bold mb-1" />
        </Button>
      </div>
    </div>
  );
};

export default Cart;
