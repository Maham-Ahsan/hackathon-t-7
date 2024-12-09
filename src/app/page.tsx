"use client";

import React from 'react';
import Link from 'next/link';
import Hero from './components/Hero';
import Card from './components/Card';
import RCard from './components/RCard';

const Home = () => {
  return (
    <main>
      <Hero />
      <div className="text-gray-500 text-lg mt-4 ml-6">Popular Cars</div>
      <Card />
      <div className="text-gray-500 text-lg mt-4 ml-6">Recommendation Cars</div>
      <RCard />
      <div className="flex justify-center mt-6">
        <Link href="/Details">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            Show More Cars
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
