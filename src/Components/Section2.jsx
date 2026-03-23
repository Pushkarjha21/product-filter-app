import React, { useState } from "react";
import Cartsection from "./Cart-section";

const Section2 = (props) => {
  const [item, setitem] = useState("Add to cart");

  const clickedButton = () => {
    setitem("Added");
  };
  return (
    <div id="item2">
      <span className="span-img">
        <img className="image" src={props.image} />
      </span>
      <span className="content">
        <h3 className="item-name">{props.name}</h3>
        <h3 className="pricing">Rs. {Math.floor(props.price * 94.01)}</h3>
        <p className="category">category: {props.category}</p>
        <p className="stock">Stock Available:{props.stock}</p>
        <button
          id="cart"
          onClick={(e, item) => {
            clickedButton(item);
            props.cartItem(e);
            props.value2(props.product);
          }}
        >
          {item}
        </button>
      </span>
    </div>
  );
};

export default Section2;
