import React from 'react';
import Image from 'next/image';
import Booking from './Booking';
import Link from 'next/link';

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
          <Link href="/Details">
          <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md mt-6 self-start hover:bg-gray-100 transition-colors duration-300">
            Rental Car
          </button>
          </Link>
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
          <Link href="/Details">
          <button className="bg-blue-400 text-white font-semibold px-4 py-2 rounded-md mt-6 self-start hover:bg-gray-100 transition-colors duration-300">
            Rental Car
          </button>
          </Link>
          <Image
            height={250}
            width={250}
            src="/images/image 8.png"
            alt="Car"
            className="absolute right-4 bottom-4 md:bottom-6 md:right-6 w-36 md:w-52 lg:w-60"
          />
        </div>
      </div>
      <Booking />
    </section>
  );
};

export default HeroSection;
