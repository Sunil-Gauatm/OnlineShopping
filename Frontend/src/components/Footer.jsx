import React from 'react'
import image1 from '../assets/image2.png';
import image2 from '../assets/image3.png';

const Footer = () => {
  return (
    <>
      <div className='flex flex-row justify-between items-center mx-auto w-[70vw] pt-10  '>
        <img src={image1} alt="" className='h-[40rem]' />
        <div className='flex flex-col items-center  gap-2 mt-5 '>
          <div className='text-[2.2rem]'>
            Subscribe To Our Newsletter
          </div>
          <span className='text-[0.8rem] text-center text-gray-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
          </span>
          <button className="bg-black text-center text-white  px-6 py-3 w-[15rem] rounded hover:bg-gray-800 transition">
            Subscribe Now
          </button>
        </div>
        <img src={image2} alt="" className='h-[40rem]' />
      </div>
      <hr className='mt-4 text-gray-500' />

      <div className='flex flex-row justify-between items-center mx-auto w-[70vw] '>
        <div className='text-[2.5rem] font-semibold text-gray-900'>
          Fasco
        </div>
        <div className='flex flex-row gap-4 text-gray-900 text-[1rem]'>
          <span>Support Center</span>
          <span>Invoicing</span>
          <span>Contract</span>
          <span>Careers</span>
          <span>Blog</span>
          <span>FAQ,s</span>
        </div>
      </div>

      <div className='text-center text-gray-500 text-[0.8rem]'>
        Copyright © 2022 FASCO . All Rights Reseved.
      </div>

    </>
  )
}

export default Footer
