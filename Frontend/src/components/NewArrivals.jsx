import React, { useState } from "react";
import Produt from "../assets/Product.png";
import { useProduct } from "../Store/useProducts";

const NewArrivals = () => {
  const { allProducts, selectedCategories, setSelectedCategories } =
    useProduct();

  const product = allProducts[selectedCategories];
  return (
    <div className=" min-[1480px]:mx-50 mt-14">
      <div className="flex flex-col justify-center items-center">
        <div className="text-[2.5rem] font-logo">New Arrivals</div>
        <div className="text-[1.2rem] text-gray-700 mx-50 mt-2 text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </div>
      </div>
      {/* buttons */}

      <div className="mt-10 flex flex-row gap-6 justify-center flex-wrap">
        {Object.keys(allProducts).map((data, index) => {
          return (
            <button
              className={`${
                selectedCategories == data
                  ? "bg-black  text-gray-200   px-12 py-4   shadow shadow-black/90 rounded-[0.4rem] flex justify-center items-center"
                  : "bg-gray-200 px-12 py-4 rounded-[0.4rem] flex justify-center items-center"
              }`}
              key={index}
              onClick={() => setSelectedCategories([data])}
            >
              {data}
            </button>
          );
        })}
      </div>

      <div className="flex flex-row gap-8  flex-wrap justify-center items-center py-15 ">
        {allProducts[selectedCategories].slice(0, 6)?.map((data, index) => {
          return (
            <div
              className="box bg-white shadow-xl w-[21rem] flex flex-col box-border px-6 rounded-lg pb-6"
              key={index}
            >
              <img
                src={data.img}
                alt="Product"
                className="w-[21rem] self-center rounded-xl"
              />

              <div className="flex flex-row justify-between mt-2">
                <div className="flex flex-col">
                  <span>{data.name}</span>
                  <span className="text-[0.8rem] text-gray-500">
                    {data.brandname}
                  </span>
                </div>

                {/* <div>rating</div> */}
              </div>

              <div className="mt-2 text-[0.9rem]">
                ({data.Review}k) Customer Reviews
              </div>
              <div className="flex flex-row justify-between mt-2 items-end  ">
                <span className="font-bold text-[1.6rem]">${data.price}</span>
                <span className="text-red-500">Almost Sold Out</span>
              </div>
            </div>
          );
        })}

        {allProducts[selectedCategories].length > 6 && (
          <button className="bg-black  text-gray-200   px-12 py-4   shadow shadow-black/90 rounded-[0.4rem] flex justify-center items-center">
            View More
          </button>
        )}
      </div>
    </div>
  );
};

export default NewArrivals;
