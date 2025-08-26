import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        isScrolled ? "bg-black/80 shadow-md backdrop-blur-xs" : "bg-transparent"
      }`}
    >
      <nav className="container py-2 md:py-4 flex items-center justify-between ">
        <div className=" w-20 ">
          <img
            src={logo}
            alt="RideX logo"
            className="h-full w-full invert brightness-0 "
          />{" "}
        </div>
        <div className="hidden lg:flex items-center space-x-25">
          <ul className="flex space-x-10 text-lg">
            <li className="links">
              <a href="#home">Home</a>
            </li>
            <li className="links">
              <a href="#services">Services</a>
            </li>
            <li className="links">
              <a href="#featured">Featured</a>
            </li>
            <li className="links">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="font-semibold hidden lg:block space-x-5 text-lg">
          <button className="btn   ">Login</button>
          <button className="btn">Signup</button>
        </div>

        {/* Mobile view */}
        <div className="lg:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(true)}
          >
            <GiHamburgerMenu className="text-2xl" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-black/80 shadow-md backdrop-blur-xs z-50 absolute top-0 left-0 w-full h-screen font-semibold flex space-y-6 flex-col items-center justify-center text-white p-8 pb-14 transition-all duration-200">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-3xl cursor-pointer transition-colors duration-300"
            >
              <CgClose />
            </button>
            <ul className="flex flex-col items-center space-y-6 text-xl  mt-16">
              <li className=" transition-all duration-300 cursor-pointer  text-center">
                <a href="#home"> Home </a>
              </li>
              <li className=" transition-all duration-300 cursor-pointer  text-center">
                <a href="#services"> Services </a>
              </li>
              <li className=" transition-all duration-300 cursor-pointer  text-center">
                <a href="#featured"> Featured </a>
              </li>
              <li className="transition-all duration-300 cursor-pointer  text-center">
                <a href="#contact"> Contact</a>
              </li>
            </ul>{" "}
            <button className="btn   ">Login</button>
            <button className="btn">Signup</button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
