import React, { useEffect } from "react";
import whyimg from "/images/why3.webp";
import { FaAngleDoubleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChoose = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <section
        id="about"
        className="w-full md:px-20 px-10 md:py-20 py-10 flex flex-col md:flex-row justify-center items-center gap-20 bg-cover bg-center
    "
        style={{ backgroundImage: `url(${whyimg})` }}>
            <div data-aos='zoom-in' className="flex flex-col justify-center items-center gap-10 bg-white p-10 rounded-xl md:w-[40%] w-full">
                <h1 className=" text-4xl font-bold text-yellow-700">Working Hours</h1>
                <div className="flex flex-col justify-center items-center gap-4">
                    <p className="text-xl text-black font-lg">Sunday 10Am - 8Pm</p>
                    <p className="text-xl text-black font-lg">Monday 10Am - 8Pm</p>
                    <p className="text-xl text-black font-lg">Tuseday 10Am - 8Pm</p>
                    <p className="text-xl text-black font-lg">Wensday 10Am - 8Pm</p>
                    <p className="text-xl text-black font-lg">Thursday 10Am - 8Pm</p>
                    <p className="text-xl text-black font-lg">Friday 10Am - 8Pm</p>
                    <p className="text-xl text-black font-lg">Saturday 10Am - 8Pm</p>

                </div>
                <button className="px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white mt-6 cursor-pointer">Book Online</button>

            </div>

            <div data-aos='slide-up' data-aos-delay='200' className="md:w-[40%] w-full flex flex-col justify-center items-start gap-6 h-fit">
                <h1 className="text-6xl text-white font-bold text-center">Why Choose Us</h1>
                <p className="text-2xl font-semibold text-white md:text-start text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, nostrum.</p>
                <div id="icon-list" className="flex flex-col justify-center items-start gap-4">
                    <div id="icon-box" className="flex justify-center items-center gap-3">
                        <FaAngleDoubleRight className="text-white size-6" />
                        <h1 className="text-xl text-white font-semibold">Always welcoming enviornment</h1>
                    </div>

                    <div id="icon-box" className="flex justify-center items-center gap-3">
                        <FaAngleDoubleRight className="text-white size-6" />
                        <h1 className="text-xl text-white font-semibold">Always welcoming enviornment</h1>
                    </div>

                    <div id="icon-box" className="flex justify-center items-center gap-3">
                        <FaAngleDoubleRight className="text-white size-6" />
                        <h1 className="text-xl text-white font-semibold">Always welcoming enviornment</h1>
                    </div>

                    <div id="icon-box" className="flex justify-center items-center gap-3">
                        <FaAngleDoubleRight className="text-white size-6" />
                        <h1 className="text-xl text-white font-semibold">Always welcoming enviornment</h1>
                    </div>

                    <div id="icon-box" className="flex justify-center items-center gap-3">
                        <FaAngleDoubleRight className="text-white size-6" />
                        <h1 className="text-xl text-white font-semibold">Always welcoming enviornment</h1>
                    </div>
                    
                    <button className="text-black px-10 py-4 bg-white hover:bg-amber-500 hover:text-black rounded-xl font-semibold cursor-pointer">Book Now</button>
                </div>
            </div>



      </section>
    </>
  );
};

export default WhyChoose;
