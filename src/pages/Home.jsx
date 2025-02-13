import React from "react";
import image1 from "../assets/add.avif";

function Home() {
  return (
    <div className="sm:flex justify-center gap-20 mt-60">
      <div className="left w-[500px] pt-20">
        <h1 className="text-3xl font-bold">
          Best Place For Shopping In <br /> Your Area
        </h1>
        <p className="text-xl text-gray-600 pt-5">
          We got you everything that you need. visit us any <br /> whare and any
          time
        </p>
        <div className=" sm:mt-10 mt-[4%] sm:mb-0 mb-10">
          <a href="" className=" text-3xl bg-blue-500 px-3 py-2 rounded-lg ">
            Explore More
          </a>
        </div>
      </div>
      <div className="w-[600px] ">
        <img
          src={image1}
          alt=""
          className="rounded-xl sm:w-[600px] w-[400px]"
        />
      </div>
    </div>
  );
}

export default Home;
