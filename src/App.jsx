import React, { useEffect, useState } from "react";
import Section1 from "./Components/Section1";
import Indexbtn from "./Components/Indexbtn";

const App = (props) => {
  return (
    <div>
      <div id="main-div">
        <Section1
          products={props.products}
          category={props.category}
          activecategory={props.activecategory}
          setactiveCategory={props.setactiveCategory}
          filtered={props.filtered}
          value={props.value}
          setValue={props.setValue}
          cart={props.cart}
          card2={props.card2}
          value2={props.value2}
          removefromCart={props.removefromCart}
          setCard={props.setCard}
          activefilter={props.activefilter}
          setactiveFilter={props.setactiveFilter}
          sorted={props.sorted}
          wishItem={props.wishItem}
          valueForWishlist={props.valueForWishlist}
          handleRemove={props.handleRemove}
        />
      </div>
      <div id="index-btn">
        <Indexbtn
          index={props.index}
          setIndex={props.setIndex}
          setPro={props.setPro}
          pro={props.pro}
        />
      </div>
    </div>
  );
};

export default App;
