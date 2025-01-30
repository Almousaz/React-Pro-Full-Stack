import Image from 'next/image'
import React from 'react'

const HouseSC = () => {
    return (
        <div>
            <h2 className='text-center text-3xl md:text-5xl m-20 font-extrabold text-green-600 uppercase'>House Recommendation for you</h2>
            <div className='m-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8 px-12'>
                <div className='border rounded-lg hover:bg-green-600 hover:text-white hover:shadow-2xl'>
                    <div>
                        <Image width={1000} height={1000} className='w-full h-2/3' src='/house1.jpg' alt='house-photo' />
                    </div>
                    <div className='m-5'>
                        <p className='text-2xl sm:text-xl md:text-2xl font-extrabold'>IDR 200.000.000,-</p>
                        <p className=' font-light font-serif text-sm'>Jl. Soekarno Hatta No.1</p>
                        <p className='text-red-600 text-md font-serif'>Sewa</p>
                        <div className='pt-2 flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <span className='font-semibold font-mono text-lg'>360m</span>
                        </div>
                        <span className='font-semibold'>Luas Rumah</span>
                    </div>
                </div>
                <div className='border rounded-lg hover:bg-green-600 hover:text-white hover:shadow-2xl'>
                    <div>
                        <Image width={1000} height={1000} className='w-full h-2/3' src='/house2.jpg' alt='house-photo' />
                    </div>
                    <div className='m-5'>
                        <p className='text-2xl sm:text-xl md:text-2xl font-extrabold'>IDR 200.000.000,-</p>
                        <p className=' font-light font-serif text-sm'>Jl. Soekarno Hatta No.1</p>
                        <p className='text-red-600 text-md font-serif'>Sewa</p>
                        <div className='pt-2 flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <span className='font-semibold font-mono text-lg'>360m</span>
                        </div>
                        <span className='font-semibold'>Luas Rumah</span>
                    </div>
                </div>
                <div className='border rounded-lg hover:bg-green-600 hover:text-white hover:shadow-2xl'>
                    <div>
                        <Image width={1000} height={1000} className='w-full h-2/3' src='/house3.jpg' alt='house-photo' />
                    </div>
                    <div className='m-5'>
                        <p className='text-2xl sm:text-xl md:text-2xl font-extrabold'>IDR 200.000.000,-</p>
                        <p className=' font-light font-serif text-sm'>Jl. Soekarno Hatta No.1</p>
                        <p className='text-green-800 text-md font-serif'>New Property</p>
                        <div className='pt-2 flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <span className='font-semibold font-mono text-lg'>360m</span>
                        </div>
                        <span className='font-semibold'>Luas Rumah</span>
                    </div>
                </div>
                <div className='border rounded-lg hover:bg-green-600 hover:text-white hover:shadow-2xl'>
                    <div>
                        <Image width={1000} height={1000} className='w-full h-2/3' src='/house4.jpg' alt='house-photo' />
                    </div>
                    <div className='m-5'>
                        <p className='text-2xl sm:text-xl md:text-2xl font-extrabold'>IDR 200.000.000,-</p>
                        <p className=' font-light font-serif text-sm'>Jl. Soekarno Hatta No.1</p>
                        <p className='text-red-600 text-md font-serif'>Sewa</p>
                        <div className='pt-2 flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <span className='font-semibold font-mono text-lg'>360m</span>
                        </div>
                        <span className='font-semibold'>Luas Rumah</span>
                    </div>
                </div>
                <div className='border rounded-lg hover:bg-green-600 hover:text-white hover:shadow-2xl'>
                    <div>
                        <Image width={1000} height={1000} className='w-full h-2/3' src='/house5.jpg' alt='house-photo' />
                    </div>
                    <div className='m-5'>
                        <p className='text-2xl sm:text-xl md:text-2xl font-extrabold'>IDR 200.000.000,-</p>
                        <p className=' font-light font-serif text-sm'>Jl. Soekarno Hatta No.1</p>
                        <p className='text-red-600 text-md font-serif'>Sewa</p>
                        <div className='pt-2 flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <span className='font-semibold font-mono text-lg'>360m</span>
                        </div>
                        <span className='font-semibold'>Luas Rumah</span>
                    </div>
                </div>
                <div className='border rounded-lg hover:bg-green-600 hover:text-white hover:shadow-2xl'>
                    <div>
                        <Image width={1000} height={1000} className='w-full h-2/3' src='/house6.jpg' alt='house-photo' />
                    </div>
                    <div className='m-5'>
                        <p className='text-2xl sm:text-xl md:text-2xl font-extrabold'>IDR 200.000.000,-</p>
                        <p className=' font-light font-serif text-sm'>Jl. Soekarno Hatta No.1</p>
                        <p className='text-red-600 text-md font-serif'>Sewa</p>
                        <div className='pt-2 flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <span className='font-semibold font-mono text-lg'>360m</span>
                        </div>
                        <span className='font-semibold'>Luas Rumah</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HouseSC