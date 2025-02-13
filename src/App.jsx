import React from "react";
import Header from "./components/Header";

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Contect from "./pages/Contect";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/contect" element={<Contect />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
