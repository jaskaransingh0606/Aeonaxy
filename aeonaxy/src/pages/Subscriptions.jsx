import React from 'react'

function Subscriptions() {
    return (

        <div className='flex flex-row md:flex-col mx-16 lg:mx-2 md:w-full md:items-center h-128 space-x-4 mt-20'>
            <div className='flex flex-col justify-evenly w-1/3 md:w-2/3  border-2 border-white rounded-2xl text-white bg-black p-6'>
                <p className='text-center text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold text-cyan-400'>Basic Plan</p>
                <p className='text-lg md:text-sm'>Ideal for individuals and freelancers who need basic scheduling functionalities.</p>
                <p className='underline'>Features:</p>
                <ul className='list-disc'>
                    <li>Schedule unlimited meetings.</li>
                    <li>Calendar integration with Google Calendar or Outlook.</li>
                    <li>Email notifications for upcoming meetings.</li>
                    <li>Basic meeting analytics and reporting.</li>
                </ul>
                <p className=' text-center text-2xl vvsm:text-xl font-bold border-2 border-white'>$10/month</p>
            </div>

            <div className='flex flex-col justify-evenly w-1/3 md:w-2/3   border-2 border-white rounded-2xl text-white bg-black p-6'>
                <p className='text-center text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold text-emerald-400'>Pro Plan</p>
                <p className='text-lg md:text-sm'>Designed for small businesses and growing teams requiring advanced scheduling features.</p>
                <p className='underline'>Features:</p>
                <ul className='list-disc'>
                    <li>All features of the Basic Plan, plus:</li>
                    <li>Customizable meeting templates for different types of appointments.</li>
                    <li>Priority email support.</li>
                    <li>Advanced analytics dashboard with insights into meeting trends and attendee behavior.</li>
                </ul>
                <p className=' text-center text-2xl vvsm:text-xl font-bold border-2 border-white'>$24.99/month</p>
            </div>

            <div className='flex flex-col justify-evenly w-1/3  md:w-2/3  border-2 border-white rounded-2xl text-white bg-black p-6'>
                <p className='text-center text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold text-yellow-400'>Buisness Plan</p>
                <p className='text-lg md:text-sm'>Tailored for medium to large-sized businesses needing comprehensive scheduling solutions.</p>
                <p className='underline'>Features:</p>
                <ul className='list-disc'>
                    <li>All features of the Pro Plan, plus:</li>
                    <li>Multi-user support with role-based access control.</li>
                    <li>Branding customization for meeting invitations and scheduling pages.</li>
                    <li>API access for seamless integration with internal systems</li>
                </ul>
                <p className=' text-center text-2xl vvsm:text-xl font-bold border-2 border-white'>$49.99/month</p>
            </div>
            
        </div>
    )
}

export default Subscriptions
