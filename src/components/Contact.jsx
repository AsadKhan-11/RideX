import React from "react";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <div className="section " id="contact">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-6xl uppercase font-bold">Contact Us</h2>
          <p className="text-gray-200 text-lg mt-6">
            Got an idea, a question, or just want to say hi? Reach out—we’re
            always excited to connect!
          </p>
        </div>
        <div className="max-w-[550px] mx-auto bg-transparent border-2 border-white rounded-2xl p-6 space-y-4">
          <div className="flex justify-between gap-4 flex-col sm:flex-row">
            <div className="contact-container ">
              <label className="contact-label">First Name*</label>
              <input
                required
                type="text"
                placeholder="Enter First Name"
                className="contact-input"
              />
            </div>
            <div className="contact-container ">
              <label className="contact-label">Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="contact-input"
              />
            </div>
          </div>
          <div className="contact-container">
            <label className="contact-label">Email*</label>
            <input
              required
              type="email"
              placeholder="hello@example.com"
              className="contact-input"
            />
          </div>
          <div className="contact-container">
            <label className="contact-label">Phone*</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="123-456-7890"
              required
              className="contact-input"
            />
          </div>
          <div className="contact-container">
            <label className="contact-label">Message</label>
            <textarea
              required
              placeholder="Your message"
              className="w-full bg-transparent border-2 border-white p-4 rounded-lg focus:outline-none "
              rows={4}
            />
          </div>
          <button className="btn  ">
            <div className="flex items-center gap-2">
              <IoIosSend /> Send Message
            </div>
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default Contact;
