import React from "react";
import Stepper from "../components/checkout/Stepper";
import CheckoutForm from "../components/checkout/CheckoutForm";

import "@/assets/css/checkout.css";

const CheckoutPage = () => {
  return (
    <div className="">
      <Stepper />
      <CheckoutForm />
    </div>
  );
};

export default CheckoutPage;
