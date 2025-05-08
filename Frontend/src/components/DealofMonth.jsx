import React, { useRef, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaCircle } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";

import Slider from "../assets/slider.png";
import Slider1 from "../assets/slider1.png";
import Slider2 from "../assets/slider2.png";

const DealofMonth = () => {
  const sliderRef = useRef(null);
  const [ActiveSlider, setActiveSlider] = useState(0);

  const assets = [
    {
      url: Slider,
      tittle: "Spring Sales",
      discount: 30,
    },
    {
      url: Slider1,
      tittle: "Spring Sales",
      discount: 30,
    },
    {
      url: Slider2,
      tittle: "Spring Sales",
      discount: 30,
    },
  ];

  const previewOffsets = Array.from(
    { length: assets.length - 1 },
    (_, i) => i + 1
  );

  function HandleNext() {
    setActiveSlider((prev) => (prev - 1 + assets.length) % assets.length);

  }
  
  function HandlePrevious() {
    setActiveSlider((prev) => (prev + 1) % assets.length);
  }
  
  return (
    <div className="bg-gradient-to-b from-[#FAFAFA] to-[#FAFAFA]  mt-10 min-[1350px]:pl-50 pl-10 py-14 font-pop flex flex-row">
      <div className="w-[30%] flex flex-col items-start">
        <div className="text-[2.5rem] text-[#484848] font-logo ">
          Deal of The Month
        </div>
        <div className="break-words text-[#8A8A8A] text-[0.8rem] mr-15 mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </div>
        <button className="bg-black mt-6 text-gray-200 text-[0.8rem]  px-12 h-[2.9rem] rounded-[0.6rem] shadow shadow-black/90">
          BUY NOW
        </button>

        <div className="font-semibold text-[#484848] mt-7 text-[1.5rem]">
          Hurry, Before It’s Too Late!
        </div>
        <div className="flex flex-row mt-2 gap-5">
          <div className="flex flex-col justify-center items-center">
            <div className="h-14 w-14 rounded-lg bg-white shadow-lg flex flex-row justify-center items-center ">
              <div className="text-[1.5rem]"> 02</div>
            </div>
            <span className="text-[1.2rem] mt-2 text-[#484848]">Days</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="h-14 w-14 rounded-lg bg-white shadow-lg  flex flex-row justify-center items-center ">
              <div className="text-[1.5rem]"> 02</div>
            </div>
            <span className="text-[1.2rem] mt-2 text-[#484848]">Hr</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="h-14 w-14 rounded-lg bg-white shadow-lg  flex flex-row justify-center items-center ">
              <div className="text-[1.5rem]"> 02</div>
            </div>
            <span className="text-[1.2rem] mt-2 text-[#484848]">Min</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="h-14 w-14 rounded-lg bg-white shadow-lg  flex flex-row justify-center items-center ">
              <div className="text-[1.5rem]"> 02</div>
            </div>
            <span className="text-[1.2rem] mt-2 text-[#484848]">Sec</span>
          </div>
        </div>

        <div className="self-end mr-4 flex flex-row gap-2 mt-2">
          <button
            className="size-10 rounded-full bg-white shadow-xl flex justify-center items-center "
            onClick={HandleNext}
            // disabled={ActiveSlider === 0}
          >
            <MdOutlineKeyboardArrowLeft
              className={`text-[1.8rem] ${
                // ActiveSlider === 0 ? "text-gray-400" :
                 "text-gray-900"
              }`}
            />
          </button>
          <button
            className="size-10 rounded-full bg-white shadow-xl flex justify-center items-center "
            onClick={HandlePrevious}
            // disabled={ActiveSlider === assets.length - 1}
          >
            <MdOutlineKeyboardArrowRight
              className={`text-[1.8rem] ${
                // ActiveSlider === assets.length - 1
                //   ? "text-gray-400"
                  "text-gray-900"
              }`}
            />
          </button>
        </div>
      </div>
      {/* slider */}
      <div className="w-[70%] flex flex-row relative  gap-5 overflow-hidden">
        <div className="flex flex-nowrap gap-5 transition-all duration-300 ease-in-out" ref={sliderRef}>
          <div
            className={`  transition-opacity duration-500 ease-in-out opacity-100 relative w-[20rem] h-[25rem] shrink-0 `}
            
          >
            <img
              src={assets[ActiveSlider].url}
              alt="slider"
              className={`w-full h-full object-center transition duration-700 ease-in-out`}
            />

            <div className="absolute bottom-5 h-[8rem] left-5 flex flex-col p-5 r bg-white text-black ">
              <div className="flex flex-row justify-center items-center gap-2">
                <span>01</span>
                <hr className="w-10" />
                <span>Spring Sale</span>
              </div>
              <div className="text-3xl mt-3">30 % OFF</div>
            </div>
          </div>

          {previewOffsets.map((offset) => {
            const index = (ActiveSlider + offset) % assets.length;
            const data = assets[index];
            return (
              <div key={index} className="w-[15rem] h-[20rem] shrink-0">
                <img
                  src={data.url}
                  alt="slider"
                  className="w-full h-full object-cover transition-all duration-300 ease-in-out"
                />
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-10 left-[50%] flex flex-row gap-2">
          {assets.map((_, idx) => {
            return (
              <button key={idx} onClick={() => setActiveSlider(idx)}>
                {idx === ActiveSlider ? (
                  <FaCircle className="text-blue-500" />
                ) : (
                  <FaRegCircle className="text-gray-400" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DealofMonth;
