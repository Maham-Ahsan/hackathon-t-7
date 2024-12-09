import React from "react";
import { FaGasPump } from "react-icons/fa";
import { RxCircle } from "react-icons/rx";
import { MdOutlinePeople } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

const cars = [
  {
    id: 1,
    image: "/images/Car.png",
    title: "Koenigsegg",
    description: "Sport",
    price: "$99.00/day",
  },
  {
    id: 2,
    image: "/images/Car (1).png",
    title: "Nissan GT - R",
    description: "Sport",
    price: "$80.00/day",
  },
  {
    id: 3,
    image: "/images/Car (2).png",
    title: "Rolls-Royce",
    description: "Sedan",
    price: "$96.00/day",
  },
  {
    id: 4,
    image: "/images/Car (1).png",
    title: "Nissan GT - R",
    description: "Sport",
    price: "$80.00/day",
  },
];

const Card = () => {
  return (
    <div className="container mx-auto p-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {cars.map((car, index) => (
        <div
          key={car.id}
          className="rounded-lg shadow-lg bg-white overflow-hidden border border-gray-200 transform hover:scale-105 transition-transform duration-300"
        >
          {/* Title and Description */}
          <div className="p-4 border-b border-gray-100">
            <h3 className="text-lg font-bold text-gray-800">{car.title}</h3>
            <p className="text-sm text-gray-600">{car.description}</p>
            {index % 2 === 0 ? (
              <FcLike className="text-xl" />
            ) : (
              <AiOutlineHeart className="text-xl text-gray-500" />
            )}
          </div>

          {/* Car Image */}
          <div className="h-44 w-44 bg-white  flex justify-center items-center ml-5 ">
            <img
              src={car.image}
              alt={car.title}
              className="h-full object-contain"
            />
          </div>

          {/* Specifications */}
          <div className="p-4">
            <div className="flex justify-between items-center text-sm text-gray-700 mb-4">
              <div className="flex items-center gap-1">
                <FaGasPump className="text-gray-500" />
                <span>90L</span>
              </div>
              <div className="flex items-center gap-1">
                <RxCircle className="text-gray-500" />
                <span>Manual</span>
              </div>
              <div className="flex items-center gap-1">
                <MdOutlinePeople className="text-gray-500" />
                <span>2 People</span>
              </div>
            </div>

            {/* Price and Rent Button */}
            <div className="flex justify-between items-center">
              <p className="text-md font-semibold text-gray-800">{car.price}</p>
              <button className="bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-700 transition-colors">
                Rent Now
              </button>
            </div>
          </div>
        </div>
        
      ))}
    
    </div>
  );
};

export default Card;
