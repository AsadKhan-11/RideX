import React from "react";
import bg from "../assets/bg3.jpg";

const Hero = () => {
  return (
    <div
      className="text-white h-screen w-full bg-cover bg-no-repeat bg-top "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container h-full">
        <div className="justify-center items-center flex flex-col text-center">
          <div className="mt-20 space-y-6">
            <h1 className="text-6xl font-bold">Drive your dream</h1>
            <h2 className="text-lg">
              Experience the perfect blend of power, elegance, and cutting-edge
              technology. Our cars are engineered to deliver unmatched
              performance, sleek design, and ultimate comfort for every journey.
              Whether you're chasing speed, style, or sophistication, we bring
              you vehicles that redefine driving.
            </h2>
            <button className="px-4 py-3 bg-[#121212] border-2 border-white rounded-lg hover:bg-white hover:text-black cursor-pointer transition-colors duration-300">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
