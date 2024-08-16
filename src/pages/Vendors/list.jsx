import React from "react";
import breakfast from "../../assets/images/lasagna.jpeg";
import { Trash2 } from "lucide-react";
import FoodTile from "../../components/foodTile";

const List = () => {
  return (
    <div className="w-full flex flex-col pt-10 px-20">
      <p className="text-center pb-10 text-[18px] text-gray-900 font-semibold">Food List</p>


      <div className="flex flex-wrap gap-x-10 gap-y-10">
      <FoodTile/>
      <FoodTile/>
      <FoodTile/>
      <FoodTile/>
      <FoodTile/>
      <FoodTile/>
      <FoodTile/>
      <FoodTile/>
      <FoodTile/>

      </div>

      


      </div>
  );
};

export default List;
