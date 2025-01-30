/* eslint-disable @next/next/no-img-element */
'use client';
import { useState, useEffect } from 'react'

const Team = () => {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=6')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setPeople(data);
            });
    }, []);
    //console.log(people.results)
    return (
        <div>
            <div className='text-center m-20 lg:m-36'>
                <h2 className='text-center text-3xl md:text-5xl lg:m-20 font-extrabold text-green-600 uppercase'>Our Team</h2>
                <h2 className='text-center text-xl md:text-2xl lg:mt-12 font-extrabold text-green-600 uppercase'>Employee of the Month</h2>
                <p className='md:px-32 py-2 text-gray-700 font-serif text-sm font-medium'>Occaecat fugiat sint irure irure enim fugiat ea sunt culpa pariatur non. Id ipsum cupidatat culpa elit do aliqua. Esse proident tempor officia deserunt ad incididunt culpa adipisicing ipsum. Nulla nulla anim aliquip irure mollit laborum cillum consectetur duis labore. Fugiat commodo in eiusmod duis esse sunt veniam laborum reprehenderit irure Lorem. Velit cupidatat sunt commodo minim nulla quis nostrud est nulla aute amet pariatur.</p>
                <div className='mt-8 grid grid-cols-1 ml-8 sm:ml-24 md:ml-44 xl:ml-0 lg:grid-cols-3 lg:gap-x-7'>
                    {people?.results?.map((people, index) => {
                        return (
                            <>
                                <div key={index} className='block max-w-sm p-6 text-center text-green-600 bg-white rounded-lg mb-7 shadow-md shadow-gray-500 hover:bg-green-500 hover:text-white hover:shadow-md hover:shadow-green-700'>
                                    <img className='block mb-5 m-auto rounded-md' src={people.picture?.large} alt='employee-photo' />
                                    <h3 className='text-xl font-bold'>{people.name?.first} {people.name?.last}</h3>
                                    <p className='text-sm font-light'>{people?.email}</p>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Team