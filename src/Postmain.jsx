import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Wishlist from "./Components/Wishlist";
import Login from "./Components/Login";
import Error from "./Components/Error";
import "./index.scss";

const Postmain = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Postmain;
