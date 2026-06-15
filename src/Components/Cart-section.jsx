import React from "react";

const Cartsection = (props) => {
  const disableCart = () => {
    const disablecart = document.querySelector("#card-div");
    disablecart.classList.remove("open");
  };
  return (
    <div id="card-div">
      <span id="cart-head">
        <h1>My Cart</h1>
        <button id="cart-closebtn" onClick={disableCart} type="button">
          ×
        </button>
      </span>

      {props.card2.map(function (item) {
        return (
          <div className="cart-item" key={item.id}>
            <span className="span-img">
              <img
                className="image"
                src={item.images[0]}
                alt={item.title || item.name}
              />
            </span>
            <span className="content">
              <h3 className="item-name">{item.name}</h3>
              <h3 className="pricing">Rs {Math.floor(item.price * 94.01)}</h3>
              <p className="category">Category: {item.category}</p>
              <p className="stock">Stock available: {item.stock}</p>
            </span>
            <div className="close-btn">
              <button
                onClick={() => {
                  props.removefromCart(item.id);
                }}
                className="btn-close"
                type="button"
              >
                ×
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cartsection;
