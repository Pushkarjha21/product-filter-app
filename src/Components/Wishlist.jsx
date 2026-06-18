import React from "react";

const Wishlist = (props) => {
  const { wishItem = [], setwishItem } = props;

  const handleRemove = (id) => {
    if (typeof setwishItem === "function") {
      setwishItem((prev) => prev.filter((i) => i.id !== id));
    }
  };

  return (
    <main id="wishlist-page">
      <section className="wishlist-header">
        <div>
          <p className="wishlist-label">Saved items</p>
          <h1>My Wishlist</h1>
        </div>
        <p className="wishlist-intro">
          Keep track of the products you want to revisit later.
        </p>
      </section>

      <div className="wishlist-grid">
        {wishItem.length === 0 ? (
          <div className="wishlist-empty">
            <p>Wishlist is empty</p>
          </div>
        ) : (
          wishItem.map((item) => (
            <div className="wishlist-card" key={item.id}>
              <div className="wishlist-card-image">
                <img src={item.thumbnail} alt={item.title} />
              </div>
              <div className="wishlist-card-content">
                {item.category && (
                  <p className="wishlist-card-category">{item.category}</p>
                )}
                <h2>{item.title}</h2>

                <div className="wishlist-card-footer">
                  <p className="wishlist-card-price">
                    Rs. {Math.floor(item.price * 94.01)}
                  </p>
                  <button
                    className="wishlist-remove-button"
                    onClick={() => props.handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default Wishlist;
