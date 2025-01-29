
import React from "react";

const FilterSidebar = () => {
  return (
    <div className="w-1/4 p-6 bg-gray-50">
      <h3 className="text-lg font-semibold text-gray-700 mb-6">Filter</h3>
      
      {/* Car Type */}
      <div className="mb-6">
        <h4 className="text-gray-600 font-medium">Type</h4>
        <ul className="space-y-3 mt-2">
          <li><input type="checkbox" /> Sport (10)</li>
          <li><input type="checkbox" /> SUV (12)</li>
          <li><input type="checkbox" /> MPV (16)</li>
          <li><input type="checkbox" /> Sedan (20)</li>
          <li><input type="checkbox" /> Coupe (14)</li>
          <li><input type="checkbox" /> Hatchback (14)</li>
        </ul>
      </div>

      {/* Capacity */}
      <div className="mb-6">
        <h4 className="text-gray-600 font-medium">Capacity</h4>
        <ul className="space-y-3 mt-2">
          <li><input type="checkbox" /> 2 Person (10)</li>
          <li><input type="checkbox" /> 4 Person (14)</li>
          <li><input type="checkbox" /> 6 Person (12)</li>
          <li><input type="checkbox" /> 8 or More (16)</li>
        </ul>
      </div>

      {/* Price Slider */}
      <div className="mb-6">
        <h4 className="text-gray-600 font-medium">Price</h4>
        <input type="range" min="0" max="100" defaultValue="100" className="w-full mt-2" />
        <p className="text-sm text-gray-500">Max. $100.00</p>
      </div>
    </div>
  );
};

export default FilterSidebar;
