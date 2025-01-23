import React, { useEffect } from "react";
import gal1 from "/images/gal1.jpg";
import gal2 from "/images/gal2.jpg";
import gal3 from "/images/gal3.jpg";
import gal4 from "/images/gal4.jpg";
import gal5 from "/images/gal5.jpg";
import gal6 from "/images/gal6.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
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
      <section className="w-full flex flex-col md:px-20 px-10 h-fit pb-[300px] py-20 justify-center items-center gap-16 bg-gray-900  -mb-[200px]">
        <h1 className="text-6xl text-white font-bold text-center">
          Experience the Best Haircut &<br></br> Shaving Services
        </h1>
      </section>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="lg:w-[80%] w-full grid md:grid-cols-3 grid-cols-1 justify-center justify-items-center items-center gap-10 md:-mb[540px]">
          <img
            src={gal1}
            alt=""
            data-aos="zoom-out"
            data-aos-delay="200"
            className="rounded-xl w-[400px] h-[350px]"
          />

          <img
            src={gal2}
            alt=""
            data-aos="zoom-out"
            data-aos-delay="200"
            className="rounded-xl w-[400px] h-[350px]"
          />

          <img
            src={gal3}
            alt=""
            data-aos="zoom-out"
            data-aos-delay="200"
            className="rounded-xl w-[400px] h-[350px]"
          />

          <img
            src={gal4}
            alt=""
            data-aos="zoom-out"
            data-aos-delay="200"
            className="rounded-xl w-[400px] h-[350px]"
          />

          <img
            src={gal5}
            alt=""
            data-aos="zoom-out"
            data-aos-delay="200"
            className="rounded-xl w-[400px] h-[350px]"
          />

          <img
            src={gal6}
            alt=""
            data-aos="zoom-out"
            data-aos-delay="200"
            className="rounded-xl w-[400px] h-[350px]"
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
