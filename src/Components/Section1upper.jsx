import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Section1upper = (props) => {
  const cartSection = () => {
    const cardDiv = document.querySelector("#card-div");
    cardDiv.classList.add("open");
  };
  const changedText = (e) => {
    props.setValue(e.target.value);
  };
  return (
    <div id="upper-section">
      <div className="head">
        <h1 id="title">Product Lists and Filter App</h1>
        <div id="upper-right">
          <span id="upper-span">
            <button onClick={cartSection} className="btn1">
              ({props.cart}) 🛍️ cart
            </button>
          </span>
          <span>
            <Link id="login-link" to="/login">
              Login
            </Link>
          </span>
        </div>
      </div>
      <div id="search-section">
        <form>
          <input
            onChange={(e) => {
              changedText(e);
            }}
            id="input"
            type="text"
            placeholder="Search products "
            value={props.value}
          />
        </form>

        <Link id="wishlist-link" to="/wishlist">
          <img
            id="wishlist-img"
            src="heart.png"
            alt="wishlist"
            width={25}
            height={25}
          />
        </Link>
      </div>
      <div id="btn-bar">
        <span id="btn-section">
          {props.category.map((val, key) => (
            <Button
              categoryname={val}
              key={key}
              setactiveCategory={props.setactiveCategory}
              activecategory={props.activecategory}
            />
          ))}
        </span>
        <span id="sort-section">
          <h6>Sort by:</h6>
          <select
            onChange={(e) => {
              console.log("selected value:", e.target.value);

              props.setactiveFilter(e.target.value);
            }}
            id="range"
            name="range"
          >
            <option value="Default">Default</option>
            <option id="high" value="From High to Low">
              From High to low
            </option>
            <option id="low" value="From Low to High">
              From Low to High
            </option>
          </select>
        </span>
      </div>
    </div>
  );
};

export default Section1upper;
