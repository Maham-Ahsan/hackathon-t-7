import React from "react";
import { FaCircleDot } from "react-icons/fa6";
import { LuArrowUpDown } from "react-icons/lu";

const Booking = () => {
  return (
    <div className="container mx-auto px-6">
      {/* Booking Section */}
      <div className="bg-white p-8 rounded-lg shadow-md mt-8">
        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-6">
          {/* Pick-Up Section */}
          <div className="col-span-2">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <FaCircleDot className="mr-2 text-blue-500" /> Pick-Up
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          <div className="flex justify-center">
            <button className="bg-blue-500 text-white p-4 rounded-full shadow-md hover:bg-blue-600">
              <LuArrowUpDown size={20} />
            </button>
          </div>

          {/* Drop-Off Section */}
          <div className="col-span-2">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <FaCircleDot className="mr-2 text-blue-500" /> Drop-Off
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        </div>
      </div>
    </div>
  );
};

export default Booking;
