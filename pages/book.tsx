import React from 'react';

const book = () => {
  return (
    <div className="flex flex-col items-center px-3 py-6">
      <h1 className="text-white text-4xl font-bold ">Book</h1>
      <div className="w-full grid grid-flow-col grid-col-4 gap-4 justify-stretch">
        <div className="flex flex-col items-center mt-3 md:mt-4 gap-3 border-2 border-gray-500 ">
          <h2 className="text-white text-2xl font-bold ">Option 1</h2>
          <button className="bg-white text-white bg-opacity-30 rounder-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition">
            More Info
          </button>
        </div>
        <div className="flex flex-col items-center mt-3 md:mt-4 gap-3 border-2 border-gray-500 ">
          <h2 className="text-white text-2xl font-bold ">Option 1</h2>
          <button className="bg-white text-white bg-opacity-30 rounder-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default book;
