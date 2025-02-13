// import React from "react";

// function Header() {
//   return (
//     <div className="flex justify-between px-20 bg-gray-700 text-white h-[80px] py-5 fixed w-[100%] top-0 ">
//       <div className="logo ">
//         <h1 className="text-3xl font-bold ">JM9</h1>
//       </div>
//       <nav>
//         <ul className="sm:flex gap-10 text-3xl hidden ">
//           <Link to="/Home">
//             <li>Home</li>
//           </Link>
//           <li>About</li>
//           <li>Contect</li>
//         </ul>
//       </nav>

//       <div>
//         <i class="fa-solid fa-cart-shopping text-3xl pt-3"></i>
//         <h1 className="absolute top-0 text-3xl ml-2">(1)</h1>
//       </div>
//     </div>
//   );
// }

// export default Header;

import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/contect">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Cart Icon */}
      <div className="relative">
        <i className="fa-solid fa-cart-shopping text-3xl"></i>
        <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-sm px-2 py-1">
          1
        </span>
      </div>
    </div>
  );
}

export default Header;
