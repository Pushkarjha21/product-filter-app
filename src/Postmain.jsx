import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Wishlist from "./Components/Wishlist";
import Login from "./Components/Login";
import Error from "./Components/Error";
import "./index.scss";

const Postmain = () => {
  const [activecategory, setactiveCategory] = useState("all");
  const [value, setValue] = useState("");
  const [card2, setCard] = useState([]);
  const [pro, setPro] = useState([]);
  const [index, setIndex] = useState(0);
  const [activefilter, setactiveFilter] = useState("Default");
  const [wishItem, setwishItem] = useState([]);
  const cart = card2.length;

  useEffect(
    function () {
      const fetchdata = async () => {
        try {
          const response = await fetch(
            `https://dummyjson.com/products?skip=${index * 20}&limit=35`,
          );
          const data = await response.json();
          setPro(data.products);
        } catch (err) {
          alert(err.message);
        }
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
    setCard((card2) => {
      if (card2.some((item) => item.id === elem.id)) {
        return card2;
      }
      return [...card2, elem];
    });
  };

  const valueForWishlist = (elem) => {
    setwishItem((wishItem) => {
      if (wishItem.some((item) => item.id === elem.id)) {
        return wishItem;
      }
      return [...wishItem, elem];
    });
  };

  const handleRemove = (id) => {
    if (typeof setwishItem === "function") {
      setwishItem((prev) => prev.filter((i) => i.id !== id));
    }
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
    setCard((card2) => card2.filter((item) => item.id !== id));
  };
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <App
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
              wishItem={wishItem}
              valueForWishlist={valueForWishlist}
              handleRemove={handleRemove}
              index={index}
              setIndex={setIndex}
              setPro={setPro}
            />
          }
        />
        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishItem={wishItem}
              setwishItem={setwishItem}
              handleRemove={handleRemove}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Postmain;
