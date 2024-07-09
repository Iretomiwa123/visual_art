import React from "react";
import { Link } from "react-router-dom";

const Container = () => {
  return (
    <div class="container mt-5">
      <h1>Your Cart</h1>
      <div id="cart-items" class="mb-4"></div>
      <button class="btn btn-success" onclick="proceedToCheckout()">
        Proceed to Checkout
      </button>
      <Link to="/" class="btn btn-secondary">
        Continue Shopping
      </Link>
    </div>
  );
};

export default Container;
