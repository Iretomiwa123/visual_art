import React from "react";

const Stepper = () => {
  return (
    <div class="container">
      <div class="step-container">
        <div class="step">
          <p class="font-weight-bold">Your cart</p>
          <p class="badge badge-primary">1</p>
        </div>
        <div class="step">
          <p class="font-weight-bold">Checkout</p>
          <p class="badge badge-primary">2</p>
        </div>
        <div class="step">
          <p class="font-weight-bold">Order Complete</p>
          <p class="badge badge-primary">3</p>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
