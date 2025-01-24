import React, { useEffect } from "react";
import heroImg from "/images/heroimg.png";
import bgImg from "/images/bgimg.jpg";
import '../index.css'
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
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
        id="hero"
        className="w-full h-fit lg:px-20 px-10 pt-20 flex lg:flex-row flex-col justify-center items-center gap-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div
          id="hero-image"
          className="lg:w-[40%] w-full flex flex-col justify-end items-end"
        >
          <img src={heroImg} alt="" width={600} height={700} className="animate-scale-up-and-down" />
        </div>
        <div
          id="content-hero"
          className="flex flex-col justify-center items-start gap-10 lg:w-[60%] w-full pb-20"
        >
          <h1
            data-aos="zoom-in-up"
            className="lg:text-6xl text-5xl text-black font-bold text-center"
          >
            Home Repair Services
          </h1>
          <p
            data-aos="zoom-in"
            className="text-xl font-semibold text-slate-600 text-justify"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            voluptatibus dolore assumenda illo, quasi debitis! Perferendis
            fugiat molestiae pariatur sequi eius quidem dolor et natus,
            doloribus temporibus assumenda consectetur iusto.
          </p>
          <button
            data-aos="fade-in"
            className="px-10 py-4 bg-transparent border-[3px] border-black font-bold hover:bg-black hover:text-white cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
