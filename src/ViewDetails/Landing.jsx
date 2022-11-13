import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import Produdct from "./Produdct";

const Landing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/cardDetails" element={<ProductDetail />} />
          <Route path="/" element={<Produdct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Landing;
