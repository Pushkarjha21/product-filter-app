import Section2 from "./Section2";
import Section1upper from "./Section1upper";
import Cartsection from "./Cart-section";
import { useState } from "react";

const Section1 = (props) => {
  return (
    <div>
      <div id="main">
        <Section1upper
          category={props.category}
          activecategory={props.activecategory}
          setactiveCategory={props.setactiveCategory}
          filtered={props.filtered}
          value={props.value}
          setValue={props.setValue}
          setCart={props.setCart}
          cart={props.cart}
        />

        <div id="section">
          {props.filtered.map(function (elem, idx) {
            return (
              <Section2
                key={idx}
                id={idx}
                name={elem.title}
                price={elem.price}
                image={elem.images[0]}
                stock={elem.stock}
                category={elem.category}
                value={props.value}
                setValue={props.setValue}
                cartItem={props.cartItem}
                value2={props.value2}
                filtered={props.filtered}
                product={elem}
              />
            );
          })}
        </div>
      </div>
      <Cartsection
        setCard={props.setCard}
        value2={props.value2}
        card2={props.card2}
        cartItem={props.cartItem}
        removefromCart={props.removefromCart}
        enableBtn={props.enableBtn}
      />
    </div>
  );
};

export default Section1;
