import React from "react";
import Products from "./Product";
import image1 from "../assets/1.avif";
import image2 from "../assets/2.avif";
import image3 from "../assets/3.avif";
import image4 from "../assets/4.avif";
import image5 from "../assets/5.avif";
import image6 from "../assets/6.avif";

function ProductList() {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:gap-10 mt-20 sm:ml-28 mb-40 font-bold">
      <Products image={image1} title="T-shirt" price="$20" />
      <Products image={image2} title="Hat" price="$5" />
      <Products image={image3} title="Pants" price="$12" />
      <Products image={image4} title="Jacket" price="$16" />
      <Products image={image5} title="Shoes" price="$26" />
      <Products image={image6} title="Bag" price="$26" />
    </div>
  );
}

export default ProductList;
