import React from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

const Reviews = () => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-gray-800">Reviews (13)</h3>
      <div className="mt-4">
        {/* Review 1 */}
        <div className="flex mb-4">
          {/* Profile Image */}
          <div className="w-12 h-12 rounded-full flex items-center justify-center">
            <Image 
              src="/images/Profill (1).png" 
              alt="profile-pic" 
              width={50} 
              height={50} 
              className="rounded-full"
            />
          </div>
          <div className="ml-4 flex flex-col w-full">
            <div className="flex justify-between">
              <p className="font-semibold">Alex Stanton</p>
              <p className="text-sm text-gray-500">21 July 2022</p>
            </div>
            <div className="flex justify-between">
            <p className="text-sm text-gray-600">CEO at Bulakpak</p>
            <div className="flex items-center mt-2">
              <span className="flex">
                {/* Star Icons */}
                {[...Array(4)].map((_, index) => (
                  <svg
                    key={index}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                ))}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </span>
              </div>
            </div>
            <p className="text-gray-500 mt-2">
              We are very happy with the service from the MORENT App. Morent has low prices and also a large variety of cars with good and comfortable facilities.
            </p>
          </div>
        </div>

        {/* Review 2 */}
        <div className="flex mb-4">
          {/* Profile Image */}
          <div className="w-12 h-12 rounded-full flex items-center justify-center">
            <Image 
              src="/images/Profill.png" 
              alt="profile-pic" 
              width={50} 
              height={50} 
              className="rounded-full"
            />
          </div>
          <div className="ml-4 flex flex-col w-full">
            <div className="flex justify-between">
              <p className="font-semibold">Skylar Dias</p>
              <p className="text-sm text-gray-500">20 July 2022</p>
            </div>
            <div className="flex justify-between">
            <p className="text-sm text-gray-600">CEO at Amazon</p>
            <div className="flex items-center mt-2">
              <span className="flex">
                {/* Star Icons */}
                {[...Array(4)].map((_, index) => (
                  <svg
                    key={index}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                ))}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </span>
              </div>
            </div>
            <p className="text-gray-500 mt-2">
              We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-sm">
      <button className="text-slate-400 mt-4">Show All</button>
      <MdKeyboardArrowDown />
      </div>
    </div>
  );
};

export default Reviews;
