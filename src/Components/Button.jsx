import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={() => {
        props.setactiveCategory(props.categoryname);
      }}
      style={{
        background:
          props.activecategory === props.categoryname ? "#87ceeb" : "white",
      }}
      className="btn2"
    >
      {props.categoryname}
    </button>
  );
};

export default Button;
