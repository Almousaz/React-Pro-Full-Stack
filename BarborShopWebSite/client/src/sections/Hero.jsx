import React, { useEffect } from "react";
import heroImg from "/images/hero.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import sissor from "/images/sissor.png";
import menshair from "/images/menshair.png";
import trimmer from "/images/trimmer.png";
import womenhair from "/images/womenhair.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaBeer } from "react-icons/fa";

const Hero = () => {
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
        id="hero"
        className="w-full md:px-[120px] px-10 flex flex-col md:flex-row justify-center items-center gap-20"
      >
        <div
          id="content-box"
          className="flex flex-col justify-center items-start gap-10"
        >
          <h1 data-aos="zoom-in" className="text-2xl text-black font-semibold">
            WELCOME TO
          </h1>
          <h1 data-aos="zoom-in" className="text-6xl text-black font-bold">
            BarborShop <br></br> in Jacksonville <br></br> FLORIDA
          </h1>
          <div
            data-aos="slide-up"
            id="icon-list"
            className="flex flex-col justify-center items-start gap-6"
          >
            <div
              id="icon-box"
              className="flex justify-center items-center gap-3"
            >
              <FaLocationDot className="text-black size-6" />
              <h1 className="text-x1 text-gray-800 font-semibold">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
                nesciunt.
              </h1>
            </div>

            <div
              id="icon-box"
              className="flex justify-center items-center gap-3"
            >
              <MdOutlinePhoneAndroid className="text-black size-6" />
              <h1 className="text-x1 text-gray-800 font-semibold">
                +001 987 525 1259 / +001 123 456 1212
              </h1>
            </div>

            <div
              id="icon-box"
              className="flex justify-center items-center gap-3"
            >
              <MdEmail className="text-black size-6" />
              <h1 className="text-x1 text-gray-800 font-semibold">
                Company@gmail.com / saloon @gmail.com
              </h1>
            </div>

            <div
              id="icon-box"
              className="flex justify-center items-center gap-3"
            >
              <FaHeadphones className="text-black size-6" />
              <h1 className="text-x1 text-gray-800 font-semibold">
                customers@gmail.com
              </h1>
            </div>
          </div>

          <button
            data-aos="zoom-in"
            className="px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white cursor-pointer"
          >
            BOOK ONLINE
          </button>
        </div>

        <div data-aos="zoom-in" id="image-box" className="md:w-[50%] w-full">
          <img
            src={heroImg}
            alt=""
            className="rounded-xl w-full md:h-[700px] h-[500px]"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-4 justify-center items-start w-full md:px-[120px] px-10 py-10 gap-10">
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={sissor}
            alt=""
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl text-black font-semibold">Regular Haircut</h1>
          <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-gray-400 hover:text-black cursor-pointer">
            More
          </button>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={menshair}
            alt=""
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl text-black font-semibold">Regular Haircut</h1>
          <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-gray-400 hover:text-black cursor-pointer">
            More
          </button>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={trimmer}
            alt=""
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl text-black font-semibold">Regular Haircut</h1>
          <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-gray-400 hover:text-black cursor-pointer">
            More
          </button>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={womenhair}
            alt=""
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl text-black font-semibold">Regular Haircut</h1>
          <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-gray-400 hover:text-black cursor-pointer">
            More
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
