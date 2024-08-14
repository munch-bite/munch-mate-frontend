import React from "react";
import breakfast from "../../assets/images/lasagna.jpeg";
import { Trash2 } from "lucide-react";

const List = () => {
  return (
    <div className="w-full flex flex-col pt-10 px-4 sm:px-10 bg-orange-50 rounded-lg m-2">
      <p className="text-center pb-5 text-[18px] text-gray-900 font-semibold">All Foods List</p>
      <hr className="h-1 bg-gray-200" />

      <div className="hidden sm:grid grid-cols-5 font-medium px-4 sm:px-20 text-[17px]">
        <span>Image</span>
        <span>Name</span>
        <span>Category</span>
        <span>Price</span>
        <span>Action</span>
      </div>
      <hr className="hidden sm:block h-1 bg-gray-200" />

      <div className="flex flex-col sm:grid sm:grid-cols-5 items-center py-4 px-4 sm:px-20 text-[15px] space-y-4 sm:space-y-0">
        <img src={breakfast} alt="Lasagna" className="w-[100px] h-[60px] object-cover col-span-1" />
        <span className="w-full sm:w-auto sm:flex-1 text-center sm:text-left col-span-1">Mango Smoothie opjrfrhrgjrg bbgjg </span>
        <span className="w-full sm:w-auto sm:flex-1 text-center sm:text-left col-span-1">Breakfast</span>
        <span className="w-full sm:w-auto sm:flex-1 text-center sm:text-left col-span-1">$20</span>
        <Trash2 className="text-red-600 cursor-pointer col-span-1 w-5" />
      </div>
      <hr className="h-1 bg-gray-200" />
    </div>
  );
};

export default List;
