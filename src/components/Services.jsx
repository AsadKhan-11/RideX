import React, { useState } from "react";
import { BiArrowToLeft } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const service = [
  {
    title: "Car Detailing",
    subtext:
      "Give your car a fresh, spotless look inside and out with our deep cleaning and polishing service that restores its shine and comfort.",
  },
  {
    title: "Engine Diagnostics",
    subtext:
      "Quickly identify and fix hidden issues with our advanced engine scanning tools, ensuring smooth performance and reliability.",
  },
  {
    title: "Tire & Wheel Care",
    subtext:
      "Keep your ride safe and stylish with expert tire balancing, rotation, and wheel alignment for a smoother, safer drive.",
  },
  {
    title: "Oil Change",
    subtext:
      "Extend your engine’s life with regular oil changes using high-quality oils that boost efficiency and prevent wear.",
  },
  {
    title: "Brake Services",
    subtext:
      "Stay safe on the road with professional brake inspections, repairs, and replacements for responsive stopping power.",
  },
  {
    title: "Car Wash",
    subtext:
      "Maintain a polished look with our premium car wash that removes dirt, grime, and streaks for a lasting shine.",
  },
  {
    title: "Paint Protection",
    subtext:
      "Shield your car’s paint from scratches, sun, and weather with high-end ceramic coatings and protective films.",
  },
  {
    title: "Battery Replacement",
    subtext:
      "Never get stranded with our quick and reliable battery testing, replacement, and installation services.",
  },
  {
    title: "AC & Heating Repair",
    subtext:
      "Stay comfortable year-round with our expert air conditioning and heating repair services for every vehicle type.",
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerView = 3; // how many cards per page
  const totalSteps = Math.ceil(service.length / cardsPerView);

  const nextSlide = () => {
    if (currentIndex <= totalSteps) {
      setCurrentIndex(currentIndex + 3);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    } else if (currentIndex === 0) {
      setCurrentIndex(
        service.length % 3 === 0
          ? service.length - 3
          : service.length - (service.length % 3)
      );
    }
  };

  return (
    <div className="section max-w-5xl relative mx-auto overflow-hidden">
      <div className="container text-white">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl uppercase font-bold">Our Services</h2>
          <p className="text-gray-200 text-lg mt-2">
            Comprehensive car care solutions tailored to your needs.
          </p>
        </div>

        {/* Arrows */}

        {/* Slider track */}
        <div className="overflow-hidden relative">
          <button className=" arrows left-0" onClick={prevSlide}>
            <FaArrowLeft size={20} />
          </button>

          <button className="arrows right-0" onClick={nextSlide}>
            <FaArrowRight size={20} />
          </button>
          <div
            className="flex transition-transform duration-500 max-w-6xl"
            style={{
              transform: `translateX(-${currentIndex * (100 / totalSteps)}%)`,
            }}
          >
            {service.map((srv, index) => (
              <div key={index} className="w-1/3 flex-shrink-0 p-4">
                <div className="rounded-xl text-center shadow-lg p-6 border-2 border-white hover:scale-105 transition-transform duration-300 h-full">
                  <h3 className="text-2xl font-semibold mb-6">{srv.title}</h3>
                  <p className="text-gray-200 text-sm">{srv.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSteps }).map((_, idx) => {
            const start = idx * 3; // starting index of this step
            const end = start + 2; // ending index of this step

            return (
              <div
                key={idx}
                className={`h-1 w-8 rounded-full ${
                  currentIndex >= start && currentIndex <= end
                    ? "bg-yellow-400"
                    : "bg-gray-500"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
