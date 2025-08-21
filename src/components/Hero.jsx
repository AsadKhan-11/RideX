import React from "react";
import bg from "../assets/bg-4.jpg";

const Hero = () => {
  return (
    <div
      className="text-white h-screen w-full bg-cover bg-no-repeat bg-center "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container h-full">
        <div className="justify-center items-center flex flex-col text-center">
          <div className="mt-25 space-y-6">
            <div className="grid grid-cols-2">
              <h1 className="text-6xl font-bold px-5">Drive your dream</h1>
              <h2 className="text-lg px-5">
                Experience the perfect blend of power, elegance, and
                cutting-edge technology. Our cars are engineered to deliver
                unmatched performance, sleek design, and ultimate comfort for
                every journey. Whether you're chasing speed, style, or
                sophistication, we bring you vehicles that redefine driving.
              </h2>
            </div>
            <button className="px-4 py-3 bg-[#707070] border-2 border-white rounded-lg hover:bg-[#5e5e5ecc] cursor-pointer transition-colors duration-300">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
