import React from 'react'
import Header from '../components/Header'
import HouseSC from '../components/HouseSC'
import Contact from '../components/Contact'

const Services = () => {
    return (
        <div>
            <Header />
            <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 text-5xl md:text-7xl font-extrabold text-white uppercase'>Services</h1>
            <HouseSC />
            <Contact />
        </div>
    )
}

export default Services