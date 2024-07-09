import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import artworks from "@/data/artworks";

const CheckoutForm = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("cart")) || [];
    const itemsInCart = artworks.filter((artwork) =>
      storedIds.includes(artwork.id)
    );
    setCartItems(itemsInCart);
  }, []);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.actualPrice.replace(",", "") * item.quantity,
    0
  );

  return (
    <div class="container mt-5 wrapper80">
      <div class="row d-flex align-items-stretch">
        {/* <!-- Form Section --> */}
        <div class="col-md-6 form-section mb-4 mb-md-0">
          <form action="admin" method="post">
            <div class="form-group">
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                class="form-control"
                name="name"
                id="name"
                placeholder="First and last name"
                required
              />
            </div>
            <div class="form-group">
              <label htmlFor="country">Select Country/Region*</label>
              <input
                type="text"
                class="form-control"
                id="country"
                placeholder="Select Country/Region"
                required
              />
            </div>
            <div class="form-group">
              <label htmlFor="address">Street Address</label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="Home number and street name"
                required
              />
            </div>
            <div class="form-group">
              <label htmlFor="postal">Postal Code*</label>
              <input
                type="text"
                class="form-control"
                id="postal"
                placeholder="Code"
                required
              />
            </div>
            <div class="form-group">
              <label htmlFor="email">Email address*</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email address"
                required
              />
            </div>
            <div class="form-group">
              <label htmlFor="phone">Phone number*</label>
              <input
                type="text"
                class="form-control"
                id="phone"
                placeholder="Phone number"
                required
              />
            </div>
            <div class="form-check mb-2">
              <input
                type="checkbox"
                class="form-check-input"
                id="createAccount"
              />
              <label class="form-check-label" htmlFor="createAccount">
                Create an account?
              </label>
            </div>
            <div class="form-check mb-3">
              <input
                type="checkbox"
                class="form-check-input"
                id="differentAddress"
              />
              <label class="form-check-label" htmlFor="differentAddress">
                Ship to a different address
              </label>
            </div>
          </form>
        </div>

        {/* <!-- Order Summary Section --> */}
        <div class="col-md-6 form-selection py-5">
          <div className="mb-4">
            {cartItems.map((item) => (
              <p key={item.id} className="row bold">
                <h5>{item.artist}</h5>
                <h5>{item.title}</h5>
                <h5>{item.price}</h5>
              </p>
            ))}
            <hr />
            <h3>Sub Total</h3>
            <p>#{totalPrice}</p>

            <hr />

            <h3>Tax</h3>
            <p>0.0</p>

            <hr />

            <h3>Total</h3>
            <p>#{totalPrice}</p>
          </div>
          <hr />
          <form action="">
            <div class="form-group">
              <label htmlFor="cardNumber">Card Number*</label>
              <input
                type="number"
                class="form-control"
                id="cardNumber"
                placeholder="Card number"
                required
              />
            </div>

            <div class="form-row d-flex">
              <div class="form-group col-md-6">
                <label htmlFor="expiry">Expiry (MM/YY)*</label>
                <input
                  type="text"
                  class="form-control"
                  id="expiry"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label htmlFor="cardCode">Card Code*</label>
                <input
                  type="text"
                  class="form-control"
                  id="cardCode"
                  placeholder="cvc"
                  required
                />
              </div>
            </div>

            <Link to="/order">
              <button type="submit" class="btn btn-primary btn-block">
                PLACE ORDER
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
