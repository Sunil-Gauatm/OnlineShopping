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
      <DealofMonth/>
      </div>


      {/* New Arrivals */}
      <div>
        
        <NewArrivals/>


      </div>






    </>
  );
};

export default Home;
