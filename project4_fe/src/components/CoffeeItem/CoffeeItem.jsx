import React, { useState, useContext } from "react";

import "./CoffeeItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const CoffeeItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="coffee-item">
      <div className="coffee-item-img-container">
        <img className="coffee-item-image" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="coffee-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="coffee-item-info">
        <div className="coffee-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="coffee-item-desc">{description}</p>
        <p className="coffee-item-price">${price}</p>
      </div>
    </div>
  );
};

export default CoffeeItem;
