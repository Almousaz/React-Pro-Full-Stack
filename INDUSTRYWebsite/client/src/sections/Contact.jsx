import React, { useEffect } from "react";
import contactImg from "/images/contactimg.jpg";
import { FaRegCaretSquareRight } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdMarkEmailRead } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  // define animation variable here
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <section className="w-full flex lg:flex-row flex-col justify-between items-center lg:gap-5 gap-36">
        <div
          id="left"
          className="lg:w-[40%] w-full flex flex-col justify-start items-center gap-8 h-[700px] p-10"
        >
          <h1 data-aos="slide-up" className="text-5xl text-black font-bold">
            Meet your home service experts
          </h1>
          <p data-aos="slide-up" className="text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
            iste.
          </p>
          <div
            data-aos="slide-up"
            className="flex flex-col justify-center items-start gap-8 mt-4"
          >
            <div className="flex justify-center items-start gap-2">
              <FaRegCaretSquareRight className="w-[35px] h-[35px]" />
              <h1 className="text-2xl text-black font-semibold">
                Emergency Repairs
              </h1>
            </div>

            <div className="flex justify-center items-start gap-2">
              <FaRegCaretSquareRight className="w-[35px] h-[35px]" />
              <h1 className="text-2xl text-black font-semibold">
                Electrical Repairs
              </h1>
            </div>

            <div className="flex justify-center items-start gap-2">
              <FaRegCaretSquareRight className="w-[35px] h-[35px]" />
              <h1 className="text-2xl text-black font-semibold">
                Circuit Repairs
              </h1>
            </div>

            <div className="flex justify-center items-start gap-2">
              <FaRegCaretSquareRight className="w-[35px] h-[35px]" />
              <h1 className="text-2xl text-black font-semibold">
                Toilet Repairs
              </h1>
            </div>

            <div className="flex justify-center items-start gap-2">
              <FaRegCaretSquareRight className="w-[35px] h-[35px]" />
              <h1 className="text-2xl text-black font-semibold">
                Flush Repairs
              </h1>
            </div>

            <div className="flex justify-center items-start gap-2">
              <FaRegCaretSquareRight className="w-[35px] h-[35px]" />
              <h1 className="text-2xl text-black font-semibold">
                Garden Repairs
              </h1>
            </div>
          </div>
          <button
            data-aos="zoom-in"
            className="px-20 py-4 bg-transparent border-[3px] border-black font-bold hover:bg-black hover:text-white"
          >
            Contact Us
          </button>
        </div>
        <div
          data-aos="zoom-in"
          id="right-image"
          className="lg:w-[60%] w-full bg-cover bg-center lg:h-[700px] h-[400px]"
          style={{ backgroundImage: `url(${contactImg})` }}
        ></div>
      </section>

      <section
        id="contact"
        className="w-full bg-slate-900 lg:px-20 px-10 py-24 flex lg:flex-row flex-col justify-center items-center lg:gap-28 gap-14"
      >
        <div
          data-aos="slide-up"
          className="flex flex-col justify-center items-center gap-4 w-full"
        >
          <MdMarkEmailRead className="text-yellow-500 w-[80px] h-[80px] transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 cursor-pointer" />
          <h1 className="text-[32px] text-white font-bold">Email Us</h1>
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your valid email"
            className="px-10 py-4 text-black w-full bg-white"
          />
          <button className="text-black bg-yellow-500 hover:bg-slate-500 hover:text-white text-lg px-10 py-4 font-semibold w-full cursor-pointer">
            SUBMIT
          </button>
        </div>
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4 w-full"
        >
          <IoLogoWhatsapp className="text-green-500 w-[80px] h-[80px] transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 cursor-pointer" />
          <h1 className="text-[32px] text-white font-bold">Whatsapp Us</h1>
          <p className="text-white text-center text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            magnam.
          </p>

          <button className="text-black bg-yellow-500 hover:bg-slate-500 hover:text-white text-lg px-10 py-4 font-semibold w-full cursor-pointer">
            SUBMIT
          </button>
        </div>
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4 w-full"
        >
          <IoChatboxEllipses className="text-white w-[80px] h-[80px] transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 cursor-pointer" />
          <h1 className="text-[32px] text-white font-bold">Live Chat</h1>
          <p className="text-white text-center text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            magnam.
          </p>

          <button className="text-black bg-yellow-500 hover:bg-slate-500 hover:text-white text-lg px-10 py-4 font-semibold w-full cursor-pointer">
            SUBMIT
          </button>
        </div>
      </section>

      <div
        id="icon-box"
        className="bg-yellow-500 text-black p-3 rounded-full hover:bg-white cursor-pointer fixed lg:bottom-6 right-6"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="w-[35px] h-[35px]" />
        </Link>
      </div>
    </>
  );
};

export default Contact;
