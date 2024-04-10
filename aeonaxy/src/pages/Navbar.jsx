import React from 'react'
import downArrow from '../assets/down-arrow.png'

function Navbar() {
    return (
        <div className='flex flex-row justify-around space-x-72 vsm:space-x-36 w-vh lg:w-300 sm:w-240 h-10 mx-16 mt-2'>
            <div className='flex flex-row w-2/3 justify-between vsm:space-x-1 vvsm:space-x-0 sm:space-x-1 sm:justify-center sm:w-60 vvsm:w-32 items-center text-black'>
                <div className='flex flex-row justify-between  items-center space-x-2'>
                    <div><p className='font-bold text-3xl sm:text-2xl vsm:text-xl vvsm:lg'>Fibery</p></div>
                    <div className='text-green-500 md:hidden'>+AI Now!</div>
                </div>
                <div className='flex flex-row items-center space-x-2'>
                    <div className='vvsm:text-xs'>Solutions</div>
                    <div><img className='h-3 w-3 md:hidden' src={downArrow}></img></div>
                </div>
                <div className='flex flex-row items-center space-x-2'>
                    <div className='vvsm:text-xs'>Products</div>
                    <div><img className='h-3 w-3 md:hidden' src={downArrow}></img></div>
                </div>
                <div className='flex flex-row items-center space-x-2'>
                    <div className='vvsm:text-xs'>Resources</div>
                    <div><img className='h-3 w-3 md:hidden' src={downArrow}></img></div>
                </div>
                <div className='vvsm:text-xs'>Pricing</div>
            </div>
            <div className='flex flex-row justify-between items-center xl:hidden w-1/3 text-black'>
                <div>Log in</div>
                <div><button className='bg-white border-2 border-black px-4'>Get a demo</button></div>
                <div><button className='bg-black border-2 text-white  border-black px-6'>Sign up</button></div>

            </div>
        </div>
    )
}

export default Navbar
