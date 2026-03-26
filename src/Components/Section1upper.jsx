import React, { useState } from "react";
import Button from "./Button";
import Cartsection from "./Cart-section";

const Section1upper = (props) => {
  const cartSection = () => {
    let cardDiv = document.querySelector("#card-div");
    cardDiv.style.animation = " slideRight 0.5s ease forwards";
    cardDiv.style.animation = " animation-delay: 0.2s;";
  };
  const changedText = (e) => {
    props.setValue(e.target.value);
  };
  return (
    <div id="upper-section">
      <div className="head">
        <h1 id="title">Prodcut Lists and Filter App</h1>
        <span id="upper-span">
          <button onClick={cartSection} className="btn1">
            ({props.cart})<br />
            🛍️ cart
          </button>
        </span>
      </div>
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
      <hr />
    </div>
  );
};

export default Section1upper;
