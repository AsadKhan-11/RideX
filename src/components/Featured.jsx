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
    <section className=" section" id="featured">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-5xl uppercase font-bold">Featured Cars</h2>
          <p className="text-gray-200 text-lg mt-2">
            Explore our top picks, hand-selected for performance and style.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]   gap-8 max-w-6xl mx-auto">
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-transparent border-2 border-white rounded-xl  shadow-lg "
            >
              <div className="rounded-t-lg mb-4 overflow-hidden h-[250px] object-center object-cover">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover object-center  hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 ">
                <h3 className="text-xl font-semibold">{car.name}</h3>
                <p className="text-gray-200 text-sm mt-1">{car.specs}</p>
                <p className="text-red-500 font-bold mt-3">{car.price}</p>
                <button className="sec-btn ">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Featured;
