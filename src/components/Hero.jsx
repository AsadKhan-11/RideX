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
          <div className="mt-30 space-y-10">
            <h1 className="uppercase font-poppins tracking-tight text-7xl font-bold  px-5">
              DRIVE INTO THE FUTURE{" "}
            </h1>
            <h2 className="font-poppins text-lg px-5">
              Experience the perfect blend of power, elegance, and cutting-edge
              technology. Our cars are engineered to deliver unmatched
              performance, sleek design, and ultimate comfort for every journey.
              Whether you're chasing speed, style, or sophistication, we bring
              you vehicles that redefine driving.
            </h2>
            <button className="font-semibold px-4 py-3  border-2 border-white rounded-lg hover:bg-[#5e5e5e65]  cursor-pointer transition-all duration-300">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
