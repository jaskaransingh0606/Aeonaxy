import React from 'react'
import intro from '../assets/intro.jpg'

function Intro() {
    return (
        <div className=' w-vh h-screen vsm:h-96 mx-16 mt-6 sm:mx-1 vsm:mx-0 sm:w-full'>
            <div
                className='w-full h-full relative '
                style={{ backgroundImage: `url(${intro})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className='absolute mt-16 mx-12'>
                    <p className='text-black text-6xl lg:text-5xl sm:text-4xl vvsm:text-2xl font-extrabold underline'>Streamline Your Meetings with <span className='text-green-500 underline'>Fibery</span></p>
                    <p className='sm:hidden text-green-500 text-3xl lg:text-2xl font-bold mt-40'>Simplify Scheduling, Amplify Productivity, and Enhance Collaboration</p>

                </div>
            </div>


        </div>
    )
}

export default Intro
