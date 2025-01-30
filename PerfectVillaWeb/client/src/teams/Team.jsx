import React from 'react'
import Header from '../components/Header'
import Team from '../components/Team'

const Teams = () => {
    return (
        <div>
            <Header />
            <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 text-5xl md:text-7xl font-extrabold text-white uppercase'>Teams</h1>
            <Team />
        </div>
    )
}

export default Teams