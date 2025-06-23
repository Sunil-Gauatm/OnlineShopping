import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import image from "../assets/image.png";

const testimonials = [
  {
    id: 1,
    text: `"You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!"`,
    name: "James K.",
    role: "Traveler",
  },
  {
    id: 2,
    text: `"This service is amazing. I love the way everything was handled. Super clean UI and easy to use!"`,
    name: "Aarav S.",
    role: "Developer",
  },
  {
    id: 3,
    text: `"Fast, reliable and beautiful experience overall. I highly recommend it!"`,
    name: "Priya M.",
    role: "Entrepreneur",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const getPosition = (index) => {
    if (index === current) return "z-20 scale-100";
    if (index === (current - 1 + testimonials.length) % testimonials.length)
      return "-translate-x-[41%] scale-90 z-10 ";
    if (index === (current + 1) % testimonials.length)
      return "translate-x-[41%] scale-90 z-10 ";
    return "hidden";
  };

  return (
    <div className="h-[40rem] bg-gray-100 pt-10 overflow-hidden">
      {/* Heading */}
      <div className="flex justify-center flex-col items-center">
        <span className="text-[2.5rem] font-serif text-gray-700">
          This Is What Our Customers Say
        </span>
        <span className="text-[0.9rem] mt-2 text-gray-500 max-w-xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
        </span>
      </div>

      {/* Carousel */}
      <div className="relative mt-16 flex justify-center items-center h-[18rem]">
        {testimonials.map((item, i) => (
          <div
            key={item.id}
            className={`absolute transition-all duration-500 ease-in-out w-[35rem] h-[15rem] bg-white rounded-md shadow-md p-6 flex items-center gap-6 ${getPosition(i)}`}
          >
            <img src={image} alt="" className="w-45 h-45  object-cover" />
            <div>
              <div className="text-[0.9rem] text-gray-700">“{item.text}”</div>
              <div className="mt-6">
                <hr />
              </div>
              <div className="flex flex-col mt-2">
                <span className="text-[1.2rem] font-semibold">{item.name}</span>
                <span className="text-sm text-gray-500">{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex gap-2 justify-center mt-12">
        <button
          className="size-10 rounded-full bg-white hover:bg-gray-100 shadow-xl flex justify-center items-center"
          onClick={prevSlide}
        >
          <MdOutlineKeyboardArrowLeft className="text-[1.8rem] text-gray-900" />
        </button>
        <button
          className="size-10 rounded-full bg-white hover:bg-gray-100 shadow-xl flex justify-center items-center"
          onClick={nextSlide}
        >
          <MdOutlineKeyboardArrowRight className="text-[1.8rem] text-gray-900" />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
