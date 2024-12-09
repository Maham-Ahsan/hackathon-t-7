import React from 'react';
import Image from 'next/image';
import { FaCircleDot } from 'react-icons/fa6';
import { LuArrowUpDown } from "react-icons/lu";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Card */}
        <div className="bg-blue-500 text-white rounded-lg p-6 flex flex-col justify-between relative overflow-hidden">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold leading-snug">
              The Best Platform for Car Rental
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Ease of doing car rental safely and reliably. Of course at a low price.
            </p>
          </div>
          <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md mt-6 self-start hover:bg-gray-100 transition-colors duration-300">
            Rental Car
          </button>
          <Image
            height={300}
            width={300}
            src="/images/image 7.png"
            alt="Car"
            className="absolute right-4 bottom-6 md:bottom-6 md:right-6 w-40 md:w-56 lg:w-64"
          />
        </div>

        {/* Right Card */}
        <div className="bg-blue-600 text-white rounded-lg p-6 flex flex-col justify-between relative overflow-hidden">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold leading-snug">
              Easy way to rent a car at a low price
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
          </div>
          <button className="bg-blue-400 text-white font-semibold px-4 py-2 rounded-md mt-6 self-start hover:bg-gray-100 transition-colors duration-300">
            Rental Car
          </button>
          <Image
            height={250}
            width={250}
            src="/images/image 8.png"
            alt="Car"
            className="absolute right-4 bottom-4 md:bottom-6 md:right-6 w-36 md:w-52 lg:w-60"
          />
        </div>
      </div>
        
{/* booking */}
        <div className="flex flex-col md:flex-row items-center gap-8 mt-8 bg-white p-6 rounded-lg shadow-md">
  {/* Pick-Up Section */}
  <div className="flex-1">
    <h3 className="text-lg font-medium mb-2 flex items-center">
      <FaCircleDot className="mr-2 text-blue-500" />
      Pick-Up
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div>
        <label className="block text-lg font-bold mb-1">Locations</label>
        <select className="w-full border rounded-md p-2">
          <option>Select your city</option>
        </select>
      </div>
      <div>
        <label className="block text-lg font-bold mb-1">Date</label>
        <select className="w-full border rounded-md p-2">
          <option>Select your Date</option>
        </select>
      </div>
      <div>
        <label className="block text-lg font-bold mb-1">Time</label>
        <select className="w-full border rounded-md p-2">
          <option>Select your Time</option>
        </select>
      </div>
    </div>
  </div>

  {/* Swap Button */}
  <div className="mt-4 md:mt-0">
    <button className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600">
      <LuArrowUpDown />
    </button>
  </div>

  {/* Drop-Off */}
  <div className="flex-1">
    <h3 className="text-lg font-medium mb-2 flex items-center">
      <FaCircleDot className="mr-2 text-blue-500" />
      Drop-Off
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div>
        <label className="block text-sm font-bold mb-1">Locations</label>
        <select className="w-full border rounded-md p-2">
          <option className='text-sm'>Select your city</option>
        </select>
      </div>
      <div>
        <label className="block text-lg font-bold mb-1">Date</label>
        <select className="w-full border rounded-md p-2">
          <option>Select your Date</option>
        </select>
      </div>
      <div>
        <label className="block text-lg font-bold mb-1">Time</label>
        <select className="w-full border rounded-md p-2">
          <option>Select your Time</option>
        </select>
      </div>
    </div>
  </div>
  </div>
    </section>
  );
};

export default HeroSection;
