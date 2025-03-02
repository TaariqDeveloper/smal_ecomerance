import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react"; // Corrected import

function Header() {
  return (
    <div className="flex justify-between px-20 bg-gray-700 text-white h-[80px] py-5 fixed w-full top-0 z-10">
      {/* Logo */}
      <div className="logo">
        <h1 className="text-3xl font-bold">JM9</h1>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="sm:flex gap-10 text-3xl hidden">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/productList">Product</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>{" "}
            {/* Fixed typo: "contect" -> "contact" */}
          </li>
        </ul>
      </nav>

      {/* Cart Icon */}
      <div className="relative">
        <ShoppingCart className="text-5xl mt-[15px]" />{" "}
        <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-sm px-2 py-1">
          1
        </span>
      </div>
    </div>
  );
}

export default Header;
