import React from "react";
import Navbar from "../components/Navbar";
import leftsideimage from "../assets/homepage.png";
import Rightsideimage from "../assets/homepage1.png";
import Center1image from "../assets/homepage2.png";
import Center2image from "../assets/homepage3.png";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import DealofMonth from "../components/DealofMonth";
import NewArrivals from "../components/NewArrivals";
import PeekyBlinder from "../assets/peaky.png";
import { FaHandHoldingHeart } from "react-icons/fa";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

import { FaAward } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* landingScreen */}
      <div className="min-[1350px]:mx-50 h-[78vh] flex flex-row mt-5 gap-x-6 font-pop">
        <div className="left w-[32%] bg-[#E0E0E0] rounded-[0.5rem] flex  justify-center items-center ">
          <img src={leftsideimage} alt="img" className="h-[80%]" />
        </div>
        <div className="center w-[36%]   box-content ">
          <div className="bg-[#E0E0E0] h-[20%] rounded-[0.5rem] px-3 flex justify-center">
            <img src={Center1image} alt="img" className="" />
          </div>
          <div className="h-[60%] flex flex-col items-center">
            <div className="font-bold text-[#484848] text-[4rem]">ULTIMATE</div>
            <div className="font-bold text-[#ff9292] text-[7rem] leading-28">
              SALE
            </div>
            <div className="text-[1rem] mt-6 text-[#484848]">
              NEW COLLECTION
            </div>
            <button className="bg-black mt-6 text-gray-200 text-[0.7rem]  px-12 h-[2.9rem] rounded-[0.6rem] shadow shadow-black/90">
              SHOP NOW
            </button>
          </div>
          <div className=" h-[20%] rounded-[0.5rem] px-3 flex justify-center">
            <img src={Center2image} alt="img" className="w-[100%]" />
          </div>
        </div>
        <div className="right w-[32%]  bg-[#E0E0E0] rounded-[0.5rem] flex justify-center items-end">
          <img src={Rightsideimage} alt="img" className="h-[80%]" />
        </div>
      </div>
      <div className="mx-50 flex justify-center items-center flex-row gap-10 mt-15 py-2">
        <div className="w-1/5">
          <img src={logo} alt="img" className="w-35" />
        </div>
        <div className="w-1/5">
          <img src={logo1} alt="img" className="w-35" />
        </div>
        <div className="w-1/5">
          <img src={logo2} alt="img" className="w-35" />
        </div>
        <div className="w-1/5">
          <img src={logo3} alt="img" className="w-35" />
        </div>
        <div className="w-1/5">
          <img src={logo4} alt="img" className="w-35" />
        </div>
      </div>

      {/* dealofMonth */}
      <div>
        <DealofMonth />
      </div>

      {/* New Arrivals */}
      <div>
        <NewArrivals />
      </div>

      {/* /peakyblinder slider */}

      <div className="flex w-full h-[25em] font-sans bg-white overflow-hidden">
        {/* Left Section */}
        <div className="relative w-1/2 bg-gray-00 flex items-center justify-center">
          <img
            src={PeekyBlinder} // Update this path
            alt="Model"
            className="max-h-[90%] object-contain z-10"
          />

          {/* Floating Labels */}
        </div>

        {/* Right Section with Slant */}
        <div className="w-1/2 relative  bg-gray-100 transform -skew-x-[12deg]">
          <div className="transform skew-x-[12deg] px-16 py-12 h-full flex flex-col justify-center">
            <p className="text-[0.8rem] text-gray-500 mb-2 ">
              Women Collection
            </p>
            <h1 className="text-5xl font-semibold text-gray-800 mb-4">
              Peaky Blinders
            </h1>

            <h2 className="text-md font-medium mb-2 underline ">DESCRIPTION</h2>
            <p className="text-gray-600 mb-6 leading-relaxed max-w-md text-[0.7rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Scelerisque duis.
            </p>

            <div className="mb-4">
              <span className="text-sm text-gray-600 mr-2">Size:</span>
              <button className="bg-black text-white px-4 py-1 rounded">
                M
              </button>
            </div>

            <div className="text-2xl font-bold text-gray-900 mb-4">$100.00</div>

            <button className="bg-black text-white px-6 py-3 w-[15rem] rounded hover:bg-gray-800 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* icons Section */}
      <div className="px-50 py-10 flex flex-row gap-14 justify-center">
        <div className="flex flex-row gap-2 items-center j">
          <FaHandHoldingHeart className="text-[3rem]" />
          <div className="flex flex-col">
            <span className="text-[1.2rem] font-semibold"> High Quality </span>
            <span className="text-[0.9rem]">crafted from top materials </span>
          </div>
        </div>

        <div className="flex flex-row gap-2 items-center j">
          <FaAward className="text-[3rem]" />
          <div className="flex flex-col">
            <span className="text-[1.2rem] font-semibold"> High Quality </span>
            <span className="text-[0.9rem]">crafted from top materials </span>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center j">
          <FaAward className="text-[3rem]" />
          <div className="flex flex-col">
            <span className="text-[1.2rem] font-semibold"> High Quality </span>
            <span className="text-[0.9rem]">crafted from top materials </span>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center j">
          <FaAward className="text-[3rem]" />
          <div className="flex flex-col">
            <span className="text-[1.2rem] font-semibold"> High Quality </span>
            <span className="text-[0.9rem]">crafted from top materials </span>
          </div>
        </div>
      </div>


      {/* Testimonial */}
      <div>
      <Testimonial/>
      </div>


      {/* Footer */}
      <div>
        <Footer />
      </div>

    </>
  );
};

export default Home;
