import React from "react";

const Button = (props) => {
  const active = props.activecategory === props.categoryname;
  return (
    <button
      type="button"
      onClick={() => {
        props.setactiveCategory(props.categoryname);
      }}
      className={active ? "filter-button active" : "filter-button"}
    >
      {props.categoryname}
    </button>
  );
};

export default Button;
