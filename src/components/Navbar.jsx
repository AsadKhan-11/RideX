import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 text-white w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/80 shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container py-4 flex items-center justify-between ">
        <div className=" text-3xl font-bold">
          <h1> RideX</h1>
        </div>
        <ul className="flex space-x-10 text-lg">
          <li className="links">
            <a href="#home">Home</a>
          </li>
          <li className="links">
            <a href="#about">About</a>
          </li>
          <li className="links">
            <a href="#pricing">Pricing</a>
          </li>
          <li className="links">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className="links">
            <a href="#contact" className="">
              Contact
            </a>
          </li>
        </ul>
        <div className="space-x-5 text-lg">
          <button className="bg-[#707070] px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer hover:bg-[#5e5e5ecc] hover:text-white">
            Login
          </button>
          <button className="text-black px-4 py-2 rounded-lg bg-white  transition-all duration-300 cursor-pointer hover:bg-[#cccccccc] hover:text-white  ">
            Signup
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
