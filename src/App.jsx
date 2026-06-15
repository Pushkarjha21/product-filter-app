import React, { useEffect, useState } from "react";
import Section1 from "./Components/Section1";
import Indexbtn from "./Components/Indexbtn";

const App = () => {
  const [activecategory, setactiveCategory] = useState("all");
  const [value, setValue] = useState("");
  const [card2, setCard] = useState([]);
  const [pro, setPro] = useState([]);
  const [index, setIndex] = useState(0);
  const [activefilter, setactiveFilter] = useState("Default");
  const cart = card2.length;

  useEffect(
    function () {
      const fetchdata = async () => {
        const response = await fetch(
          `https://dummyjson.com/products?skip=${index * 20}&limit=35`,
        );
        const data = await response.json();
        setPro(data.products);
      };
      fetchdata();
    },
    [index],
  );

  const seen = new Set(["all"]);
  pro.forEach((item) => {
    if (!seen.has(item.category)) {
      seen.add(item.category);
    }
  });

  const category = Array.from(seen);

  const value2 = (elem) => {
    setCard((card) => {
      if (card.some((item) => item.id === elem.id)) {
        return card;
      }
      return [...card, elem];
    });
  };

  const filtered = pro
    .filter(
      (pro) => activecategory === "all" || activecategory === pro.category,
    )
    .filter((pro) => pro.title.toLowerCase().includes(value.toLowerCase()));
  const sorted = [...filtered].sort((a, b) => {
    if (activefilter == "From High to Low") return b.price - a.price;
    if (activefilter == "From Low to High") return a.price - b.price;
    return 0;
  });

  const removefromCart = (id) => {
    setCard((card) => card.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div id="main-div">
        <Section1
          products={pro}
          category={category}
          activecategory={activecategory}
          setactiveCategory={setactiveCategory}
          filtered={filtered}
          value={value}
          setValue={setValue}
          cart={cart}
          card2={card2}
          value2={value2}
          removefromCart={removefromCart}
          setCard={setCard}
          activefilter={activefilter}
          setactiveFilter={setactiveFilter}
          sorted={sorted}
        />
      </div>
      <div id="index-btn">
        <Indexbtn index={index} setIndex={setIndex} setPro={setPro} pro={pro} />
      </div>
    </div>
  );
};

export default App;
