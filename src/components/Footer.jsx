import React from "react";
import logo from "../assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { GiMailbox } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div className="section border-t-2 border-t-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 items-center">
          <div>
            <div className="w-20 md:w-28">
              <img
                src={logo}
                alt="RideX logo"
                className="w-full h-full invert brightness-0  "
              />
            </div>
          </div>
          <div className="flex gap-6.5 md:order-2  md:py-7 justify-start  lg:justify-center">
            <FaFacebook size={30} className="footer-icon" />
            <FaInstagram size={30} className="footer-icon" />
            <FaLinkedin size={30} className="footer-icon" />
            <FaTwitter size={30} className="footer-icon" />
          </div>
          <div className="flex flex-col lg:order-3 gap-2.5 md:items-end items-start">
            <div className="flex items-center gap-2 text-lg">
              <FaPhone size={20} /> +1 (123) 456-7890
            </div>
            <div className="flex  items-center gap-2 text-lg">
              <MdEmail size={20} /> Ridex@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
