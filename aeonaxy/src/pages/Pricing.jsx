import React from 'react'
// import pricing from '../assets/pricing.webp'
import panda from '../assets/panda.jpg'


function Pricing() {
  return (
    <div className='flex flex-row space-x-20 md:space-x-5 mx-16 md:mx-2 w-vh h-240 vsm:h-200 mt-20 '>
        <div className='w-1/2 h-full border-2 border-back '
         style={{ backgroundImage: `url(${panda})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
         >

        </div>

        <div className='w-1/2 h-full'>
        <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl vsm:text-2xl text-black font-bold  '>Pricing:</h1>
        <p className='text-black mt-10 text-xl lg:text-lg md:text-md sm:text-sm vsm:text-xs'> We understand that every individual or business has unique needs, which is why we offer a range of subscription options tailored to suit various requirements. Whether you're a casual user, a small team, or a large enterprise, we have a subscription plan that's just right for you. Take your time to explore our offerings and choose the subscription that aligns perfectly with your usage, budget, and objectives. With flexible plans and features designed to scale with your growth, you can rest assured that you'll find the ideal solution to meet your needs. Join us today and experience the convenience and value of our tailored subscription options.</p>

        </div>
        
    </div>
  )
}

export default Pricing
