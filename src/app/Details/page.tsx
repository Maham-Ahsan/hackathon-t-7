// app/details/page.tsx
"use client";

import React from 'react';
import Content from '@/app/components/Content';
import FilterSidebar from '@/app/components/FilterSidebar';  
import CarCardSection from '@/app/components/CarCard';
import Link from 'next/link';

const Details = () => {
  return (
    <main>
      <div className="flex flex-col md:flex-row gap-6 p-6">
        <FilterSidebar />
        <Content />
      </div>
      <CarCardSection />
      <Link href="../payment">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            Rental Now
          </button>
        </Link>
    </main>
  );
};

export default Details;
