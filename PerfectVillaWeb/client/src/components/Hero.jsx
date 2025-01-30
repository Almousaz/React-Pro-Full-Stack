
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='h-screen bg-gradient-to-r from-blue-500 to-green-400 relative'>
            <div className='absolute z-10 left-14 top-32 lg:left-32 lg:top-52 font-bold text-white text-5xl m-8 w-1/2'>
                <h1 className='tracking-tighter text'>Help You Find A Dream Home.</h1>
                <h3 className='text-xl sm:text-2xl font-normal pt-5'><strong>Dream Home</strong> is here to find the best home
                    for you, for sale or rent with trusted sources.</h3>
                <Link href='/services'><button type="button" className="text-white font-semibold bg-gradient-to-r from-lime-300 via-lime-400 to-lime-500 hover:bg-gradient-to-br hover:scale-110 duration-500 rounded-lg text-base px-5 py-3.5 text-center me-2 mb-2 mt-8">Find House</button></Link>
            </div>
            <Image className='absolute right-0 bottom-0 md:w-fit md:h-fit' width={500} height={500} src='/hero-test.png' alt='house-image' />
        </div>
    )
}

export default Hero