"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const RentalSum = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 mt-2">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Rental Summary</h2>

        {/* Car Information Section */}
        <div className="flex items-center mb-4">
          <Image
            src="/images/car (14).png"
            alt="Car"
            width={200}
            height={150}
            className="rounded-md"
          />
          <div className="ml-4">
            <h3 className="font-bold text-gray-700">Nissan GT - R</h3>
            <p className="text-yellow-500 flex items-center">
              ★★★★★
              <span className="text-gray-600 ml-2">440+ Reviews</span>
            </p>
          </div>
        </div>

        {/* Separator */}
        <svg
          width="295"
          height="1"
          viewBox="0 0 295 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-4"
        >
          <line
            x1="0.5"
            y1="0.5"
            x2="294.5"
            y2="0.5"
            stroke="#C3D4E9"
            strokeOpacity="0.4"
            strokeLinecap="round"
          />
        </svg>

        {/* Pricing Details */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-500">Subtotal</p>
          <p className="text-black font-bold">$80.00</p>
        </div>

        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-500">Tax</p>
          <p className="text-black font-bold">$0.00</p>
        </div>

        {/* Promo Code Button */}
        <div className="mt-4">
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
            Apply Promo Code
          </button>
        </div>

        {/* Total Price */}
        <div className="flex justify-between items-center mt-6">
          <p className="text-gray-500">Total Rental Price:</p>
          <p className="text-2xl font-bold">$80.00</p>
        </div>

        {/* Proceed to Payment Button */}
        <div className="mt-6">
          <Link href="/payment">
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
              Proceed to Payment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RentalSum;
