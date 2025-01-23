import React, { useEffect } from "react";
import contactImg from "/images/contactimg.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <section
        id="contact"
        className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 justify-center items-start"
      >
        <div
          data-aos="zoom-in"
          id="img-box"
          className="w-full bg-cover bg-center h-[700px]"
          style={{ backgroundImage: `url(${contactImg})` }}
        ></div>

        <div
          id="form-box"
          className="bg-gray-900 p-16 flex flex-col justify-center items-center gap-12 w-full h-[700px]"
        >
          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-white text-6xl font-bold text-center"
          >
            Contact Us
          </h1>
          <div
            data-aos="zoom-out"
            data-aos-delay="400"
            id="form"
            className="w-full flex flex-col justify-center items-center gap-4"
          >
            <input
              type="text"
              placeholder="Enter your name here..."
              className="w-full p-3 bg-white text-black font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />

            <input
              type="email"
              placeholder="Enter your valid email address here..."
              className="w-full p-3 bg-white text-black font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />

            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Enter your message... "
              className="w-full p-3 bg-white text-black font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            ></textarea>

            <input
              type="submit"
              name=""
              id=""
              value="SUBMIT"
              className="bg-amber-400 hover:bg-[#92843b] cursor-pointer w-full font-semibold text-lg text-black p-3"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
