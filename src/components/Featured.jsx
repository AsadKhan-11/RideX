import React from "react";
import bmwi8 from "../assets/bmwi8.jpg";
import audietron from "../assets/audietron.jpg";
import tesla from "../assets/tesla.jpg";
import porscheTaycan from "../assets/porscheTaycan.jpg";

const cars = [
  {
    name: "Tesla Model S",
    specs: "0-100 km/h in 3.1s • 405mi Range",
    price: "$79,990",
    image: tesla,
  },
  {
    name: "Porsche Taycan",
    specs: "0-100 km/h in 2.8s • 320mi Range",
    price: "$103,800",
    image: porscheTaycan,
  },
  {
    name: "Audi e-tron GT",
    specs: "0-100 km/h in 3.9s • 238mi Range",
    price: "$99,900",
    image: audietron,
  },
  {
    name: "BMW i8",
    specs: "0-100 km/h in 4.2s • Hybrid 330mi Range",
    price: "$147,500",
    image: bmwi8,
  },
];

const Featured = () => {
  return (
    <section className="section bg-black text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-5xl uppercase font-bold">Featured Cars</h2>
          <p className="text-gray-200 text-lg mt-2">
            Explore our top picks, hand-selected for performance and style.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]  gap-8 max-w-6xl mx-auto">
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-[#121212] rounded-xl   shadow-lg p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="rounded-lg mb-4 overflow-hidden h-[250px] object-center object-cover">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p className="text-gray-200 text-sm mt-1">{car.specs}</p>
              <p className="text-red-500 font-bold mt-3">{car.price}</p>
              <button className="mt-4 px-5 py-2 font-semibold rounded-lg bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 cursor-pointer transition-all duration-300">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Featured;
