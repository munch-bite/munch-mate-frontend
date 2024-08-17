import React from 'react';
import breakfast from "../assets/images/lasagna.jpeg";
import { XCircle } from 'lucide-react';

const FoodTile = () => {
  return (
    <div className='flex flex-col gap-y-3 w-full sm:w-[45%] md:w-[30%] lg:w-[20%] rounded-lg shadow shadow-slate-400 relative bg-white'>
      <div className="relative">
        <img src={breakfast} alt="Food" className='w-full h-auto object-cover rounded-t-lg' />
        <XCircle className='text-red-700 w-6 h-6 absolute top-2 right-2 bg-white rounded-full cursor-pointer' />
      </div>
      <div className='p-3 flex flex-col justify-center items-center gap-y-1 text-center'>
        <span className='font-semibold'>Lasagna</span>
        <span className='text-gray-600'>Delicious Italian pasta with rich tomato sauce and melted cheese.</span>
        <span className='font-semibold text-orange-500'>GH₵ 30</span>
      </div>
    </div>
  );
}

export default FoodTile;
