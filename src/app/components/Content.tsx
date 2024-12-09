import React from "react";
import Reviews from "./Reviews";

const Content = () => {
  return (
    <div className="w-full p-6 bg-slate-100 shadow-md rounded-lg">
      {/* Main Content: Image and Details */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Section - Main Car Image and Thumbnails */}
        <div className="lg:w-2/3 flex flex-col">
          {/* Main car image */}
          <div className="bg-blue-500 p-4 rounded-lg">
            <h1 className="text-white font-semibold text-xl">
              Sports car with the best design and acceleration
            </h1>
            <p className="text-white mt-2">
              Safety and comfort while driving a futuristic and elegant sports car
            </p>
            <img
              src="/images/image 8.png"
              alt="Car"
              className="w-full h-auto rounded-lg mt-4"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center space-x-4 mt-4">
            <img
              src="/images/View 2.png"
              alt="Car Thumbnail 1"
              className="w-1/4 h-24 lg:h-32 rounded-lg object-cover"
            />
            <img
              src="/images/View 3.png"
              alt="Car Thumbnail 2"
              className="w-1/4 h-24 lg:h-32 rounded-lg object-cover"
            />
            <img
              src="/images/image 8.png"
              alt="Car Thumbnail 3"
              className="w-1/4 h-24 lg:h-32 rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Right Section - Rating and Details */}
        <div className="lg:w-1/3 mt-6 lg:mt-0 lg:ml-6">
          <h2 className="text-xl font-semibold text-gray-800">Nissan GT - R</h2>
          <div className="flex items-center mb-4">
            {/* Rating Section */}
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
            <span className="text-gray-600 ml-3">440+ Reviews</span>
          </div>
          <p className="text-gray-600 mt-2">
            NISMO has become the embodiment of Nissan’s outstanding performance,
            inspired by the most unforgiving proving ground, the “race track”.
          </p>

          {/* Car Details */}
          <div className="mt-6">
            <div className="flex justify-between mb-4">
              <p className="font-semibold text-gray-700">Type:</p>
              <p className="text-gray-500">Sport</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="font-semibold text-gray-700">Capacity:</p>
              <p className="text-gray-500">2 Person</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="font-semibold text-gray-700">Price:</p>
              <p className="text-gray-500">$80.00 / day</p>
            </div>
            
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
              Rent Now
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-6">
        <Reviews />
      </div>
    </div>
  );
};

export default Content;
