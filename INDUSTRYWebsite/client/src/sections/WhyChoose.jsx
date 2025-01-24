import React, { useEffect } from "react";
import { chooseus } from "../components/export";
import cta1 from "/images/cta1.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";

const WhyChoose = () => {
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
      <section
        id="about"
        className="bg-slate-900 flex flex-col justify-center items-center gap-6 w-full lg:px-20 px-10 py-20"
      >
        <h1
          data-aos="zoom-in-up"
          className="text-white font-bold text-6xl text-center"
        >
          Why to Choose Us
        </h1>
        <p data-aos="fade-in" className="text-slate-100 text-xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          labore!
        </p>
        <div className="flex lg:flex-row flex-col justify-center items-center gap-10 mt-10">
          {chooseus.map((item, index) => (
            <div
              data-aos="slide-up"
              key={index}
              className="bg-white p-8 rounded-xl flex flex-col justify-center items-center gap-4"
            >
              <img
                src={item.image}
                alt="image"
                className="h-[200px] w-[200px] transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 cursor-pointer"
              />
              <h1 className="text-xl font-bold text-black">{item.heading}</h1>
              <p className="text-center text-slate-700 text-lg">{item.para}</p>
              <button className="text-yellow-500 underline text-lg font-bold hover:text-black cursor-pointer">
                {item.label}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* call to action section starts here */}

      <section className="bg-yellow-500 lg:px-20 px-10 lg:py-0 py-20 w-full flex flex-col lg:flex-row gap-20">
        <div
          id="image"
          className="lg:w-[50%] w-full flex flex-col justify-end items-center"
        >
          <img
            data-aos="zoom-in"
            src={cta1}
            alt=""
            className="w-[800px] lg:h-[450px] h-[auto]"
          />
        </div>
        <div className="lg:w-[50%] w-full flex flex-col justify-center items-start gap-6 lg:py-20">
          <h1 data-aos="slide-up" className="text-6xl text-black font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, recusandae.
          </h1>
          <p className="text-xl font-semibold text-slate-800 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <div
            data-aos="fade-down"
            className="flex flex-col justify-between items-start gap-3 w-full"
          >
            <div className="flex flex-row justify-start items-start gap-2">
              <IoIosArrowDroprightCircle className="w-[30px] h-[30px]" />
              <h1 className="text-xl font-semibold">
                Lorem ipsum dolor sit amet.
              </h1>
            </div>

            <div className="flex flex-row justify-start items-start gap-2">
              <IoIosArrowDroprightCircle className="w-[30px] h-[30px]" />
              <h1 className="text-xl font-semibold">
                Lorem ipsum dolor sit amet.
              </h1>
            </div>

            <div className="flex flex-row justify-start items-start gap-2">
              <IoIosArrowDroprightCircle className="w-[30px] h-[30px]" />
              <h1 className="text-xl font-semibold">
                Lorem ipsum dolor sit amet.
              </h1>
            </div>

            <div className="flex flex-row justify-start items-start gap-2">
              <IoIosArrowDroprightCircle className="w-[30px] h-[30px]" />
              <h1 className="text-xl font-semibold">
                Lorem ipsum dolor sit amet.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
