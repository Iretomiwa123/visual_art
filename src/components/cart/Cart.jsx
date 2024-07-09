import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import "@/assets/css/order.css";
import "@/assets/css/style.css";
import artworks from "@/data/artworks"; // Assuming this is your artworks data

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("cart")) || [];
    const itemsInCart = artworks.filter((artwork) =>
      storedIds.includes(artwork.id)
    );
    setCartItems(itemsInCart);
  }, []);

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.actualPrice.replace(",", "") * item.quantity,
    0
  );

  return (
    <div className="container cart">
      <div className="container mb-4 w-50">
        <h2 className="text-center">CARTS</h2>
        <div className="d-flex justify-content-center gap-2 w-50 mx-auto">
          <span className="w-50 bg-dark py-1 rounded"></span>
          <span className="w-50 bg-dark py-1 rounded"></span>
          <span className="w-50 bg-dark py-1 rounded"></span>
          <span className="w-50 bg-dark py-1 rounded"></span>
        </div>
      </div>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <>
          <div class="container product-layout bold">
            <hr />
            <div class="row justify-content-between">
              <div class="col-6 col-md-2 text-center">
                <h4>Product</h4>
              </div>
              <div class="col-6 col-md-2 text-center">
                <h4>Price</h4>
              </div>
              <div class="col-6 col-md-2 text-center">
                <h4>Quantity</h4>
              </div>
              <div class="col-6 col-md-2 text-center">
                <h4>Total</h4>
              </div>
            </div>
            <hr />
          </div>

          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))}
        </>
      )}
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6 mb-4">
            <h3>Delivery Info</h3>
            <p>See our delivery and return info here</p>
            <p></p>
            <p></p>
            <h3>Payment Info</h3>
            <p>We accept the following method of payment</p>
            <div class="icon">
              <i class="fa fa-cc-visa fa-2x mr-2"></i>
              <i class="fa fa-cc-mastercard fa-2x mr-2"></i>
              <i class="fa fa-brands fa-cc-apple-pay fa-2x mr-2"></i>
              <i class="fa fa-google-pay fa-2x mr-2"></i>
            </div>
          </div>
          <div class="col-md-6 fff">
            <h3>SUBTOTAL #{totalPrice}</h3>
            <p>Taxes and shipping calculated at checkout</p>
            <p>Add promo code</p>
            <hr />
            <Link to="/checkout" class="btn-custom-black ">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
