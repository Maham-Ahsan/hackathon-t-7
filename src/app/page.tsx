import React from 'react'
import Content from './components/Content';
import FilterSidebar from './components/FilterSidebar';
import Hero from './components/Hero';
import CarCardSection from './components/CarCard';
// import CarSection from './components/CarSection';

const Home = () => {
  return (
    <main>
    <div className='flex flex-col md:flex-row gap-6 p-6'>
      <FilterSidebar />
      <Content />
      </div>
     <CarCardSection />
     </main>
  );
}

export default Home
