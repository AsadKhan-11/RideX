import React, { useEffect, useState } from "react";
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
  const [cardsPerView, setCardsPerView] = useState(3);

  // Update cardsPerView on resize
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // tablet
      } else {
        setCardsPerView(3); // desktop
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const totalSteps = Math.ceil(service.length / cardsPerView);

  const nextSlide = () => {
    if (currentIndex < service.length - cardsPerView) {
      setCurrentIndex(currentIndex + cardsPerView);
    } else {
      setCurrentIndex(0); // loop back
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - cardsPerView);
    } else {
      setCurrentIndex(
        service.length % cardsPerView === 0
          ? service.length - cardsPerView
          : service.length - (service.length % cardsPerView)
      );
    }
  };

  return (
    <div
      className="section max-w-6xl relative mx-auto overflow-hidden"
      id="services"
    >
      <div className="container ">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl uppercase font-bold">Our Services</h2>
          <p className="text-gray-200 text-lg mt-2">
            Comprehensive car care solutions tailored to your needs.
          </p>
        </div>

        {/* Slider */}
        <div className="overflow-hidden relative">
          <button className="arrows left-0" onClick={prevSlide}>
            <FaArrowLeft size={20} />
          </button>

          <button className="arrows right-0" onClick={nextSlide}>
            <FaArrowRight size={20} />
          </button>

          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${
                (currentIndex / service.length) * 100
              }%)`,
              width: `${(service.length / cardsPerView) * 100}%`,
            }}
          >
            {service.map((srv, index) => (
              <div
                key={index}
                className="p-4"
                style={{ width: `${100 / service.length}%` }}
              >
                <div className="rounded-xl text-center shadow-lg p-6 border-2 border-white hover:scale-105 transition-transform duration-300 h-full">
                  <h3 className="text-2xl font-semibold mb-6">{srv.title}</h3>
                  <p className="text-gray-200 text-sm">{srv.subtext}</p>
                  <button className="sec-btn">Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSteps }).map((_, idx) => {
            const start = idx * cardsPerView;
            const end = start + (cardsPerView - 1);

            return (
              <div
                key={idx}
                className={`h-1 w-4 sm:w-8 lg:w-14 rounded-full ${
                  currentIndex >= start && currentIndex <= end
                    ? "bg-red-500"
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
