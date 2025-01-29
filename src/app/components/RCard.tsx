import React from "react";
import { FaGasPump } from "react-icons/fa";
import { RxCircle } from "react-icons/rx";
import { MdOutlinePeople } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";

const cars = [
  {
    id: 1,
    image: "/images/Car (6).png",
    title: "All New Rush",
    description: "SUV",
    price: "$72.00/day",
  },
  {
    id: 2,
    image: "/images/Car (7).png",
    title: "CR - V",
    description: "SUV",
    price: "$80.00/day",
  },
  {
    id: 3,
    image: "/images/Car (8).png",
    title: "All New Terios",
    description: "SUV",
    price: "$74.00/day",
  },
  {
    id: 4,
    image: "/images/Car (9).png",
    title: "CR - V",
    description: "SUV",
    price: "$80.00/day",
  },
  {
    id: 5,
    image: "/images/Car (10).png",
    title: "MG ZX Exclusive",
    description: "Hatchback",
    price: "$76.00/day",
  },
  {
    id: 6,
    image: "/images/Car (11).png",
    title: "New MG ZS",
    description: "SUV",
    price: "$80.00/day",
  },
  {
    id: 7,
    image: "/images/Car (12).png",
    title: "MG ZX Excite",
    description: "Hatchback",
    price: "$74.00/day",
  },
  {
    id: 8,
    image: "/images/Car (13).png",
    title: "New MG ZS",
    description: "SUV",
    price: "$80.00/day",
  },
];

const RCard = () => {
  return (
    <div className="container mx-auto p-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {cars.map((car, index) => (
        <div
          key={car.id}
          className="rounded-lg shadow-lg bg-white overflow-hidden border border-gray-200 transform hover:scale-105 transition-transform duration-300"
        >
          {/* Title and Heart Icon */}
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-gray-800">{car.title}</h3>
              <p className="text-sm text-gray-600">{car.description}</p>
            </div>
            {index % 3 === 0 ? (
              <FcLike className="text-xl" />
            ) : (
              <AiOutlineHeart className="text-xl text-gray-500" />
            )}
          </div>

          {/* Car Image */}
          <div className="h-44 w-44 bg-white flex justify-center items-center ml-5">
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
                <span>6 People</span>
              </div>
            </div>

            {/* Price and Rent Button */}
            <div className="flex justify-between items-center">
              <p className="text-md font-semibold text-gray-800">{car.price}</p>
               <Link href='../payment'> 
              <button className="bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-700 transition-colors">
                Rent Now
              </button>
              </Link> 
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RCard;
