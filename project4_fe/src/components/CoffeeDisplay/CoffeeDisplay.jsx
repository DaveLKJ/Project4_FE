import React, { useContext } from "react";

import "./CoffeeDisplay.css";

import { StoreContext } from "../../context/StoreContext";
import CoffeeItem from "../CoffeeItem/CoffeeItem";

const CoffeeDisplay = ({ category }) => {
  const { coffee_list } = useContext(StoreContext);
  return (
    <div className="coffee-display" id="coffee-display">
      <h2>Select your poison</h2>
      <div className="coffee-display-list">
        {coffee_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <CoffeeItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default CoffeeDisplay;
