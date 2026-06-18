import React from "react";
import { FaHeart } from "react-icons/fa";

const Section2 = (props) => {
  const inCart = props.inCart;

  // Check if product is in wishlist
  const isInWishlist = props.wishItem.some(
    (item) => item.id === props.product.id,
  );

  const handleWishlistClick = () => {
    if (isInWishlist) {
      // Remove from wishlist
      props.handleRemove(props.product.id);
    } else {
      // Add to wishlist
      props.valueForWishlist(props.product);
    }
  };

  return (
    <div>
      <FaHeart
        id="test"
        onClick={handleWishlistClick}
        style={{
          color: isInWishlist ? "red" : "#000",
          cursor: "pointer",
        }}
      />
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
    </div>
  );
};

export default Section2;
