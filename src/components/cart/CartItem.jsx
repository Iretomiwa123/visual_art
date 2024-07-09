import React from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const CartItem = ({ item, updateQuantity, removeItem }) => {
  console.log(item.actualPrice, item.quantity);
  const handleQuantityChange = (amount) => {
    const newQuantity = item.quantity + amount;
    if (newQuantity > 0) {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="w-100">
      <div className="row align-items-center justify-content-between my-2 py-2">
        <div className="col-3">
          <img
            src={item.src}
            alt={item.name}
            className="img-fluid w-100 rounded"
          />
        </div>

        <div className="col-2">
          <p>#{item.actualPrice}</p>
        </div>
        <div className="col-2">
          <div className="d-flex align-items-center">
            <button
              className="btn btn-sm btn-outline-secondary rounded-pill bold"
              onClick={() => handleQuantityChange(-1)}
            >
              <FaMinus />
            </button>
            <input
              type="tel"
              value={item.quantity}
              readOnly
              className="form-control mx-2 rounded-pill bold d-flex justify-content-center align-items-center"
              style={{
                width: "40px",
                WebkitAppearance: "none",
                MozAppearance: "textfield",
                appearance: "textfield",
              }}
            />
            <button
              className="btn btn-sm btn-outline-secondary rounded-pill bold"
              onClick={() => handleQuantityChange(1)}
            >
              <FaPlus />
            </button>
          </div>
        </div>
        <div className="col-2">
          <p>
            #
            {(
              Number(item.actualPrice.replace(",", "")) * item.quantity
            ).toFixed(0)}
          </p>
        </div>
        {/* <div className="col-1 w-fit">
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => removeItem(item.id)}
          >
            <FaTrash />
          </button>
        </div> */}
      </div>

      <hr />
    </div>
  );
};

export default CartItem;
