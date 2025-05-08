import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='min-[1350px]:px-50 py-8 flex flex-row  items-center justify-between'>
            <div className='font-logo font-semibold text-[2.5rem] text-gray-700'>FASCO</div>
            <div className='flex flex-row gap-10 items-center cursor-default font-pop '>
               
                <div className='text-[1rem] text-gray-600 '>Home</div>
                <div className='text-[1rem] text-gray-600 '>Deals</div>
                <div className='text-[1rem] text-gray-600 '>New Arrivals</div>
                <div className='text-[1rem] text-gray-600 '>Packages</div>
                <div className='text-[1rem] text-gray-600 '>Sign in</div>
                <button
                className='bg-black text-gray-200 text-[1rem]  px-8 h-[2.9rem] rounded-[0.6rem] shadow shadow-black/90'
                >
                    Sign up
                </button>

            </div>
        </nav>
      
    </div>
  )
}

export default Navbar
