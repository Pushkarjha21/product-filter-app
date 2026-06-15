import React from "react";

const Section2 = (props) => {
  const inCart = props.inCart;
  return (
    <div className="item-card">
      <span className="span-img">
        <img className="image" src={props.image} alt={props.name} />
      </span>
      <span className="content">
        <h3 className="item-name">{props.name}</h3>
        <h3 className="pricing">Rs. {Math.floor(props.price * 94.01)}</h3>
        <p className="category">Category: {props.category}</p>
        <p className="stock">Stock available: {props.stock}</p>
        <button
          className="cart-btn"
          onClick={() => props.value2(props.product)}
          type="button"
          disabled={inCart}
        >
          {inCart ? "Added" : "Add to cart"}
        </button>
      </span>
    </div>
  );
};

export default Section2;
