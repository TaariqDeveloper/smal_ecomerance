import React from "react";
import { NavLink } from "react-router-dom";


function Product(props) {
  return (
    <div className="w-[410px] h-[410px] p-2 border-2 border-gray-600 ">
      <NavLink>
        <img src={props.image} alt="" className="w-[400px] rounded" />
      </NavLink>
      <div className="flex justify-between text-3xl mt-2">
        <div>
          <h1>{props.title}</h1>
        </div>
        <div>
          <h1>${props.price}</h1>
        </div>
      </div>
      <button className="py-2 px-24 bg-gray-700 text-3xl text-white rounded-xl  mt-4 ml-6 ">
        Add to cart
      </button>
    </div>
  );
}

export default Product;
