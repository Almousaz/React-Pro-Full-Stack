/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Overview = () => {
    return (
        <section>
            <div className='text-center mx-28 sm:mx-44 md:mx-40 mt-20 mb-24'>
                <h3 className='text-4xl md:text-5xl text-green-700 font-extrabold mb-10 p-5'>Company Overview</h3>
                <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-x-7'>
                    <div className="mb-7 lg:mb-0 max-w-sm rounded-lg shadow-md shadow-gray-500 bg-white border-gray-300 text-green-700">
                        <Image height={500} width={500} className="rounded-t-lg h-52 w-full" src="/company-building.jpg" alt="" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight">History</h5>
                            <p className="mb-3 font-normal text-center">Laboris pariatur et laboris reprehenderit magna minim aliquip. laboris reprehenderit magna minim aliquip.</p>
                            <Link href="/about" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-green-600 hover:bg-green-400 hover:scale-110 duration-500">
                                Read more
                                <svg className="w-3.5 h-3.5 ms-2" xmlnsXlink="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="mb-7 lg:mb-0 max-w-sm rounded-lg shadow-md shadow-gray-500 bg-white border-gray-300 text-green-700">
                        <Image height={500} width={500} className="rounded-t-lg h-52 w-full" src="/company-culture.png" alt="" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight">Culture</h5>
                            <p className="mb-3 font-normal text-center">Laboris pariatur et laboris reprehenderit magna minim aliquip. laboris reprehenderit magna minim aliquip.</p>
                            <Link href="/about" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-green-600 hover:bg-green-400 hover:scale-110 duration-500">
                                Read more
                                <svg className="w-3.5 h-3.5 ms-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="mb-7 lg:mb-0 max-w-sm rounded-lg shadow-md shadow-gray-500 bg-white border-gray-300 text-green-700">
                        <Image width={500} height={500} className="rounded-t-lg h-52 w-full" src="/company-team.jpg" alt="" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight">Teams</h5>
                            <p className="mb-3 font-normal text-center">Laboris pariatur et laboris reprehenderit magna minim aliquip. laboris reprehenderit magna minim aliquip.</p>
                            <Link href="/teams" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-green-600 hover:bg-green-400 hover:scale-110 duration-500">
                                Read more
                                <svg className="w-3.5 h-3.5 ms-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Overview