import React from "react";
import { images } from "../assets/images";

const SubNavBar = () => {
  return (
    <div className="navbar flex justify-between items-center w-[90%] m-auto">
      <div className="flex flex-col gap-2">
        <img src={images.Logo} alt="" className="Logo" />
        <h1>Vendor Panel</h1>
      </div>
      <img src="" alt="" className="profile rounded-full w-5 h-5 lg:w-10 lg:h-10 bg-slate-300 p-1 cursor-pointer" />
    </div>
  );
};

export default SubNavBar;
