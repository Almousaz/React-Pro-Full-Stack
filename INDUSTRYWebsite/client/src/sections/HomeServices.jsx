import React, { useEffect } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import { clients } from '../components/export.js'
import servicesimg from '/images/servicesimg.webp'
import ServicesSlider from '../components/ServicesSlider'
import Aos from 'aos'
import 'aos/dist/aos.css'






const HomeServices = () => {

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
    <section id='testimonials' className='w-full lg:px-20 py-20 px-10 flex flex-col justify-center items-center gap-6'>
      <h1 data-aos='slide-up' className='text-6xl text-black font-bold text-center'>What Client Says</h1>
      <div id='client-grid' className='grid lg:grid-cols-3 grid-cols-1 gap-14 mt-10'>
            {
              clients.map((item , index) => (
                <div data-aos='zoom-in' key={index} className='border-t-8 border-yellow-500 p-4 flex flex-col justify-center items-start gap-4'>
                  <FaQuoteLeft className='text-yellow-500 w-[38px] h-[38px]' />
                  <h1 className='text-2xl text-black font-semibold'>{item.title}</h1>
                  <p>{item.para}</p>
                  <button className='underline text-xl font-semibold text-yellow-600'>{item.label}</button>
                </div>
              ))
            }
      </div>
      <button data-aos='zoom-in' className='px-10 py-4 bg-transparent border-[3px] border-black font-bold hover:bg-black hover:text-white mt-6'>View More</button>
    </section>

    <section id='services' className='w-full lg:px-20 px-8 py-20 flex flex-col justify-start items-center gap-10 bg-cover bg-center' style={{ backgroundImage : `url(${servicesimg})`}}> 
      <h1 data-aos='slide-up' className='text-white font-bold text-6xl text-center'> Top Rated Services</h1>
      <ServicesSlider />

    </section>


      
    </>
  )
}

export default HomeServices
