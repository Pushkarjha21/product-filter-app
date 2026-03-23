import React from "react";
const Cartsection = (props) => {
  const disableCart = () => {
    let disablecart = document.querySelector("#card-div");
    disablecart.style.animation = "slideLeft 0.9 ease forwards";
    disablecart.style.animation = "animation-delay: 0.5s;";
  };
  return (
    <div id="card-div">
      <span id="cart-head">
        <h1>My Cart</h1>
        <button id="cart-closebtn" onClick={disableCart}>
          ×
        </button>
      </span>

      {props.card2.map(function (item, idx) {
        return (
          <div id="cart-div" key={idx}>
            <span className="span-img">
              <img className="image" src={item.images[0]} />
            </span>
            <span className="content">
              <h3 className="item-name">{item.name}</h3>
              <h3 className="pricing">Rs {Math.floor(item.price * 94.01)}</h3>
              <p className="category">Category: {item.category}</p>
              <p className="stock">Stock available:{item.stock}</p>
            </span>
            <div id="close-btn">
              <button
                onClick={(e) => {
                  props.removefromCart(item.id);
                  props.enableBtn(e);
                }}
                id="btn-close"
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
