import React from 'react'
import Produt from '../assets/Product.png'

const NewArrivals = () => {
  return (
    <div className='h-[50rem] mx-50 mt-14'>
        <div className='flex flex-col justify-center items-center'>

        <div className='text-[2.5rem] font-logo'>
            New Arrivals
        </div>
        <div className='text-[1.2rem] text-gray-700 mx-50 mt-2 text-center '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin 
        </div>
        </div>
        {/* buttons */}
        <div className='mt-10 flex flex-row gap-6 justify-center flex-wrap'>

            <button className='bg-gray-200 px-12 py-4 rounded-[0.4rem] flex justify-center items-center'>
                Men’s Fashion
            </button>
            <button className='bg-black  text-gray-200   px-12 py-4   shadow shadow-black/90 rounded-[0.4rem] flex justify-center items-center'>
                Men’s Fashion
            </button>
            <button className='bg-gray-200 px-12 py-4 rounded-[0.4rem] flex justify-center items-center'>
                Men’s Fashion
            </button>
            <button className='bg-gray-200 px-12 py-4 rounded-[0.4rem] flex justify-center items-center'>
                Men’s Fashion
            </button>
            <button className='bg-gray-200 px-12 py-4 rounded-[0.4rem] flex justify-center items-center'>
                Men’s Fashion
            </button>

        </div>
        <div className='flex flex-row gap-10 mt-8 flex-wrap justify-center items-center '>

            <div className='box bg-white shadow-xl w-[21rem] flex flex-col box-border px-6 rounded-lg pb-6'>
               <img src={Produt}alt="Product" className='w-[21rem] self-center rounded-xl' />

              <div className='flex flex-row justify-between mt-2'>

               <div className='flex flex-col'>
                <span>
                    White Dress
                </span>
                <span className='text-[0.8rem] text-gray-500'>
                    Al Karam
                </span>
               </div>

               <div>
                rating
               </div>

              </div>

              <div className='mt-2'>
                (4.1k) Customer Reviews
              </div>

              <div className='flex flex-row justify-between mt-2'>
                <span>
                    $95.50
                </span>
                <span>Almost Sold Out</span>
              </div>
            </div>

     
        </div>

    </div>
  )
}

export default NewArrivals
