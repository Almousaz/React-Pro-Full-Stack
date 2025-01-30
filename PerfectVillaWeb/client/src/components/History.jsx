/* eslint-disable @next/next/no-img-element */

import React from 'react'
import Quote from './Quote'
import Image from 'next/image'

const History = () => {
    return (
        <div>
            <h1 className='px-20 pt-20 pb-5 text-5xl font-extrabold tracking-wide text-green-500 uppercase'>Who Dream Home are</h1>
            <div>
                <h3 className='m-20 mb-10 text-xl font-serif tracking-wider text-gray-500'>Our History</h3>
                <h4 className='m-10 text-2xl sm:text-3xl font-semibold'>--Story of Dream Home--</h4>
                <p className='mx-32 mb-10 text-gray-700 font-serif font-medium'>Incididunt tempor exercitation ad irure et deserunt laborum anim tempor nostrud voluptate nostrud. Elit ad dolor proident enim est nisi dolore deserunt laborum exercitation anim est ut. Anim deserunt ad Lorem consectetur eiusmod dolore pariatur aliquip quis. Magna mollit voluptate in proident. Cupidatat minim nisi non voluptate fugiat velit elit ea incididunt laboris dolore velit. Ullamco magna pariatur cupidatat velit dolore est dolore mollit est. Qui Lorem anim et irure.</p>
                <Image width={1000} height={1000} className='w-1/2 m-auto border rounded-full' src='/company-building.jpg' alt='office' />
                <p className='mx-32 my-10 text-gray-700 font-serif font-medium'>Est ullamco proident voluptate anim do enim enim veniam mollit tempor quis in aute. Anim pariatur fugiat aute dolore nostrud in enim tempor. Nostrud ea culpa deserunt excepteur sit ex excepteur nisi eiusmod. Voluptate culpa non aliqua sunt cillum id aliqua ea adipisicing nostrud. Veniam esse qui ex aliqua duis. Ullamco reprehenderit dolor occaecat occaecat quis. Elit nostrud dolor ullamco minim amet veniam in elit proident et anim esse veniam. Id sint elit amet ut qui.</p>
            </div>
            <hr className="w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-500"></hr>
            <div>
                <h3 className='m-20 mb-10 text-xl font-serif tracking-wider text-gray-500'>Our Work Culture</h3>
                <h4 className='m-10 text-2xl sm:text-3xl font-semibold'>--The company&apos;s core value are Respect Above All, Trust and Resourcefulness.--</h4>
                <Image width={1000} height={1000} className='w-1/2 m-auto border rounded-full' src='/office-bg.jpg' alt='culture' />
                <p className='px-32 py-10 text-gray-700 font-serif font-medium'>Aliquip dolor consectetur consequat cupidatat duis aliquip eu minim Lorem irure nulla. Reprehenderit exercitation sint ad dolore deserunt deserunt enim nulla. Occaecat duis in exercitation magna laboris ea adipisicing laboris consectetur amet. Id pariatur in ullamco deserunt. Cillum ipsum eu ea nisi nostrud eu. Nostrud mollit amet sit esse est laborum elit nulla laborum velit elit anim. Esse ea deserunt consectetur sint officia Lorem quis amet qui.
                    Culpa voluptate tempor adipisicing adipisicing sint esse Lorem tempor. Exercitation ad elit excepteur deserunt labore occaecat. Pariatur aliqua adipisicing excepteur quis incididunt non. Est non quis aliqua consequat proident ullamco reprehenderit esse ipsum.</p>
            </div>
            <hr className="w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-500"></hr>
            <div>
                <h3 className='m-20 mb-10 text-xl font-serif tracking-wider text-gray-500'>Our Teams</h3>
                <h4 className='m-10 text-2xl sm:text-3xl font-semibold'>--A Team make Dreams come true--</h4>
                <p className='px-32 py-10 text-gray-700 font-serif font-medium'>Officia esse mollit id excepteur aliquip voluptate commodo anim. Pariatur aute cupidatat dolor do aute est do id velit exercitation nostrud. Cillum do ut nostrud qui est cillum proident laborum cupidatat id laboris amet consequat occaecat. Tempor sunt nisi elit labore velit elit veniam nostrud est sint ex exercitation esse. Et eiusmod cupidatat ad non reprehenderit occaecat consequat incididunt in laboris. Dolore quis est reprehenderit in occaecat dolor aute ipsum tempor mollit excepteur labore culpa nisi. Enim magna labore in laboris id sunt ea ut elit reprehenderit aliquip.</p>
                <div className="p-4 rounded-lg md:p-8 bg-orange-100">
                    <dl className="grid max-w-screen-xl grid-cols-1 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-3 dark:text-white sm:p-8">
                        <div className="flex flex-col items-center justify-center">
                            <dd className="text-gray-700 font-semibold mb-3">Employee</dd>
                            <dt className="mb-2 text-3xl text-black font-extrabold">300+</dt>
                            <dd className="text-gray-700 font-semibold mb-3">Since 2015, Dream Home has grown from a team of 2 to over 300.</dd>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <dd className="text-gray-700 font-semibold mb-3">Client</dd>
                            <dt className="mb-2 text-3xl text-black font-extrabold">500k+</dt>
                            <dd className="text-gray-700 font-semibold mb-3">We already trusted by over 500k client.</dd>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <dd className="text-gray-700 font-semibold mb-3">Branch Office</dd>
                            <dt className="mb-2 text-3xl text-black font-extrabold">30+</dt>
                            <dd className="text-gray-700 font-semibold mb-3">We grow to multiple towns and have over 30 branch office.</dd>
                        </div>
                    </dl>
                </div>
            </div>
            <Quote />
        </div>
    )
}

export default History