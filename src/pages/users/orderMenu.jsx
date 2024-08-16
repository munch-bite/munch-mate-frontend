import React, { useState } from 'react';
import ExploreMenu from '../../components/exploreMenu';
import FoodDisplay from '../../components/foodDisplay';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrderMenu = () => {
  const [category, setCategory] = useState('All');
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="w-[80%] m-auto pt-5">
      {/* Search bar at the top */}
      <div className="relative w-[40%] p-4 flex gap-6 ml-[46rem]">
        <input
          type="text"
          placeholder="search ..."
          className="outline-gray-200 w-[80%] p-2 border-2"
          onFocus={() => setShowSearch(true)}
        />
        <button>
          <Search className="size-8 mt-1 text-[#EA7519]" />
        </button>

        {/* Conditionally render the small card-like search interface */}
        {showSearch && (
          <div className="absolute top-4 left-[-4rem] w-full bg-white shadow-lg rounded-lg p-4 z-50">
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-600">Search restaurants</p>
              <button onClick={() => setShowSearch(false)} className="text-gray-500">
                <X size={20} />
              </button>
            </div>
            <input
              type="text"
              placeholder="Type to search..."
              className="outline-gray-200 w-full p-2 border-2 mb-2"
            />
           <ul>
           <Link to="/store"><li>Pizza palace</li></Link>
           </ul>
            <div className="text-center text-gray-600">
              <p>Start typing to see results...</p>
            </div>
          </div>
        )}
      </div>

      {/* Menu and food display */}
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default OrderMenu;
