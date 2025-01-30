
"use client";
/* eslint-disable @next/next/no-img-element */

import { React, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className='navbar fixed w-full z-20 top-0 start-0 bg-slate-900'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <Link href='/' className='flex items-center space-x-3'>
                    <Image width={200} height={200} className='h-8 w-8 bg-white border rounded-full' src='/union.png' alt='navbar-logo' />
                    <span className='self-center text-2xl font-semibold whitespace-nowrap text-white'>Dream Home</span>
                </Link>
                <div className='flex md:order-2 space-x-3 md:space-x-0'>
                    <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden text-gray-400 hover:bg-gray-700" onClick={() => setNavbar(!navbar)}>
                        <svg className="w-5 h-5" xmlnsXlink="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div style={{ display: navbar ? "block" : "" }} className='mr-48 items-center justify-between w-full hidden md:flex md:w-auto md:order-1'>
                    <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0 md:border-0'>
                        <li>
                            <Link href='/' onClick={() => setNavbar(!navbar)} className='block py-2 px-3 text-white hover:text-green-400 md:hover:bg-transparent md:hover:text-green-400 md:p-0'>Home</Link>
                        </li>
                        <li>
                            <Link href='/about' onClick={() => setNavbar(!navbar)} className='block py-2 px-3 text-white hover:text-green-400 md:hover:bg-transparent md:hover:text-green-400 md:p-0'>About</Link>
                        </li>
                        <li>
                            <Link href='/services' onClick={() => setNavbar(!navbar)} className='block py-2 px-3 text-white hover:text-green-400 md:hover:bg-transparent md:hover:text-green-400 md:p-0'>Services</Link>
                        </li>
                        <li>
                            <Link href='/teams' onClick={() => setNavbar(!navbar)} className='block py-2 px-3 text-white hover:text-green-400 md:hover:bg-transparent md:hover:text-green-400 md:p-0'>Teams</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
