import React, { useEffect } from "react";
import Slider from "react-slick";
import { servicesdata } from "./export.js";
import Aos from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

const ServicesSlider = () => {
  // define animation variable here
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div data-aos="zoom-in" className="w-[90%] m-auto">
        <Slider {...settings}>
          {servicesdata.map((item, index) => (
            <div
              key={index}
              id="sliders-boxes"
              className="bg-white p-12 rounded-xl flex flex-col justify-center items-start gap-4"
            >
              <div
                id="icon-box"
                className="bg-yellow-500 p-6 rounded-full flex flex-col justify-center items-center transition duration-300 ease-in-out transform hover::scale-105 hover:-translate-y-1 cursor-pointer"
              >
                {item.icon && (
                  <item.icon className="text-black w-[40px] h-[40px]" />
                )}
              </div>
              <h1 className="text-black font-bold text-2xl">{item.title}</h1>
              <p className="text-black text-justify text-md">{item.para}</p>
              <button className="text-yellow-600 underline text-lg">
                {item.label}
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ServicesSlider;
